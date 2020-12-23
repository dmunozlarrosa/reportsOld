var zonesPrivateAtributes = {
  _totalMean: 0,
  _totalHas: 0,
  _classesLen: 0
}

function test_build_ZonesNDVI() {
  zonesConfig.debug = true;
  try{
//      build_ZonesNDVI(Zones_hardcodedData_Test.input, Zones_hardcodedData_Test.output);
    build_ZonesNDVI(hardocode_ZonesTest2.input, hardocode_ZonesTest2.output);
    console.log("success...")
    }
  catch(e){
  console.log(e)
    throw(e);
    }
}

function do_report_ZonesNDVI(DataJson, ResultJson) {
  zonesConfig.debug = false;
  return build_ZonesNDVI(DataJson, ResultJson);
}

function build_ZonesNDVI(DataJson, ResultJson) {

  //initializate
  var conf = zonesConfig;

  var data;
  var result;
  if (conf.debug == true) {
    data = DataJson;
    result = ResultJson;
  } else {
    data = JSON.parse(DataJson);
    result = JSON.parse(ResultJson);
  }

  var currentLang = data.Language;
  console.log(currentLang)

  var docName = '' + data.Title + " - " + data.Field;
  var docFileID = createFile(docName, conf.objSet.strDestFolder, conf.objSet.strTemplateID);

  var doc = DocumentApp.openById(docFileID);
  var body = doc.getBody();

  setHeaderImage(currentLang, doc);

  var classes = result.Classes;
  zonesPrivateAtributes._classesLen = classes.length;

  for (var i = 0; i < conf.strLang[currentLang].length; i++) {
      body.replaceText(conf.strLang[currentLang][i][0], conf.strLang[currentLang][i][1]);
  }
  body.replaceText('{strF9}', zonesConfig.textRef[currentLang][zonesPrivateAtributes._classesLen - 2]);

  var tab = body.getTables();
  for (var t = 1; t < tab.length - 1; t++) {
      if (t != (zonesPrivateAtributes._classesLen - 1) && t != (tab.length - 2)) {
          tab[t].removeFromParent();
      }
  }

  body.replaceText('{Titulo}', '' + docName);
  body.replaceText('{dateStamp}', getStandardizedDateFormat(data.Informdate));
  body.replaceText('{FechaNDVI}', getStandardizedDateFormat(data.Date));
  body.replaceText('{Campania}', data.Season);
  body.replaceText('{Establecimiento}', data.Farm);
  body.replaceText('{Lote}', data.Field);
  body.replaceText('{Cultivo}', data.Crop);
  body.replaceText('{Hibrido}', data.Hybrid);
  body.replaceText('{Metodo}', data.Method);
  body.replaceText('{IndexType}', data.IndexType);
  body.replaceText('{Clusters}', 'Clusters: ' + zonesPrivateAtributes._classesLen);
  body.replaceText('{FechaSiembra}', getStandardizedDateFormat(data.DatePlanting));
  body.replaceText('{noDays}', getDaysDiference(data.DatePlanting, data.Date) );
  
  
  setIndexSimbologies(body, data.IndexType.toString().toLowerCase(), '{imgSimb}');

  //------------------------ Images --------------------------------------          
  rpt_ZonasNDVI_setImages(body, result, currentLang);

  //----------------------------Table - NDVI clasification ----------------------------------
  rpt_ZonasNDVI_setTableNdviClasification(body, result, currentLang);

  body.replaceText('{TotalMean}', zonesPrivateAtributes._totalMean.toFixed(2))
  body.replaceText('{TotalHas}', zonesPrivateAtributes._totalHas.toFixed(2))

  //--------------- Graphic Columns - Areas & Average NDVI by Class -----------------
  tab = body.getTables();
  var cell2 = body.getTables()[tab.length - 2].getCell(1, 0);
  var index = '' + zonesPrivateAtributes._classesLen;
  var image = chartBuilderZones(classes, currentLang, index);
  var img = cell2.getChild(0).asParagraph().appendInlineImage(image);
  //--------------- Graphic Columns - Areas & Average NDVI by Class -----------------

  doc.saveAndClose();

  return {
      'url': doc.getUrl()
  };
}

function chartBuilderZones(classes, currentLang, index) {
  var confChart = zonesConfig.chartData
  var sp = SpreadsheetApp.openById(confChart.chartId);
  var sh = sp.getSheets()[classes.length - 2];
  sh.getRange('A2:C' + (classes.length + 1)).clearContent();

  var ndvi = [];
  var has = [];
  var labels = [];

  for (var i = 0; i < classes.length; i++) {

      ndvi.push([Number(classes[i].mean.toFixed(2))]);
      has.push([Number(classes[i].area_has.toFixed(2))]);
      labels.push([zonesConfig.lang[currentLang][index][classes[i].name]]);//
  }
  sh.getRange(2, 1, classes.length, 1).setValues(labels);
  sh.getRange(2, 2, classes.length, 1).setValues(has);
  sh.getRange(2, 3, classes.length, 1).setValues(ndvi);
  SpreadsheetApp.flush();

  var chart = sh.getCharts()[0];
  sh.updateChart(chart);
  SpreadsheetApp.flush();

  var image = loadImageWithTryNew(confChart.refreshedChartsUrl[classes.length - 2]);

  return image
}

function rpt_ZonasNDVI_setImages(body, result, currentLang) {
  var imgCellHeight = 355;
  var imgCellWidth = 600;

  for (var i = 0; i < 3; ++i) {

      var image = '';
      var table = body.getTables()[0];

      var imgWidth = 0.95 * imgCellWidth;
      var imgHeight = 0.95 * imgCellHeight;

      if (i == 0) {
          var cell = table.getCell(1, 0);
          var imageURL = result.URLThumb1;
      }
      else if (i == 1) {
          var cell = table.getCell(2, 0);
          var imageURL = result.URLThumb2;
      }
      else {
          var cell = table.getCell(2, 1);
          var imageURL = 'https://drive.google.com/uc?id=' + zonesConfig.imagesRef[currentLang][zonesPrivateAtributes._classesLen - 2];
          imgHeight = 215;
      }

      var paragraph = cell.getChild(0).asParagraph();

      var style = {};
      style[DocumentApp.Attribute.FONT_SIZE] = 0;

      paragraph.setSpacingAfter(0);
      paragraph.setSpacingBefore(0);
      paragraph.setAttributes(style);

      if (imageURL != null && imageURL != 'null') {

          image = loadImageWithTryNew(imageURL);

          if (image != null) {
              var blob = image.getBlob();
              var img = paragraph.appendInlineImage(blob);

              var height = img.getHeight();
              var width = img.getWidth();
              var rep = height / width;

              var wideImg = false;
              if (rep <= 1) {
                  wideImg = true;
              }

              if (wideImg) {
                  img.setWidth(imgWidth);
                  height = imgWidth * rep;
                  if (height > imgHeight) {
                      img.setHeight(imgHeight);
                      width = imgHeight / rep;
                      img.setWidth(width);
                  }
                  else
                      img.setHeight(height);
              } else {
                  img.setHeight(imgHeight);
                  width = imgHeight / rep;
                  if (width > imgWidth) {
                      img.setWidth(imgWidth);
                      height = imgWidth * rep;
                      img.setHeight(height);
                  }
                  else
                      img.setWidth(width);
              }
              var styles = {};
            if (i == 2) {
              styles[DocumentApp.Attribute.VERTICAL_ALIGNMENT] = DocumentApp.VerticalAlignment.TOP;
            } else {
              styles[DocumentApp.Attribute.VERTICAL_ALIGNMENT] = DocumentApp.VerticalAlignment.CENTER;
            }
            styles[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
            img.getParent().setAttributes(styles);
          }
      }
  }
}

function rpt_ZonasNDVI_setTableNdviClasification(body, result, currentLang) {
  //             | Very low | Low  | Medium | High | Very High |
  // superficie  |                                               
  // %Sup        |                                               
  // Prom. NDVI  |           
  var classes = result.Classes;
  //var classesLen = result.Classes.length;

  var index = '' + zonesPrivateAtributes._classesLen;

  table = body.getTables()[1];

  var rowTitle = table.getRow(0);
  var row = table.getRow(1);
  var rowValues = table.getRow(2);
  var rowPercents = table.getRow(3);
  var rowDesc = table.getRow(4);

  for (var x = 0; x < zonesPrivateAtributes._classesLen; x++) {

      var cell = row.getCell((x + 1));
      cell.setText(zonesConfig.lang[currentLang][index][classes[x].name])

      var style = {};
      style[DocumentApp.Attribute.BACKGROUND_COLOR] = classes[x].color;
      style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;

      cell.setAttributes(style);
      cell.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER);

      var cellValue = rowValues.getCell((x + 1));
      cellValue.setText(classes[x].area_has.toFixed(2) + ' Ha.');
      cellValue.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER);

      var cellPercents = rowPercents.getCell((x + 1));
      cellPercents.setText(classes[x].percent.toFixed(2) + ' % ');
      cellPercents.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER);

      var cellDesc = rowDesc.getCell((x + 1));
      cellDesc.setText(classes[x].mean.toFixed(2));
      cellDesc.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER);

      zonesPrivateAtributes._totalMean += classes[x].mean * classes[x].percent / 100;
      zonesPrivateAtributes._totalHas += classes[x].area_has;
  }

}
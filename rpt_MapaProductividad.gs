function test_build_MapaProductividad() {
    var debugMode = true;
    build_MapaProductividad(mapaProductividadConfig.testData, debugMode);
}

function do_report_MapaProductividad(InputJson, Output) {
    var debugMode = false;
    return build_MapaProductividad(InputJson, debugMode)
}

function build_MapaProductividad(InputJson, debugMode) {
    //initializate
    var conf = mapaProductividadConfig;
    var inputData;
    if (debugMode == true) {
        inputData = InputJson;
    } else {
        inputData = JSON.parse(InputJson);
    }

    var lang = inputData.language;
    var docName = inputData.farm + ' - ' + conf.strLang[lang][0][1];
    var docFileId = createFile(docName, conf.objSet.strDestFolder, conf.objSet.strTemplateID);

    var doc = DocumentApp.openById(docFileId);
    var body = doc.getBody();

    //replace global data 
    setHeaderImage(lang, doc);

    body.replaceText('{farm}', inputData.farm);
    body.replaceText('{informDate}', getStandardizedDateFormat(inputData.informDate));
    body.replaceText('{campania}', inputData.season);
    body.replaceText('{lote}', inputData.lote);
    body.replaceText('{date1}', getStandardizedDateFormat(inputData.ndviImages[0].date));
    body.replaceText('{date2}', getStandardizedDateFormat(inputData.ndviImages[1].date));
    body.replaceText('{date3}', getStandardizedDateFormat(inputData.ndviImages[2].date));
    
    rpt_MapaProductividad_setFirstTable(body, inputData, lang);

    rpt_MapaProductividad_setSecondTable(doc.getBody(), inputData.ndviImages);
    
    rpt_MapaProductividad_setAllImages(body, inputData); 
    
    rpt_MapaProductividad_setSquareColorsLabels(body, inputData);
    
    rpt_MapaProductividad_setTablaInformacionPorAmbientes(body, inputData.ambientInfo, lang);
    
    for (var i = 0; i < conf.strLang[lang].length; i++) {
        body.replaceText(conf.strLang[lang][i][0], conf.strLang[lang][i][1]);
    }
    
    doc.saveAndClose();
    
    return {
        'url': doc.getUrl()
    };
}

function rpt_MapaProductividad_setFirstTable(body, inputData, lang) {
    table = body.getTables()[0];
    var ambients = mapaProductividadConfig.ambientLabels;
    table.replaceText('{mapaProductividad_labels}',  ambients.labels[inputData.ambientInfo.length][lang]);
    var asad = inputData.ambientInfo.length.toFixed(0)
    var asad2 = ambients.colors[asad];
    setSquareColorsConcatedByTag(table, asad2, true, '{mapaProductividad_colors}');
    table.replaceText('{mapaProductivdad_labelsExtended}', ambients.extendedLabels[inputData.ambientInfo.length][lang]);
    var s = mapaProductividadConfig.imagesSizes;
    setImagesTableByTag(inputData.mapaProductividad.map , s.mapaProductividad_map.widht, s.mapaProductividad_map.high, table, '{mapaProductividad_map}');
    setImagesTableByTag(inputData.mapaProductividad.thumbnail , s.mapaProductividad_thumbnail.widht, s.mapaProductividad_thumbnail.high, table, '{mapaProductividad_thumbnail}');
}


function rpt_MapaProductividad_setSecondTable(body, ndviImages){
  var sizes = mapaProductividadConfig.imagesSizes.ndviImages;
  var maxImagesByTable = 4;
  var ndviImagesSplited = splitArrayByN(ndviImages, maxImagesByTable);
  headerBackColor = '#37773C';
  headerTextColor = '#FFFFFF'
  headerBold = true;
  rows = 2;
  title = '{strF8}';
  for(var i = 0; i < ndviImagesSplited.length; i ++) {
    var columnsAmount = ndviImagesSplited[i].length;
    var table = createTable(body,2, headerBackColor, headerBold, headerTextColor, rows, columnsAmount, title);
    for(var j = 0; j < columnsAmount; j ++){
          //fill Image
          table.getCell(2, j).clear();
          table.getCell(2, j).replaceText("\s", "");
          var style = {};
          style[DocumentApp.Attribute.FONT_SIZE] = 1;
          var myCell = table.getCell(1, j)
          myCell.setAttributes(style);
          setImagesTablesByCell(ndviImagesSplited[i][j].image, sizes[columnsAmount].widht, sizes[columnsAmount].high, table, 1, j);
          //fill Date
          var paraInCellDate = table.getCell(2, j).getChild(0).asParagraph();
          var newDate = getStandardizedDateFormat(ndviImagesSplited[i][j].date);
          paraInCellDate.appendText(newDate);
      }
  }
}

function rpt_MapaProductividad_setAllImages(body, inputData) {
    var s = mapaProductividadConfig.imagesSizes;
    setImagesTableByTag(inputData.charts.column , s.charts.widht, s.charts.high, body, '{charts_column}');
    setImagesTableByTag(inputData.charts.pie , s.charts.widht, s.charts.high, body, '{charts_pie}');
    setImagesTableByTag(inputData.moisture.barcharts[0] , s.moisture_barcharts.widht, s.moisture_barcharts.high, body, '{moisture_barcharts0}');
    setImagesTableByTag(inputData.moisture.barcharts[1] , s.moisture_barcharts.widht, s.moisture_barcharts.high, body, '{moisture_barcharts1}');
    setImagesTableByTag(inputData.moisture.barcharts[2] , s.moisture_barcharts.widht, s.moisture_barcharts.high, body, '{moisture_barcharts2}');    
}

function rpt_MapaProductividad_setSquareColorsLabels(body, inputData) {
    var colorLabelArray = [];
    var data = inputData.moisture.labels;
    for (var i = 0; i < data.length; i++) {
        colorLabelArray.push({
                Label : data[i].label,
                Color : data[i].color
            });
    }
    var blodLabels = true;
    var centerText = false;
    var tables = body.getTables();
    setSquareColorsLabels(body.getTables()[tables.length-2].getCell(2, 0), colorLabelArray, ", ", blodLabels, centerText);
}

function rpt_MapaProductividad_setTablaInformacionPorAmbientes(body, ambientInfo, lang) {
    var table = body.getTables()[3];
    ambients = mapaProductividadConfig.ambientLabels.ambients;
    var surfacesTotal = 0;
    for (var i = 2; i < ambientInfo.length + 2; i++) {
        var myRow = table.getRow(i)
        if (i != ambientInfo.length + 1) 
           table.insertTableRow(i+1, table.getRow(i).copy())

        myRow.replaceText('{label}', ambients[lang][ambientInfo[i - 2].class]);
        myRow.replaceText('{surface}', ambientInfo[i - 2].has);
        myRow.replaceText('{surfacePercent}', ambientInfo[i - 2].surfacePercent);
        myRow.replaceText('{ndviAvg}', ambientInfo[i - 2].ndviAvg);
        surfacesTotal += ambientInfo[i - 2].has;
    }
    table.replaceText('{surfaceTotal}', surfacesTotal);
}




//function TEST_rpt_MapaProductividad_setSecondTable(){
//  ndviImages1 = [
//      { "date": '05/03/2017', "image": '1w0t7grB6sNpg_IiTUl8-CouiXKrdu2OB' },
//  ];
////      ndviImages2 = [
////      { "date": '05/03/2017', "image": '1w0t7grB6sNpg_IiTUl8-CouiXKrdu2OB' },
////      { "date": '10/04/2018', "image": '1w0t7grB6sNpg_IiTUl8-CouiXKrdu2OB' },
////      { "date": '05/03/2017', "image": '1w0t7grB6sNpg_IiTUl8-CouiXKrdu2OB' },
////      { "date": '10/04/2018', "image": '1w0t7grB6sNpg_IiTUl8-CouiXKrdu2OB' },
////      { "date": '05/03/2017', "image": '1w0t7grB6sNpg_IiTUl8-CouiXKrdu2OB' }
////  ];
////      ndviImages3 = [
////      { "date": '05/03/2017', "image": '1w0t7grB6sNpg_IiTUl8-CouiXKrdu2OB' },
////      { "date": '10/04/2018', "image": '1w0t7grB6sNpg_IiTUl8-CouiXKrdu2OB' },
////      { "date": '05/03/2017', "image": '1w0t7grB6sNpg_IiTUl8-CouiXKrdu2OB' },
////      { "date": '10/04/2018', "image": '1w0t7grB6sNpg_IiTUl8-CouiXKrdu2OB' },
////      { "date": '05/03/2017', "image": '1w0t7grB6sNpg_IiTUl8-CouiXKrdu2OB' },
////      { "date": '10/04/2018', "image": '1w0t7grB6sNpg_IiTUl8-CouiXKrdu2OB' },
////      { "date": '10/04/2018', "image": '1w0t7grB6sNpg_IiTUl8-CouiXKrdu2OB' },
////      { "date": '05/03/2017', "image": '1w0t7grB6sNpg_IiTUl8-CouiXKrdu2OB' },
////      { "date": '10/04/2018', "image": '1w0t7grB6sNpg_IiTUl8-CouiXKrdu2OB' },
////      { "date": '05/03/2017', "image": '1w0t7grB6sNpg_IiTUl8-CouiXKrdu2OB' },
////      { "date": '10/04/2018', "image": '1w0t7grB6sNpg_IiTUl8-CouiXKrdu2OB' },
////      { "date": '05/03/2017', "image": '1w0t7grB6sNpg_IiTUl8-CouiXKrdu2OB' },
////      { "date": '05/03/2017', "image": '1w0t7grB6sNpg_IiTUl8-CouiXKrdu2OB' },
////      { "date": '10/04/2018', "image": '1w0t7grB6sNpg_IiTUl8-CouiXKrdu2OB' }
////  ];
//  var body = DocumentApp.openById('1sKxt_FyAEWiu3FLlZ2iRe_EIE8WG2SVH2qI-qZrD9YI').getBody();      //testingDoc
//  rpt_MapaProductividad_setSecondTable(body, ndviImages1);
////  body.appendPageBreak()
////  rpt_MapaProductividad_setSecondTable(body, ndviImages2);
////  body.appendPageBreak()
////  rpt_MapaProductividad_setSecondTable(body, ndviImages3);
//}

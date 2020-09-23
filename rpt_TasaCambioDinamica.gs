function test_build_TasaDeCambioDinamica() {
  var debugMode = true;
  build_TasaDeCambioDinamica(tasaCambioDinamicaConfig.hardcodedData3, debugMode);
}

function do_report_TasaDeCambioDinamica(inputJson, outputJson) {
  var debugMode = false;
  return build_TasaDeCambioDinamica(inputJson, debugMode);
}

function build_TasaDeCambioDinamica(InputJson, debugMode) {

  if (debugMode == true) {
    inputData = InputJson;
  } else {
    inputData = JSON.parse(InputJson);
  }

  var conf = tasaCambioDinamicaConfig
  var lang = inputData.Language;

  var docName = inputData.Title
  if (lang.toLowerCase() == "es" || lang.toLowerCase() == "pt")
    docName += " Lote " + inputData.Field;
  else 
    docName += " Field " + inputData.Field;

  var docFileID = createFile(docName, tasaCambioDinamicaConfig.objSet.strDestFolder, tasaCambioDinamicaConfig.objSet.strTemplateID);
  var doc = DocumentApp.openById(docFileID);

  setHeaderImage(inputData.Language, doc);

  var body = doc.getBody();

  var titleF = docName;
  body.replaceText('{Titulo}', '' + titleF);
  body.replaceText('{FechaNDVI1}', " - " + getStandardizedDateFormat(inputData.DateNDVI1, lang));
  body.replaceText('{FechaNDVI2}', " - " + getStandardizedDateFormat(inputData.DateNDVI2, lang));
  body.replaceText('{dateStamp}',  getStandardizedDateFormat(Utilities.formatDate(new Date(), "GMT+1", "yyyy/MM/dd")));
  body.replaceText('{Campania}', inputData.Season);
  body.replaceText('{Establecimiento}', inputData.Farm);
  body.replaceText('{Lote}', inputData.Field);
  body.replaceText('{Cultivo}', inputData.Crop);
  body.replaceText('{Hibrido}', inputData.Hybrid);
  body.replaceText('{IndexMean_1}', inputData.IndexMean_1);
  body.replaceText('{IndexMean_2}', inputData.IndexMean_2);

  var datePlanting = inputData.DatePlanting
  if (datePlanting == null || datePlanting.split("").length < 8) {
    var daysAfterCrop = "{strF17}";
  } else {
    var daysAfterCrop = getDaysDiference(datePlanting, inputData.DateNDVI2)
  }
  body.replaceText('{FechaSiembra}', getStandardizedDateFormat(datePlanting));
  body.replaceText('{noDays}', daysAfterCrop + ' {strF18}');

  var tables = body.getTables();

  var tasaMax = parseFloat(inputData.min_max_tasa.max * 100).toFixed(2);
  var tasaMin = parseFloat(inputData.min_max_tasa.min * 100).toFixed(2);

  rpt_TasaCambioDinamica_SetFirstTable(tables[0], inputData, inputData.URLimgTasaCambio, tasaMax, tasaMin);

  rpt_TasaCambioDinamica_SetDistribucionDeAreas(tables[1], inputData.DailyChangeRate, inputData.Palette.Colors, true);

  rpt_TasaCambioDinamica_SetFirstTable(tables[2], inputData, inputData.URLimgTasaIndex, inputData.min_max_dif.max, inputData.min_max_dif.min);

  rpt_TasaCambioDinamica_SetDistribucionDeAreas(tables[3], inputData.VariationIndex, inputData.Palette.Colors, false);

  for (var i = 0; i < conf.strLang[lang].length; i++) {
    body.replaceText(conf.strLang[lang][i][0], conf.strLang[lang][i][1]);
  }

  body.replaceText("{paletteMin}", tasaMin);
  body.replaceText("{paletteMax}", tasaMax);
  body.replaceText('{Index}', inputData.Index.toUpperCase());

  var url = doc.getUrl();
  doc.saveAndClose();

  return {
    'url': url
  }
}

function rpt_TasaCambioDinamica_SetFirstTable(table, inputData, bigImage, paletteMax, paletteMin) {
  setIndexSimbologies(table, inputData.Index.toLowerCase(), '{imgSimb}');
  var conf = tasaCambioDinamicaConfig.imagesSizes;
  setImagesTablesByCell(inputData.URLimgNDVI1, conf.smallNdvi.width, conf.smallNdvi.height, table, 1, 0);
  setImagesTablesByCell(inputData.URLimgNDVI2, conf.smallNdvi.width, conf.smallNdvi.height, table, 1, 1);
  setImagesTablesByCell(bigImage, conf.bigNdvi.width, conf.bigNdvi.height, table, 2, 0);
  
  setPaletteColorsImageByTable(inputData.Palette.Name, table, paletteMax, paletteMin, "{paletteMax}", "{paletteMin}", "{palette}");
}

function rpt_TasaCambioDinamica_SetDistribucionDeAreas(table, inputData, paletteColors, percent) {
  var rangesColors = rpt_TasaCambioDinamica_getRangesColors(inputData.Ranges, paletteColors);
  var arrayTableAndSum = rpt_TasaCambioDinamica_SetDistribucionDeAreas_setArrayTableAndSum(inputData.Has, rangesColors, percent);
  table.replaceText('{Sum}', arrayTableAndSum.sum);
  rpt_TasaCambioDinamica_SetDistribucionDeAreas_SetColoredTable(table, arrayTableAndSum.arrayTable)
  var chartBlobImage = rpt_TasaCambioDinamica_SetDistribucionDeAreas_ChartBuilder(arrayTableAndSum.arrayTable);
  if (chartBlobImage) {
    rpt_TasaCambioDinamica_SetDistribucionDeAreas_SetChartImage(table, chartBlobImage)
  }
}

function rpt_TasaCambioDinamica_getRangesColors(rangesList, simbologia) {
  var rangesColors = [];
  if (rangesList.length == 14) 
    for (var i = 1; i < rangesList.length; i++) {
      var rangeColor = {
        LowerLimit: parseFloat(rangesList[i]).toFixed(4),
        UpperLimit: parseFloat(rangesList[i-1]).toFixed(4),
        Color: simbologia[i]
      }
      rangesColors.push(rangeColor);
    }
  return rangesColors;
}

function rpt_TasaCambioDinamica_SetDistribucionDeAreas_setArrayTableAndSum(arrayValues, rangesColors, percent) {
  var arrTbl = []
  var sum = 0
  if (percent == true) {
    var percentSufix = "%";
    var percentMult = 100;
  }
  else {
    var percentSufix = "";
    var percentMult = 1;
  }

  for (var i = 0; i < rangesColors.length; i++) {
    var row = [];
    row[1] = arrayValues[i];
    sum = parseFloat(arrayValues[i]) + sum;
    for (var j = 0; j < rangesColors.length; j++) {
      if (i == j) {
        row[3] = rangesColors[j].Color;
        row[0]  = '' + "{strF20}" + ' [' + (percentMult * parseFloat(rangesColors[j].LowerLimit)).toFixed(3) + percentSufix;
        row[0] +=     " {strF19}" + ' '  + (percentMult * parseFloat(rangesColors[j].UpperLimit)).toFixed(3) + percentSufix + ")" ;
        arrTbl.push(row)
        break
      }
    }
  }

  for (var i = 0; i < arrTbl.length; i++) {
    arrTbl[i][2] = parseFloat(100 * arrTbl[i][1] / sum).toFixed(1) + '%';
  }
  var sumStr = sum.toFixed(2)

  var arrayTableAndSum = {
    "sum": sumStr,
    "arrayTable": arrTbl
  }

  return arrayTableAndSum;
}

function rpt_TasaCambioDinamica_SetDistribucionDeAreas_SetColoredTable(table, arrayTable) {
  var style = {};
  style[DocumentApp.Attribute.FOREGROUND_COLOR] = '#000000';
  for (var i = arrayTable.length - 1; i >= 0; i--) {
    var row = table.getRow(3).copy();

    table.insertTableRow(4, row);
    var hNMB = parseInt(arrayTable[i][3], 16);
    
    var cell = table.getCell(4, 0);
    var text = cell.setText(arrayTable[i][0]);

    cell.setBackgroundColor('#' + arrayTable[i][3]);
    if (hNMB < 16167572) {
    cell.setAttributes(style);
    }
      var cell = table.getCell(4, 1);
    text = cell.setText(arrayTable[i][1]);
    cell.setBackgroundColor('#' + arrayTable[i][3]);
    if (hNMB < 16167572) {
    cell.setAttributes(style);
      }
    var cell = table.getCell(4, 2);
    cell.setText(arrayTable[i][2]);
    cell.setBackgroundColor('#' + arrayTable[i][3]);
    if (hNMB < 16167572) {
      cell.setAttributes(style);
    }
  }  
  for(var i = 4; i < 6; i++){
    for(var ii = 0; ii < 3; ii++){
      var myCell = table.getCell(i,ii).setForegroundColor('#CCCCCC')
    }
  }
    
  table.removeRow(3);
}

function rpt_TasaCambioDinamica_SetDistribucionDeAreas_ChartBuilder(arrTbl) {

  var sp = SpreadsheetApp.openById(tasaCambioDinamicaConfig.objSet.strSprChartID);
  var sh = sp.getSheets()[0];
  sh.getRange('A:A').clearContent();

  var arrW = [];
  var arrC = [];
  var arrS = [];
  for (var i = 0; i < arrTbl.length; i++) {
    arrW.push([arrTbl[i][1]]);
    arrC.push('#' + arrTbl[i][3])
    arrS.push({
      color: '#' + arrTbl[i][3]
    })
  }
  sh.getRange(2, 1, arrW.length, 1).setValues(arrW);

  var chart = sh.getCharts()[0];
  var chartBuilder = chart.modify()
  var ranges = chartBuilder.getRanges();
  for (var i = 0; i < ranges.length; i++) {
    chartBuilder.removeRange(ranges[i]);
  }
  chartBuilder.addRange(sh.getRange("A1:A" + (arrW.length + 1)))
  var ranges = chartBuilder.getRanges();

  chartBuilder.asPieChart().setColors(arrC);

  chartBuilder.asPieChart().setOption('colors', arrC);
  chartBuilder.asPieChart().setOption('slices', arrS);
  chartBuilder.asPieChart().setOption('chartArea', {
    left: '2.5%',
    top: '2.5%',
    width: '95%',
    height: '95%'
  });

  chart = chartBuilder.asPieChart().build();
  sh.updateChart(chart);
  SpreadsheetApp.flush();

  return chart.getBlob();
}

function rpt_TasaCambioDinamica_SetDistribucionDeAreas_SetChartImage(table, chartBlobImage) {
  var img = table.getCell(1, 0).getChild(0).asParagraph().addPositionedImage(chartBlobImage).setLeftOffset(45);
  var height = img.getHeight();
  var width = img.getWidth();
  var rep = height / width;
  if (width != 500) {
    img.setWidth(500);
    width = 500;
    img.setHeight(500 * rep);
    height = 500 * rep;
  }
}


function test_build_PuntoPorArea() {
    var debugMode = true;
    build_PuntoPorArea(puntosPorAreaConfig.hardcodedData2, debugMode);
  }
  
  function do_report_PuntosPorArea(inputJson, outputJson) {
    var debugMode = false;
    return build_PuntoPorArea(inputJson, debugMode);
      }
  
function build_PuntoPorArea(InputJson, debugMode) {
  
    if (debugMode == true) {
        inputData = InputJson;
    } else {
        inputData = JSON.parse(InputJson);
    }
  
    var conf = puntosPorAreaConfig;
    var lang = inputData.Language;
  
    var docName = inputData.Farm
    if (lang.toLowerCase() == "es")
        docName += " - Lote " + inputData.Lote;
    else
        docName += " - Field " + inputData.Lote;
  
    var docFileID = createFile(docName,conf.objSet.strDestFolder, conf.objSet.templateId );
    var doc = DocumentApp.openById(docFileID);
  
    setHeaderImage(inputData.Language, doc);
  
    var body = doc.getBody();
  
    body.replaceText("{Farm}",              inputData.Farm);
    body.replaceText("{InformDate}", getLanguageDateFormat(inputData.InformDate, lang));
    body.replaceText("{Lote}",              inputData.Lote);
    body.replaceText("{Crop}",              inputData.Crop);
    body.replaceText("{CropDate}", getLanguageDateFormat(inputData.Performance.CropDate, lang));
    body.replaceText("{Contratist}",        inputData.Performance.Contratist);
    body.replaceText("{Team}",              inputData.Performance.Team);
    body.replaceText("{meanMoisture}",      inputData.Performance.MeanMoisture);
    body.replaceText("{meanVelocity}",      inputData.Performance.MeanVelocity);
    body.replaceText("{meanYieldDry}",      inputData.Performance.MeanYieldDry);
    body.replaceText("{meanStd}",           inputData.Performance.MeanStd);
    body.replaceText("{meanYieldMoisture}", inputData.Performance.MeanYieldMoisture);
    body.replaceText("{Altitude}",          inputData.Performance.Altitudebody);    
    body.replaceText("{Seasson}",           inputData.Seasson);
    body.replaceText("{Has}",               inputData.Has);
    
    rpt_PuntoPorArea_setFirstTable(body, inputData);
    
    atributtesKeysArray = ["Index", "SurfaceHas", "SurfacePercent", "Performance"];
    rpt_PuntoPorArea_setRindeTypeInformationTable(body.getTables()[1], inputData.RindeType.Data, atributtesKeysArray);

    setImagesTableByTag(inputData.ChartBase64Image, conf.imagesSizes.chartImage.width, conf.imagesSizes.chartImage.height, body,"{ChartImage}")
    
    for (var i = 0; i < puntosPorAreaConfig.strLang[lang].length; i++) {
      body.replaceText(conf.strLang[lang][i][0], conf.strLang[lang][i][1]);
    }
    body.replaceText("{rindeType}",         inputData.RindeType.Type);
    
    var url = doc.getUrl();
    doc.saveAndClose();
  
    return {
      'url': url
    }
    
}

function rpt_PuntoPorArea_setFirstTable(body, inputData) { 
    var sizes = puntosPorAreaConfig.imagesSizes;
    setImagesTableByTag(inputData.RindeType.UrlImage, sizes.smallImage.width, sizes.smallImage.height, body, "{indexTypeImage}") 
    setImagesTableByTag(inputData.Performance.UrlImage, sizes.smallImage.width, sizes.smallImage.height, body, "{performanceImage}") 
    setImagesTableByTag(inputData.UrlTumbnailImage, sizes.tinyImage.widht, sizes.tinyImage.height, body, "{urlTumbnailImage}") 
    setConcatenedAtributesss(body.getTables()[0].getCell(3, 0), inputData.RindeType.Description, " | ", true);
    var colorLabelArray = [];
    var data = inputData.RindeType.Data;
    for (var i = 0; i < data.length; i++) {
        colorLabelArray.push({
                Label : data[i].Index,
                Color : data[i].Color
            });
    }
    var blodLabels = true;
    var centerText = false;
    setSquareColorsLabels(body.getTables()[0].getCell(2, 0), colorLabelArray, ", ", blodLabels, centerText);
}

function rpt_PuntoPorArea_setRindeTypeInformationTable(table, data, atributtesKeysArray) {
    for (var i = 0; i < data.length; i++) {
        var myRow = table.getRow(i+2);
        if (i != data.length - 1) {
            table.appendTableRow(table.getRow(i+2).copy());
        }
        for (var j = 0; j < atributtesKeysArray.length; j++) {
            value = Object.getOwnPropertyDescriptor(data[i], atributtesKeysArray[j]).value;
            table.getCell(i + 2, j).getChild(0).asParagraph().appendText(value);    
        }        
    }
}

function rpt_PuntoPorArea_chartBuilderPuntoPorArea(classes, currentLang, index) {
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
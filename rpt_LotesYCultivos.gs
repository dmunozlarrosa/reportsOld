function test_build_LotesYCultivos() {
    var debugMode = true;
    build_LotesYCultivos(lotesYCultivosConfig.hardcodedData2, debugMode);
}

function do_report_LotesYCultivos(InputJson, Output) {
    var debugMode = false;
    return build_LotesYCultivos(InputJson, debugMode)
}

function build_LotesYCultivos(InputJson, debugMode) {
    //initializate
    var conf = lotesYCultivosConfig;

    var inputData;
    if (debugMode == true) {
        inputData = InputJson;
    } else {
        inputData = JSON.parse(InputJson);
    }

    var docName = inputData.Title
    var templateId;
    if (inputData.sheetPosition == 'horizontal') {
        templateId = conf.objSet.strTemplateID_Horizontal;
    } else {
        templateId = conf.objSet.strTemplateID_Vertical;
    }

    var docFileId = createFile(docName, conf.objSet.strDestFolder, templateId);

    var doc = DocumentApp.openById(docFileId);
    var body = doc.getBody();
    var tab = body.getTables();

    //replace global data 
    var lang = inputData.Language;
    setHeaderImage(lang, doc);

    body.replaceText('{farm}', inputData.Farm);
    body.replaceText('{informDate}', getStandardizedDateFormat(inputData.InformDate));
    body.replaceText('{campania}', inputData.Season);
    body.replaceText('{establecimiento}', inputData.Farm);
    body.replaceText('{totalHas}', inputData.TotalHas);
    
    //fill       "Mapa Lotes y Cultivos"
    rpt_LotesYCultivos_setMapaLotesYCultivos(inputData, body, lang);
    
    //fill TABLA "informacion cultivos"  
    rpt_LotesYCultivos_setTablaInformacionCultivos(tab, inputData.Cultivos);
    
    //fill Charts "Porcentaje y Superficie [Has] de Cultivo"
    rpt_LotesYCultivos_setPorcentajeYSuperficie(body, inputData.Cultivos)
    
    for (var i = 0; i < conf.strLang[lang].length; i++) {
        body.replaceText(conf.strLang[lang][i][0], conf.strLang[lang][i][1]);
    }

    doc.saveAndClose();

    return {
        'url': doc.getUrl()
    };
}


function rpt_LotesYCultivos_setMapaLotesYCultivos(inputData, body) {
    var row = 1;
    var column = 0;
    var tablaMapaLotesYCultivos = body.getTables()[0];
    var conf = lotesYCultivosConfig.imagesSizes;
    var concatedCultivos = getConcatedCropHasColorArray(inputData.Cultivos)

    if (inputData.sheetPosition == 'horizontal') {
        var sizes = conf.Horizontal.lotesYCultivos;
    } else {
        var sizes = conf.Vertical.lotesYCultivos
    }
    setImagesTablesByCell(inputData.image_lotesYCultivos, sizes.widht, sizes.high, tablaMapaLotesYCultivos, row, column)

    var colorLabelArray = [];
    for (var i = 0; i < concatedCultivos.length; i++) {
        colorLabelArray.push({
            Label : concatedCultivos[i][0],
            Color : concatedCultivos[i][2]
        });
    }
    var blodLabels = true;
    var centerText = false;
    setSquareColorsLabels(body.getTables()[0].getCell(2, 0), colorLabelArray, ", ", blodLabels, centerText);

    // getTotalHasByCrop(tablaMapaLotesYCultivos, concatedCultivos)
    var myCell = tablaMapaLotesYCultivos.getCell(2, 0);
    var myPareg = myCell.getChild(0).asParagraph();
    var myPareg = tablaMapaLotesYCultivos.getCell(3, 0).editAsText();
    for (var i = 0; i < concatedCultivos.length; i++) {
        var crop = concatedCultivos[i][0];
        var totalHas = concatedCultivos[i][1];
        var cropAndHas = "{strF6} " + crop + ': ' + totalHas;
        if (i < concatedCultivos.length - 1) {
            cropAndHas += ", ";
        }
        myPareg.appendText(cropAndHas)
    }
}

function rpt_LotesYCultivos_setTablaInformacionCultivos(table, cultivos) {
    var tablaCultivos = table[1];
    for (var i = 2; i < cultivos.length + 2; i++) {
        var myRow = tablaCultivos.getRow(i)
        if (i != cultivos.length + 1) {
            tablaCultivos.appendTableRow(tablaCultivos.getRow(i).copy());
        }
        myRow.replaceText('{TLote}', cultivos[i - 2].FieldName);
        myRow.replaceText('{TCultivo}', cultivos[i - 2].Crop);
        myRow.replaceText('{TSuperficieHas}', cultivos[i - 2].Has);
    }
}


function rpt_LotesYCultivos_setPorcentajeYSuperficie(body, cultivos) {
    var spId = lotesYCultivosConfig.objSet.strSpreadsheetId;
    //spId = "16bvI29vcZ3wZAo8fqbyUvdaLiOjWBsox4sYk9lfS9HQ";
    var sh = SpreadsheetApp.openById(spId)

    //set Dimensions
    var sizes = lotesYCultivosConfig.imagesSizes.Horizontal.charts;
    var cell = body.getTables()[body.getTables().length - 2].getCell(1, 0);

    var concatedCultivos = getConcatedCropHasColorArray(cultivos)

    var columnImage = rpt_LotesYCultivos_setPorcentajeYSuperficie_createColumnChart(sh.getSheets()[0], concatedCultivos)
    var donutImage = rpt_LotesYCultivos_setPorcentajeYSuperficie_createDonutChart(sh.getSheets()[1], concatedCultivos)

    var columnImageSeted = cell.getChild(0).asParagraph().appendInlineImage(columnImage);
    var donutImageSeted = cell.getChild(0).asParagraph().appendInlineImage(donutImage);

    setImagesDimensions(columnImageSeted, sizes.widht, sizes.high);
    setImagesDimensions(donutImageSeted, sizes.widht, sizes.high);
}
function rpt_LotesYCultivos_setPorcentajeYSuperficie_createColumnChart(sheet, cultivos) {
    var rangesToSet = "A1:" + rpt_LotesYCultivos_getAlfebeticRange(cultivos.length + 1) + cultivos.length;

    sheet = removePreviousCharts(sheet);
    sheet.getRange(rangesToSet).clearContent();
    var colors = []
    for (var i = 0; i < cultivos.length; i++) {
        // cultivos[i].tipo //to down case
        // sheet.getRange(1 + i, 1, 1, 1).setValue(cultivos[i].Crop.toLowerCase());
        sheet.getRange(1 + i, 1, 1, 1).setValue(cultivos[i][0].toLowerCase());
        sheet.getRange(1 + i, 2 + i, 1, 1).setValue(cultivos[i][1]);
        colors[i] = cultivos[i][2];
    }
    var ranges = sheet.getRange(rangesToSet);
    SpreadsheetApp.flush();
    chart = sheet.newChart()
        .asColumnChart()
        .addRange(ranges)
        .setOption('legend', { position: 'none' })
        .setStacked()//apila
        .setChartType(Charts.ChartType.COLUMN)
        .setPosition(5, 5, 0, 0)
        .setColors(colors)
        .build();
    sheet.insertChart(chart);
    SpreadsheetApp.flush();
    var chart = sheet.getCharts()[0];
    var image = chart.getAs('image/gif')
    return image
}
function rpt_LotesYCultivos_setPorcentajeYSuperficie_createDonutChart(sheet, cultivos) {
    var rangesToSet = "A1:B" + cultivos.length + 1;
    sheet.getRange(rangesToSet).clearContent();
    sheet = removePreviousCharts(sheet);
    var colors = []
    for (var i = 0; i < cultivos.length; i++) {
        sheet.getRange(1 + i, 1, 1, 1).setValue(cultivos[i][0].toLowerCase());
        sheet.getRange(1 + i, 2, 1, 1).setValue(cultivos[i][1]);
        colors[i] = cultivos[i][2];
    }
    var ranges = sheet.getRange(rangesToSet);
    SpreadsheetApp.flush();
    chart = sheet.newChart()
        .asPieChart()
        .addRange(ranges)
        .setChartType(Charts.ChartType.PIE)
        .setOption('pieHole', 0.5)
        .setPosition(5, 5, 0, 0)
        .setColors(colors)
        .build();
    sheet.insertChart(chart);
    SpreadsheetApp.flush();
    var chart = sheet.getCharts()[0];
    var image = chart.getAs('image/gif')
    return image
}

function rpt_LotesYCultivos_getAlfebeticRange(num) {
    switch (num) {
        case (1): return 'A';
        case (2): return 'B';
        case (3): return 'C';
        case (4): return 'D';
        case (5): return 'E';
        case (6): return 'F';
        case (7): return 'G';
        case (8): return 'H';
        case (9): return 'I';
        case (10): return 'J';
        case (11): return 'K';
        case (12): return 'L';
        case (13): return 'M';
        case (14): return 'N';
        case (15): return 'O';
        case (16): return 'P';
        case (17): return 'Q';
        case (18): return 'R';
        case (19): return 'S';
        case (20): return 'T';
        case (21): return 'U';
        case (22): return 'V';
        case (23): return 'W';
        case (24): return 'X';
        case (25): return 'Y';
        case (26): return 'Z';
    }
}
function test_build_IndicesPromediosPorLote() {
    var debugMode = true;
    var HD = indicesPromedioPorLoteConfig.hardcodedData
    build_IndicesPromediosPorLote(HD, debugMode);
}

function do_report_IndicesPromediosPorLote(InputJson, Output) {
    var debugMode = false;
    return build_IndicesPromediosPorLote(InputJson, debugMode)
}

function build_IndicesPromediosPorLote(InputJson, debugMode) {
    var conf = indicesPromedioPorLoteConfig;
    var inputData;
    if (debugMode == true) {
        inputData = InputJson;
    } else {
        inputData = JSON.parse(InputJson);
    }

    var docName = inputData.Title
    
    var docFileId; 
    if(inputData.Position == "horizontal"){
        var docFileId = createFile(docName, conf.objSet.strDestFolder, conf.objSet.strTemplateID.horizontal);
    }else{
        var docFileId = createFile(docName, conf.objSet.strDestFolder, conf.objSet.strTemplateID.vertical);
    }

    var doc = DocumentApp.openById(docFileId);
    var body = doc.getBody();
    var tab = body.getTables();

    //replace global data 
    var lang = inputData.Language;
    
    setHeaderImage(lang, doc);

    //fill       "Mapa Lotes y Cultivos"
    rpt_IndicesPromediosPorLote_setMapaLotesYCultivos(inputData, body);

    //fill TABLA "informacion cultivos"  
    rpt_IndicesPromediosPorLote_setTablaInformacionCultivos(tab, inputData.Lotes);

    //fill Index tables
    rpt_IndicesPromediosPorLote_setIndexTables(body, inputData, doc, docFileId, lang);
    var doc = DocumentApp.openById(docFileId)
    body = doc.getBody();

    for (var i = 0; i < conf.strLang[lang].length; i++) {
        body.replaceText(conf.strLang[lang][i][0], conf.strLang[lang][i][1]);
    }
    body.replaceText('{informDate}', getStandardizedDateFormat(inputData.InformDate));
    body.replaceText('{informDataDate}', getStandardizedDateFormat(inputData.InformDataDate));
    body.replaceText('{campania}', inputData.Season);
    body.replaceText('{establecimiento}', inputData.Farm);
    body.replaceText('{totalHas}', inputData.TotalHas);

    //fill images Indices Promedio por Lote
    var tab = body.getTables();
    var image = rpt_IndicesPromediosPorLote_setIndiceMedioPorLoteChart(inputData);
    var cell2 = body.getTables()[tab.length - 1].getCell(1, 0);
    
    cell2.getChild(0).asParagraph().appendInlineImage(image);

    doc.saveAndClose();

    return {
        'url': doc.getUrl()
    };
}

function rpt_IndicesPromediosPorLote_setMapaLotesYCultivos(inputData, body) {
    var row = 1;
    var column = 0;
    var tablaMapaLotesYCultivos = body.getTables()[0];
    var conf = indicesPromedioPorLoteConfig.imagesSizes;
    var concatedCultivos = getConcatedCropHasColorArray(inputData.Lotes);
    var sizes = conf.MapaLotesYCultivos;

    setImagesTablesByCell(inputData.Images.MapaLotesYCultivos, sizes.widht, sizes.high, tablaMapaLotesYCultivos, row, column);

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

    var myCell = tablaMapaLotesYCultivos.getCell(2, 0);
    var myPareg = myCell.getChild(0).asParagraph();
    var myPareg = tablaMapaLotesYCultivos.getCell(3, 0).editAsText();
    for (var i = 0; i < concatedCultivos.length; i++) {
        var crop = concatedCultivos[i][0];
        var totalHas = concatedCultivos[i][1];
        var cropAndHas = "{strF5} " + crop + ': ' + totalHas;
        if (i < concatedCultivos.length - 1)
            cropAndHas += ", ";
        myPareg.appendText(cropAndHas)
    }
}

function rpt_IndicesPromediosPorLote_setTablaInformacionCultivos(table, cultivos) {
    var tablaCultivos = table[1];
    for (var i = 2; i < cultivos.length + 2; i++) {
        var myRow = tablaCultivos.getRow(i)
        if (i != cultivos.length + 1)
            tablaCultivos.appendTableRow(tablaCultivos.getRow(i).copy());
        myRow.replaceText('{TLote}', cultivos[i - 2].FieldName);
        myRow.replaceText('{TCultivo}', cultivos[i - 2].Crop);
        myRow.replaceText('{TSuperficieHas}', cultivos[i - 2].Has);
        myRow.replaceText('{TFechaSiembra}', getStandardizedDateFormat(cultivos[i - 2].CropDate));
        myRow.replaceText('{THibVar}', cultivos[i - 2].HibVar);
    }
}


function rpt_IndicesPromediosPorLote_setIndexTables(body, data, doc, docFileId, lang) {
    doc = DocumentApp.openById(docFileId);
    body = doc.getBody();
    var indexImages = data.Images.Indexs;
    for (var i = 0; i < indexImages.length - 1; i++) {
        body.insertTable(body.getChildIndex(body.getTables()[5]), body.getTables()[4].copy());
        body.insertTable(body.getChildIndex(body.getTables()[5]), body.getTables()[3].copy());
        body.insertTable(body.getChildIndex(body.getTables()[5]), body.getTables()[2].copy());
    }

    var debuuugeer = body.getTables().length;
    var indexTableBase = 2;
    for (var i = 0; i < indexImages.length; i++) {
        var table = body.getTables()[indexTableBase + i * 3];
        rpt_IndicesPromediosPorLote_setIndexTables_setImageTable(indexImages[i], table);
    }

    for (var i = 0; i < data.Lotes.length; i++) {
        var duplicate = true;
        var tableBaseIndex = 3;
        if (i == data.Lotes.length - 1)
            duplicate = false
        var loteData = data.Lotes[i];
        for (var j = 0; j < indexImages.length; j++) {
            var tableIndex = tableBaseIndex + j * 3;
            var table = body.getTables()[tableIndex];

            if (i == 0)
                table.replaceText('{index_name}', loteData.Indexs[j].type.toUpperCase());
            rpt_IndicesPromediosPorLote_setIndexTables_setDataTable(table, loteData.Indexs[j], loteData, i + 2, duplicate);
        }
    }

    for (var i = 0; i < data.BoxPlots.length; i++) {
        var doc = DocumentApp.openById(docFileId)
        body = doc.getBody();
        var table = body.getTables()[indexTableBase + i * 3 + 2];
        var sizes = indicesPromedioPorLoteConfig.imagesSizes.NdviChart
        for (var j = 0; j < data.BoxPlots[i].BoxPlot.length; j++) {
            table.replaceText('{index_name}', data.BoxPlots[i].Index.toUpperCase());
            setImagesTablesByCell(data.BoxPlots[i].BoxPlot[j], sizes.widht, sizes.high, table, 1, 0);
        }
        doc.saveAndClose();
    }
}

function rpt_IndicesPromediosPorLote_setIndexTables_setImageTable(indexImages, table) {
    var indexType = indexImages.type.toUpperCase();
    table.replaceText('{index_name}', indexType.toUpperCase());
    rpt_IndicesPromediosPorLote_setIndexTables_setImageTable_setImage(indexImages.image, "{index_image}", table);
    rpt_IndicesPromediosPorLote_setIndexTables_setImageTable_setImage(indexImages.averagedImage, "{index_image_promediado}", table);
    setIndexSimbologies(table, indexType.toLowerCase(), '{imgSimb}');
}

function rpt_IndicesPromediosPorLote_setIndexTables_setImageTable_setImage(image, stringToFind, table) {
    var image = getBlobImage(image);
    var imagesSizes = indicesPromedioPorLoteConfig.imagesSizes.IndexImages;
    if (table.findText(stringToFind)) {
        var imageSeted = table.findText(stringToFind).getElement().asText().setText("").getParent().asParagraph().insertInlineImage(0, image)
        setImagesDimensions(imageSeted, imagesSizes.widht, imagesSizes.high);
    }

}

function rpt_IndicesPromediosPorLote_setIndexTables_setDataTable(table, indexObject, lotes, rowIndex, duplicate) {
    if (duplicate == true)
        table.appendTableRow(table.getRow(rowIndex).copy());
    var myRow = table.getRow(rowIndex);
    myRow.replaceText('{TLote}',         lotes.FieldName);
    myRow.replaceText('{Tmin}',          Number(indexObject.min).toFixed(3));
    myRow.replaceText('{Tmax}',          Number(indexObject.max).toFixed(3));
    myRow.replaceText('{Tmedio}',        Number(indexObject.mean).toFixed(3));
    myRow.replaceText('{TStd}',          Number(indexObject.std).toFixed(3));
    myRow.replaceText('{TFechaSiembra}', getStandardizedDateFormat(lotes.CropDate));
    myRow.replaceText('{TCultivo}',      lotes.Crop);
    myRow.replaceText('{THibVar}',       lotes.HibVar);
}

function rpt_IndicesPromediosPorLote_setIndiceMedioPorLoteChart(data) {
    lotes = data.Lotes

    var confChart = indicesPromedioPorLoteConfig.charts
    var sp = SpreadsheetApp.openById(confChart.spreadSheetId);
    var sh = sp.getSheets()[0];
    sh.getRange('A1:E' + (lotes.length + 4)).clearContent();

    var colorsColumn = [];
    var lotesNames = [];
    var indexNames = [];//indexNames.push("");
    var meanValues = [];

    for (var i = 0; i < lotes.length; i++) {
        lotesNames.push([lotes[i].FieldName]);
        var currentRow = [];
        for (var j = 0; j < lotes[i].Indexs.length; j++) {
            currentRow.push([Number(lotes[i].Indexs[j].mean).toFixed(2)]);
            if (i == lotes.length - 1)
                for (var k = 0; k < data.Images.Indexs.length; k++)
                    if (data.Images.Indexs[k].type.toUpperCase() == lotes[i].Indexs[j].type.toUpperCase()) {
                        colorsColumn.push(data.Images.Indexs[k].colorColumn);
                        indexNames.push(data.Images.Indexs[k].type.toUpperCase());
                    }
        }
        meanValues.push(currentRow)
    }
    //    var titleIndexNames = []; 
    //    titleIndexNames.push(""); titleIndexNames.push(indexNames); //VEEEEEEEEEEEER 
    //sh.appendRow(titleIndexNames)
    sh.getRange('A2:A' + (lotes.length + 1)).setValues(lotesNames);
    var asdas = 'B2:' + (getAlfebeticRange(data.Images.Indexs.length + 1)) + Number(lotes.length + 1)
    sh.getRange(asdas).setValues(meanValues);
    removePreviousCharts(sh);

    var ranges = sh.getRange('A1:E' + Number(lotes.length + 2));
    var chart = sh.newChart()
        .asColumnChart()
        .addRange(ranges)
        .setChartType(Charts.ChartType.COLUMN)
        .setPosition(5, 5, 0, 0)
        .setOption('legend', { position: 'bottom' })
        .setColors(colorsColumn)
    for (var i = 0; i < data.Images.Indexs.length; i++) {
        var labelAux = 'series.' + i + '.labelInLegend'
        chart.setOption(labelAux, indexNames[i]);
    }
    chart = chart.build();
    sh.insertChart(chart);
    SpreadsheetApp.flush();
    var chart = sh.getCharts()[0];
    var image = chart.getAs('image/gif')

    return image
}


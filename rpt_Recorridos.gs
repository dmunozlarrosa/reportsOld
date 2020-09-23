function test_build_Recorridos() {
    var debugMode = true;
    build_Recorridos(recorridosConfig.hardcodedData2, debugMode);
}

function do_report_Recorridos(inputJson, outputJson) {
    var debugMode = false;
    return build_Recorridos(inputJson, debugMode);
}

function build_Recorridos(InputJson, debugMode) {
    var conf = recorridosConfig;

    var inputData;
    if (debugMode == true)
        inputData = InputJson;
    else
        inputData = JSON.parse(InputJson);

    var position = inputData.position.toLowerCase();

    docFileID = createFile(inputData.docName, conf.objSet.strDestFolder, recorridosConfig.objSet.docId[position]);

    var doc = DocumentApp.openById(docFileID);
    var body = doc.getBody();
    var tab = body.getTables();

    //replace global data 
    var lang = inputData.language;
    setHeaderImage(inputData.language, doc);

    body.replaceText('{Farm}', inputData.farm);
    body.replaceText('{informDate}', getStandardizedDateFormat(inputData.informDate));
    body.replaceText('{ImageDate}', getStandardizedDateFormat(inputData.imageDate));
    body.replaceText('{Campania}', inputData.season);
    body.replaceText('{Establecimiento}', inputData.farm);
    body.replaceText('{name_fieldVisit}', inputData.name_fieldVisit);

    //fill images ubicacion general 
    var row = 1;
    var column = 0;
    var widht = conf.imagesSizes.ubicacionGeneral[position].widht;
    var high = conf.imagesSizes.ubicacionGeneral[position].high;
    setImagesTablesByCell(inputData.vista, widht, high, tab[0], row, column)

    //fill & vista en detalle (tabla 1 y 2)
    rpt_Recorridos_SetVistaDetalle(inputData, body, position);

    //fill datos recorrido TABLA  
    rpt_Recorridos_SetDatosRecorridosTabla(body, inputData.dynamicTable, "{strF18}");

    //fill datos recorrido DETALLE
    rpt_Recorridos_SetDatosRecorridosDetalle(tab, inputData.datosRecorridosDetalle, inputData.datosRecorridosDetalleImages);

    for (var i = 0; i < conf.strLang[lang].length; i++) {
        body.replaceText(conf.strLang[lang][i][0], conf.strLang[lang][i][1]);
    }

    doc.saveAndClose();

    return {
        'url': doc.getUrl()
    };
}

function rpt_Recorridos_SetVistaDetalle(inputData, body, position) {
    var row = 1;
    var column = 0;
    var tables = body.getTables();
    var conf = recorridosConfig;
    for (var i = 0; i < inputData.vistaDetalle.length; i++) {
        if (i != inputData.vistaDetalle.length - 1) {
            body.insertTable(body.getChildIndex(tables[1]), tables[1].copy())
        }
        var newTable = body.getTables()[i + 1];
        var sizes = conf.imagesSizes.vistaDetalles[position];
        setImagesTablesByCell(inputData.vistaDetalle[i], sizes.widht, sizes.high, newTable, row, column)
        //nuevo -
        if (inputData.vistaDetalleNames.length > 0)
            if (inputData.vistaDetalleNames[i] != null)
                newTable.replaceText('{vistaDetalleName}', ": " + inputData.vistaDetalleNames[i]);
            else
                newTable.replaceText('{vistaDetalleName}', "")
        else
            newTable.replaceText('{vistaDetalleName}', "")
        //nuevo -
        if (i != 0) {
            body.insertPageBreak(body.getChildIndex(newTable))
        }
    }
}

function rpt_Recorridos_SetDatosRecorridosTabla(body, inputData, title) {
    var tables = body.getTables();
    var index = body.getChildIndex(tables[tables.length - 1]) - 1;
    buildDynamicTableWithChildIndex(body, inputData, title, index);
}

function rpt_Recorridos_SetDatosRecorridosDetalle(table, datosRecorridos, datosRecorridosImages) {
    var datosRecorridaTemplate = table[table.length - 1];
    for (var i = 1; i < datosRecorridos.length; i++) {
        var myRow = datosRecorridaTemplate.getRow(i)
        if (i != datosRecorridos.length - 1) {
            datosRecorridaTemplate.appendTableRow(datosRecorridaTemplate.getRow(i).copy());
        }
        var cell = myRow.getCell(2);
        for (var j = 0; j < datosRecorridos[0].length; j++) {
            var style = {};
            style[DocumentApp.Attribute.BOLD] = true;
            var par = cell.getChild(0).asParagraph().appendText(datosRecorridos[0][j] + ": ");
            par.setAttributes(style);
            style[DocumentApp.Attribute.BOLD] = false;
            var text = datosRecorridos[i][j];
            if (j != datosRecorridos[0].length - 1) text += "\n";
            if (text == "" || text == null || text == undefined) text = " ";
            var par2 = cell.getChild(0).asParagraph().appendText(text);
            par2.setAttributes(style);
        }
        var conf = recorridosConfig.imagesSizes.datosRecorridosDetalles;
        var tableImage = datosRecorridosImages[i - 1].photo_id;
        var row = i;
        var column = 0;
        if (tableImage.split("").length > 15) {
            setImagesTablesByCell(tableImage, conf.widht, conf.high, datosRecorridaTemplate, row, column)
        } else {
            setImageNotFoundTable(conf.widht, conf.high, datosRecorridaTemplate, row, column)
        }
    }
}

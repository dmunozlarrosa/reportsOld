function testBuildDynamicTables(input) {
    var input = dynamicTableConfig.hardocdedData1.Tables
    var doc = DocumentApp.openById("1sKxt_FyAEWiu3FLlZ2iRe_EIE8WG2SVH2qI-qZrD9YI");
    var body = doc.getBody();
    var title = "Datos Recorridas - Detalle";
    buildDynamicTableOnBottom(body, input, title)
    doc.saveAndClose();
}

function buildDynamicTableWithChildIndex(body, inputData, title, childIndex) {
    var templateBody = DocumentApp.openById("1gZEBAK7UTVnQz4S9j3KbdTE0vz6VWj_KdXcHQgqf56c").getBody()
    for (var i = 0; i < inputData.length; i++) {
        var tableIndex = inputData[i].Data[0].length - 1;
        var tableTemplate = templateBody.getTables()[tableIndex].copy();
        var table = body.insertTable(childIndex + i, tableTemplate);
        buildDynamicTable(table, inputData[i], title);
    }
}

function buildDynamicTableOnBottom(body, inputData, title) {
    var templateBody = DocumentApp.openById("1gZEBAK7UTVnQz4S9j3KbdTE0vz6VWj_KdXcHQgqf56c").getBody()
    for (var i = 0; i < inputData.length; i++) {
        var tableIndex = inputData[i].Data[0].length - 1;
        var tableTemplate = templateBody.getTables()[tableIndex].copy();
        var table = body.appendTable(tableTemplate);
        buildDynamicTable(table, inputData[i], title)
    }
}

function buildDynamicTable(table, inputData, title) {
    table.replaceText('{TitleTable}', title);
    for (var i = 0; i < inputData.Data.length; i++) {
        if (i != inputData.Data.length - 1)
            table.appendTableRow(table.getRow(i + 1).copy())
        for (var j = 0; j < inputData.Data[i].length; j++) {
            if(inputData.Data[i][j] == ""   ||
               inputData.Data[i][j] == " "  ||
               inputData.Data[i][j] == "  " || 
               inputData.Data[i][j] == "   "){
              table.getCell(i + 1, j).setText("-");
            }else{
              table.getCell(i + 1, j).setText(inputData.Data[i][j]);
            }
        }
    }
    var bold = false;
    if (inputData.TitleBold == "True" || inputData.TitleBold == "True" || inputData.TitleBold == true) {
        bold = true;
    }
    for (var i = 0; i < inputData.Data.length; i++) {
        for (var j = 0; j < inputData.Data[i].length; j++) {
            if (i == 0) {
                setColumnsStyles(inputData.Sizes[j], table.getCell(i + 1, j), bold);
            } else {
                var headerStyle = {}
                headerStyle[DocumentApp.Attribute.BOLD] = false;
                table.getCell(i + 1, j).setAttributes(headerStyle)
            }
        }
    }

}

function setColumnsStyles(pixelsWidth, cell, bold) {
    var headerStyle = {}
    if (pixelsWidth != 0) {
        headerStyle[DocumentApp.Attribute.WIDTH] = pixelsWidth;
    }
    headerStyle[DocumentApp.Attribute.BOLD] = bold;
    cell.getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
    cell.setAttributes(headerStyle)
}


//=========================TEST DATA====================================================
var dynamicTableConfig = {
    hardocdedData1: {},
    hardocdedData2: {}
}

dynamicTableConfig.hardocdedData0 = {
    "Tables": [
        {
            "Title": "Datos Recorridas - Síntesis",
            "Data": [
                ["Tipo de malezas 2", "Nombre de la especie 2", "Abundancia 2", "Otras malezas"],
                ["Ninguna", "Ninguna", "0 plantas/m2", "aaa"],
                ["Ninguna", "Ninguna", "0 plantas/m2", "no identificadas"]],
            "Sizes": [117, 90, 117, 117],
            "TitleBold": "True"
        },
        {
            "Title": "Datos Recorridas - Síntesis",
            "Data": [
                ["Muestra", "Tipo de malezas", "Nombre de la especie", "Rinde estimado (ton/ha)", "Abundancia"],
                ["3", "Graminea", "Rama Negra (Conyza bonariensis)", "24", "1-4 plantas/m2"],
                ["2", "yuyito primavera", "Señora porqueria (yuyinus yuyineis)", "5", "2-9 plantas/m2"]],
            "Sizes": [47, 122, 122, 56, 122],
            "TitleBold": "True"
        },
        {
            "Title": "Datos Recorridas - Síntesis",
            "Data": [
                ["Infestacion", "Observaciones", "Fertilizante", "toxicidad", "another data"],
                ["Moderado", "Se encontraron animales mutilados", "Zafiro", "155", "1000"],
                ["Alarmante", " - ", "Agristart", "328", "4000"]],
            "Sizes": [122, 122, 122, 56, 47],
            "TitleBold": "True"
        }
    ]
}

dynamicTableConfig.hardocdedData1 = {
    "Tables": [
        {
            "Title": "Datos Recorridas - Síntesis",
            "TitleBold": "True",
            "Data": [
                ["Muestra", "Tipo de malezas", "Nombre de la especie", "Rinde estimado (ton/ha)"],
                ["3", "Graminea", "Rama Negra (Conyza bonariensis)", "24"],
                ["2", "yuyito primavera", "Señora porqueria (yuyinus yuyineis)", "5"]],
            "Sizes": [54, 176, 176, 62]
        },
        {
            "Title": "Datos Recorridas - Síntesis",
            "TitleBold": "True",
            "Data": [
                ["Abundancia", "Tipo de malezas 2", "Nombre de la especie 2", "Abundancia 2"],
                ["1-4 plantas/m2", "Ninguna", "Ninguna", "0 plantas/m2"],
                ["2-9 plantas/m2", "Ninguna", "Ninguna", "0 plantas/m2"]],
            "Sizes": [117, 117, 117, 117]
        },
        {
            "Title": "Datos Recorridas - Síntesis",
            "TitleBold": "True",
            "Data": [
                ["Otras malezas", "Infestacion", "another data", "Observaciones"],
                ["", "Moderado", "1000", "Se encontraron animales mutilados"],
                ["no identificadas", "Alarmante", "4000", " - "]],
            "Sizes": [138, 138, 54, 138],
        }
    ]
}




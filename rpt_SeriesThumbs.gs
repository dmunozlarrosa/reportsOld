function test_build_SeriesThumbs() {
  var debugMode = true;
  build_SeriesThumbs(seriesThumbsConfig.hardcodedData2.input, debugMode);
}

function do_report_SeriesThumbs(InputJson, OutputJson) {
  var debugMode = false;
  return build_SeriesThumbs(InputJson, debugMode)
}

function build_SeriesThumbs(InputJson, debugMode) { 
  if (debugMode == true) {
    var inputD = InputJson;                                
  } else { 
    var inputD = JSON.parse(InputJson);
  }
  
  var lang = 'EN';
  var isEnglish = true;
  if (inputD.Language.toUpperCase() == 'ES'){
    lang = 'ES';
    isEnglish = false;
  }

  var docName = inputD.Title + " - " + inputD.Farm + " - " + inputD.Season;
  var fImData = rpt_SeriesThumbs_getFImData(inputD.DatesImages);
  var cantFechas = fImData.length;

  var templateIndex;
  switch (cantFechas) {
    case (2):           templateIndex = 0; break;  // case (3): templateIndex = 1 ; break;
    case (3): case (4): templateIndex = 1; break;  // case (5): templateIndex = 2 ; break;
    case (5): case (6): templateIndex = 2; break; 
    default :           templateIndex = 3; break;
  }
  var docFileID = createFile(docName, seriesThumbsConfig.strDestFolder, seriesThumbsConfig.strTemplate[templateIndex]);
  var doc = DocumentApp.openById(docFileID);

  // Adding header image  
  setHeaderImage(lang, doc);

  // ###   Processes BODY of document   ###

  var body = doc.getBody();

  // Deleting tables from template that doesn't match the amount of dates.
  var tab = body.getTables();
  var decre = 1;
  for (var t = 1; t < tab.length - 2; t += 2) {
    if (t != (cantFechas - decre)) {
      tab[t].removeFromParent();
      tab[t + 1].removeFromParent();
    }
    decre--;
  }


  
  setIndexSimbologies(body, inputD.IndexName.toString().toLowerCase(), '{imgSimb}')

  var lotDataArr = [];
  for (var i = 0; i < inputD.FieldsData.length; i++) {
    lotDataArr.push(rpt_SeriesThumbs_getLotData(inputD.FieldsData[i]));
  }

  var tables = body.getTables();

  // Merging tables (third from last) based on amount of fields.
  var tableAvgTitle = tables[1];
  var tableAvgBody = tables[2];

  for (var i = 0; i < inputD.FieldsData.length; i++) {
    tableAvgTitle.appendTableRow(tableAvgBody.getRow(0).copy());
    tableAvgTitle.appendTableRow(tableAvgBody.getRow(1).copy());
  }
  tableAvgBody.removeFromParent();

  // Adding tables (first) based on fields number
  var paragraphs = body.getParagraphs();
  const templParagraph = paragraphs[0];
  var templTable = tables[0];

  if (inputD.FieldsData.length > 1) {
    for (var i = 1; i < inputD.FieldsData.length; i++) {
      var copyTable = templTable.copy();
      var copyParagraph = templParagraph.copy();

      copyParagraph.editAsText().insertText(0, '\n\n')
      copyParagraph.editAsText().appendText(' ' + lotDataArr[i][0] + '\n');
      body.insertParagraph(body.getChildIndex(templTable) + (2 * i - 1), copyParagraph);
      body.insertTable(body.getChildIndex(templTable) + (2 * i), copyTable);
    }
    paragraphs[0].editAsText().appendText(' ' + lotDataArr[0][0]);
  }

  var datesLotes = [];
  var datesSeries = [];

  // var chartData = [['Date']]

  var tables = body.getTables();
  var avgTable = tables[tables.length - 3];
  var dateIndex = 2;
  var writeDate = true;

  for (var i = 0; i < inputD.FieldsData.length; i++) {
    lotData = lotDataArr[i];

    datesLotes.push(lotData);

    var currTable = tables[i];
    var numColumns = currTable.getRow(1).getNumCells() - 1;

    var cell = currTable.getCell(9, 0);
    var fieldInfoCell = avgTable.getCell((3 + (i * dateIndex)), 0);

    cell.replaceText("{Lote}", '' + lotData[0]);
    fieldInfoCell.replaceText("{Lote}", '' + lotData[0]);
    cell.replaceText("{Cultivo}", '' + lotData[1]);
    fieldInfoCell.replaceText("{Cultivo}", '' + lotData[1]);
    cell.replaceText("{Hibrido}", '' + lotData[2]);

    var fc = lotData[3];
    if (fc == 'null' || fc == null || fc == '') {
      fc = ' - ';
    } else {
      fc = getStandardizedDateFormat(fc)
    }
    cell.replaceText("{FechaSie}", fc);
    fieldInfoCell.replaceText("{FechaSie}", fc);

    var seriesData = rpt_SeriesThumbs_getserieData(inputD.SeriesValues[i]);
    datesSeries.push(seriesData);

    if (seriesData.length > 0) {
      for (var k = 0; k < seriesData.length; k++) {
        var actualRow;
        var actualColumn;
        if ((k + 1) <= numColumns) {
          actualRow = 1;
          actualColumn =  k + 1;
        } else {
          actualRow = 5;
          actualColumn =  k + 1 - numColumns;
        }
        var imgWidth = 0.90 * seriesThumbsConfig.tableSizes.columnWidth[templateIndex];
        var imgHeight = 0.90 * seriesThumbsConfig.tableSizes.rowHeight;
        setImagesTablesByCell(seriesData[k].link, imgWidth, imgHeight, currTable, actualRow, actualColumn)
        
        if ((k + 1) <= numColumns) {
          var dateCol = 2;
          var ndviCol = 4;
          var colOffset = (k + 1);
        } else {
          var dateCol = 6;
          var ndviCol = 8;
          var colOffset = (k + 1 - numColumns);
        }

        var cell = currTable.getCell(dateCol, colOffset);
        var fc1 = getStandardizedDateFormat(seriesData[k].date)
        cell.setText('' + fc1);         // Adding Date Value
        var cell = currTable.getCell(ndviCol, colOffset);
        var indexValue = parseFloat(seriesData[k].data).toFixed(3);
        cell.setText('' + indexValue);  // Adding Index Value

        if ((k + 1) <= numColumns)
          var cell = currTable.getCell(3, k + 1);
        else
          var cell = currTable.getCell(7, (k + 1 - numColumns));
        cell.setText(seriesData[k].dds); // Adding dds

        if (writeDate) {
          var dateCell = avgTable.getCell(dateIndex, (2 + k));
          dateCell.setText('' + fc1);
        }

        var ddsCell = avgTable.getCell((3 + (i * dateIndex)), (2 + k));
        ddsCell.setText('' + seriesData[k].dds);

        var indexCell = avgTable.getCell((4 + (i * dateIndex)), (2 + k));
        indexCell.setText('' + indexValue);
      }
      writeDate = false;
    }
  }
  rpt_SeriesThumbs_setCharts(body, inputD.SeriesChart, inputD.DdsChart, lang)
  // ### Save and close document, return URL ###

  body.replaceText('{dateStamp}', getStandardizedDateFormat(Utilities.formatDate(new Date(), "GMT+1", "yyyy/MM/dd")));
  if (isEnglish) {
    var titleF = inputD.Title + ' - Field';
    body.replaceText('{Titulo}', '' + titleF);
    for (var i = 0; i < seriesThumbsConfig.arrFixedTranslation.length; i++) {
      body.replaceText(seriesThumbsConfig.arrFixedTranslation[i][0], seriesThumbsConfig.arrFixedTranslation[i][2]);
    }
  } else {
    var titleF = inputD.Title + ' - Lote';
    body.replaceText('{Titulo}', '' + titleF);
    for (var i = 0; i < seriesThumbsConfig.arrFixedTranslation.length; i++) {
      body.replaceText(seriesThumbsConfig.arrFixedTranslation[i][0], seriesThumbsConfig.arrFixedTranslation[i][1]);
    }
  }

  body.replaceText('{Establecimiento}', inputD.Farm);
  body.replaceText('{Campania}', inputD.Season);
  body.replaceText('{cF3}', inputD.IndexName);

  body.replaceText('NaN', '-');
  var url = doc.getUrl();
  doc.saveAndClose();
  return {'url': url}
}

function rpt_SeriesThumbs_setCharts(body, seriesChart, ddsChart, lang){
  var tables = body.getTables();
  var tableCopy = tables[tables.length - 2].copy();
  if (seriesChart.length > 0) {
    setImagesTablesByCell(seriesChart, seriesThumbsConfig.chartsSizes.widht, seriesThumbsConfig.chartsSizes.high, tables[tables.length - 2], 1, 0);
  }
  var ddsTable = tables[tables.length - 1];
  var newTable = body.insertTable(body.getChildIndex(ddsTable), tableCopy);
  newTable.replaceText('{strF12}', "{strF9}");
  if(ddsChart.length > 15){
  setImagesTablesByCell(ddsChart, seriesThumbsConfig.chartsSizes.widht, seriesThumbsConfig.chartsSizes.high, newTable, 1, 0);
  }else{
    var textFlag = 'If you want to generate the index chart by DAS (Days After Seeding) you need to complete the Seeding date as part of the Field information.'
    if(lang == 'ES')
      textFlag = ' Si usted quiere generar el gráfico de índice por DDS (Días Después de la Siembra) es necesario que complete la fecha de siembra como parte de la información del Lote.'
    newTable.getCell(1, 0).editAsText().appendText(textFlag);
    var paragraph = newTable.getCell(1, 0).getChild(0).asParagraph();
    var textFlagStyle = {};
    textFlagStyle[DocumentApp.Attribute.BOLD] = true;
    textFlagStyle[DocumentApp.Attribute.FOREGROUND_COLOR] = '#CC4125';
    textFlagStyle[DocumentApp.Attribute.FONT_SIZE] = 11;
    paragraph.setAttributes(textFlagStyle);
  }
}

function rpt_SeriesThumbs_getLotData(datosLotes) {
  var response = ["", "", "", ""];
  try {
    var lines = datosLotes.split("\n");
    var datosLotes = lines.map(function (lin) {
      return lin.split(",")
    });
    response[0] = datosLotes[1][0];
    response[1] = datosLotes[1][1];
    response[2] = datosLotes[1][2];
    response[3] = datosLotes[1][3];
  } catch (e) { }
  return response;
}

function rpt_SeriesThumbs_getserieData(seriesValues) {
  var response = [];
  try {
    var data = seriesValues;
    var lines = data.split("\n");

    var data = lines.map(function (lin) {
      return lin.split(",")
    });

    for (var i = 1; i < data.length; i++) {
      if (data[i][0] != "") {
        var obj = {
          'date': '' + data[i][0],
          'data': data[i][1],
          'dds': '' + data[i][2],
          'link': '' + data[i][3]
        }
        response.push(obj);
      }
    }
  } catch (e) { }
  return response;
}

function rpt_SeriesThumbs_getFImData(fechasImagenes) {
  var response = [];
  try {
    var lines = fechasImagenes.split("\n");
    fechasImagenes = lines.map(function (lin) {
      return lin.split(",")
    });
    for (var i = 1; i < fechasImagenes.length; i++) {
      if (fechasImagenes[i][0] != "") {
        response.push(fechasImagenes[i][0]);
      }
    }
  } catch (e) { }
  return response;
}

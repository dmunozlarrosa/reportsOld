function test_build_TasaDeCambio() {
  var debugMode = true;
  var test = tasaCambioEstaticaConfig.testData;
  build_TasaDeCambio(test.input, test.output, debugMode);
}

function do_report_TasaDeCambio(InputJson, OutputJson) {
  var debugMode = false;
  return build_TasaDeCambio(InputJson, OutputJson, debugMode)
}

function build_TasaDeCambio(InputJson, OutputJson, debugMode) {  
  
  var config = tasaCambioEstaticaConfig;
  
  var inputD;
  var outputD;
  if (debugMode == true) {
    inputD = InputJson;
    outputD = OutputJson;
  } else {
    inputD = JSON.parse(InputJson);
    outputD = JSON.parse(OutputJson);
  }
  var standardD = config.standardsJson;
  
  var lang = 'EN';
  if (!(inputD.Language) || inputD.Language.toUpperCase() == 'ES') {
    lang = 'ES';
  } 
  if (!(inputD.Language) || inputD.Language.toUpperCase() == 'PT') {
    lang = 'PT';
  } 
  
  if (lang === 'EN')
    var docName = inputD.Title + " - Field " + inputD.Field;
  else 
    var docName = inputD.Title + " - Lote " + inputD.Field;
  
  var docFileID = createFile(docName, config.objSet.strDestFolder, config.objSet.strTemplateID);
  var doc = DocumentApp.openById(docFileID);
  
  // Adding header image  
  setHeaderImage(inputD.Language, doc);
  
  // ###   Processes BODY of document   ###  
  var body = doc.getBody();
  
  // ###   Replace text values  ###
  body.replaceText('{dateStamp}', getStandardizedDateFormat(Utilities.formatDate(new Date(), "GMT+1", "yyyy/MM/dd")));
  body.replaceText('{FechaNDVI1}', " - " + getStandardizedDateFormat(inputD.DateNDVI1));
  body.replaceText('{FechaNDVI2}', " - " + getStandardizedDateFormat(inputD.DateNDVI2));
  if (lang ===  'EN') {	
    var titleF = inputD.Title + ' - Field ' + inputD.Field;
    body.replaceText('{Titulo}', '' + titleF);
    for (var i = 0; i < config.objSet.arrTranslation.length; i++) {
      body.replaceText(config.objSet.arrTranslation[i], standardD['Report Labels'][i].Label_EN);
    }
  } else if (lang ===  'ES') {	
    var titleF = inputD.Title + ' - Lote ' + inputD.Field;
    body.replaceText('{Titulo}', '' + titleF);
    for (var i = 0; i < config.objSet.arrTranslation.length; i++) {
      body.replaceText(config.objSet.arrTranslation[i], standardD['Report Labels'][i].Label_ES);
    }
  } else if (lang ===  'PT') {	
    var titleF = inputD.Title + ' - Lote ' + inputD.Field;
    body.replaceText('{Titulo}', '' + titleF);
    for (var i = 0; i < config.objSet.arrTranslation.length; i++) {
      body.replaceText(config.objSet.arrTranslation[i], standardD['Report Labels'][i].Label_PT);
    }
  }
  
  body.replaceText('{Campania}', inputD.Season);
  body.replaceText('{Establecimiento}', inputD.Farm);
  body.replaceText('{Lote}', inputD.Field);
  body.replaceText('{Cultivo}', inputD.Crop);
  body.replaceText('{Híbrido}', inputD.Hybrid);
  
  var fs = inputD.DatePlanting
  var noD = '';
  if (fs == null || fs == '') {
    if (lang === 'PT') {
      fs = 'Não disponível';
      noD = 'Não disponível';
    } else if (lang === 'EN') {
      fs = 'No disponible';
      noD = 'No disponible';
    } else {
      fs = 'Not available';
      noD = 'Not available'
    }
  } else {
    var daysB = getDaysDiference(inputD.DatePlanting, inputD.DateNDVI2)
    if (lang === "PT" || lang === "ES") {
      noD = '' + daysB + ' days';
    } else {
      noD = '' + daysB + ' días ';  
    }
  }
  
  body.replaceText('{FechaSiembra}', fs);
  body.replaceText('{noDays}', noD);
  
  // ###   Prepare and insert rows in table Distribucion de areas    ###
  
  var arrTbl = []
  var sum = 0
  for (var i = 0; i < outputD.ClassificationValues.length; i++) {
    
    var row = [];
    var itemStr = outputD.ClassificationValues[i].Class;
    var itemVal = outputD.ClassificationValues[i].Value;
    row[1] = itemVal;
    sum = parseFloat(itemVal) + sum;
    for (var j = 0; j < standardD.RangesColorsTasaCambio.length; j++) {
      
      if (itemStr == standardD.RangesColorsTasaCambio[j].Class) {
        
        row[3] = standardD.RangesColorsTasaCambio[j].Hexa;
        var lL = standardD.RangesColorsTasaCambio[j]['Lower Limit'];
        var uL = standardD.RangesColorsTasaCambio[j]['Upper limit'];
        
        if (lang === "PT" || lang === "ES") {
          var strTo = 'a';
          var strFrom = 'de';
        } else {
          var strTo = 'to';
          var strFrom = 'from';
        }
        
        if (lL == null || lL == "") {
          if (lL != 0) {
            row[0] = '< ' + 100 * parseFloat(uL) + '%';
          } else {
            row[0] = '' + strFrom + ' ' + 100 * parseFloat(uL) + '% ' + strTo + ' 0%';
          }                        
        } else if (uL == null || uL == "") {
          if (uL != 0) {
            row[0] = '> ' + 100 * parseFloat(lL) + '%';
          } else {
            row[0] = '' + strFrom + ' 0% ' + strTo + ' ' + 100 * parseFloat(lL) + '%';
          }
        } else {
          row[0] = '' + strFrom + ' ' + 100 * parseFloat(uL) + '% ' + strTo + ' ' + 100 * parseFloat(lL) + '%';
        }   
        
        arrTbl.push(row)
        break
      }
      
    }
  }
  
  for (var i = 0; i < arrTbl.length; i++) {
    arrTbl[i][2] = parseFloat(100 * arrTbl[i][1] / sum).toFixed(1) + '%';
  }
  
  var sumStr = sum.toFixed(2)
  
  body.replaceText('{Sum}', sumStr);
  
  var style = {};
  style[DocumentApp.Attribute.FOREGROUND_COLOR] = '#000000';
  
  var table = body.getTables()[1];
  for (var i = arrTbl.length - 1; i >= 0; i--) {
    var row = table.getRow(3).copy();
    table.insertTableRow(4, row);
    var hNMB = parseInt(arrTbl[i][3], 16);
    
    var cell = table.getCell(4, 0);
    cell.setText(arrTbl[i][0]);
    cell.setBackgroundColor('#' + arrTbl[i][3]);
    if (hNMB < 16167572) {
      cell.setAttributes(style);
    }
    var cell = table.getCell(4, 1);
    cell.setText(arrTbl[i][1]);
    cell.setBackgroundColor('#' + arrTbl[i][3]);
    if (hNMB < 16167572) {
      cell.setAttributes(style);
    }
    var cell = table.getCell(4, 2);
    cell.setText(arrTbl[i][2]);
    cell.setBackgroundColor('#' + arrTbl[i][3]);
    if (hNMB < 16167572) {
      cell.setAttributes(style);
    }
  }
  table.removeRow(3);
  
  // ### Prepare Chart of Distribucion the areas    ###
  
  var blC = chartBuilder(arrTbl);
  
  //  ###  Chart of Distribucion the areas  ###
  
  var image = '';
  
  var table = body.getTables()[1];
  var cell = table.getCell(1, 0);
  var paragraph = cell.getChild(0).asParagraph();
  var style = {};
  style[DocumentApp.Attribute.FONT_SIZE] = 0;
  
  paragraph.setSpacingAfter(0);
  paragraph.setSpacingBefore(0);
  paragraph.setAttributes(style);
  
  if (blC) {
    
    var img = paragraph.addPositionedImage(blC)
    .setTopOffset(0)
    .setLeftOffset(45);
    
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

  rpt_TasaCambioEstatica_SetFirstTable( body.getTables()[0], outputD);
  // ### Save and close document, return URL ###
  
  var url = doc.getUrl();
  doc.saveAndClose();
  
  return {
    'url': url
  }
}

function rpt_TasaCambioEstatica_SetFirstTable(table, outputD) {
  var conf = tasaCambioEstaticaConfig.imageSizes; 
  setImagesTablesByCell(outputD.URLimgNDVI1, conf.smallNdvi.width, conf.smallNdvi.height, table, 1, 0);
  setImagesTablesByCell(outputD.URLimgNDVI2, conf.smallNdvi.width, conf.smallNdvi.height, table, 1, 1);
  setImagesTablesByCell(outputD.URLimgTasaCambio, conf.bigNdvi.width, conf.bigNdvi.height, table, 2, 0);  
}

function chartBuilder(arrTbl) {
	var sp = SpreadsheetApp.openById(tasaCambioEstaticaConfig.objSet.strSprChartID);
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

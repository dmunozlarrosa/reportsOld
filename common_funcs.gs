  // function testingSetConcatenedAtributes() {
  //   var doc = DocumentApp.openById('1sKxt_FyAEWiu3FLlZ2iRe_EIE8WG2SVH2qI-qZrD9YI');//testingDoc
  //   var CA = { "a": "b", "c": "d", "e": "f" }
  //   var separator = ",  ";
  //   setConcatenedAtributesss(doc.getBody(), CA, separator, true)
  // }

  function setConcatenedAtributesss(ubication, randomObject, separator, boldLabels) {
    // --------------- example input data --------------- 
    // var ubication = body / cell(0,1) / paregraph
    // var randomObject = {
    //   "a" : "b",
    //   "c" : "d"
    // }
    // var separator = ", " 
    // var boldLabels = true/false;
    // --------------- example input data --------------- 

    var keys = Object.getOwnPropertyNames(randomObject);
    for (var i = 0; i < keys.length; i++) {
      var highlightStyle = {};
      //set name
      var paregraph = ubication.appendParagraph(keys[i]);
      highlightStyle[DocumentApp.Attribute.BOLD] = boldLabels;
      paregraph.setAttributes(highlightStyle).merge();
      //set value
      paregraph = ubication.appendParagraph(" : " + Object.getOwnPropertyDescriptor(randomObject, keys[i]).value);
      highlightStyle[DocumentApp.Attribute.BOLD] = false;
      paregraph.setAttributes(highlightStyle).merge();
      //set coma
      if (i != keys.length - 1) {
        paregraph = ubication.appendParagraph(separator);
        highlightStyle[DocumentApp.Attribute.BOLD] = false;
        paregraph.setAttributes(highlightStyle).merge();
      }
      //merge 
      paregraph = ubication.appendParagraph("").merge();
    }
  }

  // function testingSquareColorsLables() {
  //   var doc = DocumentApp.openById('1sKxt_FyAEWiu3FLlZ2iRe_EIE8WG2SVH2qI-qZrD9YI');      //testingDoc
  //   var colorLabelArray = [ { "Color": "#AFF553", "Label": "Muy Baja" }, { "Color": "#5AE622", "Label": "Baja" } ]
  //   var separator = ",  ";
  //   setSquareColorsLabels(doc.getBody(), colorLabelArray, separator, true)
  // }

  function setSquareColorsLabels(ubication, colorLabelArray, separator, boldLabels, center) {
    // --------------- example input data --------------- 
    // var ubication = body / cell(0,1) / paregraph
    // var colorLabelArray = [
    //   { "Color": "#AFF553", "Label": "Muy Baja"   },
    //   { "Color": "#5AE622", "Label": "Baja"       }
    //   ]
    // var separator = ", " 
    // var boldLabels = true/false;
    // --------------- example input data --------------- 
    for (var i = 0; i < colorLabelArray.length; i++) {
      var highlightStyle = {};
      //set Square color
      var paregraph = ubication.appendParagraph("     ");
      highlightStyle[DocumentApp.Attribute.FOREGROUND_COLOR] = colorLabelArray[i].Color;
      highlightStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = colorLabelArray[i].Color;
      paregraph.setAttributes(highlightStyle);
      //set Label
      paregraph = ubication.appendParagraph(" " + colorLabelArray[i].Label);
      highlightStyle[DocumentApp.Attribute.FOREGROUND_COLOR] = '#000001';
      highlightStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#FFFFFF';
      highlightStyle[DocumentApp.Attribute.BOLD] = boldLabels;
      paregraph.setAttributes(highlightStyle).merge();
      //paregraph.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
      //set coma
      if (i != colorLabelArray.length - 1) {
        paregraph = ubication.appendParagraph(separator);
        highlightStyle[DocumentApp.Attribute.BOLD] = false;
        paregraph.setAttributes(highlightStyle).merge();
        //paregraph.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
      }
      //merge 
      paregraph = ubication.appendParagraph("").merge().merge();
      if(center){
        paregraph.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
      }
    }
  }

// function testingSetSquareColorsConcated() {
//     var body = DocumentApp.openById('1sKxt_FyAEWiu3FLlZ2iRe_EIE8WG2SVH2qI-qZrD9YI').getBody();      //testingDoc
//     var colorsArray = ["#AFF553", "#5AE622", "#AFF553"];
//     // setSquareColorsConcated(body, colorsArray, center);
//     setSquareColorsConcatedByTag(body, colorsArray, center, '{A}');
// }
  
function setSquareColorsConcatedByTag(ubication, colorsArray, center, tag) {
    var nextPosition = ubication.findText(tag).getElement().getParent().getParent();    
    setSquareColorsConcated(nextPosition, colorsArray, center)
    ubication.replaceText(tag, '');    
}

function setSquareColorsConcated(ubication, colorsArray, center) {
    for (var i = 0; i < colorsArray.length; i++) {
      var highlightStyle = {};
      //set Square color
      var paregraph = ubication.appendParagraph("    .");
      highlightStyle[DocumentApp.Attribute.FONT_FAMILY]      = 'Arial';
      highlightStyle[DocumentApp.Attribute.FONT_SIZE]        = 12;
      highlightStyle[DocumentApp.Attribute.FOREGROUND_COLOR] = colorsArray[i];
      highlightStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = colorsArray[i];
      paregraph.setAttributes(highlightStyle);
      paregraph = ubication.appendParagraph("").merge().merge()
      if(center){
        paregraph.setAlignment(DocumentApp.HorizontalAlignment.CENTER);
      }
    }
  }



  function createFile(strFileName, strFolderName, strTemplateID) {

    var root = DriveApp.getRootFolder();
    var reportFolder = null;

    var has360Folder = root.getFoldersByName("360").hasNext();

    if (has360Folder) {
      var f360 = root.getFoldersByName("360").next();
      var hasReportFolder = f360.getFoldersByName(strFolderName).hasNext();
      if (hasReportFolder) {
        reportFolder = f360.getFoldersByName(strFolderName).next();
      } else {
        reportFolder = f360.createFolder(strFolderName);
      }
    } else {
      var f360 = root.createFolder("360");
      reportFolder = f360.createFolder(strFolderName);
    }

    var templateFile = DriveApp.getFileById(strTemplateID);
    var docFile = templateFile.makeCopy(strFileName, reportFolder);

    return docFile.getId();

  }

  function unique(arr, keepLast) {
    return arr.filter(function (value, index, array) {
      return keepLast ? array.indexOf(value, index + 1) < 0 : array.indexOf(value) === index;
    });
  };

  function setSquareColorsCrop(cultivos, cell) {
    //gets crops on getConcatedCropHasColorArray shapes
    //example:
    //   Crop , TotalHas, Color,   , CropId
    //[ ["Soja", 121.04,   "#55AA00", "2"], 
    //  ["Maiz",  30.82,   "#55AA00", "3"] ] 

    var cultivColorsIds = commonConfig.cultivosColorsId;
    var size = lotesYCultivosConfig.imagesSizes.cultivosColors;

    var myPareg = cell.getChild(0).asParagraph();
    for (var i = 0; i < cultivos.length; i++) {
      for (var ii = 0; ii < cultivColorsIds.length; ii++) {
        if (cultivos[i]["3"].toString() == cultivColorsIds[ii][0]) {
          var imageBlob = DriveApp.getFileById(cultivColorsIds[ii][1]).getBlob();
          var imageColorSeted = myPareg.appendInlineImage(imageBlob);
          setImagesDimensions(imageColorSeted, size.widht, size.high);
          var stringVal = " " + cultivos[i][0];
          if (i < cultivos.length - 1) {
            stringVal += ", ";
          }
          myPareg.appendText(stringVal)
        }
      }
    }
  }

  function getConcatedCropHasColorArray(cultivos) { //Suma los valores las hectareas de los mismos cultivos
    // cultivos = [// input necesario para crear los valores de cultivos concatenados
    //     {
    //         "Crop": "Soja",
    //         "Has": 60.52,
    //         "Color": "#55AA00",
    //         "CropId":"2"
    //     },{}
    // ]
    // ejemplo cultivos = [{"Crop":"Soja","Has":60.52,"Color":"#55AA00", "CropId":"2"},{"Crop":"Soja","Has":60.52,"Color":"#55AA00", "CropId":"2"},{"Crop":"Maiz","Has":30.82,"Color":"#55AA00", "CropId":"3"}] 
    // obtenes: [[ "Soja", 121.04, "#55AA00","2" ],["Maiz", 30.82,"#55AA00","3"]] 
    var cropTypes = [];
    for (var i = 0; i < cultivos.length; i++) {
      var founded = false;
      var cropData = []
      for (var ii = 0; ii < cropTypes.length; ii++) {
        if (cropTypes[ii][3] == cultivos[i].CropId) {
          cropTypes[ii][1] = Number(Number(cropTypes[ii][1]) + Number(cultivos[i].Has)).toFixed(2);
          founded = true;
        }
      }
      if (founded == false) {
        cropData[0] = cultivos[i].Crop;
        cropData[1] = Number(cultivos[i].Has.toFixed(2));
        cropData[2] = cultivos[i].Color;
        cropData[3] = cultivos[i].CropId
        cropTypes.push(cropData);
      }
    }
    return cropTypes;
  }


  function setIndexSimbologies(bodyOrTable, indexType, stringToFind) {
    confImg = commonConfig.strImgSimbologia
    switch (indexType) {
      case "ndvi": setIndexSimbologies_ReplaceAllOcurrences(confImg.Ndvi, bodyOrTable, stringToFind); break;
      case "ndre": setIndexSimbologies_ReplaceAllOcurrences(confImg.Ndvi, bodyOrTable, stringToFind); break;
      case "evi":  setIndexSimbologies_ReplaceAllOcurrences(confImg.Ndvi, bodyOrTable, stringToFind); break;
      case "savi": setIndexSimbologies_ReplaceAllOcurrences(confImg.Ndvi, bodyOrTable, stringToFind); break;
      case "ndwi": setIndexSimbologies_ReplaceAllOcurrences(confImg.Ndwi, bodyOrTable, stringToFind); break;
      case "ndmi": setIndexSimbologies_ReplaceAllOcurrences(confImg.Ndmi, bodyOrTable, stringToFind); break;
    }
  }

  function setIndexSimbologies_ReplaceAllOcurrences(simbologyId, bodyOrTable, stringToFind) {
    var myBlobImage = DriveApp.getFileById(simbologyId).getBlob();
    while (bodyOrTable.findText(stringToFind)) {
      var imageSeted = bodyOrTable.findText(stringToFind).getElement().asText().setText("").getParent().asParagraph().insertInlineImage(0, myBlobImage)
      var widht = commonConfig.imagesSizes.simbologias.widht;
      var eight = commonConfig.imagesSizes.simbologias.eight;
      setImagesDimensions(imageSeted, widht, eight);
    }
  }

  function getAlfebeticRange(num) {
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
      case (12): return 'K';
      case (13): return 'L';
      case (14): return 'M';
      case (15): return 'N';
      case (16): return 'O';
      case (17): return 'P';
      case (18): return 'Q';
      case (19): return 'R';
      case (20): return 'S';
    }
  }

  function removePreviousCharts(sheet) {
    var chts = sheet.getCharts();
    for (var i = 0; i < chts.length; i++) {
      sheet.removeChart(chts[i]);
    }
    return sheet
  }

 function testCreateTable(){
  var body = DocumentApp.openById('1sKxt_FyAEWiu3FLlZ2iRe_EIE8WG2SVH2qI-qZrD9YI').getBody();      //testingDoc
  headerBackgroundColor = '#336600';
  headerBold = true ;
  headerTextColor = '#FFFFFF';
  rows = 2;
  columns = 3;
  var table = createTable(body, headerBackgroundColor, headerBold, headerTextColor, rows, columns, 'NDVI Selected');
  for(var i=1; i<rows-1; i++){
      for(var j=0; j<columns; j++){
        var paraInCell = table.getCell(i, j).getChild(0).asParagraph();
        paraInCell.appendText(i + ' '+  j);
      }
    }
}

function createTable(body, tablePositionNumber, headerBackgroundColor, headerBold, headerTextColor, rows, columns, title){
  var headerStyle = {};
  headerStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = headerBackgroundColor;
  headerStyle[DocumentApp.Attribute.BOLD] = headerBold;
  headerStyle[DocumentApp.Attribute.FOREGROUND_COLOR] = headerTextColor;
  
  var templateBody = DocumentApp.openById("1gZEBAK7UTVnQz4S9j3KbdTE0vz6VWj_KdXcHQgqf56c").getBody()
  var templateTable = templateBody.getTables()[columns - 1].copy();
  var table = body.insertTable(body.getChildIndex(body.getTables()[tablePositionNumber]), templateTable);
  table.getCell(0,0).setAttributes(headerStyle)
  table.replaceText('{TitleTable}', title);
  for (var i = 0; i < rows; i++) {
      if (i != rows - 1) table.appendTableRow(table.getRow(i + 1).copy())    
  }
  return table;
}

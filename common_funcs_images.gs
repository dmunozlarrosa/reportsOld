function testSetHeaderImage(){
  var doc = DocumentApp.openById('1sKxt_FyAEWiu3FLlZ2iRe_EIE8WG2SVH2qI-qZrD9YI');//testingDoc
  setHeaderImage('EN', doc);
}

function setHeaderImage(language, document) {
  var paragraph = document.getHeader().getChild(0).asParagraph();

  var style = {};
  style[DocumentApp.Attribute.FONT_SIZE] = 0;

  paragraph.setSpacingAfter(0);
  paragraph.setSpacingBefore(0);
  paragraph.setAttributes(style);

  if (language == 'ES' || language == 'es' || language == 'Es' || language == 'eS')
    var blob = DriveApp.getFileById(commonConfig.headerLogo['ES']).getBlob()
  else
    var blob = DriveApp.getFileById(commonConfig.headerLogo['EN']).getBlob()

  if (blob != null) {
    var img = paragraph.appendInlineImage(blob);

    style = {}
    style[DocumentApp.Attribute.VERTICAL_ALIGNMENT] = DocumentApp.VerticalAlignment.CENTER;
    style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.RIGHT;

    img.getParent().setAttributes(style);
  }
}

function loadImageWithTryNew(imageUrl) {
    var image = null;
    var i = 0;
    while ((i < 10) && image == null) {
      try {
        image = UrlFetchApp.fetch(imageUrl);
      } catch (e) {
        var errorMsg = "     * ["+ (i + 1).toString() +"/10]Error on fetch image url: "+ imageUrl + "\n\nMessage: " + e.message ;
        console.log(errorMsg);
        Utilities.sleep(3000);
        i = i + 1;
      }
    }
    return image;
}

function getBlobImage(image) {
  var blob;
  try {
    if (image[0] == 'h' && image[1] == 't' && image[2] == 't' && image[3] == 'p') {
      image = loadImageWithTryNew(image);
      blob = image.getBlob();
    } else {
      if (image.split("").length > 35) { // id images loaded in Drive have string lengt of 33
        image = Utilities.base64Decode('' + image);
        blob = Utilities.newBlob(image, MimeType.PNG);
      } else {
        if (image.length < 15) { // < 15 = "", " ", "-", " - ","not asigned", etc...
          blob = DriveApp.getFileById(commonConfig.notFoundImage).getBlob()//set not found image
        }else{
          blob = DriveApp.getFileById(image).getBlob()
        }
      }
    }
  } catch (e) {
    blob = DriveApp.getFileById(commonConfig.notFoundImageError).getBlob();//set not found image Error!
  }
  return blob;
}

function setImagesTablesByCell(image, widht, high, table, row, column) {
  var blob = getBlobImage(image);
  var imageSeted = table.getCell(row, column).appendImage(blob)
  imageSeted = setImagesDimensions(imageSeted, widht, high);
  var styles = {};
  styles[DocumentApp.Attribute.VERTICAL_ALIGNMENT] = DocumentApp.VerticalAlignment.CENTER;
  styles[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
  imageSeted.getParent().setAttributes(styles);
  return imageSeted;
}

function setImagesTableByTag(image, widht, high, tableOrBody, tagToFind) {
  var image = getBlobImage(image);
  if (tableOrBody.findText(tagToFind)) {
    var imageSeted = tableOrBody.findText(tagToFind).getElement().asText().setText("").getParent().asParagraph().insertInlineImage(0, image)
    imageSeted = setImagesDimensions(imageSeted, widht, high);
  }
}

function setImagesDimensions(imageBlob, widht, eight) {
  var defaultImageHeight = imageBlob.getHeight()
  if (defaultImageHeight > eight) {
    imageBlob.setHeight(eight);
    imageBlob.setWidth(imageBlob.getWidth() * eight / defaultImageHeight);
  }
  var defaultImageWidth = imageBlob.getWidth()
  if (imageBlob.getWidth() > widht) {
    imageBlob.setWidth(widht);
    imageBlob.setHeight(imageBlob.getHeight() * widht / defaultImageWidth);
  }
  return imageBlob;
}

function setImageNotFoundTable(widht, high, table, row, column) {
  var image = "13dhuMkogYc7X9CKBuyKnBfuff4qClmuH";
  setImagesTablesByCell(image, widht, high, table, row, column)
}

function setPaletteColorsImageByTable(colorName, table, max, min, maxTag, minTag, paletteTag) {
  table.replaceText(maxTag, max);
  var colorId = getPaletteColorsImageId(colorName);
  var widht = commonConfig.imagesSizes.simbologias.widht;
  var eight = commonConfig.imagesSizes.simbologias.eight;
  setImagesTableByTag(colorId, widht, eight, table, paletteTag);
  table.replaceText(minTag, min);
};

function getPaletteColorsImageId(colorName) {
  var paletteImagesIds = commonConfig.paletteColorsId;
  var paletteImageId = "";
  for (var i = 0; i < paletteImagesIds.length; i++)
    if (colorName.toLowerCase() == paletteImagesIds[i][0] || i == (paletteImagesIds.length - 1)) {
      paletteImageId = paletteImagesIds[i][1];
      break;
    }
  return paletteImageId;
}
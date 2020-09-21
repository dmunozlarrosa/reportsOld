function test_getStandardizedDateFormat(){
  var type1 = "2018-12-21T13:00:00Z"
  var type2 = "2018-12-21"
  var type3 = "21-12-2018"
  var type4 = "21-12-2018T13:00:00Z"
  var type5 = "21-12-2018 13:00:00Z"
  var type6 = "2018/12/21 00:00:00"
  var type7 = "21/12/2018 12:00:00 AM"
  var type8 = "21/12/2018T12:00:00Z"
  var result1 = getStandardizedDateFormat(type1)
  var result2 = getStandardizedDateFormat(type2)
  var result3 = getStandardizedDateFormat(type3)
  var result4 = getStandardizedDateFormat(type4)
  var result5 = getStandardizedDateFormat(type5)
  var result6 = getStandardizedDateFormat(type6)
  var result7 = getStandardizedDateFormat(type7)
  var result8 = getStandardizedDateFormat(type8)
}

function getStandardizedDateFormat(stringDate){
  if (stringDate != null && stringDate != "- No asignado -" && stringDate.length > 7) {
    stringDate = stringDate.split(" ")[0].split("T")[0];
    var arrayDate = stringDate.split("-");
    if (arrayDate.length == 3) {                                         //type 1,2,3,4,5
      var newDate = getStandardizedDateFormatReformat(arrayDate);
    } else {                                                             //type 6,7,8
      arrayDate = stringDate.split("/");
      var newDate = getStandardizedDateFormatReformat(arrayDate);;
    }
    return newDate;
  }
  return "-";
}

function getStandardizedDateFormatReformat(arrayDate){
  if(arrayDate[2] == undefined ){
    var a = 2;
  }
  if(arrayDate[2].length == 4){
    var auxDay = arrayDate[0];
    arrayDate[0] = arrayDate[2];
    arrayDate[2] = auxDay;
  }
  if(arrayDate[1].split('').length==1)
    arrayDate[1] =  '0' + arrayDate[1]
  if(arrayDate[2].split('').length==1)
    arrayDate[2] =  '0' + arrayDate[2]
  var newDate = arrayDate[0] + '-' + arrayDate[1] + '-' +  arrayDate[2];
  return newDate;
}  

function getLanguageDateFormat(stringDate, language) {
  //example input date type 1:   2018-12-21T13:00:00Z
  //example input date type 2:   2018-12-21
  //example input date type 3:   12-21-2018
  //example input date type 4:   12-21-2018T13:00:00Z
  //example input date type 5:   12-21-2018 13:00:00Z
  //example input date type 6:   2018/12/21 00:00:00
  //example input date type 7:   12/21/2018 12:00:00 AM
  //example input date type 8:   12/21/2018T12:00:00Z
  
  if (stringDate != null && stringDate != "- No asignado -" && stringDate.length > 7) {
    arrayDate = stringDate.split("-");
    if (arrayDate.length == 3) {                                         //type 1,2,3,4,5
      var newDate = getLanguageDateFormat_getLanguage(arrayDate, language);
    } else {                                                             //type 6,7,8
      stringDate = stringDate.split(" ")[0];
      var arrayDate = stringDate.split("/");
      var newDate = getLanguageDateFormat_getLanguage(arrayDate, language);;
    }
    return newDate;
  }
  return "-"
}

function getLanguageDateFormat_getLanguage(dateYMD, language) {
  dateYMD[2] = dateYMD[2].split("T")[0].split(" ")[0];
  if (dateYMD[2].length == 4) { // Paso todo a [Aaaa,mm,dd]; Ejemplo: si es [[01],[18],[2019]]
    var myDay = dateYMD[1];    // myDay = 18 
    dateYMD[1] = dateYMD[0];   // [ ,01, ]
    dateYMD[0] = dateYMD[2];   // [2019,01, ]
    dateYMD[2] = myDay;        // [2019,01,18]
  }
  if (language == "EN") {
    var newDate = dateYMD[1] + "/" + dateYMD[2] + "/" + dateYMD[0];
  } else {
    var newDate = dateYMD[2] + "/" + dateYMD[1] + "/" + dateYMD[0];
  }
  return newDate;
}

function daysFromDate(dateStrInput, d) {
  var arrDt = ('' + dateStrInput).split("-");
  var dateInput = new Date(parseInt(arrDt[0], 10), parseInt(arrDt[1], 10) - 1, parseInt(arrDt[2], 10));
  var newDate = new Date(dateInput.getTime() + d * (24 * 3600 * 1000));
  var dateStrOutput = Utilities.formatDate(newDate, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  return dateStrOutput;
}

function rightDate(date, isEnglish) {
  if (isEnglish) {
    return Utilities.formatDate(date, Session.getScriptTimeZone(), "MM/dd/yyyy");
  } else {
    return Utilities.formatDate(date, Session.getScriptTimeZone(), "dd/MM/yyyy");
  }
}

function getCurrentDate(language) { 
  if (language == 'EN') {
    var currentDate = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "MM/dd/yyyy");
  } else {
    var currentDate = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "dd/MM/yyyy");
  }
  return currentDate;
}

function getDaysDiference(dateStart, dateEnd) {
  var fNDVI2 = ('' + dateEnd).split("-");
  var arr2 = ('' + dateStart).split('-');
  var date1 = new Date(parseInt(fNDVI2[0], 10), parseInt(fNDVI2[1], 10) - 1, parseInt(fNDVI2[2], 10), 0, 0, 0, 0);
  var date2 = new Date(parseInt(arr2[0], 10), parseInt(arr2[1], 10) - 1, parseInt(arr2[2], 10), 0, 0, 0, 0);

  var daysAfterCrop = Math.round((date1.valueOf() - date2.valueOf()) / (1000 * 3600 * 24));

  return daysAfterCrop.toFixed(0);
}
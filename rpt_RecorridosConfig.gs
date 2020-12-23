var recorridosConfig = {
  strLang: [],
  dateFormat: [],
  dict: [],
  debug: false,
  objSet: {},
  imagesSizes: {},
  hardcodedData: {},
  hardcodedData2: {}
}
recorridosConfig.objSet = {
  strDestFolder: "Reports",
  docId : []
}
recorridosConfig.objSet.docId["vertical"] = '1EkwEQtxalRxDeDJR47srVaV1ashVv2wkRe24gdjOk4c'
recorridosConfig.objSet.docId["horizontal"] = '1zLG3-C43xwRpzbsGiWcU5ba6lQZM3G3kOFxYi2YpD7g'

recorridosConfig.imagesSizes = {
ubicacionGeneral : [],
vistaDetalles : [],
datosRecorridosDetalles : {}
}
recorridosConfig.imagesSizes.ubicacionGeneral['horizontal'] = {
  widht: 630,
  high: 430
//    widht: 430,
//    high: 630
};
recorridosConfig.imagesSizes.ubicacionGeneral["vertical"] = {
  widht: 610,
  high: 530
},
recorridosConfig.imagesSizes.vistaDetalles["horizontal"] = {
  widht: 630,
  high: 430
//    widht: 430,
//    high: 630
};
recorridosConfig.imagesSizes.vistaDetalles["vertical"] = {
  widht: 610,
  high: 530
}
recorridosConfig.imagesSizes.datosRecorridosDetalles = {
  widht: 320,
  high: 280
}

recorridosConfig.strLang['EN'] = [];
recorridosConfig.strLang['ES'] = [];
recorridosConfig.strLang['PT'] = [];
recorridosConfig.strLang['ES'] = [
  ['{strF0}', "Informe Recorridas"],
  ['{strF1}', "Fecha Informe"],
  ['{strF2}', "Mapa de recorridas"],
  ['{strF3}', "Ubicación general"],
  ['{strF4}', "Recorridas"],
  ['{strF5}', "Fecha"],
  ['{strF6}', "Campaña"],
  ['{strF7}', "Establecimiento"],
  ['{strF8}', "Vista en Detalle"],
  ['{strF9}', "Recorrida"],
  ['{strF10}', "Datos Recorridas"],
  ['{strF11}', "Síntesis"],
  ['{strF12}', "Muestra"],
  ['{strF13}', "Notas"],
  ['{strF14}', "Fecha Creación"],
  ['{strF15}', "Ubicación"],
  ['{strF16}', "Precision"],
  ['{strF17}', "Detalle"],
  ['{strF18}', "Datos Recorridas - Síntesis"]
];
recorridosConfig.strLang['EN'] = [
  ['{strF0}', "Report Crop Scouting"],
  ['{strF1}', "Report Date"],
  ['{strF2}', "Crop Scouting map"],
  ['{strF3}', "General Location"],
  ['{strF4}', "Crop Scouting"],
  ['{strF5}', "Date"],
  ['{strF6}', "Season"],
  ['{strF7}', "Establishment"],
  ['{strF8}', "Detailed View"],
  ['{strF9}', "Crop Scouting"],
  ['{strF10}', "Data Crop Scouting"],
  ['{strF11}', "Synthesis"],
  ['{strF12}', "Sample"],
  ['{strF13}', "Notes"],
  ['{strF14}', "Creation Date"],
  ['{strF15}', "Location"],
  ['{strF16}', "Precision"],
  ['{strF17}', "Detail"],
  ['{strF18}', "Data Recorded - Synthesis"],
];
recorridosConfig.strLang['PT'] = [
  ['{strF0}', "Relatório de Percursos"],
  ['{strF1}', "Data de relatório"],
  ['{strF2}', "Mapa de Percursos"],
  ['{strF3}', "Localização geral"],
  ['{strF4}', "Percursos"],
  ['{strF5}', "Data"],
  ['{strF6}', "Campanha"],
  ['{strF7}', "Estabelecimento"],
  ['{strF8}', "Vista de Detalhe"],
  ['{strF9}', "Percurso"],
  ['{strF10}', "Dados Percursos"],
  ['{strF11}', "Síntese"],
  ['{strF12}', "Amostra"],
  ['{strF13}', "Notas"],
  ['{strF14}', "Data Criação"],
  ['{strF15}', "Localização"],
  ['{strF16}', "Precisão"],
  ['{strF17}', "Detalhe"],
  ['{strF18}', "Dados Percursos - Síntese"]
];
//----------------------------------------------------------

recorridosConfig.dateFormat['EN'] = ["MM/dd/yyyy", '1', '2', '0'];
recorridosConfig.dateFormat['ES'] = ["dd/MM/yyyy", '2', '1', '0'];
//----------------------------------------------------------

recorridosConfig.dict['ES'] = [
  "No disponible",
  "días"
];
recorridosConfig.dict['EN'] = [
  "Not available",
  "days"
];

recorridosConfig.hardcodedData = {
  "InputJson":
  {
      "language": "PT",
      "informDate": "22-05-19",
      "season": "2018-2019",
      "farm": "La Margarita",
      "imageDate": "1/3/2019",
      "docName": "Recorridos - La Margarita",
      "datosRecorridosDetalle": [
          ["Muestra", "Tipo de malezas", "Nombre de la especie", "Abundancia", "Tipo de malezas 2", "Nombre de la especie 2", "Abundancia 2", "Otras malezas", "Infestacion", "Observaciones"],
          ["1", "Graminea", "Rama Oscura ", "1- plantas/m2", "Ninguna", "Ninguna", "0 plantas/m2", "", "Moderado", ""],
          ["2", "Graz", "Rama Negra (Conyza bonariensis)", "1-4 plantas/m2", "Ninguna", "Ninguna", "0 plantas/m2", "", "Moderado", ""],
          ["3", "cel", "Rama  (Conyza )", "1-4 plantas/m2", "Ninguna", "Ninguna", "0 plantas/m2", "", "Complicado", ""]],
      "datosRecorridosDetalleImages": [
          {
              "photo": "2019-06-28 13-20-48.jpg",
              "photo_id": "1xhA1JiHLR2mfgysiu4jNg2kl1nylsp7c"
          },
          {
              "photo": "Unknown 2019-06-28 13-20-48.jpg",
              "photo_id": "1Jso2BsNrqEAt4R4Vb64dKnnqg9-1cNwA"
          },
          {
              "photo": "Example 2019-06-28 13-20-48.jpg",
              "photo_id": "14ve7qCj3_JyajueTJFhoBENh36PFfMxh"
          }
      ],
      "dynamicTable": [
          {
              "Data": [
                  ["Muestra", "Tipo de malezas", "Nombre de la especie", "Abundancia", "Tipo de malezas 2"],
                  ["1", "Graminea", "Rama Oscura ", "1- plantas/m2", "Ninguna"],
                  ["2", "Graz", "Rama Negra (Conyza bonariensis)", "1-4 plantas/m2", "Ninguna"],
                  ["3", "cel", "Rama  (Conyza )", "1-4 plantas/m2", "Ninguna"]
              ],
              "Sizes": [54, 103, 103, 103, 103],
              "TitleBold": true
          },
          {
              "Data": [
                  ["Nombre de la especie 2", "Abundancia 2", "Otras malezas", "Infestacion", "Observaciones"],
                  ["Ninguna", "0 plantas/m2", "aaa", "Moderado", "Kill them!"],
                  ["Ninguna", "0 plantas/m2", "bb", "Moderado", "killed"],
                  ["Ninguna", "0 plantas/m2", "ccccccc", "Complicado", "Malesa 3"]
              ],
              "Sizes": [93, 93, 93, 93, 93],
              "TitleBold": true
          }
      ],
      "vista": "1UXw26qfJwJD14UxiziHYg47oYiUUvr2a",
      "vistaDetalle": [
          "1EOaHKXpNenKqvRBOwrCDt_hE41iW9mEW",
          "1jIFo57lAh1ZPu1kYr5r5lDv_qx-iNv_E",
      ],
      vistaDetalleNames:[
          "sample 1",
          "sample 2"
      ]
  }
}


recorridosConfig.hardcodedData2 = {
  "language": "PT",
  "informDate": "",
  "season": "2018-2019",
  "farm": "Don Fustino",
  "imageDate": "2019-9-2",
  "position": "vertical",
  "docName": "Recorridas_20190905 - Don Fustino",
  "name_fieldVisit": "DF2019sep5",
  "dynamicTable": [
    {
      "Data": [
        ["Muestra","Ambiente","Notas"],
        ["1","Izquierda Dosis = 0 y Derecha Dosis = 200 lts/ha",""],
        ["2","Izquierda Dosis = 0 y Derecha Dosis = 200 lts/ha",""],
        ["3","Izquierda Dosis 200 lts/ha y Derecha ",""],
        ["4","Vista 3 Zonas",""]
      ],
      "Sizes": [54,207,207],
      "TitleBold": true
    }
  ],
  "datosRecorridosDetalle": [["Muestra","Ambiente","Notas"],
    ["1","Izquierda Dosis = 0 y Derecha Dosis = 200 lts/ha",""],
    ["2","Izquierda Dosis = 0 y Derecha Dosis = 200 lts/ha",""],
    ["3","Izquierda Dosis 200 lts/ha y Derecha ",""],
    ["4","Vista 3 Zonas",""]
  ],
  "datosRecorridosDetalleImages": [
    {"photo": "Unknown 2019-09-05 17-14-41.jpg",
      "photo_id": "1fK6U-rXT_KahEfarNirs4wu0sUJYLla1"
    },
    {"photo": "DF2019sep5 2019-09-05 17-17-50.jpg",
      "photo_id": "1hstA1Hq6-vgV440KK3CumV6O9qvVAAHr"
    },
    {"photo": "-not found-",
      "photo_id": "1gcnb30xfdag9yaUSliGmvR5WY1BQ3GEN"
    },
    {"photo": "DF2019sep5 2019-09-05 17-29-06.jpg",
      "photo_id": "1yfUl-dpZxyT4uPjmJv_CIwATku6RrUkg"
    }
  ],
  "vista": "http://www.excelcropcare.com/images/homepage/overviewbg-res.jpg",
  "vistaDetalle": [
    "http://www.excelcropcare.com/images/homepage/overviewbg-res.jpg",
    "http://www.excelcropcare.com/images/homepage/overviewbg-res.jpg"
  ],
  vistaDetalleNames:[
    "sample 1",
    "sample 2"
  ]
}
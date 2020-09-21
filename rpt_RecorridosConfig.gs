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
  ['{strF6}', "Campaign"],
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
      "language": "ES",
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
  "language": "ES",
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

recorridosConfig.hardcodedData3 ={
  "language": "ES",
  "informDate": "1/29/2020",
  "docName": "Test - Ofi",
  "season": "2019-2020",
  "farm": "Ofi",
  "imageDate": "2020-1-27",
  "position": "vertical",
  "name_fieldVisit": "test pm 2",
  "vista": "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FXjKf0W+kVBHB5EAEAACQAAIACbFGYBGraegAFiSbyHc8fMhAASAABAAAoBJYWxg9/wxvV045b8pf2lQ1wSRABAAAkAACAAmi75m9uqdfJnP7fnrgrvqjIgAEAACQAAIACaTeBzwUzsYAFfnewh03TwIAAEgAASAAGBSiUsBEQG17dzW94vTVi/ZvytDSAAIAAEgAAQAk1Ffqz4jngy4Ihb5LY+w8K+stGov7eozIQJAAAgAASAAmMzy7XvjGn9fvLr3VZVGfc5JK6uHTYavWwAIAAEgAAQATEICQAAIAAEgAEAACAABIAAEgAAAASAABIAAEAACAASAABAAAkAACAAQAAJAAAgAASAAQAAIAAEgAASAAAABIAAEgAAQAAIABIAAEAACQAAIABAAAkAACAABIABAAAgAASAABIAAAAEgAASAABAAAgAEgAAQAAJAAAgAEAACQAAIAAEgAEAACAABIAAEgAAAASAABIAAEAACAASAABAAAkAAAAJAAAgAASAAAAEgAASAABAAIAAEgAAQAAJAAIAAEAACQAAIAAEAAkAACAABIAAEAAgAASAABIAAEACkrnrl1icMDI0dUMYYGxubIgAEgAAQAAJAAJCgMy976Nay/p9woDG2rwAQAAJAAAgAAYAAEAACQAAIAAEgABAAAkAACAABIAAEAAJAAAgAASAABIAAQAAIAAEgAASAABAACAABIAAEgAAQAAIAASAABIAAEAACQAAgAASAABAAAkAACAAEgAAQAAJAAAgAAYAAEAACQAAIAAEgABAAAkAACAABIAAQAAJAAAgAASAABAACQAAIAAEgAASAAEAACAABIAAEgAAQAAgAASAABIAAEAACAAEgAASAABAAAkAAIAAEgAAQAAJAAAgABIAAEAACQAAIAAGAABAAAkAACAABIAAQAAJAAAgAASAABAACQAAIAAEgAASAAEAACAABIAAEgAAQAAgAASAABIAAEAACAAEgAASAABAAAkAAIAAEgAAQAAJAAAgABIAAEAACQAAIAAGAABAAAkAACAABIAAQAAJAAAgAASAAQAAIAAEgAASAAEAACAABIAAEgAAQAAgAASAABIAAEAACAAEgAASAABAAAkAAIAAEgAAQAAJAAAgABIAAEAACQAAIAAGAABAAAkAACAABIAAQAAJAAAgAASAABAACQAAIAAEgAASAAEAACAABIAAEgAAQAAgAASAABIAAEAACAAEgAASAABAAAkAAIAAEgAAQAAJAAAgABIAAEAACQAAIAAGAABAAAkAACAABIAAQAAJAAAgAASAABAACQAAIAAEgAASAAEAACAABIAAEgABAAAgAASAABIAAEAAIAAEgAASAABAAAgABIAAEgAAQAAJAACAABIAAEAACQAAIAASAABAAAkAACAABgAAQAAJAAAgAASAAEAACQAAIAAEgAAQAAkAACAABIAAEgABAAAgAASAABIAAEAAIAAEgAASAABAAAgABIAAEgAAQAAJAACAABIAAEAACQAAIAASAABAAAkAACAABgAAQAAJAAAgAASAAEAACQAAIAAEgAAQAAkAACAABIAAEgABAAAgAASAABIAAQAAIAAEgAASAABAACAABIAAEgAAQAAIAASAABIAAEAACQAAgAASAABAAAkAACAAEgAAQAAJAAAgAAYAAEAACQAAIAAEgABAAAkAACAABIAAEAAJAAAgAASAABIAAQAAIAAEgAASAABAACAABIAAEgAAQAAIAASAABIAAEAACQAAgAASAABAAAkAACAAEgAAQAAJAAAgAAYAAEAACQAAIAAEgABAAAkAACAABIAAEAAJAAAgAASAABIAAQAAIAAEgAASAAEAACAABIAAEgAAQAAgAASAABIAAEAACAAEgAASAABAAAkAAIAAEgAAQAAJAAAgABIAAEAACQAAIAAGAABAAAkAACAABIAAQAAJAAAgAASAABAACQAAIAAEgAASAAEAACAABIAAEgAAQAAgAASAABIAAEAACAAEgAASAABAAAkAAIAAEgAAQAAJAAAgABIAAEAACQAAIAAGAABAAAkAACAABIAAQAAJAAAgAASAABAACQAAIAAEgAASAAEAACAABIAAEgABAAAgAASAABIAAEACUZePGjcdsXL/+YxvWr//ahnXrhlMZ3776lqtX/OCWa8oYKX2dOzPWrV3XvGR4wzVljG+MbLi60+fnumtHV5T1s/O9H9/4vU6fn+9ds35VWT8/K6++4apOn59rfnLTd8r6+Vnz0w2rOn1+lq4cXV3Wz8+1114/kszXun79v984OprF+tgzNjY2pasW/htvvHG/jaOj58UXuiW+yDHDMAzDMB4+IgIaGzZseGZXLP633HLL/vFFtXxjDcMwDOPxx4bR0ds3Xn/98zv/tP/o6Gd9Qw3DMAxjhyJgbX4A3bmn/tetO9430jAMwzB2ary/k4/+a76BhmEYhrFTY03nngEYHV3hG2gYhmEYOzfWrl37xE69BPBT30DDMAzD2MmnAtaufZYAMAzDMAwB0DGXAEZ8Aw3DMAxjkl0C2LhuXdU30DAMwzAm2U2A+UYGvoGGYRiGsRNj/fr3dfY2wOvXL/GNNAzDMIztH7ER0HX5Nvod/x6A/GUHvqGGYRiGsR03/o2O3nbDDTc8ryveBxBfyL5xJmAwQmCzb65hGIZhPOpYNjo6enTXvQ44QuAZcVrjQ1E3F4+/8ajDX1VpGIZhGLs6Yk38ZqyJC2++4YaTuu51wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKn4L/o9a+Mo2D+NAAAAAElFTkSuQmCC",
  "vistaDetalle": [
    "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FXjKf0W+kVBHB5EAEAACQAAIACbFGYBGraegAFiSbyHc8fMhAASAABAAAoBJYWxg9/wxvV045b8pf2lQ1wSRABAAAkAACAAmi75m9uqdfJnP7fnrgrvqjIgAEAACQAAIACaTeBzwUzsYAFfnewh03TwIAAEgAASAAGBSiUsBEQG17dzW94vTVi/ZvytDSAAIAAEgAAQAk1Ffqz4jngy4Ihb5LY+w8K+stGov7eozIQJAAAgAASAAmMzy7XvjGn9fvLr3VZVGfc5JK6uHTYavWwAIAAEgAAQATEICQAAIAAEgAEAACAABIAAEgAAAASAABIAAEAACAASAABAAAkAACAAQAAJAAAgAASAAQAAIAAEgAASAAAABIAAEgAAQAAIABIAAEAACQAAIABAAAkAACAABIABAAAgAASAABIAAAAEgAASAABAAAgAEgAAQAAJAAAgAEAACQAAIAAEgAEAACAABIAAEgAAAASAABIAAEAACAASAABAAAkAAAAJAAAgAASAAAAEgAASAABAAIAAEgAAQAAJAAIAAEAACQAAIAAEAAkAACAABIAAEAAgAASAABIAAEACkrnrl1icMDI0dUMYYGxubIgAEgAAQAAJAAJCgMy976Nay/p9woDG2rwAQAAJAAAgAAYAAEAACQAAIAAEgABAAAkAACAABIAAEAAJAAAgAASAABIAAQAAIAAEgAASAABAACAABIAAEgAAQAAIAASAABIAAEAACQAAgAASAABAAAkAACAAEgAAQAAJAAAgAAYAAEAACQAAIAAEgABAAAkAACAABIAAQAAJAAAgAASAABAACQAAIAAEgAASAAEAACAABIAAEgAAQAAgAASAABIAAEAACAAEgAASAABAAAkAAIAAEgAAQAAJAAAgABIAAEAACQAAIAAGAABAAAkAACAABIAAQAAJAAAgAASAABAACQAAIAAEgAASAAEAACAABIAAEgAAQAAgAASAABIAAEAACAAEgAASAABAAAkAAIAAEgAAQAAJAAAgABIAAEAACQAAIAAGAABAAAkAACAABIAAQAAJAAAgAASAAQAAIAAEgAASAAEAACAABIAAEgAAQAAgAASAABIAAEAACAAEgAASAABAAAkAAIAAEgAAQAAJAAAgABIAAEAACQAAIAAGAABAAAkAACAABIAAQAAJAAAgAASAABAACQAAIAAEgAASAAEAACAABIAAEgAAQAAgAASAABIAAEAACAAEgAASAABAAAkAAIAAEgAAQAAJAAAgABIAAEAACQAAIAAGAABAAAkAACAABIAAQAAJAAAgAASAABAACQAAIAAEgAASAAEAACAABIAAEgABAAAgAASAABIAAEAAIAAEgAASAABAAAgABIAAEgAAQAAJAACAABIAAEAACQAAIAASAABAAAkAACAABgAAQAAJAAAgAASAAEAACQAAIAAEgAAQAAkAACAABIAAEgABAAAgAASAABIAAEAAIAAEgAASAABAAAgABIAAEgAAQAAJAACAABIAAEAACQAAIAASAABAAAkAACAABgAAQAAJAAAgAASAAEAACQAAIAAEgAAQAAkAACAABIAAEgABAAAgAASAABIAAQAAIAAEgAASAABAACAABIAAEgAAQAAIAASAABIAAEAACQAAgAASAABAAAkAACAAEgAAQAAJAAAgAAYAAEAACQAAIAAEgABAAAkAACAABIAAEAAJAAAgAASAABIAAQAAIAAEgAASAABAACAABIAAEgAAQAAIAASAABIAAEAACQAAgAASAABAAAkAACAAEgAAQAAJAAAgAAYAAEAACQAAIAAEgABAAAkAACAABIAAEAAJAAAgAASAABIAAQAAIAAEgAASAAEAACAABIAAEgAAQAAgAASAABIAAEAACAAEgAASAABAAAkAAIAAEgAAQAAJAAAgABIAAEAACQAAIAAGAABAAAkAACAABIAAQAAJAAAgAASAABAACQAAIAAEgAASAAEAACAABIAAEgAAQAAgAASAABIAAEAACAAEgAASAABAAAkAAIAAEgAAQAAJAAAgABIAAEAACQAAIAAGAABAAAkAACAABIAAQAAJAAAgAASAABAACQAAIAAEgAASAAEAACAABIAAEgABAAAgAASAABIAAEACUZePGjcdsXL/+YxvWr//ahnXrhlMZ3776lqtX/OCWa8oYKX2dOzPWrV3XvGR4wzVljG+MbLi60+fnumtHV5T1s/O9H9/4vU6fn+9ds35VWT8/K6++4apOn59rfnLTd8r6+Vnz0w2rOn1+lq4cXV3Wz8+1114/kszXun79v984OprF+tgzNjY2pasW/htvvHG/jaOj58UXuiW+yDHDMAzDMB4+IgIaGzZseGZXLP633HLL/vFFtXxjDcMwDOPxx4bR0ds3Xn/98zv/tP/o6Gd9Qw3DMAxjhyJgbX4A3bmn/tetO9430jAMwzB2ary/k4/+a76BhmEYhrFTY03nngEYHV3hG2gYhmEYOzfWrl37xE69BPBT30DDMAzD2MmnAtaufZYAMAzDMAwB0DGXAEZ8Aw3DMAxjkl0C2LhuXdU30DAMwzAm2U2A+UYGvoGGYRiGsRNj/fr3dfY2wOvXL/GNNAzDMIztH7ER0HX5Nvod/x6A/GUHvqGGYRiGsR03/o2O3nbDDTc8ryveBxBfyL5xJmAwQmCzb65hGIZhPOpYNjo6enTXvQ44QuAZcVrjQ1E3F4+/8ajDX1VpGIZhGLs6Yk38ZqyJC2++4YaTuu51wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKn4L/o9a+Mo2D+NAAAAAElFTkSuQmCC"
  ],
  "vistaDetalleNames": [
    "area 1"
  ],
  "dynamicTable": [
    {
      "Data": [
        [
          "Muestra",
          "Enfermas",
          "Predatores",
          "Orugas",
          "Numero de enfermas",
          "Numero de orugas",
          "Lote",
          "Numero de malezs",
          "Picudos",
          "Numero de chinches",
          "Numero de picudos",
          "Malezas",
          "Numero de predatores",
          "Numero de otros",
          "Fecha de creación",
          "Chinches",
          "Otros"
        ],
        [
          "a",
          "Rachiplusia (grande)",
          "Nabis",
          "Anticarsia (grande)",
          "",
          "56",
          "v",
          "",
          "Sternechus",
          "",
          "56",
          "Echinocloa (chica)",
          "",
          "",
          "2020/01/29 - 11:44",
          "Nezara",
          "Araauelas"
        ]
      ],
      "Sizes": [
        24,
        24,
        24,
        24,
        24,
        51,
        24,
        24,
        24,
        24,
        57,
        24,
        24,
        24,
        24,
        24,
        24
      ],
      "TitleBold": true
    }
  ],
  "datosRecorridosDetalle": [
    [
      "Muestra",
      "Enfermas",
      "Predatores",
      "Orugas",
      "Numero de enfermas",
      "Numero de orugas",
      "Lote",
      "Numero de malezs",
      "Picudos",
      "Numero de chinches",
      "Numero de picudos",
      "Malezas",
      "Numero de predatores",
      "Numero de otros",
      "Fecha de creación",
      "Chinches",
      "Otros"
    ],
    [
      "a",
      "Rachiplusia (grande)",
      "Nabis",
      "Anticarsia (grande)",
      "",
      "56",
      "v",
      "",
      "Sternechus",
      "",
      "56",
      "Echinocloa (chica)",
      "",
      "",
      "2020/01/29 - 11:44",
      "Nezara",
      "Araauelas"
    ]
  ],
  "datosRecorridosDetalleImages": [
    {
      "photo": "Unknown 2020-01-29 11-44-46.jpg",
      "photo_id": "1JCMM2Rib2f5flkbUmKxgMIq63y_382Jw"
    }
  ]
}

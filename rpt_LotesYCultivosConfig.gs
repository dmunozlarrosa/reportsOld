var lotesYCultivosConfig = {
    objSet: {},
    strLang: [],
    imagesSizes: {},
    charts: {},
    hardcodedData: {},
    hardcodedData2: {}
}
lotesYCultivosConfig.objSet = {
    strDestFolder: "Reports",
    strTemplateID_Vertical: '13a0hHJF0FC04eGu3jOgBRoAbLnHZNbeF6rRGIumYeWY',
    strTemplateID_Horizontal: '1OpQ_t71Z0KeoUmdZ0R07qjNz0Aw-mn7km_K2E75puxU',
    strSpreadsheetId: '16bvI29vcZ3wZAo8fqbyUvdaLiOjWBsox4sYk9lfS9HQ'

}
//----------------------------------------------------------
lotesYCultivosConfig.strLang = [];
lotesYCultivosConfig.strLang['EN'] = [];
lotesYCultivosConfig.strLang['ES'] = [];
lotesYCultivosConfig.strLang['PT'] = [];
lotesYCultivosConfig.strLang['ES'] = [
    ['{strF0}', 'Informe Lotes y Cultivos'],
    ['{strF1}', 'Fecha Informe'],
    ['{strF2}', 'Mapa de Lotes y Cultivos'],
    ['{strF3}', 'Ref'],
    ['{strF4}', 'Campaña'],
    ['{strF5}', 'Establecimiento'],
    ['{strF6}', 'Total Has'],
    ['{strF7}', 'Total'],
    ['{strF8}', 'Información Cultivos'],
    ['{strF9}', 'Lote'],
    ['{strF10}', 'Cultivo'],
    ['{strF11}', 'Superficie [Has]'],
    ['{strF12}', 'Fecha de Siembra'],
    ['{strF13}', 'Hib/Var'],
    ['{strF14}', 'Porcentaje y Superficie [Has] de Cultivo'],
    ['{strF15}', 'Comentarios']
];
lotesYCultivosConfig.strLang['EN'] = [
    ['{strF0}', 'Fields and Crops Report'],
    ['{strF1}', 'Report Date'],
    ['{strF2}', 'Fields and Crops Map'],
    ['{strF3}', 'Ref'],
    ['{strF4}', 'Season'],
    ['{strF5}', 'Farm'],
    ['{strF6}', 'Total Has'],
    ['{strF7}', 'Total'],
    ['{strF8}', 'Information Crops'],
    ['{strF9}', 'Field'],
    ['{strF10}', 'Crop'],
    ['{strF11}', 'Surface [Has]'],
    ['{strF12}', 'Planting Date'],
    ['{strF13}', 'Hib / Var'],
    ['{strF14}', 'Crop Area [Has] and %'],
    ['{strF15}', 'Comments']
];
lotesYCultivosConfig.strLang['PT'] = [
    ['{strF0}', 'Relatórios Lotes e Cultivos'],
    ['{strF1}', 'Data de relatório'],
    ['{strF2}', 'Mapa de Lotes e Cultivos'],
    ['{strF3}', 'Ref'],
    ['{strF4}', 'Campanha'],
    ['{strF5}', 'Estabelecimento'],
    ['{strF6}', 'Total Has'],
    ['{strF7}', 'Total'],
    ['{strF8}', 'Informação Cultivos'],
    ['{strF9}', 'Lote'],
    ['{strF10}', 'Cultivo'],
    ['{strF11}', 'Superfície [Has]'],
    ['{strF12}', 'Data de plantio'],
    ['{strF13}', 'Hib / Var'],
    ['{strF14}', 'Porcentagem e área [Has] de cultivo'],
    ['{strF15}', 'Comentários']
];

lotesYCultivosConfig.imagesSizes = {
    cultivosColors: {
        widht: 15,
        high: 15
    },
    Horizontal: {
        lotesYCultivos: {
            widht: 710,
            high: 530
        },
        charts: {
            widht: 715,
            high: 715
        }
    },
    Vertical: {
        lotesYCultivos: {
            widht: 590,
            high: 730
        },
        charts: {
            widht: 710,
            high: 790
        }
    }
}

lotesYCultivosConfig.hardcodedData = {
    Farm: "La Martona",
    InformDate: "28/05/2019",       //en input_json
    Season: "2018-19",
    TotalHas: "4214.71",            //obtener gdocs
    Language: "PT",
    Title: "Lotes y Cultivos - La Martona", //generado en gdocs
    sheetPosition: "horizontal",
    image_lotesYCultivos: "https://assets.website-files.com/5ac4a12d0012b03ba378019d/5c13786fae722d45b59dc077_New-N-Sensor.jpg",
    Cultivos: [
        {
            "FieldName": "Lote 1",
            "Name": "Lote 1",
            "Crop": "Soja",
            "CropId": "2", 
            "Has": 60.52,
            "Color": "#55AA00"      //obtener en gdocs
        },
        {
            "FieldName": "Lote 1a",
            "Name": "Lote 1a",
            "Crop": "Soja",
            "CropId": "2", 
            "Has": 26.38,
            "Color": "#55AA00"
        },
        {
            "FieldName": "Lote 2",
            "Name": "Lote 2",
            "Crop": "Maiz",
            "CropId": "3", 
            "Has": 98.97,
            "Color": "#FF6600"
        },
        {
            "FieldName": "Lote 3",
            "Name": "Lote 3",
            "Crop": "Maiz",
            "CropId": "3", 
            "Has": 51.65,
            "Color": "#FF6600"
        },
        {
            "FieldName": "Lote 4",
            "Name": "Lote 4",
            "Crop": "Lenteja",
            "CropId": "7", 
            "Has": 109.64,
            "Color": "#C75833"
        },
        {
            "FieldName": "Lote 5",
            "Name": "Lote 5",
            "Crop": "Girasol",
            "CropId": "6", 
            "Has": 60.39,
            "Color": "#BBDD00"
        }
    ],
}
lotesYCultivosConfig.hardcodedData1 = {
    "Farm": "La Martona",
    "InformDate": "28/05/2019",       //en input_json
    "Season": "2018-19",
    "TotalHas": "4214.71",            //obtener gdocs
    "Language": "PT",
    "Title": "Lotes y Cultivos - La Martona", //generado en gdocs
    "sheetPosition": "horizontal",
    "image_lotesYCultivos": "https://assets.website-files.com/5ac4a12d0012b03ba378019d/5c13786fae722d45b59dc077_New-N-Sensor.jpg",
    "Cultivos": [
        {
            "FieldName": "Lote 1",
            "Name": "Lote 1",
            "Crop": "Soja",
            "CropId": "2",
            "Has": 60.52,
            "Color": "#55AA00"      //obtener en gdocs
        },
        {
            "FieldName": "Lote 1a",
            "Name": "Lote 1a",
            "Crop": "Soja",
            "CropId": "2",
            "Has": 26.38,
            "Color": "#55AA00"
        },
        {
            "FieldName": "Lote 2",
            "Name": "Lote 2",
            "Crop": "Maiz",
            "CropId": "3",
            "Has": 98.97,
            "Color": "#FF6600"
        },
        {
            "FieldName": "Lote 3",
            "Name": "Lote 3",
            "Crop": "Maiz",
            "CropId": "3",
            "Has": 51.65,
            "Color": "#FF6600"
        },
        {
            "FieldName": "Lote 4",
            "Name": "Lote 4",
            "Crop": "Lenteja",
            "CropId": "7",
            "Has": 109.64,
            "Color": "#C75833"
        },
        {
            "FieldName": "Lote 5",
            "Name": "Lote 5",
            "Crop": "Girasol",
            "CropId": "6",
            "Has": 60.39,
            "Color": "#BBDD00"
        }
    ],
}
lotesYCultivosConfig.hardcodedData2 = {
    "Farm": "La Martona",
    "InformDate": "2019-03-01",
    "Season": "2018-2019",
    "Language": "PT",
    "Title": "Lotes y Cultivos - La Martona",
    "sheetPosition": "vertical",
    "image_lotesYCultivos": " - ",
    "TotalHas": "214.5",
    "Cultivos": [
      {
        "FieldName": "Lote 1",
        "Crop": "**CropId_not_identified** Soja",
        "CropId": "2222",
        "Has": 60.52,
        "Color": "#404040"
      },
      {
        "FieldName": "Lote 1a",
        "Crop": "Soja",
        "CropId": "2",
        "Has": 26.38,
        "Color": "#55AA00"
      },
      {
        "FieldName": "Lote 1",
        "Crop": "Maiz",
        "CropId": "3",
        "Has": 51.2,
        "Color": "#FF6600"
      },
      {
        "FieldName": "Lote 23",
        "Crop": "Maiz",
        "CropId": "3",
        "Has": 5.2,
        "Color": "#FF6600"
      },
      {
        "FieldName": "Lote HA1",
        "Crop": "Arroz",
        "CropId": "9",
        "Has": 71.2,
        "Color": "#D7C38B"
      }
    ]
}
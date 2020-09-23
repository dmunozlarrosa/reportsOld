var zonesConfig = {
    objSet: {
        strDestFolder: "Reports",
        // strTemplateID: "1zOg3pYwhUw6ZNUphOu40oqenZYBpvZaHtyazI8ZWVaE"
        strTemplateID: "14cz5DXbbJlph_NENANAOBh0Yv5NNMUmotGA-9rBU8z4"
    },
    chartData:{},
    debug: false,
    strLang: [],
    dateFormat: [],
    textRef: [],
    dict: [],
    imagesRef: [],
    lang: [],
    hardcodedData: {}
}

zonesConfig.chartData = { 
  chartId : "1TewucZcuKocVoF7tFWktVUujZmg71XrCpqZ0XjrrGUs",
  chartsBaseUrl: '',
  refreshedChartsUrl: []
}
zonesConfig.chartData.chartsBaseUrl = 'https://docs.google.com/spreadsheets/d/' + zonesConfig.chartData.chartId + '/embed/oimg?oid=',
zonesConfig.chartData.refreshedChartsUrl = [
        '' + zonesConfig.chartData.chartsBaseUrl + '47973752',
        '' + zonesConfig.chartData.chartsBaseUrl + '278753885',
        '' + zonesConfig.chartData.chartsBaseUrl + '1186504124',
        '' + zonesConfig.chartData.chartsBaseUrl + '820048370',
        '' + zonesConfig.chartData.chartsBaseUrl + '1880693699',
        '' + zonesConfig.chartData.chartsBaseUrl + '1478710551',
        '' + zonesConfig.chartData.chartsBaseUrl + '1478710551',
        '' + zonesConfig.chartData.chartsBaseUrl + '1478710551'
  ]

zonesConfig.strLang['EN'] = [];
zonesConfig.strLang['ES'] = [];
zonesConfig.strLang['PT'] = [];
zonesConfig.strLang['ES'] = [
    ['{strF1}', "Fecha Reporte"],
    ['{strF2}', "Campaña"],
    ['{strF3}', "Establecimiento"],
    ['{strF4}', "Lote"],
    ['{strF5}', "Cultivo"],
    ['{strF6}', "Híbrido"],
    ['{strF7}', "Fecha de Siembra"],
    ['{strF8}', "Días Después de Siembra"],
    ['{strF9}', "{strF9}"],
    ['{strF10}', "Clasificación {IndexType}"],
    ['{strF11}', "Superficie"],
    ['{strF12}', "% Sup."],
    ['{strF13}', "Prom. {IndexType}"],
    ['{strF14}', "Comentarios"],
    ['{strF15}', "No disponible"],
    ['{strF16}', "Promedio"],
    ['{strF17}', "Areas & Promedio {IndexType} por Clase"],
    ['{strF18}', "Método Análisis"],
    ['{strF19}', "clases"]
];
zonesConfig.strLang['EN'] = [
    ['{strF1}', "Report Date"],
    ['{strF2}', "Season"],
    ['{strF3}', "Farm"],
    ['{strF4}', "Field"],
    ['{strF5}', "Crop"],
    ['{strF6}', "Hybrid"],
    ['{strF7}', "Seeding Date"],
    ['{strF8}', "Days After Seeding"],
    ['{strF9}', "{strF9}"],
    ['{strF10}', "{IndexType} Classification"],
    ['{strF11}', "Area"],
    ['{strF12}', "% Area."],
    ['{strF13}', "Avg. {IndexType}"],
    ['{strF14}', "Comments"],
    ['{strF15}', "Not available"],
    ['{strF16}', "Average"],
    ['{strF17}', "Areas & Average {IndexType} by Class"],
    ['{strF18}', "Analysis Method"],
    ['{strF19}', "classes"]
];
zonesConfig.strLang['PT'] = [
    ['{strF1}', "Data de relatório"],
    ['{strF2}', "Campanha"],
    ['{strF3}', "Estabelecimento"],
    ['{strF4}', "Lote"],
    ['{strF5}', "Cultivo"],
    ['{strF6}', "Híbrido"],
    ['{strF7}', "Data de plantio"],
    ['{strF8}', "Dias posteriores ao Plantio"],
    ['{strF9}', "{strF9}"],
    ['{strF10}', "Classificação {IndexType}"],
    ['{strF11}', "Superficie"],
    ['{strF12}', "% Sup."],
    ['{strF13}', "Média. {IndexType}"],
    ['{strF14}', "Comentarios"],
    ['{strF15}', "Não disponível"],
    ['{strF16}', "Média"],
    ['{strF17}', "Áreas & Média {IndexType} por Classe"],
    ['{strF18}', "Método de Análise"],
    ['{strF19}', "Clases"]
];

zonesConfig.dateFormat['EN'] = ["MM/dd/yyyy", '2', '1', '0'];
zonesConfig.dateFormat['ES'] = ["dd/MM/yyyy", '2', '1', '0'];
zonesConfig.dateFormat['PT'] = ["dd/MM/yyyy", '2', '1', '0'];

zonesConfig.dict['ES'] = [
    "No disponible",
    "días"
];
zonesConfig.dict['EN'] = [
    "Not available",
    "days"
];
zonesConfig.dict['PT'] = [
    "Não disponível",
    "días"
];

zonesConfig.imagesRef['ES'] = [
    "1bbjTsy06IzGlE3ZunvTyLpxJ_BX0mM74",
    "1QKfLnyVU2Cb7sKEQeeDJF2FokshQD9ns",
    "1aDU4tg8EpciMcUzFyLQ2YzIYgp1U34PQ",
    "19g_ZNABIyssd-wKfHWpsSzKlQ_fjB33-",
    "19Y7GErx4Yyxdi6CJIOszxKU0Rd9PKm2_",
    "1ZrP3H2ilbpJoorgli0EXE66iT7AtvVTH"
];
zonesConfig.imagesRef['PT'] = [
    "1bbjTsy06IzGlE3ZunvTyLpxJ_BX0mM74",
    "1QKfLnyVU2Cb7sKEQeeDJF2FokshQD9ns",
    "1aDU4tg8EpciMcUzFyLQ2YzIYgp1U34PQ",
    "19g_ZNABIyssd-wKfHWpsSzKlQ_fjB33-",
    "19Y7GErx4Yyxdi6CJIOszxKU0Rd9PKm2_",
    "1ZrP3H2ilbpJoorgli0EXE66iT7AtvVTH"
];
zonesConfig.imagesRef['EN'] = [
    "1bbjTsy06IzGlE3ZunvTyLpxJ_BX0mM74",
    "1QKfLnyVU2Cb7sKEQeeDJF2FokshQD9ns",
    "1aDU4tg8EpciMcUzFyLQ2YzIYgp1U34PQ",
    "19g_ZNABIyssd-wKfHWpsSzKlQ_fjB33-",
    "19Y7GErx4Yyxdi6CJIOszxKU0Rd9PKm2_",
    "1ZrP3H2ilbpJoorgli0EXE66iT7AtvVTH"
];

zonesConfig.textRef['ES'] = [
    "A: Alto | B: Bajo",
    "A: Alto | M: Medio | B: Bajo",
    "MA: Muy Alto | A: Alto | B: Bajo | MB: Muy Bajo",
    "MA: Muy Alto | A: Alto | M: Medio | B: Bajo | MB: Muy Bajo",
    "MA: Muy Alto | A: Alto | MaA: Medio a Alto | MaB: Medio a Bajo | B: Bajo | MB: Muy Bajo",
    "MA: Muy Alto | A: Alto | MaA: Medio a Alto | M: Medio | MaB: Medio a Bajo | B: Bajo | MB: Muy Bajo"
];
zonesConfig.textRef['EN'] = [
    "H: High | L: Low",
    "H: High | M: Medium | L: Low",
    "VH: Very High | H: High | L: Low | VL: Very low",
    "VH: Very High | H: High | M: Medium | L: Low | VL: Very low",
    "VH: Very High | H: High | MtH: Medium to High | MtL: Medium to Low | L: Low | VL: Very low",
    "VH: Very High | H: High | MtH: Medium to High | M: Medium | MtL: Medium to Low | L: Low | VL: Very low"
];
zonesConfig.textRef['PT'] = [
    "A: Alto | B: Baixo",
    "A: Alto | M: Médio | B: Baixo",
    "MA: Muito Alto | A: Alto | B: Baixo | MB: Muito Baixo",
    "MA: Muito Alto | A: Alto | M: Médio | B: Baixo | MB: Muito Baixo",
    "MA: Muito Alto | A: Alto | MaA: Médio a Alto | MaB: Médio a Baixo | B: Baixo | MB: Muito Baixo",
    "MA: Muito Alto | A: Alto | MaA: Médio a Alto | M: Médio | MaB: Médio a Baixo | B: Baixo | MB: Muito Baixo"
];


zonesConfig.lang['EN'] = [];
zonesConfig.lang['ES'] = [];
zonesConfig.lang['PT'] = [];
zonesConfig.lang['EN']['quantiles'] = 'Quantiles';
zonesConfig.lang['ES']['quantiles'] = 'Cuantiles';
zonesConfig.lang['PT']['quantiles'] = 'Quantis';
zonesConfig.lang['EN']['clusters'] = 'Clusters';
zonesConfig.lang['ES']['clusters'] = 'Clusters';
zonesConfig.lang['PT']['clusters'] = 'Clusters';
zonesConfig.lang['EN']['range'] = 'Range';
zonesConfig.lang['ES']['range'] = 'Rango';
zonesConfig.lang['PT']['range'] = 'Clases';

zonesConfig.lang['EN']['1'] = [];
zonesConfig.lang['EN']['2'] = [];
zonesConfig.lang['EN']['3'] = [];
zonesConfig.lang['EN']['4'] = [];
zonesConfig.lang['EN']['5'] = [];
zonesConfig.lang['EN']['6'] = [];
zonesConfig.lang['EN']['7'] = [];

zonesConfig.lang['ES']['1'] = [];
zonesConfig.lang['ES']['2'] = [];
zonesConfig.lang['ES']['3'] = [];
zonesConfig.lang['ES']['4'] = [];
zonesConfig.lang['ES']['5'] = [];
zonesConfig.lang['ES']['6'] = [];
zonesConfig.lang['ES']['7'] = [];

zonesConfig.lang['PT']['1'] = [];
zonesConfig.lang['PT']['2'] = [];
zonesConfig.lang['PT']['3'] = [];
zonesConfig.lang['PT']['4'] = [];
zonesConfig.lang['PT']['5'] = [];
zonesConfig.lang['PT']['6'] = [];
zonesConfig.lang['PT']['7'] = [];

zonesConfig.lang['EN']['7']['0'] = 'Very low';
zonesConfig.lang['EN']['7']['1'] = 'Low';
zonesConfig.lang['EN']['7']['2'] = 'Medium Low';
zonesConfig.lang['EN']['7']['3'] = 'Medium';
zonesConfig.lang['EN']['7']['4'] = 'Medium High';
zonesConfig.lang['EN']['7']['5'] = 'High';
zonesConfig.lang['EN']['7']['6'] = 'Very High';

zonesConfig.lang['ES']['7']['0'] = 'Muy Bajo';
zonesConfig.lang['ES']['7']['1'] = 'Bajo';
zonesConfig.lang['ES']['7']['2'] = 'Medio Bajo';
zonesConfig.lang['ES']['7']['3'] = 'Medio';
zonesConfig.lang['ES']['7']['4'] = 'Medio Alto';
zonesConfig.lang['ES']['7']['5'] = 'Alto';
zonesConfig.lang['ES']['7']['6'] = 'Muy Alto';

zonesConfig.lang['PT']['7']['0'] = 'Muito Baixo';
zonesConfig.lang['PT']['7']['1'] = 'Baixo';
zonesConfig.lang['PT']['7']['2'] = 'Médio Baixo';
zonesConfig.lang['PT']['7']['3'] = 'Médio';
zonesConfig.lang['PT']['7']['4'] = 'Médio Alto';
zonesConfig.lang['PT']['7']['5'] = 'Alto';
zonesConfig.lang['PT']['7']['6'] = 'Muito Alto';
//----------------------------------------------------------
zonesConfig.lang['EN']['6']['0'] = 'Very low';
zonesConfig.lang['EN']['6']['1'] = 'Low';
zonesConfig.lang['EN']['6']['2'] = 'Medium Low';
zonesConfig.lang['EN']['6']['3'] = 'Medium High';
zonesConfig.lang['EN']['6']['4'] = 'High';
zonesConfig.lang['EN']['6']['5'] = 'Very High';

zonesConfig.lang['ES']['6']['0'] = 'Muy Bajo';
zonesConfig.lang['ES']['6']['1'] = 'Bajo';
zonesConfig.lang['ES']['6']['2'] = 'Medio Bajo';
zonesConfig.lang['ES']['6']['3'] = 'Medio Alto';
zonesConfig.lang['ES']['6']['4'] = 'Alto';
zonesConfig.lang['ES']['6']['5'] = 'Muy Alto';

zonesConfig.lang['PT']['6']['0'] = 'Muy Baixo';
zonesConfig.lang['PT']['6']['1'] = 'Baixo';
zonesConfig.lang['PT']['6']['2'] = 'Médio Baixo';
zonesConfig.lang['PT']['6']['3'] = 'Médio Alto'; 
zonesConfig.lang['PT']['6']['4'] = 'Alto';
zonesConfig.lang['PT']['6']['5'] = 'Muito Alto';
//----------------------------------------------------------
zonesConfig.lang['EN']['5']['0'] = 'Very low';
zonesConfig.lang['EN']['5']['1'] = 'Low';
zonesConfig.lang['EN']['5']['2'] = 'Medium';
zonesConfig.lang['EN']['5']['3'] = 'High';
zonesConfig.lang['EN']['5']['4'] = 'Very High';

zonesConfig.lang['ES']['5']['0'] = 'Muy Bajo';
zonesConfig.lang['ES']['5']['1'] = 'Bajo';
zonesConfig.lang['ES']['5']['2'] = 'Medio';
zonesConfig.lang['ES']['5']['3'] = 'Alto';
zonesConfig.lang['ES']['5']['4'] = 'Muy Alto';

zonesConfig.lang['PT']['5']['0'] = 'Muy Baixo';
zonesConfig.lang['PT']['5']['1'] = 'Baixo';
zonesConfig.lang['PT']['5']['2'] = 'Médio'; 
zonesConfig.lang['PT']['5']['3'] = 'Alto';
zonesConfig.lang['PT']['5']['4'] = 'Muito Alto';

//----------------------------------------------------------
zonesConfig.lang['EN']['4']['0'] = 'Low';
zonesConfig.lang['EN']['4']['1'] = 'Medium Low';
zonesConfig.lang['EN']['4']['2'] = 'Medium High';
zonesConfig.lang['EN']['4']['3'] = 'High';

zonesConfig.lang['ES']['4']['0'] = 'Bajo';
zonesConfig.lang['ES']['4']['1'] = 'Medio Bajo';
zonesConfig.lang['ES']['4']['2'] = 'Medio Alto';
zonesConfig.lang['ES']['4']['3'] = 'Alto';

zonesConfig.lang['PT']['4']['0'] = 'Muy Baixo';
zonesConfig.lang['PT']['4']['1'] = 'Baixo';
zonesConfig.lang['PT']['4']['2'] = 'Alto';
zonesConfig.lang['PT']['4']['3'] = 'Muito Alto';
//---------------------------------------------------------
zonesConfig.lang['EN']['3']['0'] = 'Low';
zonesConfig.lang['EN']['3']['1'] = 'Medium';
zonesConfig.lang['EN']['3']['2'] = 'High';

zonesConfig.lang['ES']['3']['0'] = 'Bajo';
zonesConfig.lang['ES']['3']['1'] = 'Medio';
zonesConfig.lang['ES']['3']['2'] = 'Alto';

zonesConfig.lang['PT']['3']['0'] = 'Baixo';
zonesConfig.lang['PT']['3']['1'] = 'Médio';
zonesConfig.lang['PT']['3']['2'] = 'Alto';
//---------------------------------------------------------
zonesConfig.lang['EN']['2']['0'] = 'Low';
zonesConfig.lang['EN']['2']['1'] = 'High';

zonesConfig.lang['ES']['2']['0'] = 'Bajo';
zonesConfig.lang['ES']['2']['1'] = 'Alto';

zonesConfig.lang['PT']['3']['0'] = 'Baixo';
zonesConfig.lang['PT']['3']['1'] = 'Alto';
//---------------------------------------------------------
zonesConfig.lang['EN']['1']['0'] = 'Unique';

zonesConfig.lang['ES']['1']['0'] = 'Unico';

zonesConfig.lang['PT']['1']['0'] = 'Somente';
//---------------------------------------------------------

var hardcodedData_ZonasRangos = {
    InputJson: {
        "Title": "Clasificación NDVI",
        "Season": "2018-2019",
        "Farm": "111",
        "Informdate" : "11/07/2019",
        "Crop": "Trigo",
        "IndexType": "NDWI",
        "Hybrid": "No asignado",
        "DatePlanting": "2018-12-15",
        "Field": "Field (8)",
        "Date": "2019-03-13",
        "cut_list": [
            0.2,
            0.3,
            0.4,
            0.5,
            0.65
        ],
        "Language": "EN",
        "Method": "Rango de valores"
    },
    OutputJson: {
        "URLThumb1": "https://www.syngenta.com/~/media/Images/S/Syngenta/content-images/2-images/2-pic-man-in-corn-field.jpg?h=310&la=en&w=550",
        "URLThumb2": "https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/739/2017/09/13082355/Wheat-harvest-ED.jpg",
        "Classes": [
            {
                "name": "0",
                "color": "#D7191C",
                "area_has": 0.497230874162436,
                "percent": 38.680551257485356275263003813,
                "max": 0.8001,
                "mean": 0.4718,
                "min": 0.3084,
                "productiv": 0
            },
            {
                "name": "1",
                "color": "#ED6E43",
                "area_has": 0.227927610535067,
                "percent": 17.730929595127427879295356933,
                "max": 0.8001,
                "mean": 0.5097,
                "min": 0.3699,
                "productiv": 1
            },
            {
                "name": "2",
                "color": "#FEBA6F",
                "area_has": 0.560321835509188,
                "percent": 43.588519147387215845441639254,
                "max": 0.8109,
                "mean": 0.17252,
                "min": 0.3699,
                "productiv": 2
            },
            {
                "name": "3",
                "color": "#E6F5A8",
                "area_has": 0.0,
                "percent": 0.0,
                "max": 0.0,
                "mean": 0.0,
                "min": 0.0,
                "productiv": 3
            },
            {
                "name": "4",
                "color": "#B3DF76",
                "area_has": 0.01,
                "percent": 0.02,
                "max": 0.0,
                "mean": 0.03,
                "min": 0.0,
                "productiv": 4
            },
            {
                "name": "5",
                "color": "#6ABD58",
                "area_has": 0.0,
                "percent": 0.0,
                "max": 0.0,
                "mean": 0.0,
                "min": 0.0,
                "productiv": 5
            }
        ]
    }
}

var hardcodedData_ZonasClusters = {
    InputJson: {
        "Title": "Clasificación NDVI",
        "Season": "2018-2019",
        "Farm": "111",
        "Informdate" : "11/07/2019",
        "Crop": "Trigo",
        "IndexType": "NDWI",
        "Hybrid": "No asignado",
        "DatePlanting": "2018-10-01",
        "Field": "Field (8)",
        "Date": "2019-03-01",
        "Classes": 3,
        "Language": "ES",
        "Method": "Clústeres"
    },
    OutputJson: {
        "URLThumb1": "https://www.syngenta.com/~/media/Images/S/Syngenta/content-images/2-images/2-pic-man-in-corn-field.jpg?h=310&la=en&w=550",
        "URLThumb2": "https://www.syngenta.com/~/media/Images/S/Syngenta/content-images/2-images/2-pic-man-in-corn-field.jpg?h=310&la=en&w=550",
        "Classes": [
            {
                "name": "0",
                "color": "#ed6e43",
                "area_has": 0.497230874162436,
                "percent": 38.6805512574854,
                "max": 0.8001,
                "mean": 0.4718,
                "min": 0.3084,
                "productiv": "0"
            },
            {
                "name": "1",
                "color": "#ffe8a5",
                "area_has": 0.227927610535067,
                "percent": 17.7309295951274,
                "max": 0.8001,
                "mean": 0.5097,
                "min": 0.3699,
                "productiv": "1"
            },
            {
                "name": "2",
                "color": "#b3df76",
                "area_has": 0.560321835509188,
                "percent": 43.5885191473872,
                "max": 0.8109,
                "mean": 0.7252,
                "min": 0.3699,
                "productiv": "2"
            }
        ]
    }
}

var hardcodedData_ZonasCuantiles = {
    "InputJson": {
        "Title": "Clasificación NDVI",
        "Season": "2018-2019",
        "Farm": "111",
        "Informdate" : "11/07/2019",
        "Crop": "Trigo",
        "Hybrid": "No asignado",
        "DatePlanting": "2018-10-01",
        "Field": "Field (8)",
        "Date": "2019-03-01",
        "Classes": 3,
        "Language": "ES",
        "Method": "Cuantiles"
    },
    "OutputJson": {
        "URLThumb1": "https://earthengine.googleapis.com/api/thumb?thumbid=85d6800861d6372b2122870d6a7990eb&token=59bafa81f3a4dd92fb9d5feb51205174",
        "URLThumb2": "https://earthengine.googleapis.com/api/thumb?thumbid=0e7bc1db66f067e0d109eabe0ec3a4c1&token=c050368c0630a64d885b2ec9f4c609fb",
        "Classes": [
            {
                "name": "0",
                "color": "#ed6e43",
                "area_has": 0.46,
                "percent": 35.9375,
                "max": 0.8109,
                "mean": 0.7613,
                "min": 0.5637,
                "productiv": 0
            },
            {
                "name": "1",
                "color": "#ffe8a5",
                "area_has": 0.82,
                "percent": 64.0625,
                "max": 0.8001,
                "mean": 0.4850,
                "min": 0.3084,
                "productiv": 1
            }, {
                "name": "2",
                "color": "#b3df76",
                "area_has": 0.0,
                "percent": 0.0,
                "max": 0.0,
                "mean": 0.0,
                "min": 0.0,
                "productiv": 2
            }
        ]
    }
}

var Zones_hardcodedData_Test = {
  "input": {
    "Method": "Quantiles",
    "Index": "ndre",
    "Title": "sdavd",
    "Farm": "Agrivision",
    "Season": "2019",
    "Crop": "Soja",
    "Hybrid": "-Not assigned-",
    "Field": "36",
    "Date": "2019-12-19",
    "Classes": 5,
    "Language": "PT",
    "Informdate": "4/14/2020",
    "IndexType": "NDRE"
  },
  "output": {
  "URLThumb1": "data:image/jpeg;base64,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",
  "URLThumb2": "data:image/jpeg;base64,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",
  "Classes": [
    {
      "name": "0",
      "color": "#d7191c",
      "area_has": 13.71,
      "percent": 21.831210191082802547770700637,
      "max": 0.16765,
      "mean": 0.12795,
      "min": 0.0954666666666666666666666667,
      "productiv": 0
    },
    {
      "name": "1",
      "color": "#ed6e43",
      "area_has": 10.96,
      "percent": 17.452229299363057324840764331,
      "max": 0.1468285714285714285714285714,
      "mean": 0.1324857142857142857142857143,
      "min": 0.1194428571428571428571428571,
      "productiv": 1
    },
    {
      "name": "2",
      "color": "#ffe8a5",
      "area_has": 12.90,
      "percent": 20.54140127388535031847133758,
      "max": 0.1647357142857142857142857143,
      "mean": 0.14085,
      "min": 0.1195785714285714285714285714,
      "productiv": 2
    },
    {
      "name": "3",
      "color": "#b3df76",
      "area_has": 10.25,
      "percent": 16.321656050955414012738853503,
      "max": 0.1651733333333333333333333333,
      "mean": 0.1487333333333333333333333333,
      "min": 0.1331466666666666666666666667,
      "productiv": 3
    },
    {
      "name": "4",
      "color": "#6abd58",
      "area_has": 14.98,
      "percent": 23.853503184713375796178343949,
      "max": 0.2263,
      "mean": 0.17905,
      "min": 0.13444,
      "productiv": 4
    }
  ]
}
}
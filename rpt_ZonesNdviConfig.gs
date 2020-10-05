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

zonesConfig.dateFormat['EN'] = ["MM/dd/yyyy", '1', '2', '0'];
zonesConfig.dateFormat['ES'] = ["dd/MM/yyyy", '2', '1', '0'];

zonesConfig.dict['ES'] = [
    "No disponible",
    "días"
];
zonesConfig.dict['EN'] = [
    "Not available",
    "days"
];

zonesConfig.imagesRef['ES'] = [
    // "1oCtaujuDdPdHtasCWhhe-Uv2cnYiekvd",// "1MT1v41pIkIloPy-4RbdWHliAGkE-3fBl",// "1zWnZqhSTfnA0xyGOuUMziv1wwLTY0lZa",// "1otvqTwBOF0YBjnE1_kedFV8NWk6kpW6O",// "1L0Iy4qIiyYdYuJBG5AUpoErlEBCrHgRI",// "1W0Qqpu4GueJmhWNWk0pCcjx7L3tAaIa3"
    "1bbjTsy06IzGlE3ZunvTyLpxJ_BX0mM74",
    "1QKfLnyVU2Cb7sKEQeeDJF2FokshQD9ns",
    "1aDU4tg8EpciMcUzFyLQ2YzIYgp1U34PQ",
    "19g_ZNABIyssd-wKfHWpsSzKlQ_fjB33-",
    "19Y7GErx4Yyxdi6CJIOszxKU0Rd9PKm2_",
    "1ZrP3H2ilbpJoorgli0EXE66iT7AtvVTH"
];
zonesConfig.imagesRef['EN'] = [
    // "1WA-6WLDvzkjhNQ47q6S_RIwWYgfCy4Yv",// "1YdaVii5-DaKPOZ2ApOgCWk4EXLPS72d6",// "1WCfcwCZ8ukQjc4a6JPwpOHlT5gdJn_Rh",// "1tTNtSxE_jFq5h5lxpQEXgDaMoCo0tso3",// "1L_hB6-OM5hVfi9Aew5eZatVIkKxSAMiJ",// "1jNGsro3s11yxPZTiAbaqUyt_anF9EMsp"
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

zonesConfig.lang['EN'] = [];
zonesConfig.lang['ES'] = [];
zonesConfig.lang['EN']['quantiles'] = 'Quantiles';
zonesConfig.lang['ES']['quantiles'] = 'Cuantiles';
zonesConfig.lang['EN']['clusters'] = 'Clusters';
zonesConfig.lang['ES']['clusters'] = 'Clusters';
zonesConfig.lang['EN']['range'] = 'Range';
zonesConfig.lang['ES']['range'] = 'Rango';

zonesConfig.lang['EN']['1'] = [];
zonesConfig.lang['EN']['2'] = [];
zonesConfig.lang['EN']['3'] = [];
zonesConfig.lang['EN']['4'] = [];
zonesConfig.lang['EN']['5'] = [];
zonesConfig.lang['EN']['6'] = [];
zonesConfig.lang['EN']['7'] = [];

zonesConfig.lang['ES']['1'] = []
zonesConfig.lang['ES']['2'] = [];
zonesConfig.lang['ES']['3'] = [];
zonesConfig.lang['ES']['4'] = [];
zonesConfig.lang['ES']['5'] = [];
zonesConfig.lang['ES']['6'] = [];
zonesConfig.lang['ES']['7'] = [];

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
//----------------------------------------------------------
zonesConfig.lang['EN']['4']['0'] = 'Low';
zonesConfig.lang['EN']['4']['1'] = 'Medium Low';
zonesConfig.lang['EN']['4']['2'] = 'Medium High';
zonesConfig.lang['EN']['4']['3'] = 'High';

zonesConfig.lang['ES']['4']['0'] = 'Bajo';
zonesConfig.lang['ES']['4']['1'] = 'Medio Bajo';
zonesConfig.lang['ES']['4']['2'] = 'Medio Alto';
zonesConfig.lang['ES']['4']['3'] = 'Alto';
//---------------------------------------------------------
zonesConfig.lang['EN']['3']['0'] = 'Low';
zonesConfig.lang['EN']['3']['1'] = 'Medium';
zonesConfig.lang['EN']['3']['2'] = 'High';

zonesConfig.lang['ES']['3']['0'] = 'Bajo';
zonesConfig.lang['ES']['3']['1'] = 'Medio';
zonesConfig.lang['ES']['3']['2'] = 'Alto';
//---------------------------------------------------------
zonesConfig.lang['EN']['2']['0'] = 'Low';
zonesConfig.lang['EN']['2']['1'] = 'High';

zonesConfig.lang['ES']['2']['0'] = 'Bajo';
zonesConfig.lang['ES']['2']['1'] = 'Alto';
//---------------------------------------------------------
zonesConfig.lang['EN']['1']['0'] = 'Unique';

zonesConfig.lang['ES']['1']['0'] = 'Unico';
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
    "Language": "EN",
    "Informdate": "4/14/2020",
    "IndexType": "NDRE"
  },
  "output": {
  
        "URLThumb1": "https://cdn.croptrust.org/wp/wp-content/themes/croptrust/assets/background-video/01/background_placeholder.jpg",
        "URLThumb2": "https://cdn.croptrust.org/wp/wp-content/themes/croptrust/assets/background-video/01/background_placeholdesr.jpg",
  
//  "URLThumb1": "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/thumbnails/ba3b0fe7edc5c9182b62a899c8949762-8df8d68a0f590427598490e2fd7f1d1b:getPixels",
//  "URLThumb2": "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/thumbnails/682f60c774511533134ed0cb55673ce1-cb2d39a26cdc3cf383327cef22557966:getPixels",
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
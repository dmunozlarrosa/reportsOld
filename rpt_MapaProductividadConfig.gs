var mapaProductividadConfig = {
  objSet : {
    strDestFolder: 'Reports',
    strTemplateID: '1YzrGCvcBlSfz_OLkCuOTPgMFutcSQoIckvym-kyqdF8'
  },
  imagesSizes: {},
  ambientLabels: [],
  strLang: [],
  testData: {}
}

mapaProductividadConfig.imagesSizes = {
  mapaProductividad_map : {
      "high": 450,
      "widht": 450 
  },
  mapaProductividad_thumbnail : {
      "high": 150,
      "widht": 150 
  },
  ndviImages : [],
  charts : {
      "high": 400,
      "widht": 550
  },
  moisture_barcharts : {
      "high" : 250,
      "widht" : 400
  }
}
mapaProductividadConfig.imagesSizes.ndviImages[1] = {"high": 900, "widht": 625};
mapaProductividadConfig.imagesSizes.ndviImages[2] = {"high": 900, "widht": 310};
mapaProductividadConfig.imagesSizes.ndviImages[3] = {"high": 900, "widht": 200};
mapaProductividadConfig.imagesSizes.ndviImages[4] = {"high": 900, "widht": 155};

mapaProductividadConfig.ambientLabels = {
  colors : [],
  labels : [],
  extendedLabels : []
}

mapaProductividadConfig.ambientLabels.colors[7] = ['#AFF553','#5AE622','#3EC948','#34A884','#1F7EA3','#1F438F','#132A59'];
mapaProductividadConfig.ambientLabels.colors[5] = ['#AFF553','#5AE622',          '#34A884',          '#1F438F','#132A59'];
mapaProductividadConfig.ambientLabels.colors[3] = [          '#5AE622',          '#34A884',          ,'#1F438F'         ];
  
mapaProductividadConfig.ambientLabels.labels[3] = []; // labels -> colores fuente 12, labels fuente 9, letra arial
mapaProductividadConfig.ambientLabels.labels[3]['ES'] = '  B    M    A  ';
mapaProductividadConfig.ambientLabels.labels[3]['EN'] = '  L    M    H  ';
mapaProductividadConfig.ambientLabels.labels[5] = [];
mapaProductividadConfig.ambientLabels.labels[5]['ES'] = ' MB  B    M    A  MA';
mapaProductividadConfig.ambientLabels.labels[5]['EN'] = ' VL   L    M    H   VH ';
mapaProductividadConfig.ambientLabels.labels[7] = []
mapaProductividadConfig.ambientLabels.labels[7]['ES'] = ' MB  B  MaB M MaA  A  MA ';
mapaProductividadConfig.ambientLabels.labels[7]['EN'] = ' VL   L   ML  M   MH   H  VH ';

mapaProductividadConfig.ambientLabels.extendedLabels[3] = []; // labels -> colores fuente 12, labels fuente 9, letra arial
mapaProductividadConfig.ambientLabels.extendedLabels[3]['ES'] = 'B: Bajo | M: Media | A: Alta';
mapaProductividadConfig.ambientLabels.extendedLabels[3]['EN'] = 'L: Low  | M: Medium | H: High';
mapaProductividadConfig.ambientLabels.extendedLabels[5] = [];
mapaProductividadConfig.ambientLabels.extendedLabels[5]['ES'] = 'MB: Muy Bajo | B: Bajo | M: Media | A: Alta | MA: Muy Alta';
mapaProductividadConfig.ambientLabels.extendedLabels[5]['EN'] = 'VL: Very Low | L: Low  | M: Medium | H: High | VH: Very High';
mapaProductividadConfig.ambientLabels.extendedLabels[7] = []
mapaProductividadConfig.ambientLabels.extendedLabels[7]['ES'] = 'MB: Muy Bajo | B: Bajo | MaB: Media a Baja | M: Media | MaA: Media a Alta | A: Alta | MA: Muy Alta';
mapaProductividadConfig.ambientLabels.extendedLabels[7]['EN'] = 'VL: Very Low | L: Low  | ML: Medium Low | M: Medium | MH: Medium High | H: High | VH: Very High';

mapaProductividadConfig.ambientLabels.ambients = []
mapaProductividadConfig.ambientLabels.ambients['ES'] = ['Muy Bajo','Bajo', 'Media a Baja', 'Media', 'Media a Alta', 'Alta', 'Muy Alta']
mapaProductividadConfig.ambientLabels.ambients['EN'] = ['Very Low', 'Low', 'Medium Low', 'Media', 'Medium High', 'High', 'Very High']

mapaProductividadConfig.strLang['EN'] = [
    ['{strF0}',  'Productivity Map Report'], 
    ['{strF1}',  'Report Date'], 
    ['{strF2}',  'Report'], 
    ['{strF3}',  'Productivity Map'], 
    ['{strF4}',  'Image dates'],
    ['{strF5}',  'Season'],
    ['{strF6}',  'Farm'],
    ['{strF7}',  'Lot'],
    ['{strF8}',  'NDVI selected'],
    ['{strF9}',  'Information by Environments'],
    ['{strF10}', 'Environments'],
    ['{strF11}', 'Surface'],
    ['{strF12}', 'Surf'],
    ['{strF13}', 'Average NDVI'],
    ['{strF14}', 'Surface by Environments'],
    ['{strF15}', 'Percentage by Environments'],
    ['{strF16}', 'Soil Moisture'],
    ['{strF17}', 'Ref months of the image'],
    ['{strF18}', 'Comments']
];
mapaProductividadConfig.strLang['ES'] = [
    ['{strF0}'  , 'Informe Mapa de Productividad'], 
    ['{strF1}'  , 'Fecha Informe'], 
    ['{strF2}'  , 'Informe'], 
    ['{strF3}'  , 'Mapa de Productividad'], 
    ['{strF4}'  , 'Fechas de imagenes'], 
    ['{strF5}'  , 'Campaña'], 
    ['{strF6}'  , 'Establecimiento'], 
    ['{strF7}'  , 'Lote'], 
    ['{strF8}'  , 'NDVI seleccionados'], 
    ['{strF9}'  , 'Información por Ambientes'], 
    ['{strF10}' , 'Ambientes'], 
    ['{strF11}' , 'Superficie'], 
    ['{strF12}' , 'Sup'], 
    ['{strF13}' , 'Promedio NDVI'], 
    ['{strF14}' , 'Superficie por Ambientes'], 
    ['{strF15}' , 'Porcentaje por Ambientes'], 
    ['{strF16}' , 'Humedad de Suelo '], 
    ['{strF17}' , 'Ref meses de la imagen'], 
    ['{strF18}' , 'Comentarios']
];


mapaProductividadConfig.testData = {
  "farm": 'Montti',
  "lote": 'Lote 27',
  "season": '2018-19',
  "informDate": '11/07/2019',  
  "language" : "EN",
  "mapaProductividad": {
    "map": '1h1hvc9wZwVVfDHn1QklBoVp7U00sLwZv',
    "thumbnail": '1cfvwL19NQsYJxv5wdnhB6hic2_GwtH7Q'
  },
  "ambientInfo": [
    { "class" : 1, "has": 50.0, "surfacePercent": 15.62, "ndviAvg": 0.2  },
    { "class" : 2, "has": 20.0, "surfacePercent": 6.25,  "ndviAvg": 0.25 },
    { "class" : 3, "has": 35.0, "surfacePercent": 10.93, "ndviAvg": 0.32 },
    { "class" : 4, "has": 30.0, "surfacePercent": 9.37,  "ndviAvg": 0.5  },
    { "class" : 5, "has": 65.0, "surfacePercent": 20.31, "ndviAvg": 0.53 },
    { "class" : 6, "has": 70.0, "surfacePercent": 21.87, "ndviAvg": 0.62 },
    { "class" : 7, "has": 50.0, "surfacePercent": 15.62, "ndviAvg": 0.7  }
  ],
  "ndviImages": [
    { "date": '05/03/2017', "image": '1vIjY1cDZs93xEDYJqkjOxAEw5uOE45Cy' },
    { "date": '10/04/2018', "image": '1MeD8O_WqBPOeEKGX1mKkMhIeFHnH6WLI' },
    { "date": '15/03/2019', "image": '1FE_njL_5HX-HbSgo8tbHyGo5ckgTA6dX' }
  ],
  "charts": {
    "column": '115Fr_UPH3jGVlCK-ZuK0jfSMbwt4LldQ',
    "pie": '1Q8sAcO8NBJd8OyCXLNw69IjsllDCguua'
  },
  "moisture": {
    "barcharts": [
      '1c4jL8KFMojw94wmvKeSaQVFF27AbRtSg',
      '1-eioz3wIR6YswYggxH-2wEYDBcGdlFHe',
      '1JzVc5DOv688yiOtdGtGekym1NEjwxChi'
    ],
    "labels": [
      { "color": '#3EC948', "label": 'Mes' },
      { "color": '#999999', "label": 'Un mes' },
      { "color": '#BDBDBD', "label": 'dos meses' }
    ]
  }
}





















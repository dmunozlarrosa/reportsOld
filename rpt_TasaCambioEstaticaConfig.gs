tasaCambioEstaticaConfig = {
  objSet: {},
  standardsJson : {},
  imageSizes : {},
  testData: {}
}  
  
tasaCambioEstaticaConfig.imageSizes = {
  smallNdvi : {
    width : 285,  
    height : 250
  },
  bigNdvi : {
    width : 585,
    height : 440
  }
}


tasaCambioEstaticaConfig.objSet = {
strTemplateID: '1pJHmcK8_33c3dBTYdahvcdmvVRsU-G_-qVI4j2LFjCw',
strSprChartID: '1jRIZTeBGIhk1ULInPf1Im2mRoQpu7MSspTRHSa8NyYg',
strDestFolder: 'Reports',
arrTranslation: [
  '{strF1}',
  '{strF2}',
  '{strF3}',
  '{strF4}',
  '{strF5}',
  '{strF6}',
  '{strF7}',
  '{strF8}',
  '{strF9}',
  '{strF10}',
  '{strF11}',
  '{strF12}',
  '{strF13}',
  '{strF14}',
  '{strF15}',
  '{strF16}'
]
}

tasaCambioEstaticaConfig.standardsJson = {
RangesColorsTasaCambio: [
  { Class: 1, 'Lower Limit': 0.03, 'Upper limit': null, Hexa: '2166AC' },
  { Class: 2, 'Lower Limit': 0.025, 'Upper limit': 0.03, Hexa: '437EB9' },
  { Class: 3, 'Lower Limit': 0.02, 'Upper limit': 0.025, Hexa: '6596C6' },
  { Class: 4, 'Lower Limit': 0.015, 'Upper limit': 0.02, Hexa: '87AED3' },
  { Class: 5, 'Lower Limit': 0.01, 'Upper limit': 0.015, Hexa: 'A9C6E0' },
  { Class: 6, 'Lower Limit': 0.005, 'Upper limit': 0.01, Hexa: 'CBDEED' },
  { Class: 7, 'Lower Limit': 0, 'Upper limit': 0.005, Hexa: 'EEF7FB' },
  { Class: 8, 'Lower Limit': -0.005, 'Upper limit': 0, Hexa: 'F5EBEB' },
  { Class: 9, 'Lower Limit': -0.01, 'Upper limit': -0.005, Hexa: 'E7CBCE' },
  { Class: 10, 'Lower Limit': -0.015, 'Upper limit': -0.01, Hexa: 'D9ACB1' },
  { Class: 11, 'Lower Limit': -0.02, 'Upper limit': -0.015, Hexa: 'CB8D94' },
  { Class: 12, 'Lower Limit': -0.025, 'Upper limit': -0.02, Hexa: 'BD6D77' },
  { Class: 13, 'Lower Limit': -0.03, 'Upper limit': -0.025, Hexa: 'AF4E5A' },
  { Class: 14, 'Lower Limit': null, 'Upper limit': -0.03, Hexa: 'A22F3D' }
],
'Report Labels': [
  { Number: 1,  Label_ES: 'Fecha Reporte'          , Label_EN: 'Report Date'       , Label_PT : 'Data de relatório'},
  { Number: 2,  Label_ES: 'Tasa de Cambio Diaria'  , Label_EN: 'Daily Change Rate' , Label_PT : 'Taxa de Câmbio Diária'},
  { Number: 3, 
    Label_ES: "La tasa de cambio expresa la variación diaria de cambio en porcentajes, variando entre -3% y + 3%'",
    Label_EN: "The change rate indicates the daily variation of the percentage changes, ranging between -3% and + 3%",
    Label_PT: "A taxa de câmbio expressa a variação de mudanças nas porcentagens, variando entre -3% e  + 3%"  },
  { Number: 4,  Label_ES: 'Campaña'                , Label_EN: 'Season'            , Label_PT:  'Campanha'},
  { Number: 5,  Label_ES: 'Establecimiento'        , Label_EN: 'Farm'              , Label_PT:  'Estabelecimento'},
  { Number: 6,  Label_ES: 'Lote'                   , Label_EN: 'Field'             , Label_PT:  'Lote'},
  { Number: 7,  Label_ES: 'Cultivo'                , Label_EN: 'Crop'              , Label_PT:  'Cultivo'},
  { Number: 8,  Label_ES: 'Híbrido'                , Label_EN: 'Hybrid'            , Label_PT:  'Híbrido'},
  { Number: 9,  Label_ES: 'Fecha de Siembra'       , Label_EN: 'Planting date'     , Label_PT:  'Data de plantio'},
  { Number: 10, Label_ES: 'Días Después de Siembra', Label_EN: 'Days After Seeding', Label_PT:  'Dias posteriores ao Plantio'},
  { Number: 11,
    Label_ES: 'Distribucion de Areas según Tasa de Cambio',
    Label_EN: 'Areas distribution according to Change rate',
    Label_PT: 'Distribuição de áreas segundo a Taxa de câmbio' },
  { Number: 12, Label_ES: 'Tasa de cambio diario'  , Label_EN: 'Daily Change Rate' , Label_PT:  'Taxa de câmbio diária'},
  { Number: 13, Label_ES: 'Hectareas'              , Label_EN: 'Hectares'          , Label_PT:  'Hectares'},
  { Number: 14, Label_ES: '% Área Total'           , Label_EN: '% Total area'      , Label_PT:  '% Área Total'},
  { Number: 15, Label_ES: 'Total Has'              , Label_EN: 'Total Has'         , Label_PT:  'Total Has'},
  { Number: 16, Label_ES: 'Comentarios'            , Label_EN: 'Comments'          , Label_PT:  'Comentarios'}
]
}

tasaCambioEstaticaConfig.testData = {
input: {
  Title: 'testingChangeRate1',
  Index: 'ndvi',
  Palette: 'tasa_geoagro',
  Season: '2019',
  Farm: 'Agrivision',
  farm_name: 'Agrivision',
  Field: '40',
  Crop: 'Soybean 2°',
  Hybrid: '-Not assigned-',
  DatePlanting: '2019-11-19',
  Mbtiles: false,
  FieldBackgroundImage: 'lote_imagen_fondo',
  Language: 'PT',
  DateNDVI1: '2019-12-19',
  DateNDVI2: '2019-12-24'
},
output: {
  URLimgTasaCambio: '11aGTaa3qN8tV5o7KPKRUpERYb0Hf3l5R',
  URLimgNDVI1: '1rt9NXzjpyH-97_jEPMoX2pwbJHVqctW9',
  URLimgNDVI2: '17EDyRpk_zqePZfy5WDDHeqYRGeUXjZ_9',
  ClassificationValues: [
    { Class: 1,  Value: 1.39  },
    { Class: 2,  Value: 0.73  },
    { Class: 3,  Value: 2.08  },
    { Class: 4,  Value: 3.39  },
    { Class: 5,  Value: 4.76  },
    { Class: 6,  Value: 6.15  },
    { Class: 7,  Value: 16.33 },
    { Class: 8,  Value: 12.18 },
    { Class: 9,  Value: 3.97  },
    { Class: 10, Value: 1.13  },
    { Class: 11, Value: 0.57  },
    { Class: 12, Value: 0.43  },
    { Class: 13, Value: 1.16  },
    { Class: 14, Value: 0     }
  ]
}
}

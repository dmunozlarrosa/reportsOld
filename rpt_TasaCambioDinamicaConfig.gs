var tasaCambioDinamicaConfig = {
  objSet: {},
  strLang: [],
  rangesColorsTasaCambio: [],
  imagesSizes: {},
  hardcodedData1: {},
  hardcodedData2: {}
}

tasaCambioDinamicaConfig.objSet = {
  strTemplateID: '1FjvE_P_X-Xre60fNdYD5bDth0FB8EdPNev7Dds8LBR8',
  strSprChartID: '1IXaf-btcCpTdTvoCZ5rP4ZP6pt7LpcPoLeNx64ZRvyc',
  strDestFolder: "Reports",
}

tasaCambioDinamicaConfig.imagesSizes = {
  smallNdvi: {
      width: 270,
      height: 237
  },
  bigNdvi: {
      width: 556,
      height: 418
  }
}

tasaCambioDinamicaConfig.strLang['ES'] = [];
tasaCambioDinamicaConfig.strLang['EN'] = [];
tasaCambioDinamicaConfig.strLang['ES'] = [
  ['{strF1}', "Fecha Reporte"],
  ['{strF2}', "Tasa de Cambio Diaria"],
  ['{strF3}', "La tasa de cambio expresa la variación diaria de cambio en porcentajes, variando entre {paletteMin}% y + {paletteMax}%"],
  ['{strF4}', "Campaña"],
  ['{strF5}', "Establecimiento"],
  ['{strF6}', "Lote"],
  ['{strF7}', "Cultivo"],
  ['{strF8}', "Híbrido"],
  ['{strF9}', "Fecha de Siembra"],
  ['{strF10}', "Días Después de Siembra"],
  ['{strF11}', "Distribución de Areas según Tasa de Cambio"],
  ['{strF12}', "Tasa de cambio diaria"],
  ['{strF13}', "Hectareas"],
  ['{strF14}', "Area Total"],
  ['{strF15}', "Total Has"],
  ['{strF16}', "Comentarios"],
  ['{strF17}', "No disponible"],
  ['{strF18}', "días"],
  ['{strF19}', "a"],
  ['{strF20}', "de"],
  ['{strF21}', "Variación {Index} (rangos)"],
  ['{strF22}', "Variación {Index}"],
  ['{strF23}', "Distribución de áreas según variación de {Index}"],
  ['{strF24}', "La variación de índices indica la diferencia de {Index} en las dos fechas seleccionadas"],
  ['{strF25}', "Promedio:"],
  ['{strF26}', "Area afectada"]
]
tasaCambioDinamicaConfig.strLang['EN'] = [
  ['{strF1}', "Report Date"],
  ['{strF2}', "Daily Change Rate"],
  ['{strF3}', "The change rate indicates the daily variation of the percentage changes, ranging between {paletteMin}% and + {paletteMax}%"],
  ['{strF4}', "Season"],
  ['{strF5}', "Farm"],
  ['{strF6}', "Field"],
  ['{strF7}', "Crop"],
  ['{strF8}', "Hybrid"],
  ['{strF9}', "Planting date"],
  ['{strF10}', "Days After Seeding"],
  ['{strF11}', "Areas distribution according to Change rate"],
  ['{strF12}', "Daily change rate"],
  ['{strF13}', "Hectares"],
  ['{strF14}', "Total area"],
  ['{strF15}', "Total Has"],
  ['{strF16}', "Comments"],
  ['{strF17}', "Not available"],
  ['{strF18}', "days"],
  ['{strF19}', "to"],
  ['{strF20}', "from"],
  ['{strF21}', "{Index} variation (ranges)"],
  ['{strF22}', "{Index} variation"],
  ['{strF23}', "Areas distribution according to {Index} Variation"],
  ['{strF24}', "The indices variation indicates the differences between the {Index} in the two selected dates"],
  ['{strF25}', "Average:"],
  ['{strF26}', "Affected area"]
];
tasaCambioDinamicaConfig.strLang['PT'] = [
  ['{strF1}', "Data de relatório"],
  ['{strF2}', "Taxa de Câmbio Diária"],
  ['{strF3}', "A taxa de câmbio expressa a variação de mudanças nas porcentagens, variando entre {paletteMin}% e  + {paletteMax}%"],
  ['{strF4}', "Campanha"],
  ['{strF5}', "Estabelecimento"],
  ['{strF6}', "Lote"],
  ['{strF7}', "Cultivo"],
  ['{strF8}', "Híbrido"],
  ['{strF9}', "Data de plantio"],
  ['{strF10}', "Dias posteriores ao Plantio"],
  ['{strF11}', "Distribuição de áreas segundo a Taxa de câmbio"],
  ['{strF12}', "Taxa de câmbio diária"],
  ['{strF13}', "Hectares"],
  ['{strF14}', "Área Total"],
  ['{strF15}', "Total Has"],
  ['{strF16}', "Comentarios"],
  ['{strF17}', "Não disponível"],
  ['{strF18}', "días"],
  ['{strF19}', "a"],
  ['{strF20}', "de"],
  ['{strF21}', "Variação {Index} (rangos)"],
  ['{strF22}', "Variação {Index}"],
  ['{strF23}', "Distribuição de áreas segundo variação de {Index}"],
  ['{strF24}', "A variação de índices indica a diferença de {Index} nas duas datas selecionadas"],
  ['{strF25}', "Média"],
  ['{strF26}', "Área afetada"]
]


tasaCambioDinamicaConfig.hardcodedData2 = {
  "Title": "Tasa de Cambio",
  "Season": "2018-2019",
  "Farm": "111",
  "Crop": "Trigo",
  "Hybrid": "-No asignado-",
  "DatePlanting": "2018-10-01",
  "Field": "Field (8)",
  "FieldBackgroundImage": "T",
  "Language": "PT",
  "IndexMean_1" : "0.22",
  "IndexMean_2" : "0.31",
  "Index": "ndvi",
  "DateNDVI1": "2019-03-01",
  "DateNDVI2": "2019-03-13",
  "Palette": {
    "Name" : "GnBu",
    "Colors" : [ "2166AC","437EB9","6596C6","87AED3","A9C6E0","CBDEED","EEF7FB","F5EBEB","E7CBCE","D9ACB1","CB8D94","BD6D77","AF4E5A","A22F3D"],
  },
  "min_max_tasa" : {
    "min": "-0.03",
    "max": "0.035"
  },
  "min_max_dif": {
    "min": "-0.32",
    "max": "0.69"
  },
  "URLimgTasaCambio": "1pcKX9wP_K-1kti5InV0-EHC9AX6zj2dX",
  "URLimgTasaIndex": "1pcKX9wP_K-1kti5InV0-EHC9AX6zj2dX",
  "URLimgNDVI1": "1wqVkoXuEs87y-1MloHE_jOZHInn_mjoC",
  "URLimgNDVI2": "1abJIQ8ueH8Y_6G_BMO-Lb1DEzD_4btXv",
  "DailyChangeRate": {
      "Has": [ 49.15, 50.51, 69.29, 67.42, 62.51, 155.46, 572.0, 24.0, 16.18, 7.26, 7.23, 9.06, 4.22, 1.42],
      "Ranges": [-0.03, -0.025, -0.02, -0.015, -0.01, -0.005, 0.0, 0.005, 0.01, 0.015, 0.02, 0.025, 0.03, 0.035]
  },
  "VariationIndex": {
      "Has": [ 47.68, 52.04, 72.29, 70.66, 64.35, 101.19, 594.87, 122.14, 28.32, 21.6, 12.29, 7.07, 7.98, 2.01],
      "Ranges": [ -0.1700, -0.1469, -0.1238, -0.1008, -0.0777, -0.0546, -0.0315, -0.0085, 0.0146, 0.0377, 0.0608, 0.0838, 0.1069, 0.13] 
  }
}
tasaCambioDinamicaConfig.hardcodedData3 = {
  "Title": "eee",
  "Season": "2018",
  "Farm": "Agrivision",
  "Crop": "Soybean 2Ã‚Â°",
  "Hybrid": "-Not assigned-",
  "DatePlanting": "2018-11-04",
  "Field": "40",
  "FieldBackgroundImage": "lote_imagen_fondo",
  "Language": "PT",
  "IndexMean_1" : "0.22",
  "IndexMean_2" : "0.31",
  "Index": "NDVI",
  "DateNDVI1": "2018-10-30",
  "DateNDVI2": "2018-12-04",
  "Palette": {
    "Name": "tasa_geoagro",
    "Colors": ["B2182B", "C13438", "D05146", "EF8A62", "F6B294", "FDDBC7", "FAE9DF", "F7F7F7", "E4EEF3", "D1E5F0", "9CC7DF", "67A9CF", "4487BD", "2166AC"]
  },
"min_max_tasa": {
    "min": "0.00",
    "max": "0.01"
  },
  "min_max_dif": {
    "min": "0.02",
    "max": "0.20"
  },
  "URLimgTasaCambio": "http://www.excelcropcare.com/images/homepage/overviewbg-res.jpg",
  "URLimgTasaIndex": "http://www.excelcropcare.com/images/homepage/overviewbg-res.jpg",
  "URLimgNDVI1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1253G-gI1vFaCqX2g4QzB6rjYkstOL19XsubEZOi99277U5ve",
  "URLimgNDVI2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1253G-gI1vFaCqX2g4QzB6rjYkstOL19XsubEZOi99277U5ve",
  "DailyChangeRate": {
    "Has": [ 0.0,0.01,0.01,0.03,0.06,0.17,0.45,0.67,0.80,3.60,5.31,11.51,14.20,19.21],
    "Ranges": [0.01, 0.0092, 0.0085, 0.0077, 0.0069, 0.0062, 0.0054, 0.0046, 0.0038, 0.0031, 0.0023, 0.0015, 0.0008, 0.0000]
    },
    "VariationIndex": {
    "Has":    [ 0.0,   0.27,   0.34,   0.59,   0.62,   1.28,   2.86,   3.10,   4.97,    6.04,   7.45,   8.26,   9.01,  10.38],
    "Ranges": [0.20, 0.1862, 0.1723, 0.1585, 0.1446, 0.1308, 0.1169, 0.1031, 0.0892,  0.0754, 0.0615, 0.0477, 0.0338, 0.0200]
    }
}

var indicesPromedioPorLoteConfig = {
  objSet: {},
  strLang: [],                        //Listo
  imagesSizes: {},
  charts: {},
  hardcodedData: {},
  hardcodedData2: {}
}
indicesPromedioPorLoteConfig.objSet = {
  strDestFolder: "Reports",
  strTemplateID : { 
    vertical :   '1MP6X-oTRTLMVv23yE6zJ2Z-m60kN73rlyJCuRKhdHDs',
    horizontal : '1K6CWO9iwz_XLDMLsd5IkWR9gVG7-7ye-mJGJyObT7R0'
  }
}
indicesPromedioPorLoteConfig.charts = {
  spreadSheetId: '1F087Ss4JxLGg0BBL1L9vlX-5Xh6bZnFykstynmBfuP8',
  chartId: '1811582604',
  Url: 'https://docs.google.com/spreadsheets/d/'
}
indicesPromedioPorLoteConfig.charts.Url += indicesPromedioPorLoteConfig.charts.spreadSheetId + '/embed/oimg?oid=' + indicesPromedioPorLoteConfig.charts.chartId;

indicesPromedioPorLoteConfig.imagesSizes = {
  MapaLotesYCultivos: {
      high: 730,
      widht: 590
  },
  IndexImages: {
      high: 490,
      widht: 490
  },
  NdviChart: {
      high: 460,
      widht: 460
  },
  IndicesMediosPorLotesChart: {
      high: 730,
      widht: 590
  }
}

indicesPromedioPorLoteConfig.strLang = [];
indicesPromedioPorLoteConfig.strLang['EN'] = [];
indicesPromedioPorLoteConfig.strLang['ES'] = [];
indicesPromedioPorLoteConfig.strLang['ES'] = [
  ['{strF0}', 'Índices Promedio por Lote'],
  ['{strF1}', 'Fecha Informe'],
  ['{strF2}', 'Mapa de Lotes y Cultivos'],
  ['{strF3}', 'Campaña'],
  ['{strF4}', 'Establecimiento'],
  ['{strF5}', 'Total Has'],
  ['{strF6}', 'Información Cultivos'],
  ['{strF7}', 'Lote'],
  ['{strF8}', 'Cultivo'],
  ['{strF9}', 'Superficie [Has]'],
  ['{strF10}', 'Fecha de Siembra'],
  ['{strF11}', 'Hib/Var'],
  ['{strF12}', 'Fecha'],
  ['{strF13}', 'Media'],
  ['{strF14}', 'Desv. Estandar'],
  ['{strF15}', 'Promedio y Variabilidad por Lote'],
  ['{strF16}', 'Promedios:']
];
indicesPromedioPorLoteConfig.strLang['EN'] = [
  ['{strF0}', 'Index Averages and Variability by Field'],
  ['{strF1}', 'Report Date'],
  ['{strF2}', 'Fields and Crops'],
  ['{strF3}', 'Season'],
  ['{strF4}', 'Farm'],
  ['{strF5}', 'Total Has'],
  ['{strF6}', 'Information Crops'],
  ['{strF7}', 'Field'],
  ['{strF8}', 'Crop'],
  ['{strF9}', 'Surface [Has]'],
  ['{strF10}', 'Planting Date'],
  ['{strF11}', 'Hib/Var'],
  ['{strF12}', 'Image Date'],
  ['{strF13}', 'Mean'],
  ['{strF14}', 'Std Deviation'],
  ['{strF15}', 'Average and Variability by Field'],
  ['{strF16}', 'Averages:']
];

indicesPromedioPorLoteConfig.hardcodedData =
{
  "Farm": "McCain_Renhard Bdy LN Peas",
  "InformDate": "2019/07/21/ 00:00:00",
  "InformDataDate": "2018-01-18",
  "Season": "2018-19",
  "Language": "EN",
  "Title": "Renhardt bdy Peas F20",
  "TotalHas": "163.73",
  "Images": {
    "MapaLotesYCultivos": "http://www.excelcropcare.com/images/homepage/overviewbg-res.jpg",
    "Indexs": [
      {
        "type": "NDVI",
        "image": "http://www.takepart.com/sites/default/files/styles/large/public/cropdiversity.jpg",
        "averagedImage": "http://www.takepart.com/sites/default/files/styles/large/public/cropdiversity.jpg",
        "colorColumn": "#448809",
        "date": "22/2/2018 12:00:00 AM"
      },
      {
        "type": "NDWI",
        "image": "http://www.avpinnacle.com/sites/default/files/sanders/images/Tractor%20spraying%20Soybean%20field_100784174.jpg",
        "averagedImage": "http://www.avpinnacle.com/sites/default/files/sanders/images/Tractor%20spraying%20Soybean%20field_100784174.jpg",
        "colorColumn": "#C9C5DF",
        "date": "17/1/2018 12:00:00 AM"
      },
      {
        "type": "NDMI",
        "image": "http://www.takepart.com/sites/default/files/styles/large/public/cropdiversity.jpg",
        "averagedImage": "http://www.avpinnacle.com/sites/default/files/sanders/images/Tractor%20spraying%20Soybean%20field_100784174.jpg",
        "colorColumn": "#007DFF",
        "date": "14/1/2018 12:00:00 AM"
      },
      {
        "type": "NDRE",
        "image": "http://www.avpinnacle.com/sites/default/files/sanders/images/Tractor%20spraying%20Soybean%20field_100784174.jpg",
        "averagedImage": "http://www.takepart.com/sites/default/files/styles/large/public/cropdiversity.jpg",
        "colorColumn": "#388457",
        "date": "15/2/2018 12:00:00 AM"
      }
    ]
},
"Lotes": [
    {
      "FieldName": "1",
      "Crop": "Soybean",
      "CropId": "2",
      "CropDate": "1/12/2018 1:00:00 PM",
      "HibVar": "- No asignado -",
      "Color": "#55AA00",
      "Has": 60.52,
      "Indexs": [
        {
          "type": "ndvi",
          "mean": "0.3",
          "std": "0.15222222222222222222",
          "min": "0.22222221",
          "max": "0.9312312",
          "firstQt": "0.3123123",
          "median": "0.41231241",
          "thirdQt": "0.711111111112"
        },
        {
          "type": "ndre",
          "mean": "0.251231231",
          "std": "0.0712313",
          "min": "0.05",
          "max": "0.56",
          "firstQt": "0.13",
          "median": "0.26",
          "thirdQt": "0.49"
        },
        {
          "type": "ndmi",
          "mean": "-0.07",
          "std": "0.10",
          "min": "-0.36",
          "max": "0.30",
          "firstQt": "-0.18",
          "median": "-0.06",
          "thirdQt": "0.10"
        },
        {
          "type": "ndwi",
          "mean": "-0.46",
          "std": "0.05",
          "min": "-0.73",
          "max": "-0.31",
          "firstQt": "-0.58",
          "median": "-0.46",
          "thirdQt": "-0.40"
        }
      ]
  },
  {
      "FieldName": "5",
      "Crop": "**CropId_not_identified** Soybean",
      "CropId": "",
      "CropDate": "30/12/2018 1:00:00 PM",
      "HibVar": "2",
      "Color": "#404040",
      "Has": 42.79,
      "Indexs": [
        {
          "type": "ndvi",
          "mean": "0.61",
          "std": "0.20",
          "min": "0.32",
          "max": "0.75",
          "firstQt": "0.52",
          "median": "0.61",
          "thirdQt": "0.69"
        },
        {
          "type": "ndre",
          "mean": "0.19",
          "std": "0.19",
          "min": "-0.48",
          "max": "0.49",
          "firstQt": "-0.19",
          "median": "0.09",
          "thirdQt": "0.25"
        },
        {
          "type": "ndmi",
          "mean": "-0.06",
          "std": "0.17",
          "min": "-0.31",
          "max": "0.503",
          "firstQt": "-0.16",
          "median": "-0.04",
          "thirdQt": "0.35"
        },
        {
          "type": "ndwi",
          "mean": "-0.43",
          "std": "0.21",
          "min": "-0.72",
          "max": "0.46",
          "firstQt": "-0.53",
          "median": "-0.32",
          "thirdQt": "0.10"
        }
      ]
  },
  {
      "FieldName": "7",
      "Crop": "Soybean",
      "CropId": "2",
      "CropDate": "24/12/2018 1:00:00 PM",
      "HibVar": "2",
      "Color": "#55AA00",
      "Has": 20.14,
      "Indexs": [
        {
          "type": "ndvi",
          "mean": "0.32",
          "std": "0.15",
          "min": "0.15",
          "max": "0.68",
          "firstQt": "0.21",
          "median": "0.32",
          "thirdQt": "0.6"
        },
        {
          "type": "ndre",
          "mean": "0.25",
          "std": "0.07",
          "min": "-0.24",
          "max": "0.57",
          "firstQt": "-0.02",
          "median": "0.24",
          "thirdQt": "0.46"
        },
        {
          "type": "ndmi",
          "mean": "-0.07",
          "std": "0.12",
          "min": "-0.28",
          "max": "0.75",
          "firstQt": "-0.13",
          "median": "-0.08",
          "thirdQt": "0.30"
        },
        {
          "type": "ndwi",
          "mean": "-0.49",
          "std": "0.06",
          "min": "-0.75",
          "max": "0.06",
          "firstQt": "-0.49",
          "median": "-0.30",
          "thirdQt": "-0.14"
        }
      ]
  },
  {
      "FieldName": "13",
      "Crop": "Corn",
      "CropId": "3",
      "CropDate": "21/12/2018 1:00:00 PM",
      "HibVar": "2",
      "Color": "#FF6600",
      "Has": 20.14,
      "Indexs": [
        {
          "type": "ndvi",
          "mean": "0.32",
          "std": "0.15",
          "min": "0.05",
          "max": "0.63",
          "firstQt": "0.12",
          "median": "0.32",
          "thirdQt": "0.48"
        },
        {
          "type": "ndre",
          "mean": "0.21",
          "std": "0.10",
          "min": "-0.33",
          "max": "0.53",
          "firstQt": "-0.13",
          "median": "0.22",
          "thirdQt": "0.41"
        },
        {
          "type": "ndmi",
          "mean": "-0.14",
          "std": "0.19",
          "min": "-0.38",
          "max": "0.59",
          "firstQt": "-0.23",
          "median": "-0.15",
          "thirdQt": "0.28"
        },
        {
          "type": "ndwi",
          "mean": "-0.44",
          "std": "0.10",
          "min": "-0.73",
          "max": "0.21",
          "firstQt": "-0.63",
          "median": "-0.42",
          "thirdQt": "-0.10"
        }
      ]
  },
  {
      "FieldName": "15",
      "Crop": "Corn",
      "CropId": "3",
      "CropDate": "28/12/2018 1:00:00 PM",
      "HibVar": "2",
      "Color": "#FF6600",
      "Has": 20.14,
      "Indexs": [
        {
          "type": "ndvi",
          "mean": "0.42",
          "std": "0.15",
          "min": "0.02",
          "max": "0.81",
          "firstQt": "0.15",
          "median": "0.42",
          "thirdQt": "0.7"
        },
        {
          "type": "ndre",
          "mean": "0.21",
          "std": "0.10",
          "min": "-0.30",
          "max": "0.55",
          "firstQt": "-0.06",
          "median": "0.19",
          "thirdQt": "0.30"
        },
        {
          "type": "ndmi",
          "mean": "-0.25",
          "std": "0.15",
          "min": "-0.46",
          "max": "0.52",
          "firstQt": "-0.33",
          "median": "-0.26",
          "thirdQt": "0.12"
        },
        {
          "type": "ndwi",
          "mean": "-0.43",
          "std": "0.09",
          "min": "-0.84",
          "max": "0.31",
          "firstQt": "-0.51",
          "median": "-0.22",
          "thirdQt": "0.10"
        }
      ]
  }
],
"BoxPlots": [
    {
      "Index": "NDVI",
      "BoxPlot": ["iVBORw0KGgoAAAANSUhEUgAAAeAAAAHgCAMAAABKCk6nAAABjFBMVEUAAAAAADoAAGYAOmYAOpAAZrYzMzM6AAA6ADo6AGY6Ojo6OmY6OpA6ZpA6ZrY6kNtNTU1NTW5NTY5NbqtNjshmAABmADpmAGZmOgBmOjpmOmZmOpBmZmZmtv9uTU1uTY5ujshuq+SOTU2OTY6ObquOjsiOq+SOyP+PiaKQOgCQOjqQZjqQ29uQ2/+gynWq1H+rbk2rbo6r5P+zs7Ozs72zs8Gzs82zvc+zwdqzzee2ZgC2Zjq2kDq2tma2//+9xtnBs7PBs83BwdrBzefB2vLGs8bGvc/Ijk3Ijm7Ijo7IyP/I///Ns8HNs83NwcHNwdrNzc3N5//PvcbPz9nP4evZxrPZxr3Z6+vawbPawcHawc3azdra2ufa8v/bkDrb25Db/7bb///hz73h6+vkq27kq47k///nzbPnzcHn///r2cbr4c/r69nr6+Hr6+vy2sHy583y///1qHX/sn//tmb/trb/yI7/25D/29v/5Kv/5OT/583/8tr//7b//8j//9v//+T//+f///L///9v0kyBAAAV90lEQVR4nO2dj18bR3rGldROLne+oNRc07vWqXGdYKfFoWzsINJyiU9XnPgcW9drTZyAzz0VBTeHopRCsWwZtP94Z2Z//5jdeWcHtLN+ng9B++PRs+/MV+/uKgjTcqFGqzXrAqDTFQA3XADccAFww6UL+A3IsIxijaQN2H/cIzyH4LUr1kQJAFzjWAAme+2KBWCy165YACZ77YoFYK6B8/GWt3Ryb5evOje32PebYuN003FWR/6ubGxg48/qhWZyCXJreICh43S81b2Cfcq56iVYD3i8OnrqURk7t3bd6ddb3sax2DjmM9fzdmVj4zb2EvDNgQzMbqoOsfqngn2j1PMBmL38u+73oj2n304f7bonX33G2oFtDHqWOXrermxs3OYvDI0CDg8wfOAEZT3M3/f89oiTVssllGA/4J77Z58epzhmrTrssY0BUtEgrgRwZBs43dBMLaEAcHCAQccNynqYv4+dZTINDMBurIMjiuNurDUHnfgueQfzFd9MLUGlg3thWdkO9vaxJv58N/V8AI5fg70O7vIZCy9o081euCsbG10G+bO6gZlaguI1eFhwDWbdHX+xGSzBesDeXfTJ/ZFPkd0Pd/1bUraRrYn1fMChjT+r4wZmcgkld9H8AMOwrL38ffwWvpd+OgBTvXbFAjDZa1csAJO9dsUCMNlrVywAk712xQIw2WtXLAAreK/VRUrVUkamZm0+4I/iuvFRvq5dy26TeXOkYAVgTwCsPDI1KwADsJYAGIBzBcDKI1OzAjAAawmAAThXAKw8MjUrAAOwlgAYgHMFwMojU7MCMABrCYABOFcArDwyNSsAA7CWABiAcwXAyiNTswIwAGsJgAE4VwCsPDI1KwADsJYAGIBzBcDKI1OzAjAAawmAAThXAKw8MjUrAAOwlgAYgHMFwMojU7OeOeCDhXDx2U6w1G+32wuJegCY6K0h4MnVndj2L+4m6gFgordegI+X2xd3+u35yRX2GG3m/wL9nr7yfy/3hooUbRVU9KvDFcZcqtkA7i+wL9bB/cWgo/0GRgerj0zNOhvAd1bco8sM8Aa79s7zrUeXU/UAMNFbL8CxDo5tjdcDwERvfQDzphXX4ONlfg327p5D0gCsPDI1K94HA7CWABiAcwXAyiNTswIwAGsJgAE4VwCsPDI1KwADsJYAGIBzBcDKI1OzAjAAawmAAThXAKw8MjUrAAOwlgAYgHMFwMojU7MCMABrCYABOFcArDwyNSsAA7CWABiAcwXAyiNTswIwAGsJgAE4VwCsPDI1KwADsJYAGIBzBcDKI1OzNh9wXaRULWVkatbGA9a21iAWgMleu2IBmOy1KxaAyV67YgGY7LUrFoDJXrtiAZjstSsWgMnelHXg3NzyF5yeO910nNUROZaF/CEIubmVCokfZOg4HRZ7cm9Xso8/txttZNv4uoiljizUKw14vDoaCxjjjsumnX13Bz1qLA/5hIdMv97youIhyYPwPU+dW7uSfUPxPdzISph+M/JiiSOL9EoDHnbdsJ38hSEZMA/5LX/uyVef8Q5NhsQOMnwguvTfpo92JfuGvH27sar2vtuKxRJGFunVBsxOy/5sD/i50eskYiwP+T0PGbPOFGjHnfR+cZBBR6zsxQEn9/FT9INurKqnnVgsZWSRXm3AsQ722qcj9UoVdjDXOB0S79Ke2L+X28HePrEpVtV/bEWxpJFFeqUBR5fALp/Z6WZP7pUqvAaLkF4qJHWdTXVwah+/FfjdVnQNPvnXURBLHFmkVxqwd796cn/E71Q7/JvjdGVeqcRdtB/STYfEDzIUO+KA0/vEzXy08fmvPY9T3sAAbGMs3geTvXbFAjDZa1csAJO9dsUCMNlrVywAk712xQIw2Xu6sUY+lFethIwA2GBszmdvs5/NlXzEFoDlAuACKwAbjAXgcgFwtRIyAmCDsQBcLgCuVkJGAGwwFoDLBcDVSsgIgA3GAnC5ALhaCRkBsMFYAC4XAFcrISMANhgLwOUC4GolZATABmMBuFwAXK2EjADYYCwAlwuAq5WQEQAbjAXgcgFwtRIyAmCDsQBcLgCuVkJGAGwwFoDLBcDVSsgIgA3GAnC5ALhaCRkBsMFYAC4XAFcrIaMzB3ywEC4+2wmWjpfb76wk6gFgvRIymiHgydUQ8OT9dD0ArFdCRrMBzDr24k6/PT+5wh7Z+tF74vENpr3ZyMzfZbhRqML9uXkGBjYbwP0F9sU6uL/orbNvRx+I3ejgaiVkNBvAd1bco8sM8Ea73Z6PbQfgqiVkNPMOFuKdvJioB4D1Ssjo7AHzphXX4ONlfg1u+9fk+WQ9AKxXQkZ4H2wwFoDLBcDVSsgIgA3GAnC5ALhaCRkBsMFYAC4XAFcrISMANhgLwOUC4GolZATABmMBuFwAXK2EjADYYCwAlwuAq5WQEQAbjAXgcgFwtRIyAmCDsQBcLgCuVkJGAGwwFoDLBcDVSsgIgA3GAnC5ALhaCRkBsMFYAC4XAFcrISMANhgLwOUC4GolZATABmMBuFwAXK2EjADYYCwAl8tuwFVkpoSMALjGsQBM9toVC8Bkr12xAEz22hULwGSvXbEATPbaFQvAZK9dsQBM9toV21jAA+fmH1x/YcudbjrO6kj6jIHz8Za3dHJvl6/y58hEn91BFDfsymqpAi04wNBh6saPl/CG2/0FMViFEuoIeLw6Gn8y8hfYV4eNqid7AjM89aZ87Nzadadfy+m6GiS8ErwjsemX1FIBcOwA7vSbUXw17g23+wtisCol1BEw65ST3+76C94LdSgFzDzfC8/02+mjXffkq8+cjjyeTCIq4fntH7qupJYKgKMDuO53W4nVuDfc/vw2f8V7g1UpoZaAe+7097v+ghjHWM6Mef7sj5V7x+yFLX81aAAOSmDTOxaA82qpAjg4gJccW014o+1j7xphNeB0Bw8KejLs4GjMHohc6Xewf4nMr8VMB7MGLu/gYcd9/vmu3YBT1+Dpprwj49dgr4O7RefzStdgni2pxcg1+OT+KHm83GtwQNpmwN5dNB+vuGMc+L0jkbiLFpMjxjwo8ureRYt4DlhSS+W7aH6A578JV3O8gY3fx/MXmdWAXdvesOJ9sLIA2HAJAFzjWAAme+2KBWCy165YAE56K33mrQ6SjowwCbIJNa2ZAP6fUv1YbpF5rxXEV4iNH0E6MsIkyCbUtACY7gVgiQC4wArAql4ATgiA6V4AlgiAC6wArOoF4IQAmO4FYIkAuMAKwKreJgI+vPDHv3lyeOGJ+mFCATDdOwvAj7XougCs4z0jwIdvtl5fZ2378sOlw5/9devc4wv/POe623Pudqs1p3w8AKZ7zwbwi79acrfP+4B5B4tvfOWtdb5PUQBM954NYO+SmwD85NOlw7fd/fOuu3ZJ9XgATPeeMWDWrgHg/fOMLACfSmz8CNKRESZBNqGh+Gl4/9zjt9YPfxICfvGrX627OEWfSmz8CNKRESZBNqGRxE2Wu9b6i18ywH/8xTl+I73GupffZCk3MABrePE/OiQC4AIrAKt6ATghAKZ7AVgiAC6wArCqF4ATAmC6F4AlAuACqxRw7j9vqy4ApnsBWCIALrDmAC75fRk1ATDde2aAiw+qJgCme60HfLAQLj7biTb3F93j5fY7K4l6AJg4C5UBH75J+VlDCeDJ1QjwRnvRnbyfrgeAibNQFfCLd9ddwk8L5YBZs17c6bfnJ1fYI1uffMk6+Og9sfIG015CtN+v/fE0dcrx4ghK2iNJ9SZr3/s41svrrXNP9n/6+r+0+M8UdQD3F9gX62CG1e9ob+noA7GCDs4bGWES0lLt4G3v9Mw/eze3f55/vGO78IQtBXxnxT26zABvtNvtebGZAXbD8zcA542MMAlpqQIWHfy/658uuYdvs2X2pQk41sG+2BJv4sVEPQBMnIXK12B2/X15/ZLXwbqAedOKa/DxMr8Gt8NTNNs4n6wHgImzUPl/dHh30d41WBOwigA4b2SESZBNaEb4X5UAXCQApnsBWCIALrDi58GqXgBOCIDpXpyiJQLgAisAq3oBOCEApnvxiQ6JALjAmgf4o5gAOJz+hgNea7XOx137xf+cAwDTvTMFnPn1bwA2Exs/gnRkhEmQTWhMuddg7xf/xc8a1uY47/2ftl5ff/ELtn74Zuu1pf3UJwAAmO6d7SmaETz3RPy08MW76y8/XOI/9Z/bvsS+/d8Td/tS+hMAAEz3zvwma3tO/Lyfnar5v8kyxxbZhbl1nrV161L654cATPfOFPD2eQ5YdDADy0AHHey6bGUNgHVj40eQjowwCbIJjSn/ffAaP0WLazBD+vMnbnANbs2xk/ffzgGwZmz8CNKRESZBNqEZFbwBfnm9/APSAEz31gXwfvINcb4AmO6tC2AlATDdi58HSwTABVYAVvUCcEIATPcCsEQAXGAFYFUvACcEwHQvAEsUArZd0pERJkE2oaaFvwBekxIAuMaxAEz22hULwGSvXbEATPbaFQvAZK9dsQBM9toVC8Bkr12xrwDggXNzK7YwcJLrXCf3HrrTTcdZHSnEp6YhFu/00iny2Y0O7g67fPXjLak386S9oeN0/CMSy9Wx1hvweHU0FlPuLUy/DiYy3OGOnVsP3TGfsfL5Sk9DFN9hr5PdVIp0dqODs6N3+erT8ldX+KSn4ijeEWnlalnrDZj1hzcN3sLJV5/xF398x/Tb6aOH3iY64DDFdYOFoQLg6GnPb//QZd9GTzulRw6f9J8PHG8QACyme/poN1wY39r1CYQ7GGIP8Lh8jt0M4ChlwFoxlSIHHDyNd32Xt/En5ZeH8En/3vFeRv4RCeVqWWsOONnBfNO4m9gRAB4o8S3oYO9q2pF6857GrqaO0x123P/+vLQZow7uxQZBKlfLWm/AqWswnxevg2OXQQ54uqlyfnbl12Ae3E2lqFyD+TMZp+/Lz7aJa/Cw5x2RVq6Wtd6AvVvPk/uj6C66m9ohAA9EKynE591Fe/HsuphKKbmLFgfngPnNt8LrK3gSv4sWt95O+Umn+YCVNPs3rHgfrCwANlwCANc4FoDJXrtiAZjstSsWgLnq8Dk5AFaWBmDKh1Zl1rzPxKrEAjBVAKzpBWAANioAlgmAhQCY6AVgADYqAJYJgIUAmOgFYAA2KgCWCYCFAJjoBWAANioAlgmAhQCY6AVgADYqAJYJgIUAmOgFYAA2KgCWCYCFAJjoBWAANioAlgmAhQCY6AVgADYqAJYJgIUAmOgFYAA2KgCWCYCFAJjorQPgg4Vw8dlOtLm/6B4vt+eT9QAw0VsvwJOrEeCN9iLfc2clUQ8AE721Acya9eJOvz0/ucIe2frkS9bBbPM/3WXFMO1JJP8V3R8NSDdF63eKZUM8FZ054P4C+2Id3F8MOpoDnlzBKbqatzYdzE7FR5cZ4I1227/uig4OaAOwprc2gGMd7IstRe0MwJreWgDmTSuuwcfL/BrcDk/RYmOiHgAmeusAWEUArOkFYAA2KgCWCYCFAJjoBWAANioAlgmAhQCY6AVgADYqAJYJgIUAmOgFYAA2KgCWCYCFAJjoBWAANioAlgmAhQCY6AVgADYqAJYJgIUAmOgFYAA2KgCWCYCFAJjoBWAANioAlgmAhQCY6AVgADYqAJYJgIUIgGcqarUA7D+e8TTUMxaAyV67YgGY7LUrFoDJXrtiAZjstSsWgMleu2IBmOy1KxaA870D5+YWf5xuOs7qKFyNW8NtA8fpuQlLOoVp2M23SCugVJs63NBh6vqlq+fGx5yotoGAx6sj9sUXOmykvXA1Zo1bTu7tJixhyp+CbWM2ZXkWaQWUatNFM02/GXmlq+eG1Q7TY24gYNZvDFqw0kus7mUtbCFhCVP2/G3Pb//QdfMs0goo1eYU/d2WX7p6blitONl0Y2lNBNxzp4/8uWKdEF8NAUfbBqw9E5YwZc/bxjs83yKtgFJttmjevf6DOuCgWn6KftCNpTURcPTyHXRSDZ3TwWylsIO9i+IZdrDXwLx0jQ72VprdweEFaLrZc5NXt+w1uMvno+QazF1ndw0+uT8KSte4BvObit9tNfsa7N1CsnkaiN6T30XzqWSeTsFdtJht8TI4k7tofrjnvxFronTiXbQ/oF7D76INWWsQi/fBZK9dsQBM9toVC8Bkr12xAEz22hULwGSvXbEATPZmrbP9zF6uDI3MEwB/JNMN//Ga3JK2qqjUC8BpAXCBFYBLSQBwngBY2wvAaQFwgRWAS0kAcJ4AWNsLwGkBcIEVgEtJAHCeAFjbC8BpAXCBFYBLSQBwngBY2wvAaQFwgRWAS0kAcJ4AWNsLwGkBcIEVgEtJAHCeAFjbC8BpAXCBFYBLSQBwngBY2wvAaQFwgRWAS0kAcJ4AWNsLwGkBcIEVgEtJAHCeAFjbC8BpAXCB9cwBHyyEi892os39xWQ9AFx5ZJ5mCHhyNQK80QbgQE0AfLzcvrjTb89PrrBHtj75UnTwG0x7JqXy27g3yqRgMaqKv12cmoLZAO4vsC/WwQyr39E4RYdqQgffWXGPLjPAG+12e15sBuBQTQAc62BfABzKdsC8acU1+HiZX4PbOEWnZDngEgEwAGcEwAVWAC4lAcB5AmBtLwCnBcAFVgAuJQHAeQJgbS8ApwXABVYALiUBwHkCYG0vAKcFwAVWAC4lAcB5AmBtLwCnBcAFVgAuJQHAeQJgbS8ApwXABVYALiUBwHkCYG0vAKcFwAVWAC4lAcB5AmBtLwCnBcAFVgAuJQHAeQJgbS8ApwXABVYArp8MjczTKw+4zrEATPbaFQvAZK9dsQBM9toVC8Bkr12xAEz22hULwGSvXbEATPbaFQvAZK9dsQBM9toVC8Bkr12xAEz22hULwGSvXbEATPbaFQvAZK9dsQBM9toVC8Bkr12xAEz22hXbSMCQYRnFGkkXcKBTqsuu2FPLNSAArnOuAVUFDNVcANxwAXDDBcANlybg42Xvz+yIx2CluoKkyZX2X95lK++sGI0VieaqDXP77XZ7wVy5RqUJ+GDB3VgMHoOV6gqS+ov8z/m8byQzFisSzVUbj/rirrlyjUoT8H+teH9YSTwGK9UVSzpYPHrP+3t65mJForlqY+WyB3PlGpUm4Dsr4Z9GO1i4Y2zKoqTJ1R0+aR8YjRWJ5qqNlfvFXddcuUZV0w6e/P1d/nAKJwaD1Ua5R5f9cDO5JlXPa/DR390VF+ID45f2A4PVRtdgTtZcuUZV5S6anUZP4y7a/2OYC+ZjDVcb5oo/+Gcw16TwPrjhAuCGC4AbLgBuuAC44QLghquJgA9/suS+/HBpv9Vqvbb08voc37Z97vGFJ7MubBZqJOA3zwvA59niW+v75xjYl9cvHQJwU3R44R+WfMDu2iW2xDc9AeDG6PDC47cDwNtz7jZ7XJtzAbgxYig//ccI8It319kXADdH/Hz88/AUzf/jTQzAjRFHufZacJPFvv3sl0sA3CBxlOytkvc2yeW30PxGGoChJgqAGy4AbrgAuOEC4IYLgBsuAG64/h81IdAYkAn92AAAAABJRU5ErkJggg==",
                  "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"
                 ]
    },
    {
      "Index": "NDWI",
      "BoxPlot": ["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",
                  "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"
                 ]
    },
    {
      "Index": "NDMI",
      "BoxPlot": ["iVBORw0KGgoAAAANSUhEUgAAAeAAAAHgCAMAAABKCk6nAAAB+FBMVEUAAAAAADoAAGYAOmYAOpAAZrYzMzM6AAA6ADo6AGY6Ojo6OmY6OpA6ZpA6ZrY6kLY6kNtNTU1NTW5NTY5NbqtNjshmAABmADpmAGZmOgBmOjpmOmZmOpBmZmZmZpBmtv9uTU1uTY5ujshuq+SOTU2OTY6ObquOjsiOq+SOyP+PiaKQOgCQOjqQOmaQZjqQkJCQ29uQ2/+gynWq1H+rbk2rbo6r5P+zs7Ozs7yzs72zs8Gzs8azs82zuM6zubqzudOzvLOzvc+zwdqzwd2zxtmzzd2zzee2ZgC2Zjq2kDq2kGa2tma2/9u2//+4s8i4zfK82vK9s7O9vc+9xtm9z+G+x7+/2vLBs7PBs83BwdrB2vLExbPF5//Gs8bGvc/G2evIjk3Ijm7Ijo7Iq47IyP/I///Ns8HNs83NwcHNwdrNzc3N5//OyLPPvbPPvcbPz9nP4evUurjVzbPZxrPZxr3Z6+vavbzawbPawcHawc3azdra2ufa8v/bkDrbkGbbtmbb25Db/7bb/9vb///e///h6+vkq27kq47k///nzbPnzcHn///r2cbr69nr6+Hr6+vy2rzy2sHy583y///1qHX/sn//tmb/trb/yI7/1bz/25D/29v/5Kv/5OT/58X/583/8tr//7b//8j//9v//+T//+f///L////lYj9HAAAUWklEQVR4nO3dj3/c9l3HcbckzdplwVfiMRgsJQ5pnXZjTkwEIQNmxqX8MD8LbQ7GnNKQpgejW4E0NGYtBuPD6Y6bOxOMwzmOffo3+X6/0klfnb931vd7kiXLr/fD9Un6SN/v9+7pryTH53rCJ5XORNEDIPkG4IoH4IoH4IrHFfg5knEyZY3jDCw/tQ/Y6YD6mIcX3HzG3QNctuYBLloAYBmAS9I9wGVrHuD99ZZ37YF87N3zvPl1/4Nwdchefnvvzve9a3/rec3+xlbiiPFf4ai9ltaJxfH25X4XHU+kIfsNu6wCcHd+XXzIhbp4ps3uN8PVIXv5D71fmV//n2+s791ZCzbGJVPzB/RuqOsDijqxON6+rHXR7v3zeu/D6AuqCsCdhnwZ+yvN7T9Zl9KDifbq/X3ve38kl8VHsHH7ZuKIsYH1AUWdWBxvX9a6aP/nA3/v3Te98AlVArjp9+6HL6CEeugZJrC2V7v3vb8Uy98Xp7JwYzdxxPjA8YBacSfpj7cva108FK9A9/qa3CRz5IFbXl378m2JZ9f5lr/91lryCH2vlvfbwQwWX/fBxk49cUSmMzjqxOJ4+7LWxT+EZ+duQz0ceWBfuwD17smv2s4biddz315iBv+TuAb/xrp4WYKNdgI21+CGH3Vicbx9Oe5i76/Ww34rMoNl1C3k3t31lrqF7P2dunXdl/5eAvh+cBf9jfVgo7z71o7I6C5adiVGVD+8u2jZ4/afBqteMIGrAWxXLnnzfB9ctADAMgCXpHuAy9Y8wEULACwDcEm6P4bAlw411sMDeGzgy1f6uXTpiiGXTRtTl5N1gAcCMMAA29QBBtgpAANsDMAAA2xTBxhgpwAMsDEAAwywTR1ggJ0CMMDGAAwwwDZ1gAF2CsAAGwMwwADb1AEG2CkAA2wMwAADbFMHGGCnAAywMQADDLBNHWCAnQLwcQV+NB0tPl7tL63UarXpeDwAu5dLBLxzcVXb/vbteDwAu5fLAbw7Vzu7ulKb2rkgHuPN8v9A3x4jKX9l93IUfTmf5Pq7x8YMvCbFAK9Miw8xg1dm+jM6nMDM4GrM4FtX/a3zAnhRXHun5Nat8/p4AHYvlwNYm8Ha1mg8ALuXiweWk1Zdg3fn5DU4uHuOpAE+6sAHBGCAAbapAwywUwAG2BiAAQbYpg4wwE4BGGBjAAYYYJs6wAA7BWCAjQEYYIBt6gAD7BSAATYGYIABtqkDDLBTAAbYGIABBtimDjDATgEYYGMABhhgmzrAADulzMCHGuvhAZz1S1Cy5gEuWgBgGYBL0j3AZWse4KIFAJYBuCTdA1y25gGO6y3v2oNwwWuKh707a4bDo72Cesfz6sZyf6HzRrre09YHRik+98czbC+x1DLu5ND9UQbuzq+LD7lQV3Zd77oBONorqIt9262modxf6HrZAg+Msvfh+6aDor2Cejzocbs/ysCdRn/OqsnZ+6h33wAc7RXUO+8lZ3BUDhe2b/4oW+CBUe69+8fJM8jAXkFdP2i87o80cNMPScUZrSE+m4HjveRjS8zgTtNQDhbEy9rNGDg5yu71f/T1/gf3CuraQWN2f2SBW1498WUuVgzAyb3UDG767W7DUA4WxBXa8xr+qIwxg9Uo2353fwfaXrLODJaJr26NYcB+4nIm692BGbzvGuxnPIMHRtlttE0zWNtL1rkGq6hbzb276/LOU17XjMDxXkG9MzBDtUaCG9eMgQdH2TKfIfS9Gj530WOUS9483wcXLQCwDMAl6R7gsjUPcNECAMsAXJLujxHw4b7Zzpg0owfYGXjk+161d9Bm+bbZZB9pRg8wwDZ1gAF2CsAAGwMwwADb1AEG2CkAA2wMwAADbFMHGGCnAAywMQADDLBNHWCAnQIwwMYADDDANnWAAXYKwAAbAzDAANvUAQbYKQADbAzAAANsUwcYYKcAfFyBH01Hi49X+0u7c7UXr8bjAdi9XCLgnYsR8M7LifEA7F4uB7CYsWdXV2pTOxfEo1jfekk9PifSdkjKX968PCoHlDNJumG6vALDUwzwyrT4EDN4ZSZYF5+2XlFlZnAlZvCtq/7WeQG8WKvVprTtADs/u2H1wmewipzJM/F4AHYvFw8sJ626Bu/OyWtwLbwmT2njAdi9XDjwAQEYYIBt6gAD7BSAATYGYIABtqkDDLBTAAbYGIABBtimDjDATgEYYGMABhhgmzrAADsFYICNARhggG3qAAPsFIABNgZggAG2qQMMsFMABtgYgAEG2KYOMMBOKSNw8UkzeoCzfglK1jzARQsALANwSboHuGzNA1y0AMAyAJeke4DL1jzARQsALDMmcMu79iDc0mmI/zyvru0knkO0Q8vzmurzX4Rbevc8b3598BA/efjImOrxgPa+vdbvI7vm9V7aakEsmXupBHB3fr0bPrWu1/C7gqrVjHdq+9EOorR3Z018/r9r/9bfIr4+moOH6HEQiAfU9X5tbd+Axm0+0Yuo9z6UX03mXioBLGatYJOL2zd/1PA77w3O4HgHP1z4rz9Y628R5ebgIX7i8NEx1KP+eh/1vhv00skeOOhF1PfefTMc/f5eqgHc9Hv35esoZ2fDb9WTz1QKhjvIs1lDff7DaEtbfOkPHqLHBTjuLwTuDvvyGQdY9SLq3etrwegNvRx94Jb3rWjCiCup5zXkc+02on1aXl2fweILX275s0Z/ywchrnZIIuPM4D5wa6hvFjNYRo7e1MvRB05eg+UT7e6bwfE1WN6CNeQ+v/7nwZbeve/4/r5D9Ix1DVbAvXvDzs9uzSd6aYfPqmnupRLAwe3k3t2I0PP02di/i5Y7tNS1Vnz+zXBLS036wUP85OEjM/QuWg1IAod9ZNe83sunwbNqDOmlGsCjw/fB6esAl615gIsWAFgG4JJ0D3DZmgc4US/gnXMAyxwa8I8HcunSjz8b3DaQ8eoAqwCcVx1ggPUADLBTAM6rDjDAegAG2CkA51UHGGA9AB9n4M3Tn/zc8ubp5QOaNAXgvOrZAn/spOsDnF99bODNUxPPLohp+/S12c3P/8zEiY9P/86k7y9N+ksTE5MHNB4H4Lzq4wI/+elZf+lkCCxnsPokV55fkLWUATiv+rjAwSU3Abz8+uzmGX/jpO/fOHdA61EAzqueGbCYrn3gjZNCFuBqAMvT8MaJj59f2PxcBPzky19e8DlFVwM4uMnyb0z8xM8K4E++eELeSN8Qs1feZKWewADnVucfOgDWAzDATgE4rzrAAOsBGGCnAJxXHWCA9QwFvnRAOwcE4LzqAAOsxwBs+H9Y2wfgvOoZACeezgHNDQvAedVLDPxoOlp8vBpvXpnxd+dqL16NxwNwdoenBt48ZfOzhgOAdy7GwIu1GX/n5cR4AM7u8LTAT7604Fv8tHA4sJisZ1dXalM7F8SjWN95R8zgrZfUynMi7UQO/m3dzwayf0vGyeeXjgfTzippb7I2grdjPX114sTyxgvP/t6E/JmiC/DKtPgQM1iwhjM6WNp6Ra0wgwuawUvB6Vm+925y46R8e8fSyBP2UOBbV/2t8wJ4sVarTanNAtiPzt8AFwSsZvB/L7w+62+eEcviwxFYm8FhxJKcxDPxeADO7vDU12Bx/X366rlgBrsCy0mrrsG7c/IaXItO0WLjlDYegLM7PPU/dAR30cE12BE4TQDmnyoBtqkDDLBTAM6rzs+DAdYD8HEF5hQN8KgAnFcdYID18I6OYwh8RQvAxwX4xsTESX2vjdH/OweA86rnBLzv178BTjG6POo5XYODX/xXP2u4MSm9N16YeHbhyRfF+uapiWdmNwbeAQBwXvW8TtFC8MSy+mnhky8tPH1tVv7Uf3LpnPj0v8v+0rnBdwAAnFc9x5uspUn1835xqpb/T5ZJsSguzBMnxbSeODf480OA86rnBLx0UgKrGSxgBXR/Bvu+WLkBsHF0edTz+j74hjxFq2uwIP3Cst+/Bk9MipP3z08CbBpdHvVD+Jesp68e/AZpgPOq5w+8kfyG2ByA86rzb9EA6+HnwQA7BeC86gADrAdggJ0CcF51gAHWc+SBDz8Ay/AXwEvSPcBlax7gogUAlgG4JN0DXLbmAS5aAGAZgEvSPcBla/74Are8aw/CBa+pre7b63352LvnefPr+/bdu7Pmt8VG47FhxnqFW96vPkj0v68nGyH9OV97INtsVBa4O78uPuRCvS2YotX9e30z2Eu8Kk3xObFv17u+5v/wwxG6w7pPWRb9PJzX+jeM0kIoOrynhtyRbX4n/eEyRwe401DTT9XFwvbNdfkamvb69lp/RUxeeVB0aO+j3v01/9N33/QMh0YZB1h09emduH/TKC2Ao4HvqSGLVb/1RvrDZY4QcNOXOjIfeA05GQ0TWO313fAFVi9tS+yrHSofH4pZrOyHZCzgpv/D+1r/hlHaAPcH3lVDlqfo96oJ3PLq+gwWX8vidLX91ppxr3AGt+rhxt/SDpWvl2y+2xg+hoxmsOzfNEqXGSwTDLlTTWBfvwY3FLD+3JN7qWtw717TD16UTkO7EqoZ3PBzm8HRNTjo3zRKl2uweh7qjuJv3k9/uMzRAQ7uKPfuqjvjurpLNSGpu2ixl9hJ3HIG+8aHBjO4JSvDM/5ddNS/aZTWd9Hhc24E3z9U9i5aC98Hp68DXLbmAS5aAGAZgEvSPcBlax7gdC9BAe/GG4zb6AFOCWx6x+ulDN42m/pwgE0BGGCAbeoAA+wUgAE2BmCAAbapAwywUwAG2BiAAQbYpg4wwE4BGGBjAAYYYJs6wAA7BWCAjQEYYIBt6gAD7BSAATYGYIABtqkDDLBTAAbYGIABBtimDjDATgH4GAI/mo4WH6/Gm1dm/N252pQ2HoDdy+UA3rkYAy/WZmTl1tV4PAC7lwsHFpP17OpKbWrngngU6zvviBksNv/ybTEYkfaBSfnbuZ/tj3Fjbsn2l40Pfl3MOXTglWnxIWbwykx/RkvgnQucom2eXfr6oQOLU/HWeQG8WKuF1101g/vaAB91YG0GhxFL8XQG+CgDy0mrrsG7c/IaXItO0WpjPB6A3ct8HwxwJgEYYGMABhhgmzrAADsFYICNARhggG3qAAPsFIABNgZggAG2qQMMsFMABtgYgAEG2KYOMMBOARhgYwAGGGCbOsAAOwVggI0BGGCAbeoAA+wUgAE2BmCAUwIXH7fRA5z1S1Cy5gEuWgBgGYBL0j3AZWse4KIFAJYBuCTdA1y25o85cMu79kDVW57X9P2O59X37dNO7q2yd2ctWm0PVoOFqK2B7s2NDE870bIcZfIQgEc8h+78uvgQ9W5dvtzis99qDu7UTu6tlrzra9Fqe6AaLMRtJbvf18i/h6vD0tZaDkYZtZAc3tDjxykfceBOQ75iQV0sdN4bOYODvcVC76Pe/TV/+6ZS7NejarAQt5XsfqCRTqMdrA5NOz4kHKW2OvLZpapXHLjpi1dZ1Vtew2/V1aaBtJN7q0X12PXURGoPVIOFuK0B4GQjnWa7vzokbf0QOUptdfSzS1WvMHDLq+szWEwUCdJtDO7XTu6t1pRN3d9+a80PL+H1wRkctTVkBoeNWM5gOUpmcJzU1+CGfOm6o2ewdvELbIIXevg12DSDBxqxuwYHo+QaHCfVXfSnd9fl/Wld3fnum8CDd9F7Ym9l07un7mmTd9F7qq3wLroxcLyhkfR30XvRKLmLjsP3wQAXLQCwDMAl6R7gsjUPcNECAMsAXJLujwdwpm+jA1imZMBX9FxOrF25lKzuq2t7pukd4JEBGGCAbeoAA+wUgPOqAwywHoABdgrAedUBBlgPwAA7BeC86gADrAdggJ0CcF51gAHWAzDATgE4rzrAAOsBGGCnAJxXHWCA9QAMsFMAzqsOMMB6AAbYKQDnVQcYYD0AA+wUgPOqlx340XS0+Hg13rwyo40H4OwOLxB452IMvFgDOGX9SADvztXOrq7UpnYuiEexvvOOmsHPibTTxfIXey+PyOhqck/rpHw6+aUY4JVp8SFmsGANZzSn6LT1IzGDb131t84L4MVarTalNgOctn4kgLUZHAbgtPXSA8tJq67Bu3PyGlzjFG1XLzvwAQEYYIBt6gAD7BSA86oDDLAegAF2CsB51QEGWA/AADsF4LzqAAOsB2CAnQJwXnWAAdYDMMBOATivOsAA6wEYYKcAnFcdYID1AAywUwDOqw4wwHoABtgpAOdVBxhgPccEOKOk6R3gkckHONM6wDIAl6R7gMvWPMBFCwAsA3BJuge4bM0DXLQAwDIAl6R7gMvWPMBFCwAsA3BJuge4bM0DXLQAwDIAl6R7gMvWPMBFCwAsA3BJuge4bM1XHZhknExZ47gCq4w5qHGf0/HuPmUAPqrdp8xYwKT8AbjiAbjiAbjicQLenQv+yI54fPFqf8X+8J0LtZ+6rdpw7X3KP/Tes3ryK7Vabdqhe9s4AT+a9hflX1/ZeVlbsT98ZUb+0Z6XXXtXj4fee1ZPXuTt2w7d28YJ+D+uBn9Waeul2tnV/or94SKPZlQbToerx0PvPbsnLx4cureNE/CtcJByiK/csn6O8RE7F1dVG06Hq8dD7z27J//2bd+he9vYAy/Wzv61Ngls55B++M4v3g7asBpAVjPYrffEGWCc7rfO+y7d22asa7D8m5VjXAW3fuF22IbT4WNegx17z+rJK1mH7m3jfhctTnDj3MeGf/Jy2v3wYnrPqnv1RwIdurcN3wdXPABXPABXPABXPABXPABXPFUE3vzcrP/0tdmNiYmJZ2b9zVPnfH/p2YXN08tFD6yIVBL41EkFfFIsPr+w+cIZsfZ5gKuTzdNfmw2B/RvnNk//0vKTr3wV4Opk8/THZ/rAS5Obp393duMnAa5QBOXrX9eAf3DuX74OcIUiKDe/oJ2iP/nKV38f4ApFUt54JrrJOv2vXzvzFOAKRVKKb5X63yadXl6aBJhUNABXPABXPABXPABXPABXPABXPP8PAUVg51DWfQAAAAAASUVORK5CYII=",
                  "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"
                 ]
    },
    {
      "Index": "NDRE",
      "BoxPlot": ["iVBORw0KGgoAAAANSUhEUgAAAeAAAAHgCAMAAABKCk6nAAABg1BMVEUAAAAAADoAAGYAOmYAOpAAZrYzMzM6AAA6ADo6AGY6Ojo6OmY6OpA6ZpA6ZrY6kNtNTU1NTW5NbqtNjshmAABmADpmAGZmOgBmOjpmOmZmOpBmZmZmtv9uTU1ujshuq+SOTU2ObquOjk2OjsiOq+SOyP+PiaKQOgCQOjqQZjqQ29uQ2/+gynWq1H+rbk2rbo6r5P+zs7Ozs72zs8Gzs82zvc+zwdqzzee2ZgC2Zjq2kDq2tma2//+9z+G/x77Bs7PBs83BwdrBzefB2vLG2evIjk3Ijm7Ijo7Iq47IyP/I///Ns8HNs83NwcHNwdrNzc3N1c3N5//P4evZxrPawbPawcHawc3azdra2ufa3c3a8v/bkDrbtmbb25Db/7bb///h6+vkq27kq47k///nzbPnzcHn///r2cbr4c/r69nr6+Hr6+vy2sHy583y///1qHX/sn//tmb/trb/yI7/25D/29v/5Kv/5OT/583/8tr//7b//8j//9v//+T//+f///L///9mcvEoAAAV4ElEQVR4nO2dj3/bxnnGL6kVJ50bsVbbrZtr2WulZJOtGrVnOpsbL+PkNIl/jIvsZdJSVxMrryGjTLMmM5ZF3p/eOxwBHHkkDnjvIFDn5/noQ4Lg87543/vqBSCLShiHgharuwCoWrG6C4CqFau7AKhasboLgKoVI8a9A3mWT6qaGDFuVj3dEjlKeCtKO0deAA7cC8CBewE4cC8AB+4NGnAnurkln4ebUXR7X2z0WqXSJvFq45skS5kSCpRSqLVRfHcU2Yui5qxSxZZ4O4p+G78OGXD/9n4/Xsy+WIxOWzxHpQBn8fHG81GWMiWYqcxSirSWxHdVZH+ylDT/8InizIf/8Yf4OWTA4lt98GAvedHm33/ybSnAabza6KospUowUk0ppUhrSXxXRfYeT0xwmn/w8J56549b4Z+ixUIOn45WVXzPixXolwOcxKuNrpq/UiUYqaaUUgjwKL6rIjvNie+1NH//1l78jjhI4IA7UVMbm3hF5IWpNcU6VXp8MsGdonzzJtgopdQEq8gYYWvK+7HkO3/cCh0w1y9Mm6Pv9nITPHEN/maz4Pl5St68Ukpeg2Vkf3KCs1Jb8TuDR/tvAGB1ayl67SQDUw5wGq82vpxyBrCWUKCU4nfRg0d/GEX2JivRSpXvfP8vb8SPSV6tZ9QLwIF7AThwLwAH7gXgwL0AHLgXgAtoda5UrjcALqDV61LXrhfXbO/qanHv1LwADMB6bwBcQABsihHjABiArQJgrTcALiAANsWIcQAMwFYBsNYbABcQAJtixDgABmCrAFjrDYALCIBNMWIcAAOwVQCs9QbABQTAphgxDoAB2CoA1noD4AICYFOMGAfAAGwVAGu9AXABAbApRowDYAC2CoC13gC4gADYFCPGATAAWwXAWm8AXEAAbIoR4wAYgK0CYK23Uwf8YjndfLmbbO00Go3l3HoA+OwBPr66q+3/9PPcegD4TAE+WW9c3N1pLB1fEc/ZbvlfoO9WIOc/yb3mT87JbLVO9F4P4J1l8SUmeGclmejRAGOCw5jg+zf40WUBeENce5fk3qPLo7cBOAjA2gRre/PqAeAzA1gObXwNPlmX12B195ySBuCzDtgiAAZgqwBY6w2ACwiATTFiHAADsFUArPUGwAUEwKYYMQ6AAdgqANZ6A+ACAmBTjBgHwABsFQBrvQFwAQGwKUaMA2AAtgqAtd4AuIAA2BQjxgEwAFsFwFpvAFxAAGyKEeMAGICtAmCtNwAuIAA2xYhxAAzAVgGw1hsAFxAAm2LEOAAGYKsAWOsNgAsIgE0xYtx8Ap4rlesNgAP3AnDgXgAO3AvAgXsBOHAvAAfuBeDAvXMKuBPd3Brt6bXky99szQwxNGsVsqSDB3t8uBlFLafFTfPFG3G+nBISt/Td3hcvk+hyNYyvzNhBp9Y7n4D7t/fFl9oUDYjt56OXRTRjxbKk/ejWHu81xaL/a4nSJtOm+dRGnK89s4TMHfuGT9Lv2FKAJ1Zm7KBT651PwOJ7Uw6Z0PeffNsSD/vPm8VzzFixNOnwq+HTPXVm+G2J0ibTpvnURpyvNcOrtyRftAcP70XN3HKn1zCxMmMHnVrvnAJuc8kgPpf2W/Kb9R+KD/BMwElSHj/Ls9tjJ8BJPrUR58sBnB1dDnFfnkPaeeVOr2FiZcYOOrXeOQTciZrZcERCLXEi+p9/3rPGJpq2YnpSni51z+MEj3bNKkE7emc0uv3WzHJn1jCxMmMHnVrvHALmY9dguQyihT89cAM8nlQCFmM0+OLfS5RmuQbH+bZmeDX3cFMOroRLmeCJlRk76NR65xOwulccPIqXT52IZtxJTFPuXXScNJ5gcR/bdr+LlvnUnW1HK3LWXbRwd9ToddLbX8JddLoyYwedWu+cAjaEn4OJXgAO3AvAgXsBOHAvAAfuBeDAvW8i4Lo/NTfxsTkAlvIKmPyRVT8fhQXgKQJgoheAAZgkRowDYKfWTC8AAzBJjBgHwE6tmV4ABmCSGDEOgJ1aM70ADMAkMWIcADu1ZnoBGIBJYsQ4AHZqzfQCMACTxIhxAOzUmukFYAAmiRHjANipNdMLwABMEiPGAbBTa6YXgAGYJEaMA2Cn1kwvAAMwSYwYB8BOrZleAAZgkhgxDoCdWjO9AAzAJDFiHAA7tWZ6ARiASWLEOAB2as30njrgF8vp5svdZOtkvfHjG7n1ADDRWyPg46sp4ONfJlsA7NSa6a0HsJjYi7s7jaXjK+JZvD76Rfz8jlB3TNX8+eY1zyqZ0VMX3UKqB/DOsvgSE7yzol6Lh6NfxW9jgp1aM731AL5/gx9dFoA3Go3GkrYfgB1bM721T3AsOckrufUAMNF7+oDl0MbX4JN1eQ1ujK7Jo0EGYKfWTC9+DgZgkhgxDoCdWjO9AAzAJDFiHAA7tWZ6ARiASWLEOAB2as30AjAAk8SIcQDs1JrpBWAAJokR4wDYqTXTC8AATBIjxgGwU2umF4ABmCRGjANgp9ZMLwADMEmMGAfATq2ZXgAGYJIYMQ6AnVozvQAMwCQxYhwAO7VmegEYgElixDgAdmrN9AIwAJPEiHEA7NSa6QVgACaJEeMA2Kk10wvAAEwSI8adCuC6VV1rpvdNBFx92jnyAnDgXgAO3AvAgXsBOHAvAAfuBeDAvQAcuDckwJ3o5lbs7URRO3uZpylp0zC10YuiZvESsrzZ0QcP9vhwM4pasw5TtFhrvXJLPWbegAD3b++LL7HxvCkXNX2ZJzNtGqY2+oJup120hCxvdvR+dGuP97I0k4dpdosWm1/v8MlW+qh5AwLca8XDEnvFRvoyT2baNExt9B7TJjhNM/xq+HRPJuMdfYS16rpFi82vd/DwnqhUPWrekAC3uVxLdX5sZS/zNGXBkjC10WnGWwVLyPJqR5fP8hT9eAxw9v6XRYvNr7cvTxRt9ah5QwHciZr6BItvbMoE61lGEywWq98qVMJYXu3oCbnerAkuWuzUGsYiVaVj9YYCmOvX4Jbs2981mDLB2tElYJFm8IV+F5UdptUtWqylXtl1Wz1q3oAAq/vJwaN9eRfddLuLFlmyu+hW8RKyvGkaNcHqXnn6YYoWa61XVtqZqDckwATv/Py8WpUXgAP3AnDgXgAO3AvAgXsBeJbq+gyer9YA2GJd/d8JfTe5I0ead9VINCEAlgLgsq0BsMUKwLlixDgA9tUaAFusAJwrRowDYF+tAbDFCsC5YsQ4APbVGgBbrACcK0aMA2BfrRUBfHjh93/97PDCsxJZEzFCjBQA+2qtGOCvSXQ5AM8x4MPz7O27Ymxff7h2+Bd/yc59feEfFznfXuTbjC0Wzs5KVKILgH21Ngvwq5+u8e2FEWA5wfGDfPHeXfleQbESlegCYF+tzQKsLrljgJ99tHb4Pj9Y4PzOpaLZWYlKdAGwr9asgMW4JoAPFgRZAA4DsDwNH5z7+r27h++mgF/9/Od3OU7RYQBWN1n8DvvBXwnAv//JOXkjfUdMr7zJKjzAADy/gP2IEeMA2FdrAGyxAnCuGDEOgH21BsAWKwDnihHjANhXawBssQJwrhgxDoB9tWYDXOawU8SIcQDsqzUAtljDBUz+wxldjBgHwL5aywFMPbouRowDYF+t1QD4xXK6+XI3272zwk/WGz++MaueWABctrWygA/Pl/ldgwXw8dUM8EZjhR//MnkFwL5aKwn41c/u8hK/LZwNWAzrxd2dxtLxFfEsXh9/Jib46Bfxi3eEuu7y9Ge73/mRNZGncldXpy5G0ZusA/VxrNcfsHPPDn749j8x+TtFCuCdZfElJlhgHU202jr6VfwCE+yrtZITvK1Oz/Kzd4sHC/LjHdu5J2w2ZV8M9P4NfnRZAN5oNBpL8W4BmKfnbwD21VpJwPEE/9/dj9b44ftiW3wRAWsTPJLYkkO8MqserdpiAmDNW/gaLK6/rz+4pCaYClgObXwNPlmX1+BGeooWO9U0A7C31sr+Q4e6i1bXYCLgIgJgX63hnyotVgDOFSPGAbCv1gDYYg0dsKMYMQ6AfbUGwBZr6IBxigbgPDFiHAD7ag2ALdZwAU//h46SYsQ4APbVWg7g65oA+E0BfIexBd11kP+fc2AlKtEFwL5aKwnY+PNvAD67gKddg9Uf/se/a7izKHkf/JC9fffVT8Trw/PsrbWDiU8AsBKV6AJgX62VPUULgueexb8tfPWzu68/XJO/9V/cviQe/v8Z3740+QkAVqISXQDsqzXCTdb2Yvz7fnGqlv9NlkWxKS7MbEGMNbs0+ftDVqISXQDsq7WSgLcXJOB4ggVYATqZYM7FizsAfJYAT/05+I48RcfXYIH0R894cg1mi+Lk/TeLAHx2AI/6mx35+gP7B6RZiUp0AbCv1uiAD8Z/IJ4uVqISXQDsqzX8W7TFGjpgRzFiHAD7ag2ALVYAzhUjxgGwr9YA2GIF4FwxYhwA+2oNgC1WAM4VI8bNEeBTUzWtAXCFaefIC8CBewE4cC8AB+4F4MC9ABy4F4AD9wJw4N4AAHeim1ujjaidPBZSJ/qNiuSDB3vWSCKIpLzhZhTd3lePBfKmXXHeayUVjnv1xsXWZPmhAO7f3u/HS9ZvylUQj3+K18IuEfZcLXY/urU3ip9tpwHWy+Odtnq0503DZHGtUYXj3tQyfLLFuVl+KIDF93famNooClhEKuvwq+HTvSy+dAl5Xr083mtnj/l5s7DvP/m2lVbYnWYZPLwXNc3ygwHc5iM84iTVSh8LSER+M4pUGfIjiYCz8uIhTh4tedMweVJqpRV2p1n6Yrh7baP8IAB3oub4iMgWu70ChFVkMuwJg7xI5wnuNLNHW940rBcJtaYC1huPvwnGyw8CMNcvci3ZoXgsBJjr1+B4+VT8bLvjNXi42U4f7Xm1azCfMcHjjbeN8kMBrG4mB4/25W1kk48eCym+i5aRavkskS530eIgnXgUO6OBtOZNu5oJeKzxlll+MIBdvPPz82pVXgAO3AvAgXsBOHAvAAfuBWB+mp+vI8lpGQCYT/mErO2jsCTvrM/P2vICsIMXgKlixDgANuOclgGAOQBTxIhxAGzGOS0DAHMApogR4wDYjHNaBgDmAEwRI8YBsBnntAwAzAGYIkaMA2AzzmkZAJgDMEWMGAfAZpzTMgAwB2CKGDEOgM04p2UAYA7AFDFiHACbcU7LAMAcgClixDgANuOclgGAOQBTxIhxAGzGOS0DAHMApogR4wDYjHNaBgDmAEwRI8YBsBnntAwAzAGYIkaMA2AzzmkZAJgDMEWMGAfAZpzTMpwm4BfL6ebL3Wz3zgo/WW8s8dx6AJi4DPUAPr6aAd5orMh37t/IrQeAictw6oDFsF7c3WksHV8Rz+L18WdigsXuX38uihHqkuXwF7jfnYaohylQf86qnDrgnWXxJSZ4ZyWZaAn4+ApO0bN0xiZYnIqPLgvAG43G6LobT3BCG4DNOKdlqHOCRxJb2TgDsBnntAynClgObXwNPlmX1+BGeoqOd+bWA8DEZcDPwRyAKWLEOAA245yWAYA5AFPEiHEAbMY5LQMAcwCmiBHjANiMc1oGAOYATBEjxgGwGee0DADMAZgiRowDYDPOaRkAmAMwRYwYB8BmnNMyADAHYIoYMQ6AzTinZQBgDsAUMWIcAJtxTssAwByAKWLEOAA245yWAYA5AFPEiHEAbMY5LQMAcwCmiBHjANiMc1oGAOYATBEjxgGwGee0DADMAZgiRowDYDPOaRkAmAMwRYwYVw/g+ZbTMgBw4F4ADtwLwIF7AThwLwAH7gXgwL0AHLgXgMt5O9HNLZ5tdCL1Ot3NBw/24t3tKRkS13Azim7v814UNUvXkB2J91pxppZelNwaywvApbz92/viK90YPlELm+7m/ejWHu83uzHnCWXBYv07bfVYsobsSOJQLd6TOf4t2afKGc8LwKW8YmgUOrUxeHgvHpZ09/Cr4VP5PBVw6opftHuPCROc5fj+k29bMiXvfJzsU+WM5wXgUt5emyuCaqMvxlVsZbv56PlLMV2GNJccs04z3lUScJJDIO2rU/Tjj5N9qpzxvABcyjsxwXK3WGZ9NkcTHM/WhDRXAkEG0yZYXGgj9V3U+1g/M/Rb43kBuJR34hocw23r1+AYcL81FXDqGm7KW7A+ZYK1I0mKIsfgi/9Mi4rL6WOCHdLGN6yDR/vZXXRrbLea4I66Ck4qcXXU9PVUMOEuOj5SzDO+X9eKkhnH8gJw4F4ADtwLwIF7AThwLwAH7gXgwL0A7Nlbz4fxZtcLwJ69q9elrl3P1eqq9sLiHZPuBWC/VgAeEyPGATAAWwXAWr0A7NkLwPkCYAC2CoC1egHYsxeA8wXAAGwVAGv1ArBnLwDnC4AB2CoA1uoFYM9eAM4XAAOwVQCs1QvAnr0AnC8ABmCrAFirF4A9ewE4XwAMwFYBsFYvAHv2AnC+ABiArQJgrV4A9uwF4HwBMABbBcBavQDs2fvGA36xnG6+3M1276zw3HoA+OwBPr6aAd5oAHBIgE/WGxd3dxpLx1fEs3h9/Fk8we8Idc+KZv3V7rUCKuayJjFlllkP4J1l8SUmWGAdTTRO0UFN8P0b/OiyALzRaDSW4t0AHBRgbYJHAuBgAMuhja/BJ+vyGtzAKToswBYBMABbBcBavQDs2QvA+QJgALYKgLV6AdizF4DzBcAAbBUAa/UCsGcvAOcLgAHYKgDW6gVgz14AzhcAA7BVAKzVC8CevQCcLwAGYKsAWKsXgD17AThfAAzAVgGwVi8Ae/YCcL4AGICtAmCtXgD27AXgfAEwAFsFwFq9AOzZW93/TdZQoXoBOHAvAAfuBeDAvQAcuBeAA/cCcOBeAA7cC8CBewE4cC8AB+4F4MC9ABy4F4AD9wJw4F4ADtwLwIF7AThwLwAH7p07wJBn+aSqiVWUt4gq6qmqpTpreZVYpdnzBcCV5lVilWaHaheruwCoWrG6C4CqFau7AKhasXoOe7Ku/jc9yfP8Jj2dvBd3bWaqWFWJ8/VimW+sqOf7NypIurFidZPy+itWy7uzwnd81jsmVlXifP33jeR/pXby6899J82S+83rtVgt76d/G94E30/W7PiKv7NekvS+Z8CVFKvl3VjxW++YWFWJc7TRuPi7jIG/3qqf4Gryfvp5YID52OXHX29VX4O9FjuRN7RrcHwDeXx11+sNpJbU/92u72IrzDsmVlViaD7E6i4Aqlas7gKgasXqLgCqVqzuAqBqxeouAKpWrO4CvOvw3TX++sO1A8bYW2v88Lx4XuCjV2+gWN0FeNfh+YUY8ILYfO/u4YVn/NVP41dvpljdBXjX4YW/WxsB5ncuScDiCYDD0eGFr99PAG8vJhMsTtHnntVdWh1idRfgXQLpR3+fAZbX4EWOCQ5HAvDhj/RTtBhgAA5I8qR85y39Jks8AXA4ipG+m/6YFN9knfsv8Ypdqru0OsTqLgCqVqzuAqBqxeouAKpWrO4CoGrF6i4Aqlas7gKgasXqLgCqVn8G11P126/NSnsAAAAASUVORK5CYII=",
                   "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"]
    }
  ]
}


indicesPromedioPorLoteConfig.hardcodedData2 =
{
"Farm": "McCain_Renhard Bdy LN Peas",
"Position" : "horizontal",
"InformDate": "16/1/2019",
"InformDataDate": "-",
"Season": "2018-19",
"Language": "EN",
"Title": "Renhardt bdy Peas F20",
"TotalHas": "163.73",
"Images": {
  "MapaLotesYCultivos": "1XCiHjXsz2vd1J45t82bizcui-HXrG-5y",
  "Indexs": [
    {
      "type": "NDVI",
      "image": "1ETiEWCVxKGKDP4J_vfdCuqMB2TpogtMp",
      "averagedImage": "1qAHBRFQuLt8ir0hXoAMySrtTXCzn_AK7",
      "colorColumn": "#448809",
      "date": "22/02/2018 12:00:00 AM"
    },
    {
      "type": "NDWI",
      "image": "1K3qWL-pmhtYcNhgYgMoERC2wQFSYtvAH",
      "averagedImage": "13TIO6P1SUnZnlKXD6gee-2KpFiOPQwjy",
      "colorColumn": "#C9C5DF",
      "date": ""
    },
    {
      "type": "NDMI",
      "image": "1QKbwlTSGrX2BkBOABJH6aTOIYpqh4ziK",
      "averagedImage": "19ioIs-YoOdrVjRvOSsJrm_zxcweidV4E",
      "colorColumn": "#007DFF",
      "date": "15/12/2018"
    },
    {
      "type": "NDRE",
      "image": "1d7XaAqXsYUf9oH1o8iYTdLb1fn5wOxh8",
      "averagedImage": "1zcwFsW4dCvaDF631fausAeTtWzNGqFC9",
      "colorColumn": "#388457",
      "date": "15/2/2020"
    }
  ]
},
"Lotes": [
  {
    "FieldName": "Lote 1",
    "Crop": "Soybean",
    "CropId": "2",
    "CropDate": "21/01/2018",
    "HibVar": "- No asignado -",
    "Color": "#55AA00",
    "Has": 6,
    "Indexs": [
      {
        "type": "ndvi",
        "mean": "0.3",
        "std": "0.39",
        "min": "0.2",
        "max": "0.9",
        "firstQt": "0.3",
        "median": "0.4",
        "thirdQt": "0.72"
      },
      {
        "type": "ndre",
        "mean": "0.25",
        "std": "0.26",
        "min": "0.05",
        "max": "0.56",
        "firstQt": "0.13",
        "median": "0.26",
        "thirdQt": "0.49"
      },
      {
        "type": "ndmi",
        "mean": "-0.07",
        "std": "0.32",
        "min": "-0.36",
        "max": "0.30",
        "firstQt": "-0.18",
        "median": "-0.06",
        "thirdQt": "0.10"
      },
      {
        "type": "ndwi",
        "mean": "-0.46",
        "std": "0.22",
        "min": "-0.73",
        "max": "-0.31",
        "firstQt": "-0.58",
        "median": "-0.46",
        "thirdQt": "-0.40"
      }
    ]
  },
  {
    "FieldName": "Lote 5",
    "Crop": "Soybean",
    "CropId": "2",
    "CropDate": "30/12/2018 13:00:00",
    "HibVar": "2",
    "Color": "#55AA00",
    "Has": 42.79,
    "Indexs": [
      {
        "type": "ndvi",
        "mean": "0.61",
        "std": "0.45",
        "min": "0.32",
        "max": "0.75",
        "firstQt": "0.52",
        "median": "0.61",
        "thirdQt": "0.69"
      },
      {
        "type": "ndre",
        "mean": "0.19",
        "std": "0.44",
        "min": "-0.48",
        "max": "0.49",
        "firstQt": "-0.19",
        "median": "0.09",
        "thirdQt": "0.25"
      },
      {
        "type": "ndmi",
        "mean": "-0.06",
        "std": "0.41",
        "min": "-0.31",
        "max": "0.503",
        "firstQt": "-0.16",
        "median": "-0.04",
        "thirdQt": "0.35"
      },
      {
        "type": "ndwi",
        "mean": "-0.43",
        "std": "0.46",
        "min": "-0.72",
        "max": "0.46",
        "firstQt": "-0.53",
        "median": "-0.32",
        "thirdQt": "0.10"
      }
    ]
  },
  {
    "FieldName": "Lote 7",
    "Crop": "Soybean",
    "CropId": "2",
    "CropDate": "-",
    "HibVar": "2",
    "Color": "#55AA00",
    "Has": 20.14,
    "Indexs": [
      {
        "type": "ndvi",
        "mean": "0.32",
        "std": "0.39",
        "min": "0.15",
        "max": "0.68",
        "firstQt": "0.21",
        "median": "0.32",
        "thirdQt": "0.6"
      },
      {
        "type": "ndre",
        "mean": "0.25",
        "std": "0.26",
        "min": "-0.24",
        "max": "0.57",
        "firstQt": "-0.02",
        "median": "0.24",
        "thirdQt": "0.46"
      },
      {
        "type": "ndmi",
        "mean": "-0.07",
        "std": "0.35",
        "min": "-0.28",
        "max": "0.75",
        "firstQt": "-0.13",
        "median": "-0.08",
        "thirdQt": "0.30"
      },
      {
        "type": "ndwi",
        "mean": "-0.49",
        "std": "0.24",
        "min": "-0.75",
        "max": "0.06",
        "firstQt": "-0.49",
        "median": "-0.30",
        "thirdQt": "-0.14"
      }
    ]
  },
  {
    "FieldName": "Lote 13",
    "Crop": "Corn",
    "CropId": "3",
    "CropDate": "",
    "HibVar": "2",
    "Color": "#FF6600",
    "Has": 20.14,
    "Indexs": [
      {
        "type": "ndvi",
        "mean": "0.32",
        "std": "0.39",
        "min": "0.05",
        "max": "0.63",
        "firstQt": "0.12",
        "median": "0.32",
        "thirdQt": "0.48"
      },
      {
        "type": "ndre",
        "mean": "0.21",
        "std": "0.32",
        "min": "-0.33",
        "max": "0.53",
        "firstQt": "-0.13",
        "median": "0.22",
        "thirdQt": "0.41"
      },
      {
        "type": "ndmi",
        "mean": "-0.14",
        "std": "0.44",
        "min": "-0.38",
        "max": "0.59",
        "firstQt": "-0.23",
        "median": "-0.15",
        "thirdQt": "0.28"
      },
      {
        "type": "ndwi",
        "mean": "-0.44",
        "std": "0.32",
        "min": "-0.73",
        "max": "0.21",
        "firstQt": "-0.63",
        "median": "-0.42",
        "thirdQt": "-0.10"
      }
    ]
  },
  {
    "FieldName": "Lote 15",
    "Crop": "Corn",
    "CropId": "3",
    "CropDate": "12/28",
    "HibVar": "2",
    "Color": "#FF6600",
    "Has": 20.14,
    "Indexs": [
      {
        "type": "ndvi",
        "mean": "0.42",
        "std": "0.39",
        "min": "0.02",
        "max": "0.81",
        "firstQt": "0.15",
        "median": "0.42",
        "thirdQt": "0.7"
      },
      {
        "type": "ndre",
        "mean": "0.21",
        "std": "0.32",
        "min": "-0.30",
        "max": "0.55",
        "firstQt": "-0.06",
        "median": "0.19",
        "thirdQt": "0.30"
      },
      {
        "type": "ndmi",
        "mean": "-0.25",
        "std": "0.39",
        "min": "-0.46",
        "max": "0.52",
        "firstQt": "-0.33",
        "median": "-0.26",
        "thirdQt": "0.12"
      },
      {
        "type": "ndwi",
        "mean": "-0.43",
        "std": "0.3",
        "min": "-0.84",
        "max": "0.31",
        "firstQt": "-0.51",
        "median": "-0.22",
        "thirdQt": "0.10"
      }
    ]
  }
],
"BoxPlots": [
  {
    "Index": "ndvi",
    "BoxPlot": [
      "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"
    ]
  },
  {
    "Index": "NDWI",
    "BoxPlot": [
      "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"
    ]
  },
  {
    "Index": "NDMI",
    "BoxPlot": [
      "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"
    ]
  },
  {
    "Index": "NDRE",
    "BoxPlot": [
      "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"
    ]
  }
]
}
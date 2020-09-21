puntosPorAreaConfig = {
    objSet: {},
    imagesSizes: {},
    strLang: [],
    hardcodedData1: {},
    hardcodedData2: {},
}

puntosPorAreaConfig.imagesSizes = {
    smallImage: {
        width: 270,
        height: 237
    },
    tinyImage: {
        width: 180,
        height: 140
    },
    chartImage: {
        width: 630,
        height: 500
    }
}
puntosPorAreaConfig.objSet = {
    templateId: "13c2LgGUgt4Tu9zfzNI4Ur_t8byWsoeCRVv_AN1GQDrE",
    strDestFolder: "Reports",
};

puntosPorAreaConfig.strLang['ES'] = [];
puntosPorAreaConfig.strLang['EN'] = [];
puntosPorAreaConfig.strLang['ES'] = [
    ["{str0}", "Informe"],
    ["{str1}", "Rendimiento por"],
    ["{str2}", "Fecha del informe"],
    ["{str3}", "Mapa de {rindeType}"],
    ["{str4}", "Mapa de Rendimiento - Lote"],
    ["{str5}", "Unidad"],
    ["{str6}", "Fecha de Cosecha"],
    ["{str7}", "Contratista"],
    ["{str8}", "Team"],
    ["{str9}", "Humedad media"],
    ["{str10}", "Velocidad media"],
    ["{str11}", "Rinde medio seco"],
    ["{str12}", "Desvío estándar"],
    ["{str13}", "Rinde medio húmedo"],
    ["{str14}", "Altitud"],
    ["{str15}", "Campaña"],
    ["{str16}", "Establecimiento"],
    ["{str17}", "Lote"],
    ["{str18}", "Superficie"],
    ["{str19}", "Información de {rindeType}"],
    ["{str20}", "Sup"],
    ["{str21}", "Rendimiento"],
    ["{str22}", "Comentarios"]
]
puntosPorAreaConfig.strLang['EN'] = [
    ["{str0}", "Report"],
    ["{str1}", "Performance by"],
    ["{str2}", "Reporting date"],
    ["{str3}", "{rindeType} map"],
    ["{str4}", "Performance Map - Lot"],
    ["{str5}", "Unit"],
    ["{str6}", "Harvest Date"],
    ["{str7}", "Contractor"],
    ["{str8}", "Team"],
    ["{str9}", "Average humidity"],
    ["{str10}", "Average speed"],
    ["{str11}", "Performance mean dry"],
    ["{str12}", "Standard Deviation"],
    ["{str13}", "Performance mean wet"],
    ["{str14}", "Altitude"],
    ["{str15}", "Campaign"],
    ["{str16}", "Establishment"],
    ["{str17}", "Lot"],
    ["{str18}", "Surface"],
    ["{str19}", "{rindeType} Information"],
    ["{str20}", "Surf"],
    ["{str21}", "Performance"],
    ["{str22}", "Comments"]
];

puntosPorAreaConfig.hardcodedData1 = {  //Prescripcion
    "Language" : "ES",
    "Farm": "La Rinconada",
    "Lote": "Retiro Grande",
    "InformDate": "2019/08/15",
    "Crop": "Maiz",
    "Seasson": "2018-19",
    "Has": "265",
    "UrlTumbnailImage": "1wKwX_D_A2F6VgWMizPh8yL0vf8aaGadB",
    "Performance": {
        "UrlImage": "1b8JbJp1mIWnH6TDNXoVOfmUm_2VyCvY9",
        "CropDate": "DD/mm/AAA",
        "Contratist": "-No Asignado-",
        "Team": "John Deere",
        "MeanMoisture": "11.20",
        "MeanVelocity": "3.83",
        "MeanYieldDry": "9.1",
        "MeanStd": "1.05",
        "MeanYieldMoisture": "9.55",
        "Altitude": "110"
    },
    "RindeType": {
        "Type": "Prescripción",
        "UrlImage": "1tnS-9Bu5IbL3eHri4CliGc7EGSu494eP",
        "Description": {
            "Tipo de Prescripción": "Siembra",
            "Insumo": "Hibrido",
            "Cultivo": "Maiz",
            "Rinde estimado": "9.15",
            "Fecha estimada aplicación": "DD/mm/AAA",
            "Capa Base": "Mapa de Productividad"
        },
        "ColorLabelsReferences": {
            "Unidad": "Semillas"
        },
        "Data": [
            {
                "Index": "5100",
                "SurfaceHas": "190.00",
                "SurfacePercent": "71.70",
                "Color": "#BBDD00",
                "Performance": "9.04"
            },
            {
                "Index": "5900",
                "SurfaceHas": "28.30",
                "SurfacePercent": "9.24",
                "Color": "#3C78D8",
                "Performance": "9.24"
            }
        ]
    },
    "ChartBase64Image" : "iVBORw0KGgoAAAANSUhEUgAAAeAAAAHgCAMAAABKCk6nAAABcVBMVEUAAAAAADoAAGYAOpAAZrY6AAA6ADo6AGY6OmY6OpA6ZmY6ZrY6kNtNTU1NTW5NTY5Nbm5NbqtNjshmAABmADpmAGZmOgBmtttmtv9tmuJuTU1uTY5ujshuq+Rzc3Nzc4xzjLxzm1JzpNN4c4B4e5V9c4B9fZyCc2OCh1uCr0mGeHOGgZyMc3OMc4yMc6SMjLyMvOmOTU2OTY6ObquOjsiOq+SOyP+QOgCQOjqQOmaQfYCQf4iQgZyQ2/+Rc2ORc2uRwUGhh2uh1EGkc4ykc6SkpIyk0/+rbk2r5P+wm3Ow5kG2ZgC225C2/7a2//+8jHO8jIy86f++r2u+5kHIjk3Ijm7Ijo7IyP/I///MwWPM1FvM5kDM5knM5lLTpHPT///bkDrbtmbb25Db29vb2//b/7bb/9vb///kq27kq47k///pvIzp////tmb/yI7/06T/25D/29v/5Kv/6bz//7b//8j//9P//9v//+T//+n///8V1ITqAAANCklEQVR4nO3d+0MT2RmH8aywa2mJrahtahfa2nvtbasG20K73V5kS2UvxWrXrsvai4gLpkhE56/vmcmFEGaGQ86w856vz+cHEhLITubxzJxJJmwjgbRG3QuA00VgcQQWR2BxBBZHYHEEFkdgcQQWR2BxBBZH4GAPFhb+nF6+fG9h4Up65ckv6l2gQwgc6um3Pnv5/gfuypMrrrFL/ewnBFaSjtfhmHVXXr7/JwIrSUfwe/2kz//4iWvMJlrLg4Vv9sfs8z98kDz7+WcElvMgm2U9+6nbFT9ZcAwVJnCop1eSZz/7JEmWfvOdq0tL6S2MYC3ZYdLz7139cTp2v5sQuNDggDJ52r9iak2VWxqqe0nGGAo8PKB0c5Vso2frgLLU0pLVwoYCDw8o3UQ0LW3sgLLMEoE9DA8o3bQlnZcaO6Ass2S3sKHAwwPKXmBrB5RltAPfr9C7b7svH/3wb//8/TsfppPSH1X1wOFPc9R4SgL7+Me373/0g7+4Kx//7p3elQ8r6xsYuCjo+PcELvXuwsLb9z/+7dWlXy8sfD+94XML7BvwuN+319dU4J7Beqr2UQ8vcmjQIwjs7WBFncKDDha5+hZW+5oLPDoUwh9l/PvwJ1vIaF9rgZf8AhcFLPq+6ll0Hpt9TQdeOnKzf9Bx4U8zUqYDnyDgccKfZqTiCBwu/GlGynTgCh84/GlGynLgKh84/GlGyljgig6Tjgp/mpGyFvh0XuggcIhKQ3w+L1W+QuwFvn8afQkcoOIUpyP8aUaKwOIILI7A4ggsjsDiCCyOwOIILI7A4ggsjsDiCCyOwOIILI7A4ggsjsDiCCyOwOIILI7A4ggsjsDiCCyOwOIILI7A4ggsjsDiCCyOwOIILI7A4ggsjsDiCCyOwOIILI7A4ggsjsDiCCyOwOIILI7A4ggsjsDiCCyOwOIILI7A4ggsjsDiCCyOwOIILI7AcdtsNpvz7vLFrea5lbwfIHD0/n7PfeleL7iXwLHbSQdwsnu5eX4r724Cxy4bwGnm3Rt5dxM4crtvDq71hvI4Akeun3Wzney08+4ncORc2aR7bcvNoudy7yewOAKLyw/sxn125Fw48EfV3c5L1estGrmB15vt3pGz24Ov5+66R9XdzkvlKy4WeYG7d90Izo6cH68UTL5H1d3OyymsujgUbqKzI+c7BI5dYeAk3UAzgqNXGDg7cmYfHL2yWfRcwiw6ehwHiyOwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCiyOwOAKL6wfeu9DoO7N20oeou52XqtdbNAaBL62NXfFXdzsvVa6zqLCJFncQeHvabadbEzxE3e28VLfGIjMMvH9zeWO6M/Po5A9RdzsvVa6zqAwDu53v6uwEe2AC23Ywgn91++IyIzhug4OhkUOhkX1wY+o/F5cneNS623mpYO1FYmP20KEQs2g1hYE3JnuZg8DGrBYE3ru4vNranp7gEetu56WKVReFjUZR4EtrG8yiY7d3Yerh2bXtqYO58uhx8PY0geO2d2E6HcOvjcyVR2bRU/9ddMP75Opu5yV85cVg/99HbmIWLSU9ED48UR57u5BZdNT2F908eXQPfGgEr07yTkNCYEPcHGp8IkXguL241Ty30ruc68+UGcFKutd7lzvzyXo7STozn+bvg1MEjtDu5eb5LXf5eCVtnIPAcXNVd2+4yztZ4N5c+UzOPphZdLyykTsygg+/3sxxcNw228mO2/cO9sGp3Fk0Z1VGKps9d69t9WbRmc7Zkk10fyPt/l1kvzHya8Xqbuel6hVrUy/jodebczfR6812b8yPDPxidbfzUtUqjE5e4O5dN4KzvXbh5HtU3e28nMKqs2h/seC16DEucDbvvkPgqOwvttK3BQteyRrBCI5TNkUuei3a7aC/drP/TvEm++A4pS9WFRwHu9G92hqcF80sOk5l50Wnn2xoccqOnMMj+PD+2VPd7bxUuc7s6r8WfTv3vOijZ3t4qrudlwrWXpx4LVpJ8btJSXb41HmDzybFr/Ol0e9Gz4tOTwhgHxy9guPgnGNkT3W381LBiotA2ZsNOa9yeaq7nZfwlReNgk00s2gVhafNTqrudl7Cn2YMepvovJcq9y7dPjrD9lR3Oy9VrL4oHQSeZH6Vqbudl8pWWGwGm+hVzqoUUPZS5URHSJm623kJXXXRIrCUwo+PElhC6cdHJ/3kCoHtKPv4aM4bEZ7qbuelgrUXgfKPj06q7nZewp9mFMo+Pjp60t2J1N3OS+iai1b+SXcnUnc7L1WuM7vK3vDnpDsVZafN8nahgJIT33m7UEHux0dD1N3OS/jTjEHpx0fTOyfZQhPYmIJNNKfsCEg/PTr2lj8n3SkZRPxfzp8TTv9SeMIfBJcz9lo0/+/CuJW8XTi5utt5CX+aMSj7hD/vJgko/YR/apu/+B61Y/9GB7PoyB23Dz78Kpenutt5CVptMRvbB7OJVsMsWtwg8N6FVrLKu0l6hp9saKWzL16LljPy54TH/reV3upu56XatRaRg8Dp33AgsJx+YHeEnB4ibfBmg5rBPrjzeqO1v8gb/nI4TBJHYHEEFkdgcQQWR2BxBBZHYHEEFkdgcQQWR2BxBBZHYHEEFkdgcQQWR2BxBBZHYHEEFkdgcQQWR2BxBBZHYHEEFkdgcQQWR2BxBBZHYHEEFkdgcQQWR2BxBBZHYHEEFkdgcQQWR2BxBBZHYHEEFkdgcQQWR2BxBBZHYHEEFkdgcQSOW/et5pfvucsXt5rnVvJ+gMBx22wnm/Pusnu94AcIHL2dtvuye7l5fivv3sLA2Zh3X+aO/Q/U3c7L5OvPuu61NOzOfLJ7I+/uwsDZmHe/tt4+7r9Qdzsvk69A47q/vNe/tjOfd39h4GzMP14p+LVRdbfzMuHqM2/3G72+bl+8kzsUCwNnY/4OgY1bbzab824rXbgzLZtk7cwzgqNXGDgb8+yDo1c2i55LmEVHj+NgcQQWR2BxBBZHYHEEFkdgcQQWR2BxBBZHYHEEFkdgcQQWR2BxBBZHYHEEFkdgcQQWR2BxBBZHYHEEFkdgcQQWR2BxBBZHYHEEFkdgcQQWR2BxBBZHYHEEFkdgcQQWR2BxBBZHYHGvcOCvxyC4DoFtC65DYNuC6xDYtuA6BLYtuA6BbQuuQ2DbgusQ2LbgOgS2LbgOgW0LrkNg24LrENi24DoEti24DoFtC65DYNuC6xDYtuA6BLYtuA6BbQuuQ2DbgusQ2LbgOgS2LbgOgW0LrkNg24LrENi24DoEti24DoFtC65DYNuC6xDYtuA6BLYtuA6BbQuuQ2DbgusQ2LbgOgS2LbgOgW0LrkNg24LrENi24DoEti24DoFtC65DYNuC6xDYtuA6BLYtuA6BbQuuQ2DbgusQ2LbgOgS2LbgOgW0LrkNg24LrENi24DoEti24DoFtC65DYNuC6xDYtuA6BLYtuA6BbQuuQ2DbgusQ2LbgOgS2LbhOeeAXt5pzxz5E3e285Cx33e28TJj1QHngnflkvX3cQ9TdzkvOctfdzstxK38wBAuHYnngxytpY9g1GIKFQ7E88B0CGzcYgoVDkREct8EQLByKFeyDUaPAEew1i0aNAvfBsC4bgt1rWxPOohE9AosjsDgCiyOwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDgCiyOwOAKLI7A4AosjsDhLgV/cap5bSZLNdu9cwVjO2c0Wu/vWYImNLbalwN3r6df1Zrt3lm8sZ91ni+3+Ve60LS62pcC7l5vnt7p33brKztOP5XMz2WKngecsLralwG697N7IBkP2SZtYPvmWLbbbRH/lTYuLbSlwkq2sJLYRnPQWe7DExhbbUuBsP9a7MLgzK5Qttvuyzj74GP35Z4Sz6LnxL3ZYCoxTQGBxBBZHYHEEFkfgVOfsWt2LcFoUA3debzReWy65f+bR2HcbrVNfqLpIBnbJtqceHf+DQ/86tWWpnWrgzszDL3z1zNp2ozGd7C82GrPZwD6z1nG3/jW9z93ev2Xm0UZ6f+eLF9Lb1KgG3p56+MZydm21tT2d7F1a27u4nGxMd7Jb3X37i63+LTMPz6Z3uv2w+6m6l71ykoGzfXCWueHMuu+nB3ve/uhO97uzg1s+dfeuttx3+zdL9tyRkgw8TLnd3+a6xC0CyxhJmW2KN9KAs+kG2W24e4GHm+j0lv4mmsCxOAicZJOsZLXRcJPqwZSqNwEbm2S1EgILOXwkLI3A4l7NwK8QAosjsDgCiyOwuP8DIORKOpXFNMMAAAAASUVORK5CYII="
}

puntosPorAreaConfig.hardcodedData2 = {  //Productividad 
    "Language" : "ES",
    "Farm": "La Rinconada",
    "Lote": "LR3 B1",
    "InformDate": "2019/08/15",
    "Crop": " - ",
    "Seasson": "2018-19",
    "Has": "220",
    "UrlTumbnailImage": "1loCHEgxQRxed1iawFFFlkn2j02ewaQUT",
    "Performance": {
        "UrlImage": "12VIqaDHKSTUkRdsmT7Z0YKvWb4eB1qCv",
        "CropDate": "DD/mm/AAA",
        "Contratist": "-No Asignado-",
        "Team": "John Deere",
        "MeanMoisture": "11.20",
        "MeanVelocity": "3.83",
        "MeanYieldDry": "5.18",
        "MeanStd": "1.0",
        "MeanYieldMoisture": "5.55",
        "Altitude": "110"
    },
    "RindeType": {
        "Type": "Productividad",
        "UrlImage": "1uYvWDOiG0XinPTvNYQQmuO_YsJOusUSN",
        "Description": {
            "Base Mapa Productividad": "",
            "Clases Productividad": "5",
            "Fecha de Origen": ""
        },
        "ColorLabelsReferences": {},
        "Data": [
            {
                "Index": "Muy Baja",
                "SurfaceHas": "50.00",
                "SurfacePercent": "22.72",
                "Color": "#AFF553",
                "Performance": "4.72"
            },
            {
                "Index": "Baja",
                "SurfaceHas": "20.00",
                "SurfacePercent": "9.12",
                "Color": "#5AE622",
                "Performance": "5.02"
            },
            {
                "Index": "Media",
                "SurfaceHas": "30.00",
                "SurfacePercent": "13.63",
                "Color": "#34A884",
                "Performance": "5.46"
            },
            {
                "Index": "Alta",
                "SurfaceHas": "70",
                "SurfacePercent": "31.81",
                "Color": "#1F438F",
                "Performance": "5.72"
            },
            {
                "Index": "Muy Alta",
                "SurfaceHas": "50",
                "SurfacePercent": "22.72",
                "Color": "#0C1078",
                "Performance": "5.72"
            }
        ]
    },
    "ChartBase64Image" : "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"
}

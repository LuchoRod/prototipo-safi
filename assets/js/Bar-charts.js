window.onload = function () {

    var barChart = new CanvasJS.Chart("columnContainer2", {
        animationEnabled: true,
        
        axisX: {
            interval: 1,
            intervalType: "year"
        },
        axisY:{
            valueFormatString:"#0",
            interval:20,
            gridColor: "#B6B1A8",
            tickColor: "#B6B1A8"
        },
        axisY2: {
            title: "Percent",
            suffix: "%",
            gridThickness: 0,
            lineColor: "#C0504E",
            tickColor: "#C0504E",
            labelFontColor: "#C0504E"
        },
        toolTip: {
            shared: true,
            content: toolTipContent
        },
        data: [{
            type: "stackedColumn",
            showInLegend: true,
            color: "#5959E1",
            name: "Var. Valor Razonable",
            dataPoints: [
                { y: 4.75, x: new Date(2010,0), label:"Agroempaques" },
                { y: 4.75, x: new Date(2011,0),label:"Hermes"  },
                { y: 4.75, x: new Date(2012,0),label:"IPSA"  },
                { y: 4.75, x: new Date(2013,0),label:"Real Once"  },
                { y: 4.75, x: new Date(2014,0),label:"SUAM"  },
                { y: 4.75, x: new Date(2015,0),label:"Collique"  },
                { y: 4.75, x: new Date(2016,0),label:"W Capital SAFI"  },
                { y: 4.75, x: new Date(2017,0), label:"FIVIS I" },
                { y: 4.75, x: new Date(2018,0),label:"FODEVI"  },
                { y: 4.75, x: new Date(2019,0),label:"T. Callao"  },
                { y: 4.75, x: new Date(2020,0),label:"TW"  },
                { y: 4.75, x: new Date(2021,0),label:"Civitano"  },
                { y: 4.75, x: new Date(2022,0),label:"Comunal"  },
                { y: 4.75, x: new Date(2023,0),label:"AP SM"  },
                { y: 4.75, x: new Date(2024,0),label:"Frialsa"  },
                { y: 4.75, x: new Date(2025,0),label:"Hiro Sake"  },
                { y: 4.75, x: new Date(2026,0),label:"Juntoz"  },
                { y: 4.75, x: new Date(2027,0),label:"EFE"  },
                { y: 85.5, x: new Date(2028,0),label:"Total"  }
            ]
            },
            {        
                type: "stackedColumn",
                showInLegend: true,
                name: "Dividendos",
                color: "#A8A7A8",
                dataPoints: [
                    { y: 2.23, x: new Date(2010,0) },
                    { y: 2.23, x: new Date(2011,0) },
                    { y: 2.23, x: new Date(2012,0) },
                    { y: 2.23, x: new Date(2013,0) },
                    { y: 2.23, x: new Date(2014,0) },
                    { y: 2.23, x: new Date(2015,0) },
                    { y: 2.23, x: new Date(2016,0) },
                    { y: 2.23, x: new Date(2017,0) },
                    { y: 2.23, x: new Date(2018,0) },
                    { y: 2.23, x: new Date(2019,0) },
                    { y: 2.23, x: new Date(2020,0) },
                    { y: 2.23, x: new Date(2021,0) },
                    { y: 2.23, x: new Date(2022,0) },
                    { y: 2.23, x: new Date(2023,0) },
                    { y: 2.23, x: new Date(2024,0) },
                    { y: 2.23, x: new Date(2025,0) },
                    { y: 2.23, x: new Date(2026,0) },
                    { y: 2.23, x: new Date(2027,0) },
                    { y: 40.20, x: new Date(2028,0) }
                ]
            },]
    });


    barChart.render();
}

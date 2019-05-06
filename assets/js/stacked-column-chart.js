

window.onload = function () {

var chart = new CanvasJS.Chart("columnContainer", {
	animationEnabled: true,
	
	axisX: {
        title: "Empresas",
		interval: 1,
		intervalType: "year"
	},
	axisY:{
        title: "Porcentajes",
        valueFormatString:"#0",
        interval:20,
		gridColor: "#B6B1A8",
		tickColor: "#B6B1A8"
    },
    axisY2: {
       
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
			{ y: 4.75, x: new Date(2010,0), label:"Agroempaques", indexLabel: "$6.98" },
			{ y: 4.75, x: new Date(2011,0),label:"Hermes", indexLabel: "$6.98"  },
			{ y: 4.75, x: new Date(2012,0),label:"IPSA", indexLabel: "$6.98"  },
			{ y: 4.75, x: new Date(2013,0),label:"Real Once", indexLabel: "$6.98"  },
			{ y: 4.75, x: new Date(2014,0),label:"SUAM", indexLabel: "$6.98"  },
			{ y: 4.75, x: new Date(2015,0),label:"Collique", indexLabel: "$6.98"  },
            { y: 4.75, x: new Date(2016,0),label:"W Capital SAFI", indexLabel: "$6.98"  },
            { y: 4.75, x: new Date(2017,0), label:"FIVIS I", indexLabel: "$6.98" },
			{ y: 4.75, x: new Date(2018,0),label:"FODEVI", indexLabel: "$6.98"  },
			{ y: 4.75, x: new Date(2019,0),label:"T. Callao", indexLabel: "$6.98"  },
			{ y: 4.75, x: new Date(2020,0),label:"TW", indexLabel: "$6.98"  },
			{ y: 4.75, x: new Date(2021,0),label:"Civitano", indexLabel: "$6.98"  },
			{ y: 4.75, x: new Date(2022,0),label:"Comunal", indexLabel: "$6.98"  },
            { y: 4.75, x: new Date(2023,0),label:"AP SM", indexLabel: "$6.98"  },
            { y: 4.75, x: new Date(2024,0),label:"Frialsa", indexLabel: "$6.98"  },
			{ y: 4.75, x: new Date(2025,0),label:"Hiro Sake", indexLabel: "$6.98"  },
			{ y: 4.75, x: new Date(2026,0),label:"Juntoz", indexLabel: "$6.98"  },
			{ y: 4.75, x: new Date(2027,0),label:"EFE", indexLabel: "$6.98"  },
			{ y: 85.5, x: new Date(2028,0),label:"Total", indexLabel: "$125.7"  }
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

var chartW = new CanvasJS.Chart("chartContainer", {
    theme: "light1", // "light1", "ligh2", "dark1", "dark2"
    animationEnabled: true,
    showInLegend: true,
        names: "series1",          
        legendText: "Apples",   
    axisY: {                   
        prefix: "$",
        lineThickness: 0,
        suffix: "k"
    },

    data: [{
        type: "waterfall",     
                            
        indexLabel: "{y}",
        indexLabelFontColor: "#A9A9A9",
        indexLabelPlacement: "outside",
        yValueFormatString: "#,##0k",
        dataPoints: [
            { label: "IPSA",  y: 4737, color:"#0E0DAE" },
            { label: "Hermes", y: 1409, color:"#0E0DAE" },
            { label: "Civitano", y: 1230, color:"#958EF3" },
            { label: "Agroempaques", y: 668, color:"#0E0DAE" },
            { label: "EFE",  y: 649, color:"#18C60C" },
            { label: "FODEVI", y: 200, color:"#C6C4E8" },
            { label: "W Capital SAFI*", y: 178, color:"#0E0DAE" },
            { label: "T. Callao",  y: 169, color:"#C6C4E8" },
            { label: "Real Once",  y: 169, color:"#0E0DAE" },
            { label: "Frialsa", y: 104, color:"#958EF3" },
            { label: "Collique", y: 104, color:"#0E0DAE" },
            { label: "SUAM", y: 92, color:"#0E0DAE" },
            { label: "Juntoz", y: 76, color:"#958EF3" },
            { label: "Comunal", y: 51, color: "#958EF3" },
            { label: "AP SM", y: 24, color:"#DFDDF7" },
            { label: "TW", y: 23, color:"#DFDDF7" },
            { label: "Hiro Sake", y: 18, color:"#0E0DAE" },
            { label: "FIVIS I", y: 0 },
            { label: "Total", isCumulativeSum:true }
        ]
    },
]
});



var chartW2 = new CanvasJS.Chart("chartContainer2", {
    theme: "light1", // "light1", "ligh2", "dark1", "dark2"
    animationEnabled: true,
    showInLegend: true,
        names: "series1",          
        legendText: "Apples",   
    axisY: {                   
        prefix: "$",
        lineThickness: 0,
        suffix: "k"
    },

    data: [{
        type: "waterfall",     
                            
        indexLabel: "{y}",
        indexLabelFontColor: "#A9A9A9",
        indexLabelPlacement: "outside",
        yValueFormatString: "#",
        dataPoints: [
            { label: "Valor del Portafolio 3Q17",  y: 50 },
            { label: "Variación VR", y: 5, color:"#0E0DAE" },
            { label: "Dividendos", y: -2, color:"#958EF3" },
            { label: "Aportes", y: 6, color:"#0E0DAE" },
            { label: "Mgmt Fee",  y: -1, color:"#958EF3" },
            { label: "Otros", y: -2, color:"#958EF3" },
            { label: "Valor del Portafolio 3Q18", isCumulativeSum:true },           
        ]
    },
]
});


chart.render();
chartW.render();
chartW2.render();



function toolTipContent(e) {
	var str = "";
	var total = 0;
	var str2, str3;
	for (var i = 0; i < e.entries.length; i++){
		var  str1 = "<span style= 'color:"+e.entries[i].dataSeries.color + "'> "+e.entries[i].dataSeries.name+"</span>: $<strong>"+e.entries[i].dataPoint.y+"</strong>bn<br/>";
		total = e.entries[i].dataPoint.y + total;
		str = str.concat(str1);
	}
	str2 = "<span style = 'color:DodgerBlue;'><strong>"+(e.entries[0].dataPoint.x).getFullYear()+"</strong></span><br/>";
	total = Math.round(total * 100) / 100;
	str3 = "<span style = 'color:Tomato'>Total:</span><strong> $"+total+"</strong>bn<br/>";
	return (str2.concat(str)).concat(str3);
}


}


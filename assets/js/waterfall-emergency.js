window.onload = function () {
    var chartW3 = new CanvasJS.Chart("chartContainer3", {
        theme: "light1", // "light1", "ligh2", "dark1", "dark2"
        animationEnabled: true,
       
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
            yValueFormatString: "#,##0.##",
            dataPoints: [
                
                { label: "Collique", y: 46.12, color:"#FC0000" },
                { label: "SUAM", y: 2.00, color:"#E64F4F" },
                { label: "Juntoz", y: 17.50, color:"#E64F4F" },
                { label: "Comunal", y: 0.35, color: "#E64F4F" },
                { label: "AP SM", y: -0.20, color:"#DFDDF7" },
                { label: "TW", y: -19.10, color:"#DFDDF7" },
                { label: "Hiro Sake", y: -0.35, color:"#DFDDF7" },
                { label: "FIVIS I", y: -1.50, color:"#DFDDF7" },
                { label: "FIVIS I", y: -2.00, color:"#DFDDF7" },
                { label: "Total", y:-41.74, color:"#DFDDF7" },
                { label: "Collique", y: 0.27, color:"#E64F4F" },
                { label: "SUAM", y: -0.10, color:"#DFDDF7" },
                { label: "Juntoz", y: -0.37, color:"#DFDDF7" },
                { label: "Comunal", y: 0.34, color: "#FC0000" },
            ]
        },
    ]
    });
    
    chartW3.render();
}
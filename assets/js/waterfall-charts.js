am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

// using math in the data instead of final values just to illustrate the idea of Waterfall chart
// a separate data field for step series is added because we don't need last step (notice, the last data item doesn't have stepValue)
chart.data = [ {
  category: "Net revenue",
  value: 50000,
  open: 0,
  stepValue: 50000,
  color: '#4933F5',
  displayValue: 50000
}, {
  category: "Cost of sales",
  value: 50000 + 5000,
  open: 50000,
  stepValue: 50000 + 5000,
  color: '#1A04C3',
  displayValue: 5000
}, {
  category: "Operating expenses",
  value: 50000 + 5000 - 2000,
  open:  50000 + 5000,
  stepValue:  50000 + 5000 - 2000,
  color: '#7264E0',
  displayValue: 2000
}, {
  category: "Amortisation",
  value: 50000 + 5000 - 2000 + 6000,
  open: 50000 + 5000 - 2000,
  stepValue: 50000 + 5000 - 2000 + 6000,
  color: '#1A04C3',
  displayValue: 6000
}, {
  category: "Income from equity",
  value: 50000 + 5000 - 2000 + 6000 - 1000,
  open: 50000 + 5000 - 2000 + 6000,
  stepValue: 50000 + 5000 - 2000 + 6000 - 1000,
  color: '#7264E0',
  displayValue: 1000
}, {
  category: "Operating income",
  value: 50000 + 5000 - 2000 + 6000 - 1000 - 2000,
  open: 50000 + 5000 - 2000 + 6000 - 1000,
  stepValue: 50000 + 5000 - 2000 + 6000 - 1000 - 2000,
  color: '#7264E0',
  displayValue: 2000
}, {
    category: "Jellyfish",
    value: 50000 + 5000 - 2000 + 6000 - 1000 - 2000,
    open: 0,    
    color: '#4933F5',
    displayValue: 50000 + 5000 - 2000 + 6000 - 1000 - 2000
  } ];

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.minGridDistance = 40;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "category";
columnSeries.dataFields.valueY = "value";
columnSeries.dataFields.openValueY = "open";
columnSeries.fillOpacity = 0.8;
columnSeries.sequencedInterpolation = true;
columnSeries.interpolationDuration = 1500;

var columnTemplate = columnSeries.columns.template;
columnTemplate.strokeOpacity = 0;
columnTemplate.propertyFields.fill = "color";

var label = columnTemplate.createChild(am4core.Label);
label.text = "{displayValue.formatNumber('$## a')}";
label.align = "center";
label.valign = "middle";


var stepSeries = chart.series.push(new am4charts.StepLineSeries());
stepSeries.dataFields.categoryX = "category";
stepSeries.dataFields.valueY = "stepValue";
stepSeries.noRisers = true;
stepSeries.stroke = new am4core.InterfaceColorSet().getFor("alternativeBackground");
stepSeries.strokeDasharray = "3,3";
stepSeries.interpolationDuration = 2000;
stepSeries.sequencedInterpolation = true;

// because column width is 80%, we modify start/end locations so that step would start with column and end with next column
stepSeries.startLocation = 0.1;
stepSeries.endLocation = 1.1;

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";

}); // end am4core.ready()


am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv2", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
    
    // using math in the data instead of final values just to illustrate the idea of Waterfall chart
    // a separate data field for step series is added because we don't need last step (notice, the last data item doesn't have stepValue)
    chart.data = [ {
      category: "IPSA",
      value: 4737,
      open: 0,
      stepValue: 4737,
      color: '#1A04C3',
      displayValue: 4737
    }, {
      category: "Hermes",
      value: 4737 + 1409,
      open: 4737,
      stepValue: 4737 + 1409,
      color: '#1A04C3',
      displayValue: 1409
    }, {
      category: "Civitano",
      value: 4737 + 1409 + 1230,
      open:  4737 + 1409,
      stepValue: 4737 + 1409 + 1230,
      color: '#958EF3',
      displayValue: 1230
    }, {
      category: "Agroempaques",
      value: 4737 + 1409 + 1230 + 668,
      open: 4737 + 1409 + 1230,
      stepValue: 4737 + 1409 + 1230 + 668,
      color: '#1A04C3',
      displayValue: 668
    }, {
      category: "EFE",
      value: 4737 + 1409 + 1230 + 668 + 649,
      open: 4737 + 1409 + 1230 + 668,
      stepValue: 4737 + 1409 + 1230 + 668 + 649,
      color: '#18C60C',
      displayValue: 649
    }, {
      category: "FODEVI",
      value: 4737 + 1409 + 1230 + 668 + 649 + 200,
      open: 4737 + 1409 + 1230 + 668 + 649,
      stepValue: 4737 + 1409 + 1230 + 668 + 649 + 200,
      color: '#C6C4E8',
      displayValue: 200
    }, {
        category: "W Capital SAFI*",
        value: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178,
        open: 4737 + 1409 + 1230 + 668 + 649 + 200,
        stepValue: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178,
        color: '#1A04C3',
        displayValue: 178
      }, {
        category: "T. Callao",
        value: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169,
        open: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178,
        stepValue: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169,
        color: '#C6C4E8',
        displayValue: 169
      }, {
        category: "Real Once",
        value: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169,
        open: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169,
        stepValue: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169,
        color: '#1A04C3',
        displayValue: 169
      }, {
        category: "Frialsa",
        value: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104,
        open:  4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169,
        stepValue:  4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104,
        color: '#958EF3',
        displayValue: 104
      }, {
        category: "Collique",
        value: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104,
        open: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104,
        stepValue: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104,
        color: '#1A04C3',
        displayValue: 104
      }, {
        category: "SUAM",
        value: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92,
        open: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104,
        stepValue: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92,
        color: '#1A04C3',
        displayValue: 92
      }, {
        category: "Juntoz",
        value: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92 + 76,
        open: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92,
        stepValue: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92 + 76,
        color: '#958EF3',
        displayValue: 76
      }, {
          category: "Comunal",
          value: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92 + 76 + 51,
          open: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92 + 76,
          stepValue: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92 + 76 + 51,
          color: '#C6C4E8',
          displayValue: 51
        }, {
            category: "AP SM",
            value: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92 + 76 + 51 + 24,
            open: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92 + 76 + 51,
            stepValue: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92 + 76 + 51 + 24,
            color: '#4933F5',
            displayValue: 24
          }, {
            category: "TW",
            value: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92 + 76 + 51 + 24 + 23,
            open: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92 + 76 + 51 + 24,
            stepValue: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92 + 76 + 51 + 24 + 23,
            color: '#1A04C3',
            displayValue: 23
          }, {
            category: "Hiro Sake",
            value: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92 + 76 + 51 + 24 + 23 + 18,
            open:  4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92 + 76 + 51 + 24 + 23,
            stepValue:  4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92 + 76 + 51 + 24 + 23 + 18,
            color: '#7264E0',
            displayValue: 18
          }, {
            category: "FIVIS I",
            value: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92 + 76 + 51 + 24 + 23 + 18 + 0,
            open: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92 + 76 + 51 + 24 + 23 + 18,
            stepValue: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92 + 76 + 51 + 24 + 23 + 18 + 0,
            color: '#1A04C3',
            displayValue: 0
          }, {
            category: "Total",
            value: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92 + 76 + 51 + 24 + 23 + 18 + 0,
            open: 0,
            color: '#7264E0',
            displayValue: 4737 + 1409 + 1230 + 668 + 649 + 200 + 178 + 169 + 169 + 104 + 104 + 92 + 76 + 51 + 24 + 23 + 18 + 0,
          }];
    
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.renderer.labels.template.rotation = 300;
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    
    var columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.dataFields.categoryX = "category";
    columnSeries.dataFields.valueY = "value";
    columnSeries.dataFields.openValueY = "open";
    columnSeries.fillOpacity = 0.8;
    columnSeries.sequencedInterpolation = true;
    columnSeries.interpolationDuration = 1500;
    
    var columnTemplate = columnSeries.columns.template;
    columnTemplate.strokeOpacity = 0;
    columnTemplate.propertyFields.fill = "color";
    
    var label = columnTemplate.createChild(am4core.Label);
    label.text = "{displayValue.formatNumber('$#,## k')}";
    label.align = "center";
    label.valign = "middle";
    
    
    var stepSeries = chart.series.push(new am4charts.StepLineSeries());
    stepSeries.dataFields.categoryX = "category";
    stepSeries.dataFields.valueY = "stepValue";
    stepSeries.noRisers = true;
    stepSeries.stroke = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    stepSeries.strokeDasharray = "3,3";
    stepSeries.interpolationDuration = 2000;
    stepSeries.sequencedInterpolation = true;
    
    // because column width is 80%, we modify start/end locations so that step would start with column and end with next column
    stepSeries.startLocation = 0.1;
    stepSeries.endLocation = 1.1;
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "none";
    
    }); // end am4core.ready()


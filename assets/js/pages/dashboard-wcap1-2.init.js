var seq = 0,
    delays = 80,
    durations = 500;
new Chartist.Pie("#gauge-capital-total-2", {
    series: [
        {meta: 'Capital Llamado (%)', value: 98.45},
        {meta: 'Capital por Llamar (%)', value: 1.55}
    ]
}, {
    showLabel: false,
    startAngle: 270,
    total: 200,
    chartPadding: 30,
    plugins: [Chartist.plugins.tooltip()]
}),new Chartist.Pie("#gauge-capital-participe-2", {
    series: [
        {name: 'Serie 1', meta: 'Capital Llamado (%)', value: 98.45},
        {name: 'Serie 2', meta: 'Capital por Llamar (%)', value: 1.55}
    ]
}, {
    showLabel: false,
    startAngle: 270,
    total: 200,
    chartPadding: 30,
    plugins: [Chartist.plugins.tooltip()]
});
$(document).ready(function () {
    $("#range_plazos").ionRangeSlider({
        grid: true,
        grid_num: 1,
        // grid_margin: true,
        // grid_snap: true,
        min: 2012,
        max: 2020,
        from: 2019,
        hide_min_max: true
    });
    $("#sparkline8").sparkline([5, 8, 12, 0, 0], {
        type: "bullet",
        width: "100%",
        height: "20",
        targetColor: "#f1556c",
        performanceColor: "#343a40",
        rangeColors: ['white','green', '#22f']
    });
});
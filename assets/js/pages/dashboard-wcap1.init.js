var seq = 0,
    delays = 80,
    durations = 500;
new Chartist.Pie("#gauge-capital-total", {
    labels: ['S/. 39,478,147 (98.45%)', 'S/. 621,853 (1.55%)'],
    series: [
        { meta: 'Capital Llamado (%)', value: 98.45 },
        { meta: 'Capital por Llamar (%)', value: 1.55 }
    ]
}, {
    startAngle: 270,
    total: 200,
    chartPadding: 25,
    labelOffset: 75,
    labelDirection: 'explode',
    plugins: [Chartist.plugins.legend({
        legendNames: ['Capital Llamado', 'Capital por Llamar'],
        position: 'bottom',
        clickable: false
    })]
}), new Chartist.Pie("#gauge-capital-participe", {
    labels: [''],
    series: [
        { meta: 'Capital Llamado (%)', value: 98.45 },
        { meta: 'Capital por Llamar (%)', value: 1.55 }
    ]
}, {
    startAngle: 270,
    total: 200,
    chartPadding: 25,
    labelOffset: 75,
    labelDirection: 'explode',
    plugins: [Chartist.plugins.legend({
        legendNames: ['Capital Llamado', 'Capital por Llamar'],
        position: 'bottom',
        clickable: false
    })]
});
$(document).ready(function() {
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
        rangeColors: ['white', 'green', '#22f']
    });
});
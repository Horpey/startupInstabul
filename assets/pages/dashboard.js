! function (e) {
    "use strict";
    var t = function () {};
    t.prototype.createStackedChart = function (e, t, a, i, o, r) {
        Morris.Bar({
            element: e,
            data: t,
            xkey: a,
            ykeys: i,
            stacked: !0,
            labels: o,
            hideHover: "auto",
            resize: !0,
            gridLineColor: "#eeeeee",
            barColors: r
        })
    }, t.prototype.createDonutChart = function (e, t, a) {
        Morris.Donut({
            element: e,
            data: t,
            resize: !0,
            colors: a
        })
    }, e(".peity-pie").each(function () {
        e(this).peity("pie", e(this).data())
    }), e(".peity-donut").each(function () {
        e(this).peity("donut", e(this).data())
    }), e(".peity-line").each(function () {
        e(this).peity("line", e(this).data())
    }), t.prototype.init = function () {
        this.createStackedChart("morris-bar-stacked", [{
            y: "Monday",
            a: 45,
            b: 180,
            c: 100
        }, {
            y: "Tuesday",
            a: 75,
            b: 65,
            c: 80
        }, {
            y: "Wednesday",
            a: 100,
            b: 90,
            c: 56
        }, {
            y: "Thursday",
            a: 75,
            b: 65,
            c: 89
        }, {
            y: "Friday",
            a: 100,
            b: 90,
            c: 120
        }, {
            y: "Saturday",
            a: 75,
            b: 65,
            c: 110
        }, {
            y: "Sunday",
            a: 50,
            b: 40,
            c: 85
        }], "y", ["a", "b", "c"], ["Peak Milk", "Hollandia", "Dano"], ["#1699dd", "#e2595f", "#ebeff2"]);
        this.createDonutChart("morris-donut-example", [{
            label: "Dangote",
            value: 12
        }, {
            label: "Cadbury",
            value: 42
        }], ["#e2595f", "#1699dd"])
    }, e.Dashboard = new t, e.Dashboard.Constructor = t
}(window.jQuery),
function (e) {
    "use strict";
    window.jQuery.Dashboard.init()
}();
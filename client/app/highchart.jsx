"use strict";
var React = require('react');
window.Highcharts = require('highcharts');
// var Highcharts = require('highcharts');

// Expects that Highcharts was loaded in the code.
var ReactHighcharts = require('react-highcharts');

var config = {
  title: {
            text: 'Progress to Goal'
        },
        subtitle: {
            text: 'Source: Level Money API'
        },
        xAxis: {
            type: 'datetime',
            allowDecimals: false
        },
        yAxis: {
            title: {
                text: 'Money'
            },
            labels: {
                formatter: function () {
                    return '$' + this.value;
                }
            }
        },
        tooltip: {
            //pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
            pointFormat: '${point.y}'
        },
        plotOptions: {
            area: {
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 1,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
        		type: 'areaspline',
            data: [20,40,35,65,65,85,100],
            name: 'Accumulated Savings',
           	pointStart: Date.UTC(2016, 0,1),
            pointIntervalUnit: 'month',
            zoneAxis: 'x',
            zones: [{value: new Date()},
            {
            dashStyle: 'Dot',
            fillColor: 'rgba(0,0,0,0)',
            value: Date.UTC(2016,12,0)}],
        }]
    };

var HighChart = React.createClass({
    componentDidMount: function() {console.log('load highcharts');},
    render: function() {
        console.log('highcharts render');
        return (<ReactHighcharts config = {config}></ReactHighcharts>);
    }
});


module.exports = HighChart;
"use strict";
var React = require('react');
window.Highcharts = require('highcharts');
// var Highcharts = require('highcharts');

// Expects that Highcharts was loaded in the code.
var ReactHighcharts = require('react-highcharts/bundle/ReactHighcharts');

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
            formatter: function() {
                var title = '';
                if(this.x > new Date().getTime()){
                    title = 'Projected'
                } else {
                    title = new Date(this.x);
                }
                return '<span style="font-size: 10px">'+title+'</span><br/>$'+this.y;
            },
            headerFormat: '<span style="font-size: 10px">Projected</span><br/>',
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
            data: [[]],
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
    componentDidMount: function() {
        console.log('highchart mounted');
        let chart = this.refs.chart.getChart();
        // let newData = [20,20,40,35,65,65,85,100];
        let today = new Date();
        let newData = [
            [Date.UTC(2016,0,1), 20],
            [Date.UTC(2016,1,1), 35],
            [today.getTime(), 45],
            [Date.UTC(2016,2,1), 40],
            [Date.UTC(2016,3,1), 65],
            [Date.UTC(2016,4,1), 65],
            [Date.UTC(2016,5,1), 85],
            [Date.UTC(2016,6,1), 100]];
            chart.series[0].setData(newData);
        },
    render: function() {
        console.log('highcharts render');
        return (<ReactHighcharts config = {config} ref="chart"></ReactHighcharts>);
    }
});


module.exports = HighChart;
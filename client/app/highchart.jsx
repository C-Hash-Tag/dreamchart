"use strict";
var React = require('react');
window.Highcharts = require('highcharts');
// var Highcharts = require('highcharts');

// Expects that Highcharts was loaded in the code.
var ReactHighcharts = require('react-highcharts/bundle/ReactHighcharts');

var config = {
        chart: {
          backgroundColor: 'rgba(255,255,255,0.002)'
        },
        legend: {
          itemStyle: {
            color: '#ffffff'
          }
        },
        title: {
          text: 'Progress to your ' + window.localStorage.goalName,
          style: {
            color: '#ffffff'
          }
        },
        subtitle: {
            text: 'Source: Level Money API',
            style: {
              color: '#b3b3b3'
            }
        },
        xAxis: {
          type: 'datetime',
          allowDecimals: false,
          title: {
            style: {
              color: '#ffffff'
            }
          },
          labels: {
            style: {
              color: '#ffffff'
            }
          }
        },
        yAxis: {
          title: {
            style: {
              color: '#ffffff'
            },
            text: 'Money'
          },
          labels: {
            style: {
              color: '#ffffff'
            },
            formatter: function () {
              return '$' + this.value;
            }
          }
        },
        tooltip: {
            formatter: function() {
                var title = '';
                var xDate = new Date(this.series.data[this.series.data.length-1].x);
                if(this.x > new Date().getTime()){
                    title = 'Projected - '+xDate.toDateString();
                } else {
                    title = new Date(this.x).toDateString();
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
            color: '#ffffff',
        		type: 'areaspline',
            data: [[]],
            name: 'Accumulated Savings',
           	pointStart: Date.UTC(2016, 0,1),
            pointIntervalUnit: 'month',
            zoneAxis: 'x',
            zones: [{value: new Date()},
            {
            dashStyle: 'Dash',
            fillColor: 'rgba(0,0,0,0)',
            value: Date.UTC(5000,12,0)}],
        }]
    };

var HighChart = React.createClass({
    componentDidMount: function() {
        console.log('highchart mounted');

        },
    render: function() {
        console.log('highcharts render');
        config.series.data = this.props.chartData;
        let chart = this.refs.chart;
        if(chart != null){
            chart.getChart().series[0].setData(this.props.chartData);
        }
        return (<ReactHighcharts config = {config} ref="chart"></ReactHighcharts>);
    }
});


module.exports = HighChart;
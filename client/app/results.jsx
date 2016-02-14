/*

  Results Component
  ~~~~~~~~~~~~~~~~~~~~~~~

*/

"use strict";

// Import React and Libraries
var React = require('react');

// Import Components
var levelMoney = require('./levelMoney');
var HighChart = require('./highchart');

var Results = React.createClass({

  componentDidMount: function() {
    console.log('results');
    console.log("levelMoney",levelMoney);
    this.getCurrentBalance();

  },
  getInitialState: function() {
    return {
      currBal: 0,
      averageSaving: 0,
      monthsToSave: 0,
    }
  },

  /*componentDidMount: function(){
    this.getMonthsRemaining(1000);
  },*/

  levelMoneyFetch: function() {
    //make the API call with dummy data

  },
  getCurrentBalance: function() {
    var curr = 0;
    var self = this;
    var flag = true;
    var currentDate = new Date();
    currentDate = currentDate.toString().slice(7,10);
    levelMoney.getHist(function(res){

      var balanceOnMonthStart;
      var balanceOnMonthEnd;

      res.days.filter(function(item){
        //get current balance
        if (item.day.day == currentDate && item.day.month === 2) {
          console.log("item",item.balance);
          self.setState({currBal: item.balance/10000});
          console.log("Success", self.state.currBal);
          self.getMonthsRemaining(9500);
        }

        //get average saving
        if (item.day.day == 1 && item.day.month == 1){
          balanceOnMonthStart = item.balance/10000;
        }

        if (item.day.day == 31 && item.day.month == 1){
          balanceOnMonthEnd = item.balance/10000;
        }

        if(balanceOnMonthEnd !== undefined && balanceOnMonthStart !== undefined && flag){
          flag = false;
          self.setState({averageSaving: (balanceOnMonthEnd-balanceOnMonthStart).toFixed(2)});
          console.log(self.state.averageSaving, "averageSaving NOW");
          //console.log("self", self);
          //self.getMonthsRemaining(9500);
          //console.log("only one of me");
        }



      })
    });

  },
  getMonthsRemaining: function(goal) {

    var needMoney;
    if (goal > this.state.currBal) {
      var bal = this.state.currBal;
      console.log("bal", bal);
      needMoney = goal - this.state.currBal;
      console.log("needMoney", needMoney);
      var totalMonths = Math.ceil(needMoney/this.state.averageSaving);
      console.log("totalMonths", totalMonths);
      this.setState({monthsToSave: totalMonths});
    }
    else {
      needMoney = this.state.currBal - goal;
    }

  },

  render: function() {
    console.log("in render");
    return (
      <div>
        <div> Current Balance: {this.state.currBal} </div>
        <div> Average Savings: {this.state.averageSaving} </div>
        <div> Months to Save: {this.state.monthsToSave} </div>
        <div> Yo a simple div with some content</div>
        <div className="col-lg-12">
          <HighChart></HighChart>
        </div>
      </div>
    );
  }
});

module.exports = Results;

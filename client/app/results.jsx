/*

  Results Component
  ~~~~~~~~~~~~~~~~~~~~~~~

*/

"use strict";

// Import React and Libraries
var React = require('react');
var HighChart = require('./highchart');

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
      charData: [[]]
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
    let currentDate = new Date();
    // currentDate = currentDate.toString().slice(7,10);
    levelMoney.getHist(function(res){
      var convertCentoCents = function(toDollars){
        return toDollars / (100 * 100);
      }
      var dateArr = function (date, amount){
        return [Date.UTC(date.year,date.month-1,date.day), parseFloat(amount.toFixed(2))];
      }
      var balanceOnMonthStart;
      var balanceOnMonthEnd;
      var currBalance;
      var goal = window.localStorage.goalCost;
      var avgSavings;
      var monthsRemain;
      var accumulatedSavings = 0;

      var data = []
      res.days.forEach(function(item){
        //get current balance
        var balance = convertCentoCents(item.balance);

        if (item.day.day == 1 && item.day.month == 1){
          balanceOnMonthStart = balance;
          // accumulatedSavings = balanceOnMonthStart;
          data.push(dateArr(item.day, balanceOnMonthStart));
        }

        if (item.day.day == 31 && item.day.month == 1){
          balanceOnMonthEnd = balance;
          data.push(dateArr(item.day, balanceOnMonthEnd));
        }

        if(balanceOnMonthEnd !== undefined && balanceOnMonthStart !== undefined && flag){
          flag = false;
          avgSavings = (balanceOnMonthEnd - balanceOnMonthStart).toFixed(2);
          console.log(avgSavings, " averageSaving NOW");
        }

        if (item.day.day == currentDate.getDate() &&
          item.day.month === currentDate.getMonth() + 1) {
          console.log("current day balance", balance);
          accumulatedSavings = balance;
          currBalance = balance;
          monthsRemain = self.getMonthsRemaining(goal, balance, avgSavings);
          data.push(dateArr(item.day, accumulatedSavings));
        }
      });
      if(monthsRemain > 0){
          for(var i = 1; i <= monthsRemain; i++){
              accumulatedSavings += parseFloat(avgSavings);
              data.push(
                dateArr(
                  {day:1,month:i+2,year:2016}, accumulatedSavings));
            }
      }
      // else {
      //   // you hit your goal what should we show?
      // }
      self.setState({
          averageSaving: avgSavings,
          currBal: currBalance,
          monthsToSave: monthsRemain,
          chartData: data
        });
    });

  },
  getMonthsRemaining: function(goal, bal, avg) {
    var needMoney;
    if(bal == null || bal === 0 || avg == null || avg === 0){
      return 0;
    }
    if (goal > bal) {
      console.log("bal", bal);
      needMoney = goal - bal;
      console.log("needMoney", needMoney);
      var totalMonths = Math.ceil(needMoney / avg);
      console.log("totalMonths", totalMonths);
      return totalMonths;
    }
    else {
      needMoney = bal - goal;
      return 0;
    }

  },

  render: function() {
    console.log("in render");
    return (
      <div className="intro-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 no-padding">
              <div className="intro-message">
                <h1>You Can Do It!</h1>
                <hr className="intro-divider"/>
                <div className="col-lg-12">
                  <HighChart chartData={this.state.chartData}></HighChart>
                </div>
                <div className="status">
                  <div className="blue"> Current Balance: {this.state.currBal} </div>
                  <div className="green"> Average Savings: {this.state.averageSaving} </div>
                  <div className="orange"> Months to Save: {this.state.monthsToSave} </div>
                </div>
                <div className="container">
                  <button type="submit" className="btn btn-block btn-success">Increase Your Savings Now!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Results;

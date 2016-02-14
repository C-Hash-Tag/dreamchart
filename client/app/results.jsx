/*

  Results Component
  ~~~~~~~~~~~~~~~~~~~~~~~

*/
var levelMoney = require('./levelMoney');

"use strict";

// Import React and Libraries
var React = require('react');

var Results = React.createClass({

  componentDidMount: function() {
    console.log('results');
    console.log("levelMoney",levelMoney);
    this.getCurrentBalance();

  },
  getInitialState: function() {
    return {
      currBal: 0
    }
  },
  levelMoneyFetch: function() {
    //make the API call with dummy data

  },
  getCurrentBalance: function() {
    var curr = [];
    var self = this;
    var currentDate = new Date();
    currentDate = currentDate.toString().slice(7,10);
    //13
    console.log("currentDate", currentDate);
    levelMoney.getHist(function(res){
      res.days.filter(function(item){
        if (item.day.day == currentDate && item.day.month === 2) {
          console.log("item",item.balance);
          //curr.push(item.balance/10000);
          //debugger;
          self.setState({currBal: item.balance/10000});

          console.log("Success", self.state.currBal);

          //cb(curr.join(""));
        }
      })
    });
    //return curr.join("");
    //console.log("curr", curr);
  },
  getAverageSaving: function() {

  },
  getMonthsRemaining: function() {

  },

  render: function() {
    console.log("in render");
    return (
      <div>
        <div> Current Balance: {this.state.currBal} </div>
        <div> Hey a simple div with some content</div>
      </div>
    );
  }
});

module.exports = Results;

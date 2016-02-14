/*

  Cost Question Component
  ~~~~~~~~~~~~~~~~~~~~~~~

*/

"use strict";

// Import React and Libraries
var React = require('react');
var browserHistory = require('react-router').browserHistory;

var CostQuestion = React.createClass({

  componentDidMount: function() {
    console.log('cost-question');
  },

  getInitialState: function() {
    return {
      goalCost: ""
    }
  },

  addCost: function(event) {
    console.log("cost update");
    var goalCost = event.target.value;
    this.setState({goalCost: goalCost});
    window.localStorage.goalCost = goalCost;
  },

  submitCost: function(event) {
    console.log("cost submitted...");
    event.preventDefault();
    console.log("submitted Cost");
    browserHistory.push('results');
  },

  render: function() {

    return (
      <div className="intro-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" id="no-padding">
              <div className="intro-message">
                <h1>How much would it cost?</h1>
                <hr className="intro-divider"/>
                <form role="form" onSubmit={this.submitCost}>
                  <div className="form-group">
                    <input type="text" className="form-control" value={this.state.goalCost} onChange={this.addCost} placeholder="Enter in USD"/>
                  </div>
                  <button type="submit" className="btn btn-block btn-success">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = CostQuestion;

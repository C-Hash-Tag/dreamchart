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

  addCost: function() {
    console.log("cost update");
    var goalCost = event.target.value;
    this.setState({goalCost: goalCost});
    window.localStorage.goalCost = goalCost;
  },

  submitCost: function() {
    event.preventDefault();
    console.log("submitted Cost");
    browserHistory.push('/results');
  },

  render: function() {

    return (
      <div className="intro-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="intro-message">
                <h1>How much would it cost?</h1>
                <hr className="intro-divider"/>
                <form role="form" onSubmit={this.submitCost}>
                  <div className="form-group">
                    <input type="text" className="form-control" id="usr" value={this.state.cost} onChange={this.addCost} placeholder="Enter in USD"/>
                  </div>
                  <div className="container">
                    <button type="button" className="btn btn-primary">Submit</button>
                  </div>
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

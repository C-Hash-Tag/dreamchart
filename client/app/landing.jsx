/*

  Landing Component
  ~~~~~~~~~~~~~~~~~~~~~~~

*/

"use strict";

// Import React and Libraries
var React = require('react');
var browserHistory = require('react-router').browserHistory;

var Landing = React.createClass({

  getInitialState: function() {
    return {
      formVal: ""
    };
  },

  componentDidMount: function() {
    console.log('yoyoyo');
  },

  addGoal: function(event) {
    var goalName = event.target.value;
    this.setState({goalName: goalName});
    window.localStorage.goalName = goalName;
  },

  submitGoal: function(event) {
    event.preventDefault();
    console.log("submitting!");
    browserHistory.push('cost-question');
  },

  render: function() {

    return (
      <div className="intro-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="intro-message">
                <h1>What are you saving for?</h1>
                <hr className="intro-divider"/>
                <form role="form" onSubmit={this.submitGoal}>
                  <div className="form-group">
                    <input type="text" className="form-control" value={this.state.goalName} onChange={this.addGoal} placeholder="Goal Item"/>
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

module.exports = Landing;

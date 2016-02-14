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
                <h1>What do you want to save for?</h1>
                <hr className="intro-divider"/>
                <form role="form" onSubmit={this.submitGoal}>
                  <div className="form-group">
                    <h3>Enter the name of the item you want to own in a year:</h3>
                    <input type="text" className="form-control" value={this.state.goalName} onChange={this.addGoal}/>
                  </div>
                  <div className="container">
                    <button type="submit" className="btn btn-primary">Submit</button>
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

module.exports = Landing;

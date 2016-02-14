/*

  Cost Question Component
  ~~~~~~~~~~~~~~~~~~~~~~~

*/

"use strict";

// Import React and Libraries
var React = require('react');

var CostQuestion = React.createClass({

  componentDidMount: function() {
    console.log('cost-question');
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
                        <form role="form">
                          <div className="form-group">
                            <input type="text" className="form-control" id="usr" placeholder="Enter in USD"/>
                          </div>
                        </form>
                        <div className="container">
                          <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
});

module.exports = CostQuestion;

/*

  Landing Component
  ~~~~~~~~~~~~~~~~~~~~~~~

*/

"use strict";

// Import React and Libraries
var React = require('react');
var HighChart = require('./highchart');

var Landing = React.createClass({

  componentDidMount: function() {
    console.log('yoyoyo');
  },

  render: function() {

    return (
      // <a name="about"></a>
      <div className="intro-header">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="intro-message">
                        <h1>What do you want to save for?</h1>
                        <hr className="intro-divider"/>
                        <form role="form">
                          <div className="form-group">
                            <h3 htmlFor="usr">Enter the name of the item you want to own in a year:</h3>
                            <input type="text" className="form-control" id="usr"/>
                          </div>
                        </form>
                        <div className="container">
                          <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                      </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <HighChart></HighChart>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
});

module.exports = Landing;

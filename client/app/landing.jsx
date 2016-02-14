/*

  Landing Component
  ~~~~~~~~~~~~~~~~~~~~~~~

*/

"use strict";

// Import React and Libraries
var React = require('react');

var Landing = React.createClass({

  componentDidMount: function() {
    console.log('yoyoyo');
  },

  render: function() {

    return (
      <a name="about"></a>
      <div class="intro-header">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="intro-message">
                        <h1>What do you want to save for?</h1>
                        <hr class="intro-divider">
                        <form role="form">
                          <div class="form-group">
                            <h3 for="usr">Enter the name of the item you want to own in a year:</h3>
                            <input type="text" class="form-control" id="usr">
                          </div>
                        </form>
                        <div class="container">
                          <button type="button" class="btn btn-primary">Submit</button>
                        </div>
                      </div>
                  </div>
              </div>
          </div>

      </div>
    );
  }
});

module.exports = Landing;

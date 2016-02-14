/*

  Results Component
  ~~~~~~~~~~~~~~~~~~~~~~~

*/

"use strict";

// Import React and Libraries
var React = require('react');

var Results = React.createClass({

  componentDidMount: function() {
    console.log('results');
  },

  render: function() {

    return (
      <div> a simple div with some content</div>
    );
  }
});

module.exports = Results;

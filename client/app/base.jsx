/*

  Auto Quote Flow React App
  ~~~~~~~~~~~~~~~~~~~~~~~~~

  This Base component serves as the containing window
  for the mobile auto quote flow.

*/

"use strict";

// Import Libraries
var React = require('react');

// Import Shared Components

// Mobile Auto Quote Flow Window Component
var App = React.createClass({

  componentDidMount: function(){
    var self = this;
    console.log('component mounts');
  },

  render: function() {

    return (
      <div> basic message</div>
    );
  }
});

module.exports = App;

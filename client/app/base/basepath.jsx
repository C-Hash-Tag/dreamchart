/*

  Base Compnent
  ~~~~~~~~~~~~~~~~~~~~~~~~~

*/

"use strict";

// Import Libraries
var React = require('react');

// Import Shared Components
var Header = require('./header');
var Footer = require('./footer');

var Base = React.createClass({

  componentDidMount: function(){
    console.log('component mounts');
  },

  render: function() {

    return (
      <div>
        <Header />
          {this.props.children}
        <Footer />
      </div>
    );
  }
});

module.exports = Base;

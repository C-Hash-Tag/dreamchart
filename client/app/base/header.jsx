/*

  Header Component
  ~~~~~~~~~~~~~~~~

*/

"use strict";

// Import React and Libraries
var React = require('react');

var Header = React.createClass({

  render: function() {

    return (
      <section id="header" className="col-md-12">
        <div id="logo"></div>
      </section>
    );
  }
});

module.exports = Header;

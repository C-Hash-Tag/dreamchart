/*

  Footer Component
  ~~~~~~~~~~~~~~~~

*/

"use strict";

// Import React and Libraries
var React = require('react');

var Footer = React.createClass({

  render: function() {

    return (
      <section id="footer" className="col-md-12 no-min-height">
        <div id="copyright"></div>
      </section>
    );
  }
});

module.exports = Footer;

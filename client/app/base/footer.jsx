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
      <section id="footer" class="col-md-12">
        <div id="copyright">&copy;2016</div>
      </section>
    );
  }
});

module.exports = Footer;

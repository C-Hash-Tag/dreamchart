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
      <section id="header" class="col-md-12">
        <div id="logo">Fin Lit</div>
      </section>
    );
  }
});

module.exports = Header;

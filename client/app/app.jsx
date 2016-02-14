/*

  The App
  ~~~~~~~

*/

"use strict";
// Import React
var React = require('react');
var ReactDOM = require('react-dom');

// React Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var browserHistory = require('react-router').browserHistory;


console.log("in the app ");

// Redux Simple Router

// Import Route and Store
var routes = require('./routes');

// Hook to sync redux store and the history object
// syncReduxAndRouter(history, store);

var App = React.createClass({
  render: function(){
    return (
      <Router history={browserHistory}>
        {routes}
      </Router>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('body-container'));

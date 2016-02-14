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

// React Redux
// var ReactRedux = require('react-redux');
// var Provider = ReactRedux.Provider;

console.log("in the app 5");

// Redux Simple Router

// Import Route and Store
var routes = require('./routes');
var history = require('history').createHistory();

// Hook to sync redux store and the history object
// syncReduxAndRouter(history, store);

var App = React.createClass({
  render: function(){
    return (
      <Router history={history}>
        {routes}
      </Router>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('body-container'));

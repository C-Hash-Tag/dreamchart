
"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var Redirect = ReactRouter.Redirect;

var routes = (
  <Route path="/" component={require('./base')}>
    <IndexRoute component={require('./landing')} />
    // <Route path="prefill" component={require('./prefill')} />
    // <Route path="vehicles" component={require('./vehicles')}>
    //   <IndexRoute component={require('./vehicle')} />
    //   <Route path=":vehicle_id" component={require('./vehicle')} />
    // </Route>
    // <Route path="vehicles-summary" component={require('./vehiclesSummary')} />
    // <Route path="drivers" component={require('./drivers')}>
    //   <IndexRoute component={require('./driver')} />
    //   <Route path=":driver_id" component={require('./driver')} />
    // </Route>
    // <Route path="drivers-summary" component={require('./driversSummary')} />
    // <Route path="information" component={require('./info')} />
    // <Route path="compare" component={require('./compare/compare')} />
  </Route>
);

module.exports = routes;

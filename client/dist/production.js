/*

  Main Mobile Auto Quote React Application
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

// Redux Simple Router
// var syncReduxAndRouter = require('redux-simple-router').syncReduxAndRouter;

// Import Route and Store
// var store =require('../../../mobile_quote_flow/store/configureStore')();
var routes = require('./routes');
var history = require('history').createHistory();

// Hook to sync redux store and the history object
syncReduxAndRouter(history, store);

var App = React.createClass({
  displayName: 'App',

  render: function render() {
    return React.createElement(
      Router,
      { history: history },
      routes
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('body-container'));
/*

  Auto Quote Flow React App
  ~~~~~~~~~~~~~~~~~~~~~~~~~

  This Base component serves as the containing window
  for the mobile auto quote flow.

*/

"use strict";

// Import Libraries

var React = require('react');
var ReactRedux = require('react-redux');
var connect = ReactRedux.connect;

// Import Shared Components
var AppHeader = require('../../shared/appHeader');
var Util = require('../../shared/utils');
var AutoQuoteNav = require('./navbar');
var MessageBay = require('./messageBay');
var ErrorBay = require('./errorBay');

// Import Constants
var ErrorData = require('../../../mobile_quote_flow/constants/errorData');

var ActionCreator = require('../../../mobile_quote_flow/actions/index'),
    fetchShopper = ActionCreator.async.shopper.fetchShopper,
    fetchVehicles = ActionCreator.async.vehicles.fetchVehicles,
    fetchDrivers = ActionCreator.async.drivers.fetchDrivers,
    updateDeviceType = ActionCreator.standard.ui.updateDeviceType,
    _handleMessageBayClick = ActionCreator.async.ui.handleMessageBayClick,
    _handleTouchMove = ActionCreator.async.ui.handleTouchMove,
    updateLastVisited = ActionCreator.standard.meta.updateLastVisited,
    redirectIfNeeded = ActionCreator.async.routing.redirectIfNeeded;

// Mobile Auto Quote Flow Window Component
var AutoQuoteFlow = React.createClass({
  displayName: 'AutoQuoteFlow',


  componentDidMount: function componentDidMount() {
    var self = this;
    var dispatch = this.props.dispatch;
    if (this.props.timeStamps.created === this.props.timeStamps.lastVisited) {
      dispatch(fetchShopper()).then(function () {
        dispatch(fetchVehicles());
        dispatch(fetchDrivers());
        dispatch(redirectIfNeeded(self.props.routing.path));
      });
    } else {
      dispatch(redirectIfNeeded(this.props.routing.path));
    }
    dispatch(updateLastVisited());
    dispatch(updateDeviceType());
  },
  getSelectedIdx: function getSelectedIdx() {
    var selectedIdx;
    if (this.props.routing.path.match("/mobile/flow/drivers")) {
      selectedIdx = this.props.forms.driversForm.swipeIndex;
    } else if (this.props.routing.path.match("/mobile/flow/vehicles")) {
      selectedIdx = this.props.forms.vehiclesForm.swipeIndex;
    }
    return selectedIdx;
  },
  handleTouchMove: function handleTouchMove(event) {
    this.props.dispatch(_handleTouchMove(event, this.getSelectedIdx()));
  },
  handleMessageBayClick: function handleMessageBayClick(event) {
    this.props.dispatch(_handleMessageBayClick(event, this.getSelectedIdx()));
  },

  render: function render() {
    var messageBayIsVisible = this.props.ui.messageBay.enabled && !this.props.ui.messageBay.isHidden,
        currentErrorData = ErrorData[this.props.routing.path],
        errorBayShown = Util.errorBayShown(currentErrorData, this.props.forms),
        currentErrors;

    if (currentErrorData && errorBayShown) {
      currentErrors = this.props.forms[currentErrorData.formName].errors;
    }

    var cx = require('classnames');
    var baseClasses = cx({
      'm-flow': true,
      'modal-open': this.props.ui.modalIsOpen
    });

    return React.createElement(
      'div',
      { className: baseClasses, onTouchMove: this.handleTouchMove },
      React.createElement(AppHeader, {
        path: this.props.location.pathname,
        isHidden: messageBayIsVisible && this.props.ui.messageBay.type === 'fixed',
        formIsFocused: this.props.ui.formIsFocused }),
      React.createElement(AutoQuoteNav, {
        routing: this.props.routing,
        isHidden: messageBayIsVisible && this.props.ui.messageBay.type === 'fixed' || errorBayShown,
        formIsFocused: this.props.ui.formIsFocused,
        shopperStep: this.props.shopperStep }),
      React.createElement(MessageBay, {
        type: this.props.ui.messageBay.type,
        message: this.props.ui.messageBay.message,
        isHidden: !messageBayIsVisible,
        posY: this.props.ui.messageBay.posY,
        handleClick: this.handleMessageBayClick }),
      React.createElement(ErrorBay, {
        formIsFocused: this.props.ui.formIsFocused,
        errors: currentErrors,
        errorData: currentErrorData }),
      React.createElement(
        'div',
        { className: 't-app-window' },
        this.props.children
      )
    );
  }
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    ui: state.ui,
    routing: state.routing,
    forms: state.forms,
    shopperStep: state.shopper.step,
    timeStamps: state.meta.timeStamps
  };
};

module.exports = connect(mapStateToProps)(AutoQuoteFlow);
/*

  Auto Quote Flow Landing
  ~~~~~~~~~~~~~~~~~~~~~~~

*/

"use strict";

// Import React and Libraries

var React = require('react');

var AutoQuoteLanding = React.createClass({
  displayName: 'AutoQuoteLanding',


  componentDidMount: function componentDidMount() {
    console.log('whatevs');
  },

  render: function render() {

    return React.createElement(
      'div',
      null,
      ' a simple div with some content'
    );
  }
});

"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var Redirect = ReactRouter.Redirect;

var routes = React.createElement(
  Route,
  { path: '/', component: require('./base') },
  React.createElement(IndexRoute, { component: require('./landing') }),
  '// ',
  React.createElement(Route, { path: 'prefill', component: require('./prefill') }),
  '// ',
  React.createElement(
    Route,
    { path: 'vehicles', component: require('./vehicles') },
    '//   ',
    React.createElement(IndexRoute, { component: require('./vehicle') }),
    '//   ',
    React.createElement(Route, { path: ':vehicle_id', component: require('./vehicle') }),
    '// '
  ),
  '// ',
  React.createElement(Route, { path: 'vehicles-summary', component: require('./vehiclesSummary') }),
  '// ',
  React.createElement(
    Route,
    { path: 'drivers', component: require('./drivers') },
    '//   ',
    React.createElement(IndexRoute, { component: require('./driver') }),
    '//   ',
    React.createElement(Route, { path: ':driver_id', component: require('./driver') }),
    '// '
  ),
  '// ',
  React.createElement(Route, { path: 'drivers-summary', component: require('./driversSummary') }),
  '// ',
  React.createElement(Route, { path: 'information', component: require('./info') }),
  '// ',
  React.createElement(Route, { path: 'compare', component: require('./compare/compare') })
);

module.exports = routes;
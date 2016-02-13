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
    handleMessageBayClick = ActionCreator.async.ui.handleMessageBayClick,
    handleTouchMove = ActionCreator.async.ui.handleTouchMove,
    updateLastVisited = ActionCreator.standard.meta.updateLastVisited,
    redirectIfNeeded = ActionCreator.async.routing.redirectIfNeeded;


// Mobile Auto Quote Flow Window Component
var AutoQuoteFlow = React.createClass({

  componentDidMount: function(){
    var self = this;
    var dispatch = this.props.dispatch;
    if (this.props.timeStamps.created === this.props.timeStamps.lastVisited){
      dispatch(fetchShopper()).then(function() {
        dispatch(fetchVehicles());
        dispatch(fetchDrivers());
        dispatch(redirectIfNeeded(self.props.routing.path));
      });
    }
    else {
      dispatch(redirectIfNeeded(this.props.routing.path));
    }
    dispatch(updateLastVisited());
    dispatch(updateDeviceType());
  },
  getSelectedIdx: function(){
    var selectedIdx;
    if (this.props.routing.path.match("/mobile/flow/drivers")) {
      selectedIdx = this.props.forms.driversForm.swipeIndex;
    } else if (this.props.routing.path.match("/mobile/flow/vehicles")) {
      selectedIdx = this.props.forms.vehiclesForm.swipeIndex;
    }
    return selectedIdx;
  },
  handleTouchMove: function(event){
    this.props.dispatch(handleTouchMove(event, this.getSelectedIdx()));
  },
  handleMessageBayClick: function(event) { this.props.dispatch(handleMessageBayClick(event, this.getSelectedIdx())); },

  render: function() {
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

    return (
      <div className={baseClasses} onTouchMove={this.handleTouchMove}>
        <AppHeader
          path={this.props.location.pathname}
          isHidden={messageBayIsVisible && this.props.ui.messageBay.type === 'fixed'}
          formIsFocused= {this.props.ui.formIsFocused} />
        <AutoQuoteNav
          routing={this.props.routing}
          isHidden={(messageBayIsVisible && this.props.ui.messageBay.type === 'fixed') || errorBayShown }
          formIsFocused= {this.props.ui.formIsFocused}
          shopperStep={this.props.shopperStep }/>
        <MessageBay
          type={this.props.ui.messageBay.type}
          message={this.props.ui.messageBay.message}
          isHidden={!messageBayIsVisible}
          posY={this.props.ui.messageBay.posY}
          handleClick={this.handleMessageBayClick} />
        <ErrorBay
          formIsFocused={this.props.ui.formIsFocused}
          errors={currentErrors}
          errorData={currentErrorData} />
        <div className="t-app-window">
          {this.props.children}
        </div>
      </div>
    );
  }
});

var mapStateToProps = function(state) {
  return {
    ui: state.ui,
    routing: state.routing,
    forms: state.forms,
    shopperStep: state.shopper.step,
    timeStamps: state.meta.timeStamps
  };
};

module.exports = connect(mapStateToProps)(AutoQuoteFlow);

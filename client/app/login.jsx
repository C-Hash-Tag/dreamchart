/*


Login Component
~~~~~~~~~~~~~~~~~~~~~~


*/

"use strict";

//Import React and Libraries
var React = require('react');
var browserHistory = require('react-router').browserHistory;
var levelMoney = require('./levelMoney');

var Login = React.createClass({
  componentDidMount: function() {
    console.log("in login component");
  },
  authLoggedUser: function(event) {
    event.preventDefault();
    console.log("in authLoggedUser", event);
    // levelMoney.login(function(res){
    //   console.log("in Login API", res)

    // });
    browserHistory.push('landing');

  },
  render: function() {
    return (
      <div className="intro-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="intro-message">
                <h1>Reach Your Dreams</h1>
                <hr className="intro-divider"/>
                  <form role="form" onSubmit={this.authLoggedUser}>
                    <div className="form-group">
                      <h3>Login To Your Level Money Account Now</h3>
                      <input type="text" placeholder="level@example.com" className="form-control" />
                      <br />
                      <input type="password" placeholder="password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-block btn-success">Login</button>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }


});

module.exports = Login;

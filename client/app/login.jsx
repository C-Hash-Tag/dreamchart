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
    levelMoney.login(function(res){
      console.log("in Login API", res)

    });
  },
  render: function() {
    return (
      <div className="intro-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="intro-message">
                <h1>Learn To Reach Your Dreams Faster</h1>
                <hr className="intro-divider"/>
                  <form role="form" onSubmit={this.authLoggedUser}>
                    <div className="form-group">
                      <h3>Login To Your Capital One Account To Get Started</h3>
                      Account Login:    <input type="text" placeholder="level@example.com" className="form-control" />
                      Account Password: <input type="password" placeholder="password" className="form-control" />
                    </div>
                    <div className="container">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
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

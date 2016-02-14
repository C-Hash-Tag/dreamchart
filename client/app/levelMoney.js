var levelMoney = {};

levelMoney.getAll = function(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://prod-api.level-labs.com/api/v2/core/get-all-transactions", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onloadend = function() {
      var parsed = JSON.parse(this.response);
      callback(parsed);
      var pretty = JSON.stringify(parsed, null, 2);
      //document.getElementById('outrpc28').textContent = pretty;
  };
  xhr.onerror = function(err) {
      document.getElementById('outrpc28').textContent = "ugh an error. i can't handle this right now.";
  };
  var args = {"args": {"uid":  1110881160, "token":  "A11D023136B7C79B1A323C7D3E3D9A55", "api-token":  "HackathonAPITokenDevweek4222"}};
  xhr.send(JSON.stringify(args));
};

levelMoney.getHist = function(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://prod-api.level-labs.com/api/v2/core/balances", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onloadend = function() {
      var parsed = JSON.parse(this.response);
      var pretty = JSON.stringify(parsed, null, 2);
      callback(parsed);
      //document.getElementById('outrpc30').textContent = pretty;
  };
  xhr.onerror = function(err) {
      document.getElementById('outrpc30').textContent = "ugh an error. i can't handle this right now.";
  };
  var args = {"args": {"uid":  1110881160, "token":  "A11D023136B7C79B1A323C7D3E3D9A55", "api-token":  "HackathonAPITokenDevweek4222"}};
  xhr.send(JSON.stringify(args));
};

levelMoney.getProjection = function(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://prod-api.level-labs.com/api/v2/core/projected-transactions-for-month", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onloadend = function() {
      var parsed = JSON.parse(this.response);
      var pretty = JSON.stringify(parsed, null, 2);
      callback(parsed);
      //document.getElementById('outrpc29').textContent = pretty;
  };
  xhr.onerror = function(err) {
      document.getElementById('outrpc29').textContent = "ugh an error. i can't handle this right now.";
  };
  var args = {"args": {"uid":  1110881160, "token":  "A11D023136B7C79B1A323C7D3E3D9A55", "api-token":  "HackathonAPITokenDevweek4222"}, "year":  2015, "month":  3};
  xhr.send(JSON.stringify(args));
}

levelMoney.login = function(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://prod-api.level-labs.com/api/v2/core/login", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onloadend = function() {
      var parsed = JSON.parse(this.response);
      callback(parsed);
      var pretty = JSON.stringify(parsed, null, 2);
      //document.getElementById('outrpc34').textContent = pretty;
  };
  xhr.onerror = function(err) {
      document.getElementById('outrpc34').textContent = "ugh an error. i can't handle this right now.";
  };
  var args = {"email":  "level@example.com", "password":  "incorrect_password", "args": {"uid":  1110881160, "token":  "A11D023136B7C79B1A323C7D3E3D9A55", "api-token":  "HackathonAPITokenDevweek4222"}};
  xhr.send(JSON.stringify(args));
};

module.exports = levelMoney;

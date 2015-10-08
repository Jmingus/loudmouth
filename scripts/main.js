'use strict';
var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
var NavComponent = require('./components/NavComponent');

var Router = Backbone.Router.extend({
  routes: {
  }
});

var r = new Router();
Backbone.history.start();

ReactDOM.render(
  <NavComponent router={r} />,
  document.getElementById('nav')
  )

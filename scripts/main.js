'use strict';
var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
Parse.initialize('eAdXUAgf7CTOWUUBMsMCDeBialjrjiXRbuvsXcbA', 'rPsIje8zEtIgr5BQI0JqVJZ77fKXE4SdaayDPAfs');
var NavComponent = require('./components/NavComponent');
var SignUpComponent = require('./components/SignUpComponent');
var app = document.getElementById('app')

var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'signup': 'signup',
    'signin': 'signin'
  },
  home: function(){

  },
  signup: function(){
    ReactDOM.render(
      <SignUpComponent / >,
      app
    );
  },
  signin: function(){

  }
});

var r = new Router();
Backbone.history.start();

ReactDOM.render(
  <NavComponent router={r} />,
  document.getElementById('nav')
);

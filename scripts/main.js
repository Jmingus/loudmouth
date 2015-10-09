'use strict';
var React = require('react');
var Backbone = require('backbone');
var ReactDOM = require('react-dom');
Parse.initialize('eAdXUAgf7CTOWUUBMsMCDeBialjrjiXRbuvsXcbA', 'rPsIje8zEtIgr5BQI0JqVJZ77fKXE4SdaayDPAfs');
var NavComponent = require('./components/NavComponent');
var SignUpComponent = require('./components/SignUpComponent');
var SignInComponent = require('./components/SignInComponent');
var BlogComponent = require('./components/BlogComponent');
var app = document.getElementById('app')

var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'signUp': 'signup',
    'signIn': 'signin',
    'blog' : 'blog',
    'featured': 'featured',
    'aboutUs': 'aboutUs'
  },
  home: function(){

  },
  signup: function(){
    ReactDOM.render(
      <SignUpComponent router={r}/ >,
      app
    );
  },
  signin: function(){
    ReactDOM.render(
      <SignInComponent router={r} />,
      app
    );
  },
  blog: function(){
    ReactDOM.render(
      <BlogComponent />,
      app
    );
  }
});

var r = new Router();
Backbone.history.start();

ReactDOM.render(
  <NavComponent router={r} />,
  document.getElementById('nav')
);

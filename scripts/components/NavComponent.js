var React = require('react');
var $ = require('jquery');


module.exports = React.createClass({
  componentDidMount: function() {
        $(document).ready(function(){
        $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
        $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
        e.preventDefault();
      });
    });
  },
  render: function(){
    return(
    <header className="centered-navigation" role="banner">
      <div className="centered-navigation-wrapper">
        <a href="#" className="mobile-logo logo">
          <div>LM</div>
        </a>
        <a href="javascript:void(0)" className="centered-navigation-mobile-menu js-menu-trigger sliding-panel-button">MENU</a>
        <nav role="navigation">
          <ul id="js-centered-navigation-menu" className="centered-navigation-menu show">
            <li className="nav-link"><a href="javascript:void(0)">Featured</a></li>
            <li className="nav-link"><a href="javascript:void(0)">About Us</a></li>
            <li className="nav-link logo">
              <a href="#" className="logo">
                <div>LM</div>
              </a>
            </li>
            <li className="nav-link"><a href="javascript:void(0)">Sign In</a></li>
            <li className="nav-link"><a href="#signup">Sign Up</a></li>
          </ul>
        </nav>
      </div>
      <nav className="js-menu sliding-panel-content">
        <ul>
          <li><a href="javascript:void(0)">Sign In</a></li>
          <li><a href="#signup">Sign Up</a></li>
          <li><a href="javascript:void(0)">Featured</a></li>
          <li><a href="javascript:void(0)">About Us</a></li>
        </ul>
      </nav>

      <div className="js-menu-screen sliding-panel-fade-screen"></div>
    </header>
      )
  }
})

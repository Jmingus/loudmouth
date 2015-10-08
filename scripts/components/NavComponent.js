var React = require('react');

module.exports = React.createClass({
  render: function(){
    return(
    <header className="centered-navigation" role="banner">
      <div className="centered-navigation-wrapper">
        <a href="javascript:void(0)" className="mobile-logo">
          <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_3_dark.png" alt="Logo image" />
        </a>
        <a href="javascript:void(0)" id="js-centered-navigation-mobile-menu" className="centered-navigation-mobile-menu">MENU</a>
        <nav role="navigation">
          <ul id="js-centered-navigation-menu" className="centered-navigation-menu show">
            <li className="nav-link"><a href="javascript:void(0)">Products</a></li>
            <li className="nav-link"><a href="javascript:void(0)">About Us</a></li>
            <li className="nav-link"><a href="javascript:void(0)">Contact</a></li>
            <li className="nav-link logo">
              <a href="javascript:void(0)" className="logo">
                <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_3_dark.png" alt="Logo image" />
              </a>
            </li>
            <li className="nav-link"><a href="javascript:void(0)">Testimonials</a></li>
            <li className="nav-link more"><a href="javascript:void(0)">More</a>
              <ul className="submenu">
                <li><a href="javascript:void(0)">Submenu Item</a></li>
                <li><a href="javascript:void(0)">Another Item</a></li>
                <li className="more"><a href="javascript:void(0)">Item with submenu</a>
                  <ul className="submenu">
                    <li><a href="javascript:void(0)">Sub-submenu Item</a></li>
                    <li><a href="javascript:void(0)">Another Item</a></li>
                  </ul>
                </li>
                <li className="more"><a href="javascript:void(0)">Another submenu</a>
                  <ul className="submenu">
                    <li><a href="javascript:void(0)">Sub-submenu</a></li>
                    <li><a href="javascript:void(0)">An Item</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-link"><a href="javascript:void(0)">Sign up</a></li>
          </ul>
        </nav>
      </div>
    </header>
      )
  }
})

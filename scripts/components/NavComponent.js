var React = require('react');
var $ = require('jquery');
var Backbone = require('backbone');


module.exports = React.createClass({
  componentWillMount: function(){
    this.props.router.on('route', () => {
      this.forceUpdate();
    });
  },
  componentDidMount: function() {
        $(document).ready(function(){
        $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
        $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
        e.preventDefault();
      });
    });
  },
  render: function(){
    var currentPage = Backbone.history.getFragment();

    var leftLinksMain = [
      <li key="featured" className={currentPage === 'featured' ? 'active nav-link' : "nav-link "}><a href="#featured">Featured</a></li>,
      <li key="aboutUs" className={currentPage === 'aboutUs' ? 'active nav-link' : "nav-link "}><a href="#aboutUs">About Us</a></li>
    ];
    var rightLinksMain = [];
    if(Parse.User.current()) {
      rightLinksMain.push(<li key="blog" className={currentPage === 'blog' ? 'active nav-link ' : 'nav-link '}><a href="#blog">Blog</a></li>)
      rightLinksMain.push(<li key="signOut" className="nav-link "><a href="#" onClick={this.signOut} >Sign Out</a></li>)
    }else{
      rightLinksMain.push(<li key="signIn" className={currentPage === 'signIn' ? 'active nav-link ' : 'nav-link '}><a href="#signIn">Sign In</a></li>)
      rightLinksMain.push(<li key="signUp" className={currentPage === 'signUp' ? 'active nav-link ' : 'nav-link '}><a href="#signUp">Sign Up</a></li>)
    }
    var leftLinksSlide = [
      <li key="featured" className={currentPage === 'featured' ? 'active ' : ""}><a href="#featured">Featured</a></li>,
      <li key="aboutUs" className={currentPage === 'aboutUs' ? 'active ' : ""}><a href="#aboutUs">About Us</a></li>
    ];
    var rightLinksSlide = [];
    if(Parse.User.current()) {
      rightLinksSlide.push(<li key="blog" className={currentPage === 'blog' ? 'active ' : ''}><a href="#blog">Blog</a></li>)
      rightLinksSlide.push(<li key="signOut"><a href="#" onClick={this.signOut} >Sign Out</a></li>)
    }else{
      rightLinksSlide.push(<li key="signIn" className={currentPage === 'signIn' ? 'active ' : ''}><a href="#signIn">Sign In</a></li>)
      rightLinksSlide.push(<li key="signUp" className={currentPage === 'signUp' ? 'active ' : ''}><a href="#signUp">Sign Up</a></li>)
    }
    return(
    <header className="centered-navigation" role="banner">
      <div className="centered-navigation-wrapper">
        <a href="#" className="mobile-logo logo">
          <div>LM</div>
        </a>
        <a href="javascript:void(0)" className="centered-navigation-mobile-menu js-menu-trigger sliding-panel-button">MENU</a>
        <nav role="navigation">
          <ul id="js-centered-navigation-menu" className="centered-navigation-menu show">
            {leftLinksMain}
            <li className="nav-link logo">
              <a href="#" className="logo">
                <div>LM</div>
              </a>
            </li>
            {rightLinksMain}
          </ul>
        </nav>
      </div>
      <nav className="js-menu sliding-panel-content">
        <ul>
          {rightLinksSlide}
          {leftLinksSlide}
        </ul>
      </nav>

      <div className="js-menu-screen sliding-panel-fade-screen"></div>
    </header>
      )
  },
  signOut: function(e){
    e.preventDefault();
    Parse.User.logOut();
    this.props.router.navigate('featured', {trigger: true});
  }
});

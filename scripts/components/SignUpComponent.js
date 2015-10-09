var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
      return {
           error: null
      };
  },
  render: function(){
    return(
        <div>
            <form id="signup" onSubmit={this.signUp}>
              <h1>Sign Up</h1>
              <div className='left'>
                <input type="text" placeholder="Username" ref="userName"/>
                <input type="password" placeholder="Password" ref="password"/>
                <button type="submit">Submit</button>
              </div>
              <div className='right'>
                <div className='question'>Do you want your blog to be public?</div>
                <label className="label-switch">
                  <input type="checkbox" ref="blogPrivacy"/>
                  <div className="checkbox">
                  </div>
                </label>
              </div>
            </form>
        </div>
    )
  },
  signUp: function(e) {
    e.preventDefault();
    var user = new Parse.User();
    user.signUp(
    {
      username: this.refs.userName.value,
      password: this.refs.password.value,
      blogPrivacy: this.refs.blogPrivacy.checked,
      admin: false
    },
    {
      success: (user) => {
        this.props.router.navigate('blog', {trigger: true})
      },
      error: (user, err) => {
        this.setState({
          error: err.message
        })
      }
    });
  }
});

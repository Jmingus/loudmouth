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
            <form id="signup">
              <h1>Sign Up</h1>
              <input type="text" placeholder="Username" ref="userName"/>
              <input type="password" placeholder="Password" ref="password"/>
              <div>Do you want your blog to be public?</div>
              <label className="label-switch">
              <input type="checkbox" ref="blogPrivacy"/>
              <div className="checkbox">
              </div>
              </label>
            </form>
        </div>
    )
  },
  signUp: function(e) {
    e.preventDefault();
    Parse.User.signUp(
    {
      username: this.refs.userName.value,
      password: this.refs.password.value,
      blogPrivacy: this.refs.blogPrivacy.checked,
      admin: false
    },
    {
      success: (user) => {

      },
      error: (user, err) => {
        this.setState({
          error: err.message
        })
      }
    });
  }
})

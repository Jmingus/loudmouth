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
            <form id="signIn" onSubmit={this.signIn}>
              <h1>Sign In</h1>
              <div>
                <input type="text" placeholder="Username" ref="userName"/>
                <input type="password" placeholder="Password" ref="password"/>
                <button type="submit">Submit</button>
              </div>
            </form>
        </div>
    )
  },
  signIn: function(e) {
    e.preventDefault();
    Parse.User.logIn(
      this.refs.userName.value,
      this.refs.password.value,
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
})

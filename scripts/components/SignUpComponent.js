var React = require('react');

module.exports = React.createClass({
  render: function(){
    return(
        <div>
            <form id="signup">
              <h1>Sign Up</h1>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <div>Do you want your blog to be public?</div>
              <label className="label-switch"><input type="checkbox" /><div className="checkbox"></div></label>
            </form>
        </div>
    )
  }
})

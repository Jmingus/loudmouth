var React = require('react');

module.exports = React.createClass({
  render: function(){
    return(
      <div className="AddPostComponent">
        <h1 className="title"><i className="fa fa-pencil"></i>New Blog Post</h1>
        <a className="addPostButton" href="#blog" ><i className="fa fa-plus-square postButton"></i></a>
          <form>
            <label>Post Title<input type="text" /></label>
            <label>Post Content <textarea className="postContent" /></label>
          </form>
      </div>
    )
  }
});

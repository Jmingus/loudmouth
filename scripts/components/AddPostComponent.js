var React = require('react');
var BlogModel = require('../models/BlogModel');

module.exports = React.createClass({
  render: function(){
    return(
      <div className="AddPostComponent">
        <h1 className="title"><i className="fa fa-pencil"></i>New Blog Post</h1>
        <a className="addPostButton" href="#blog" onClick={this.addBlogPost}><i className="fa fa-plus-square postButton"></i></a>
          <form onSubmit={this.addBlogPost}>
            <label>Post Title<input type="text" ref="title" /></label>
            <label>Post Content <textarea className="postContent" ref="content" /></label>
            <select ref="catagory">
              <option defaultValue="" selected disabled >Category</option>
              <option defaultValue="tech">Tech</option>
              <option defaultValue="fashion">Fashion</option>
              <option defaultValue="food">Food</option>
              <option defaultValue="science">Science</option>
              <option defaultValue="other">Other</option>
            </select>
          </form>
      </div>
    )
  },
  addBlogPost: function(e){
    e.preventDefault();
    var newPost = new BlogModel({
        postTitle: this.refs.title.value,
        postContent: this.refs.content.value,
        userId: Parse.User.current(),
        catagory: this.refs.catagory.value
    });
    newPost.save().then(this.props.router.navigate('blog', {trigger: true}))
  }

});

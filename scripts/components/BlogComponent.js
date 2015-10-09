var React = require('react');

module.exports = React.createClass({
  render: function(){
    var firstLetter = null;
    return(
      <div className="BlogComponent">
        <div className="addPost">
          <a href="#blog/addpost"><button className="newBlogPost">New Blog Post</button></a>
        </div>
        <div className="blogPostContainer">
          <div className="titleContainer">
            <span className="blog-bullet">{firstLetter}</span>
            <span className="title">Title</span>
          </div>
          <div className="content">
          Content
          </div>
        </div>
      </div>
      )
  }
})

var React = require('react');
var BlogModel = require('../models/BlogModel');
var BlogPostComponent = require('./BlogPostComponent');

module.exports = React.createClass({
  getInitialState: function(){
      return{
          blogPosts: []
      }
  },
  componentWillMount: function(){
      this.query = new Parse.Query(BlogModel);
      this.fetch();
  },
  render: function(){
      var allBlogPosts = this.state.blogPosts.map(function(blog){
         return  <BlogPostComponent key={blog.id} blog={blog} />
      });
    return(
      <div className="BlogComponent">
        <div className="addPost">
          <a href="#blog/addpost"><button className="newBlogPost">New Blog Post</button></a>
        </div>
          {allBlogPosts}
      </div>
      )
  },
  fetch: function(){
      this.query.equalTo('userId', Parse.User.current());
      this.query.find().then(
          (blogPosts) => {
              this.setState({blogPosts: blogPosts})
          },
          (err) => {
              console.log(err)
          }

      );
  }
});

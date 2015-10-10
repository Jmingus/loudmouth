var React = require('react');

module.exports = React.createClass({
  render: function() {
    return(
        <div className="BlogPostComponent">
            <div className="blogPostContainer">
                <div className="titleContainer">
                    <span className="blog-bullet">{this.props.blog.get('postTitle').charAt(0).toUpperCase()}</span>
                    <span className="title">{this.props.blog.get('postTitle')}</span>
                </div>
                <div className="content">
                    {this.props.blog.get('postContent')}
                </div>
            </div>
        </div>
    );
  }
});
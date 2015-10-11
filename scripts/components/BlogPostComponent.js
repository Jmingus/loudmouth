var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
      return({
          truncContent: this.props.blog.get('postContent')
      })
  },
  componentWillMount: function(){
      this.truncContent()
  },
  render: function() {
    return(
        <div className="BlogPostComponent">
            <a href={'#blog/'+this.props.blog.id}>
                <div className="blogPostContainer">
                    <div className="titleContainer">
                        <span className="blog-bullet">{this.props.blog.get('postTitle').charAt(0).toUpperCase()}</span>
                        <span className="title">{this.props.blog.get('postTitle')}</span>
                    </div>
                    <div className="content">
                        {this.state.truncContent}
                    </div>
                </div>
            </a>
        </div>
    );
  },
  truncContent: function(){
      var maxLength = 700;
      var content = this.props.blog.get('postContent');
      if (content.length > maxLength){
         this.setState({truncContent: content.substring(0, maxLength).replace(/\w+$/, '...')});
      }
  }
});
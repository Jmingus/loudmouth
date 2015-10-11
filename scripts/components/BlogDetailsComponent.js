var React = require('react');
var BlogModel = require('../models/BlogModel');

module.exports = React.createClass({
    getInitialState: function(){
        return({
            post: null
        })
    },
    componentWillMount: function(){
        this.query = new Parse.Query(BlogModel);
        this.query.get(this.props.postId).then(
            (post) => {
                this.setState({post: post})
            },
            (err) => {
                console.log(err)
            }

        );
    },
    render: function() {
        var content = <div>Loading...</div>
        if(this.state.post){
            content = (
                <div className="blogPostContainer">
                    <div className="titleContainer">
                        <span className="blog-bullet">{this.state.post.get('postTitle').charAt(0).toUpperCase()}</span>
                        <span className="title">{this.state.post.get('postTitle')}</span>
                    </div>
                    <div className="content">
                        {this.state.post.get('postContent')}
                    </div>
                </div>
            )
        }
        return(
            <div className="BlogDetailsComponent">
                {content}
            </div>
        );
    }
});
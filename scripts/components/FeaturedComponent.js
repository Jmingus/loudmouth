var React = require('react');
var BlogModel = require('../models/BlogModel');
var BlogPostComponent = require('./components/BlogPostComponent');

module.exports = React.createClass({
    getInitialState: function(){
        return({
            featuredContent: []
        })
    },
    componentWillMount: function(){
        this.fetchFeatured();
    },
    render: function() {
        var allFeaturedPosts = this.state.featuredContent.map(function(blog){
            return  <BlogPostComponent key={blog.id} blog={blog} />
        });
        return(
            <div className="FeaturedContentComponent">
                {allFeaturedPosts}
            </div>
        );
    },
    fetchFeatured: function() {
        var User = new Parse.Query(Parse.User);
        var Post = new Parse.Query(BlogModel);
        User.equalTo('blogPrivacy', true);
        Post.matchesQuery('user', User);
        this.query.find().then(
            (featuredContent) => {
                this.setState({featuredContent: featuredContent})
            },
            (err) => {
                console.log(err)
            }

        );
    }
});
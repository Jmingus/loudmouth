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
        this.userQuery = new Parse.Query(Parse.User);
        this.query = new Parse.Query(BlogModel);
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
        this.userQuery.equalTo('blogPrivacy', true);
        this.query.matchesQuery('userId', this.userQuery.id);
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
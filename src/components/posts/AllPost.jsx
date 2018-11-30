import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post'

class AllPost extends Component {
    render() {
        return (
            <div>
                <h1>All Posts</h1>
                {console.log(this.props.comment)}
                {this.props.comment.map((post) => <Post post={post}/>)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    comment: state,
})


export default connect(mapStateToProps)(AllPost);

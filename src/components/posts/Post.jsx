import React, { Component } from 'react';
import '../../styles/Post.css'

class Post extends Component {
  render() {
  return (
    <div>
      <p>{this.props.post.comment}</p>
      <ion-icon id="trashIcon" name="trash" size="large"></ion-icon>
      <hr/>
    </div>
  );
 }
}
export default Post;
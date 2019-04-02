import React, { Component } from 'react';
import '../../styles/Post.css'
import axios from 'axios'

class Post extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {
    axios.get('https://laggerpfinal.herokuapp.com/apiPost/delete/' || "http://localhost:4000" + this.props.obj._id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <div className="onePost">
          <p>{this.props.obj.published_post}</p>
          <button onClick={this.delete} className="btn btn-sm btn-danger">Delete</button>
        </div>
        <hr />
      </div>
    );
  }
}

export default Post;
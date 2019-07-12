import React, { Component } from 'react';
import '../../styles/Post.css'
import axios from 'axios'

const URL_API = process.env.URL_API;

class Post extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {
    if (this.props.obj.userPost === this.props.obj.userPost){
      axios.get("http://localhost:4000/apiPost/delete/"+ this.props.obj._id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
    }else{
      console.log("error")
    }

    
  }

  render() {
    return (
      <div>
        <div className="onePost">
          <h5>{this.props.obj.published_post}</h5>
          <p>de:{this.props.obj.userPost}</p>
          {console.log(this.props.obj._id)}
          <button onClick={this.delete} className="btn btn-sm btn-danger">Delete</button>
        </div>
        <hr />
      </div>
    );
  }
}

export default Post;
import React, { Component } from 'react';
import '../../styles/FormPost.css'
import axios from 'axios';

const URL_API = process.env.URL_API;

export default class PostForm extends Component{
  constructor(props) {
    super(props);
    this.onChangePublishedPost = this.onChangePublishedPost.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      published_post: '',
      userPost:'',
    }
  }

  onChangePublishedPost(e){
    this.setState({
      published_post: e.target.value,
      userPost: this.props.displayName
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`El post a publicar es: ${this.state.published_post} de ${this.props.displayName}`);
    const obj = {
      published_post: this.state.published_post,
      userPost: this.props.displayName
    };
    axios.post("http://localhost:4000/apiPost/add", obj).then(res => console.log(res.data));
    this.setState({
      published_post: '',
    })
  }
  
  render() {
    return (
      <div className="FormPost">
        <form>
          <div className="form-group">
            <h4>Publique su mensaje</h4>
            <textarea 
              className="form-control" 
              rows="5" 
              id="comment" 
              placeholder="Escriba su texto aqui"
              value={this.state.published_post}
              onChange={this.onChangePublishedPost}
            ></textarea>
            <br/>
            <button onClick={this.onSubmit} type="button" className="btn btn-info btn-block">Publicar</button>
          </div>
        </form>
      </div>
    );
  }
}


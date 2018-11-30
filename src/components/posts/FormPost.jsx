import React, { Component } from 'react';
import { connect } from 'react-redux';


class PostForm extends Component {
  constructor(props) {
    super(props)
    this.comment = React.createRef()
  }

  submit = e => {
    e.preventDefault()
    this.props.addComment({
      comment: this.comment.current.value,
    })
  }

  render() {
    return (
      <div>
        <form>
          <div class="form-group">
            <label for="comment">Publique su mensaje:</label>
            <textarea ref={this.comment} class="form-control" rows="5" id="comment" placeholder="Escriba su texto aqui"></textarea>
            <br/>
            <button onClick={this.submit} type="button" class="btn btn-info btn-block">Publicar</button>
          </div>
        </form>
      </div>
    );
  }
}

let mapDispatchToProps = dispatch => ({
  addComment: comment =>
    dispatch({
      type: 'ADD_POST',
      comment
    })
})

// Se exporta con connect
export default connect(
  null,
  mapDispatchToProps,
)(PostForm)

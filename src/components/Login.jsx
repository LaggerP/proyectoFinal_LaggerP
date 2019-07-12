import React, { Component } from 'react';
import '../styles/Login.css'
import videoWelcome from '../images/welcomeVideo.mp4'
import fire from '../config/Fire';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
      var message = error.message;
      this.setState({
        error: {
          message
        }
      })
      console.log(this.state.error)
    });
  }

  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).then((u) => { console.log(u) })
      .catch((error) => {
        var message = error.message;
        this.setState({
          error: {
            message
          }
        })
      })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="Welcome">
        <div className="Welcome_Left">
          <video loop autoplay='' muted id="videoWelcome">
            <source src={videoWelcome} type="video/mp4" />
          </video>
        </div>
        <div className="Welcome_Right">
          <div className="Welcome_Right--Form">
            <h1>¡Coder web!</h1>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese email" />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Ingrese su contraseña" />
              </div>
              <span style={{ color: 'red' }}>{this.state.error.message}</span>
              <br/>
              <button type="submit" onClick={this.login} className="btn btn-primary">Iniciar sesión</button>
              <button onClick={this.signup} style={{ marginLeft: '4px' }} className="btn btn-success">Crear cuenta</button>
            </form>
          </div>
          <br />
          <br />
          <br />
          <br />
          <span>*Las cuentas se almacenan en Firebase. Todos las cuentas creadas son borradas de manera esporádica</span>
        </div>
      </div>

    );
  }
}

export default Welcome;

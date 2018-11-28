import React, { Component } from 'react';
import '../styles/Welcome.css'
import videoWelcome from '../images/welcomeVideo.mp4'
import fire from '../config/Fire';

class Welcome extends Component {
  constructor(props){
    super(props);
    this.signup = this.signup.bind(this);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email:'',
      password:'',
      
    }
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

signup(e){
  e.preventDefault();
  fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
  }).then((u)=>{console.log(u)})
  .catch((error) => {
      console.log(error);
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
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese email" />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Ingrese su contraseña" />
                </div>
                <button type="submit" onClick={this.login} class="btn btn-primary">Iniciar sesión</button>
                <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Crear cuenta</button>
              </form>
              </div>
            </div>
        </div>
      );
    }
  }
        
export default Welcome;
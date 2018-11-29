import React, { Component } from 'react';
import './App.css';
import fire from './config/Fire';
import Home from './components/Home';
import Login from './components/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      user: null,
    });
    //this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        console.log('if', user);
      } else {
        this.setState({ user: null });
        console.log('else', user)
      }
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.user ? (<Home />) : (<Login />)}
      </div>
    )
  };
}

export default App;

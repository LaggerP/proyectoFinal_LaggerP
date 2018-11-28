import React, { Component } from 'react';
import fire from '../config/Fire';

class Home extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        fire.auth().signOut().then(function() {
          // Sign-out successful.
        }).catch(function(error) {
          console.log(error)
          // An error happened.
        });
    }
  render() {
    return (
      <div className="Home">
        <h1>Home sectionasdfasdf</h1>
        <button onClick={this.logout()}>Salir</button>
      </div>
    )
  };
}

export default Home;

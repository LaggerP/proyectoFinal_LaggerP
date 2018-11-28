
import firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyBCJ6jRgzm3Q2Y_lzrJHn9iFyC7v6P93Vo",
    authDomain: "proyecto-final-coderhouse-lp.firebaseapp.com",
    databaseURL: "https://proyecto-final-coderhouse-lp.firebaseio.com",
    projectId: "proyecto-final-coderhouse-lp",
    storageBucket: "proyecto-final-coderhouse-lp.appspot.com",
    messagingSenderId: "417955324929"
  };

  const fire = firebase.initializeApp(config);
  export default fire;
  

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBwfvtzGbRb-5TFG64fzzXowG4ZoPQBK8I",
    authDomain: "movie-flix-ee422.firebaseapp.com",
    databaseURL: "https://movie-flix-ee422-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "movie-flix-ee422",
    storageBucket: "movie-flix-ee422.appspot.com",
    messagingSenderId: "896748997842",
    appId: "1:896748997842:web:a9c8fe51c24d3bc4aaf10b",
    measurementId: "G-7DVQ14RYJG"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
  import * as firebase from 'firebase/app';
  import "firebase/storage";
  import "firebase/firestore";
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC0wm749t72VVLMs0FYCBvNDW96WkwTBW0",
    authDomain: "react-hiit-timer-119d6.firebaseapp.com",
    projectId: "react-hiit-timer-119d6",
    storageBucket: "react-hiit-timer-119d6.appspot.com",
    messagingSenderId: "905976507127",
    appId: "1:905976507127:web:94f331f0ad8cf6ba31c1f2"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firebase();

  export {projectStorage, projectFirestore};
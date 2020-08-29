import * as firebase from 'firebase';

// Thad's config data
const config = {
    apiKey: "AIzaSyBKy7vpQHvTgRW5KxDZjNIVSQM3p6L2FNg",
    authDomain: "jrpscholars.firebaseapp.com",
    databaseURL: "https://jrpscholars.firebaseio.com",
    projectId: "jrpscholars",
    storageBucket: "jrpscholars.appspot.com",
    messagingSenderId: "241403665599",
    appId: "1:241403665599:web:d0732ad22845efcc157a0a",
    measurementId: "G-XXDHT5JYVV"
  };

  firebase.initializeApp(config);
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();  
  export { firebase, googleAuthProvider  };
  export const database = firebase.database();

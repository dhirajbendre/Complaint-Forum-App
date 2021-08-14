import firebase from 'firebase'
require("@firebase/firestore") 

  const firebaseConfig = {
    apiKey: "AIzaSyCjEs-MQ13hIttXbqaQyFliLvXtWqqnGlk",
    authDomain: "complaint-forum-app.firebaseapp.com",
    projectId: "complaint-forum-app",
    storageBucket: "complaint-forum-app.appspot.com",
    messagingSenderId: "1045661219520",
    appId: "1:1045661219520:web:56cbe047dbf43c34620b25"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  export default firebase.firestore()


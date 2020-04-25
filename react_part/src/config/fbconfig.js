import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBLK1WpZT8Nz-JfRGZak7u8AL1WpkesCVs",
    authDomain: "project-manager-cacef.firebaseapp.com",
    databaseURL: "https://project-manager-cacef.firebaseio.com",
    projectId: "project-manager-cacef",
    storageBucket: "project-manager-cacef.appspot.com",
    messagingSenderId: "223110973103",
    appId: "1:223110973103:web:ab4077f953fe4115cbf65a",
    measurementId: "G-VNRYJRY2LR"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase
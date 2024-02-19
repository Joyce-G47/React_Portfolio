import firebase from 'firebase';
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyAmkVFjPG2qetInJlWB4szvrL-PeXXZsbU",
    authDomain: "react-project-dedf5.firebaseapp.com",
    projectId: "react-project-dedf5",
    storageBucket: "react-project-dedf5.appspot.com",
    messagingSenderId: "796697815533",
    appId: "1:796697815533:web:8e9906006655e536f29fe4"
  };

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
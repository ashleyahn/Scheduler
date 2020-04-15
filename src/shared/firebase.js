import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBQkZ78kIKZida4tWVcPvjfrCW03dM3HxY",
    authDomain: "course-scheduler-b3cc8.firebaseapp.com",
    databaseURL: "https://course-scheduler-b3cc8.firebaseio.com",
    projectId: "course-scheduler-b3cc8",
    storageBucket: "course-scheduler-b3cc8.appspot.com",
    messagingSenderId: "795055102699",
    appId: "1:795055102699:web:94b582455ef33eca877cae",
    measurementId: "G-9WV4FP4VH4"
};

firebase.initializeApp(firebaseConfig);


export default firebase;
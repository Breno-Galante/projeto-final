// Import the functions you need from the SDKs you need
import  firebase  from "firebase/app";
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEg3uZWumGhK1VERg-aqmx3kuiE2sEnMc",
    authDomain: "react-project-335b7.firebaseapp.com",
    projectId: "react-project-335b7",
    storageBucket: "react-project-335b7.appspot.com",
    messagingSenderId: "721984116459",
    appId: "1:721984116459:web:80d4adb2f35cd15cacd0ae"
  };

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;


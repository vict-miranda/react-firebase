import * as firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
    // apiKey: "AIzaSyCW5HfmF0jjBnQV7e1fwnkFmjSreCMyp9Y",
    // authDomain: "login-28989.firebaseapp.com",
    // databaseURL: "https://login-28989.firebaseio.com",
    // projectId: "login-28989",
    // storageBucket: "login-28989.appspot.com",
    // messagingSenderId: "837139865158",
    // appId: "1:837139865158:web:66ff2035367958fd7fb447",
    // measurementId: "G-5SV8PW8604"
    apiKey: "AIzaSyDPLTxHVMUtiIGGhztPdPq-2Be6DqC1zKo",
    authDomain: "victorapp-5bf8e.firebaseapp.com",
    databaseURL: "https://victorapp-5bf8e.firebaseio.com",
    projectId: "victorapp-5bf8e",
    storageBucket: "victorapp-5bf8e.appspot.com",
    messagingSenderId: "436023138108",
    appId: "1:436023138108:web:a5e3220edaca693e78f039"
});

/*const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();*/

export default app;
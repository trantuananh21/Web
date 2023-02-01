import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDantJX62rGkccQ_GCmbxYUlYGM7GzHhpk",
  authDomain: "jsi-15.firebaseapp.com",
  projectId: "jsi-15",
  storageBucket: "jsi-15.appspot.com",
  messagingSenderId: "524363690661",
  appId: "1:524363690661:web:56e8f201f275e85188934c",
  measurementId: "G-6DMZTPQPHD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var email = document.getElementById('Email');
var password = document.getElementById('password');

window.login = function(e){
    e.preventDefault();
    var obj = {
        email: email.value,
        password: password.value,
    };
    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(sucess){
        console.log(user.uid);
        alert("Loggined Sucessfully");
    })
    .catch(function(err){
        window.location.replace('index.html')
        alert('login error' + err);
    })
    console.log(obj);
}
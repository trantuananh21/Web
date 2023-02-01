// DANG NHAP FACEBOOK NHUNG KHONG THANH CONG

// function signin(){
//     var provider = new firebase.auth.FacebookAuthProvider();
//     provider.addScope('user_birthday, email');
//     firebase.auth().useDeviceLanguage();
//     firebase.auth().signInWithPopup(provider).then(function(result){
//         var token = result.credential.acessToken;

//         document.querySelector('#signout').style.display="block";
//         console.log(user);
//         var user = result.user;
//         console.log(user.email);
//         var userimage = document.querySelector("#user-image")

//         var userpic = document.createElement("img");
//         userpic.scr = user.photoURL;
//         userimage.append(userpic);

//         var useremail = document.querySelector("#user-email");
//         useremail.innerHTML = user.email
//     }).catch(function(error){
//         alert(error.message);
//     })
// }

// function signout(){
//     firebase.auth.SignOut()
// }

// END OF DANG NHAP FACEBOOK

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
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

var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var email = document.getElementById('Email');
var password = document.getElementById('password');

window.signup = function(e){
    e.preventDefault();
    var obj = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
    }

    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success){
        alert("Signup Sucessfully");
    })
    .catch(function(err){
        alert("Error in" + err);
    })
    console.log(obj);
}
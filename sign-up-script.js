console.log("Hi this is the sign up script");

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
  import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
//   import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "https://www.gstatic.com/firebasejs/10.10.0/firebase/auth";


 

  const firebaseConfig = {
    apiKey: "AIzaSyDp4AJ2T_R96emO-6r1IiWNe67sldwe5IY",
    authDomain: "js-password-manager.firebaseapp.com",
    projectId: "js-password-manager",
    storageBucket: "js-password-manager.appspot.com",
    messagingSenderId: "124927854684",
    appId: "1:124927854684:web:e92c3a8d435cfd6ef97e99",
    measurementId: "G-1P9W1YKGGR"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const database = getDatabase(app);
//   console.log(auth);

//Selectors
const entered_email = document.getElementById("sign_up_email");
const entered_password = document.getElementById("Password");
const confirm_password = document.getElementById("Password_confirm");
const sign_in_button = document.getElementById("submit");
const back_button = document.getElementById("back_button");

console.log(entered_password);
console.log(confirm_password);
console.log(sign_in_button);


//Event listeners
sign_in_button.addEventListener('click',function(e){
    
    e.preventDefault();
    
    console.log('sign in button clicked'); 
    if(validate_password(entered_password.value) && validate_passwords_same(entered_password.value,confirm_password.value)){
        
        console.log("here");
        return 0;
    }
    else{
        createUserWithEmailAndPassword(auth,entered_email.value,entered_password.value)
        .then((userCredential)=>{
            const user = userCredential.user
            alert('success');
            entered_email.value="";
            entered_password.value="";
            confirm_password.value="";
            const backdisplay=document.getElementById("backdisplay");
            backdisplay.innerText="Please go back to the Login page"
        })
    }
});

back_button.addEventListener('click',function(){
    window.location.href='index.html'
});






//Functions


const validate_password=function(entered_password){
    if(entered_password.length<6){
        console.log('password long enough');
        return true;
    }
    else return false;
};

const validate_passwords_same = function(entered_password,confirm_password){
    if(entered_password===confirm_password) return true;
    else return false;
}

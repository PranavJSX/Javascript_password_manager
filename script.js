
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
//   import { fetch_from_database } from "./main";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDp4AJ2T_R96emO-6r1IiWNe67sldwe5IY",
    authDomain: "js-password-manager.firebaseapp.com",
    projectId: "js-password-manager",
    storageBucket: "js-password-manager.appspot.com",
    messagingSenderId: "124927854684",
    appId: "1:124927854684:web:e92c3a8d435cfd6ef97e99",
    measurementId: "G-1P9W1YKGGR"
  };


import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

//ALl selectors 
const sign_up_button = document.querySelector('.sign_up_button');
const login_button = document.querySelector('.login_button');
const user_id_input = document.querySelector('.user_id_input');
const password_input = document.querySelector('.password_input');
const login_form = document.querySelector('.login_form');
const password_manager_screen = document.querySelector('.password_manager_screen');
const error_place = document.getElementById("wrong_credentials");
const logout_button = document.getElementById('logout_button');
const app=initializeApp(firebaseConfig);
const auth=getAuth(app);

var user_details={
    "user_id":'XC7lfJMZ4Fcl0nh6ZSs076XQAtk2',
    "email":'test5@gmail.com',
    "logged_in":0
};


//Click functions
const switch_to_logged_in_screen=function(){
    // console.log(login_button);
    setTimeout(function(){
        login_form.style.opacity=0;
        password_manager_screen.style.opacity=1;
    },50);
    // console.log('Reached here');
};

//Handling the login cutton click
login_button.addEventListener("click",function(event){
    event.preventDefault();
    let user_id = user_id_input.value;
    let password_entered = password_input.value;
    if(user_id=='' && password_entered==''){
        error_place.innerHTML="Please enter your Credentials";
    }
    else if(user_id!='' && password_entered!=''){
        signInWithEmailAndPassword(auth,user_id,password_entered)
        .then((userCredential)=>{
            const user = userCredential.user;
            logout_button.style.opacity=1;
            set_function(user.uid,user_id);
            switch_to_logged_in_screen();
            user_id.value = '';
            password_entered = '';
            fetch_from_database();
        })
        .catch((error)=>{
            const error_code = error.code;
            alert('Please enter correct credentials');
            const error_message = error.message;
            console.log(error_message,error_code);
        });
    }
    else{        
    error_place.innerHTML="Wrong Credentials";
}
});

  sign_up_button.addEventListener('click',function(){
    console.log("Sign up button got clicked");
    window.location.href="signpage.html";
  });


const set_function = function(user,email){
    user_details.user_id=user;
    user_details.email=email
    user_details.logged_in=1;
    console.log(user_details);
};


export {user_details};




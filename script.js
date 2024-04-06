
//ALl selectors 
const sign_up_button = document.querySelector('.sign_up_button');
const login_button = document.querySelector('.login_button');
const user_id_input = document.querySelector('.user_id_input');
const password_input = document.querySelector('.password_input');
const login_form = document.querySelector('.login_form');
const password_manager_screen = document.querySelector('.password_manager_screen');
const error_place = document.getElementById("wrong_credentials");

let username = "Pranav";
let password = "Content";

console.log(error_place);

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
    let user_id = user_id_input.value;
    let password_entered = password_input.value;
    console.log(user_id);
    if(username===user_id && password===password_entered){
    switch_to_logged_in_screen();
    event.preventDefault();
}
else{
    error_place.innerHTML="Wrong Credentials";
}
});


<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

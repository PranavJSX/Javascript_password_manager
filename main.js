console.log('this is the main.js');


const firebaseConfig = {
    apiKey: "AIzaSyDp4AJ2T_R96emO-6r1IiWNe67sldwe5IY",
    authDomain: "js-password-manager.firebaseapp.com",
    projectId: "js-password-manager",
    storageBucket: "js-password-manager.appspot.com",
    messagingSenderId: "124927854684",
    appId: "1:124927854684:web:e92c3a8d435cfd6ef97e99",
    measurementId: "G-1P9W1YKGGR"
  };

import {user_details} from "./script.js";
// import {logged_in} from "./script.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js"; 
import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import {getDatabase,ref,onValue,child,set,push,update} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

const database = getDatabase();
const app=initializeApp(firebaseConfig);

var fetched_object={};
// console.log(data_object);
//All the selectors
var which_button_clicked = 0;
const password_name = document.getElementById('password_name');
const password_stored = document.getElementById('password_stored');
const password_submit_button = document.querySelector('.password_entry_submit');
const flexbox_container = document.querySelector('.flexbox-container');
const password_manager_screen = document.querySelector('.password_manager_screen');
const showPasswords = document.getElementById('showPasswords');
const flexbox_descendants=flexbox_container.getElementsByTagName('div');
const logout_button = document.getElementById('logout_button');
const login_screen = document.querySelector('.login_form');
let password_counter = 0;
let storage_dict = {};


// console.log(stored_password);
console.log(storage_dict);
// console.log(storage_dict['Facebook']);
// user_details.user_id='';
console.log(user_details);
//Event Listeners
showPasswords.addEventListener('click',async function(e){
    let fetched_object =await fetch_from_database();
    console.log(fetched_object);
    let our_obj = fetched_object[user_details.user_id]
    if(user_details.user_id in fetched_object){
        let pass_name , pass_stored;
        pass_name = Object.values(our_obj.passwords_stored);
        console.log(Object.values(our_obj.passwords_stored))
        Object.values(our_obj.passwords_stored).forEach(element => {
            pass_stored = (element.password_entered);
            pass_name = (element.password_name);
            console.log(pass_name,pass_stored) 
            storage_dict[pass_name] = pass_stored;
        });
    }
    else{
        alert('No passwords stored yet!')
        return;
    }
    print_flexboxes(storage_dict);
    setTimeout(load_buttons(),1000);
    e.preventDefault(); 
    
});


password_submit_button.addEventListener('click',async function(event){
    let key = password_name.value;
    let value = password_stored.value;
    if(key===''){
        alert('please enter password name');
    }
    else if(value===''){
        alert('Please enter the password to be stored');
    }
    else if(key!='' && value!=''){
        let fetched_object =await fetch_from_database();
            if(user_details.user_id in fetched_object)
            {
                password_name.value='';
                password_stored.value='';
                const db = getDatabase();
                set(ref(db,'users/' + `${user_details.user_id}/` + 'passwords_stored' + '/' + key),{
                    password_name:key,
                    password_entered:value,
                });   
                event.preventDefault(); 
                return;
            }
            else {
                data_object.email=user_details.email;
                data_object.user_id=user_details.user_id;
                write_to_database(data_object.user_id,value,key,data_object.email);
                return;
            }
        
    }
    
});
console.log(database.ref);
// console.log(data_object);


//Logout button functionality
logout_button.addEventListener('click',function(e){
    logout_button.style.opacity = 0;
    password_manager_screen.style.opacity = 0;
    login_screen.style.opacity = 1;
    e.preventDefault();
});





//Functions




//Function to print the flexboxes
const print_flexboxes=function(storage_dict){
    let i=0;
    for(const[key,value] of Object.entries(storage_dict)){
        //Traversing through the dictionary and picking the values
        console.log(key,value);
        //Putting values in the flexbox tables.
        let new_div = document.createElement('div');
        flexbox_container.appendChild(new_div);

        flexbox_descendants[i].innerHTML=`<table border="solid" class="password_details_input">
        <tbody><tr><td colspan="2" align="center">${key}</td></tr>
        <tr><td id='password_stored${i}' type="password">${value}</td>
        <td><button id='button_copy${i}' class="copy_buttons">Copy</button></td>
        </tr>
    </tbody></table>
    `;
    
    i++;
        
    }
}


const data_object = {
    "user_id":'test1',
    "pass":"testpassword",
    "password_name":"github",
    "email":'test@test.com'
}




const write_to_database  =async function(user_id,password_entered,password_name,email){
    data_object.pass=password_entered;
    data_object.password_name=password_name;
    console.log(data_object);
        const db = getDatabase();
        set(ref(db,'users/' + data_object.user_id),{
            email:email,
            user_id:user_id,
        });
        set(ref(db,'users/' + data_object.user_id + '/' + 'passwords_stored' + '/' + data_object.password_name),{
            password_name:data_object.password_name,
            password_entered:data_object.pass,
        });
        password_counter = password_counter + 1;

};

var updateStarCount = function(element,value){
    console.log()
}

const fetch_from_database=function(){
    return new Promise((resolve)=>{
        let db_data={};
        const db = getDatabase();
        const distanceRef = ref(db,'users/')
        onValue(distanceRef,(snapshot)=>{
            db_data = snapshot.val();
            resolve(db_data);
    })
});
};




//Handling of the copy password operation

const load_buttons=()=>{
    const arr=[];
    for(let i=0;i<flexbox_container.childElementCount-1;i++){
        let temp = `button_copy${i}`
        arr[i] = document.getElementById(temp);
    }
    console.log(arr);
    console.log(document.getElementById('button_copy0'));
    arr.forEach(button => {
        button.addEventListener('click',function(){
           console.log(button);
           console.log(arr.indexOf(button));
           let temp = `password_stored${arr.indexOf(button)}`
           let our_password = document.getElementById(temp);
           our_password = our_password.textContent;
           navigator.clipboard.writeText(our_password);

        });
    });
}   



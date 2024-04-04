
//ALl selectors 
const sign_up_button = document.querySelector('.sign_up_button');
const login_button = document.querySelector('.login_button');
const user_id_input = document.querySelector('.user_id_input');
const password_input = document.querySelector('.password_input');
const login_form = document.querySelector('.login_form');
const password_manager_screen = document.querySelector('.password_manager_screen');


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
    console.log(user_id);
    switch_to_logged_in_screen();
    event.preventDefault();
});

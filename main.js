console.log('this is the main.js');

//All the selectors

const password_name = document.getElementById('password_name');
const password_stored = document.getElementById('password_stored');
const password_submit_button = document.querySelector('.password_entry_submit');
const flexbox_container = document.querySelector('.flexbox-container');

// console.log(flexbox);
// console.log(flexbox_template.childNodes[0].children[0].childNodes[0].innerHTML);

// [0].childNodes[1].children[0].firstChild.innerHTML


flexbox_descendants=flexbox_container.getElementsByTagName('div');





let storage_dict = {
    // 'Facebook':'hostname@12',
    // 'LinkedIn':'LOL22231',
};
// console.log(stored_password);
console.log(storage_dict);
// console.log(storage_dict['Facebook']);


//Functions

//Function to add the newly entered password details
password_submit_button.addEventListener('click',function(event){
    let key = password_name.value;
    let value = password_stored.value;
    if(key===''){
        alert('please enter password name');
    }
    else if(value===''){
        alert('Please enter the password to be stored');
    }
    else if(key!='' && value!=''){
        storage_dict[key] = value; 
        console.log(storage_dict)
        password_name.value='';
        password_stored.value='';
        add_to_flexbox(key,value);
        event.preventDefault();
    }
    
});

//function to add the newly entered password details to flexbox
const add_to_flexbox=function(key,value){
    row = document.createElement('div');
    row.className = `flex`
    row.innerHTML=`<table border="solid">
    <tr><td colspan="2" align="center">${key}</td></tr>
    <tr><td>${value}</td>
    <td><button>Copy</button></td>
    </tr>`
    flexbox_container.appendChild(row);
    print_flexboxes(storage_dict)

}


//Function to print the flexboxes
const print_flexboxes=function(storage_dict){
    let i=0;
    for(const[key,value] of Object.entries(storage_dict)){
        //Traversing through the dictionary and picking the values
        console.log(key,value);
        //Putting values in the flexbox tables.
        flexbox_descendants[i].innerHTML=`<table border="solid">
        <tbody><tr><td colspan="2" align="center">${key}</td></tr>
        <tr><td>${value}</td>
        <td><button>Copy</button></td>
        </tr>
    </tbody></table>`;
    i++;
        
    }
}

print_flexboxes(storage_dict);


console.log(document.querySelector('.flexbox-container'));





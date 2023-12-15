let myForm = document.getElementById("form");
let email = document.getElementById("email");
let eConfirm = document.getElementById("verifyEmail");
let submit = document.getElementById("submit");
const validPatternRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validate(event){

    if (email.value === eConfirm.value && email.value.length > 0 && email.value.match(validPatternRegEx) && eConfirm.value.match(validPatternRegEx)){
        email.style.backgroundColor="LightGreen";
        eConfirm.style.backgroundColor="LightGreen";
        
    }else{
        window.alert("Error! Please re-input your email!");
        email.style.backgroundColor ="Orange";
        eConfirm.style.backgroundColor="Orange";
    }
    
}

submit.addEventListener("click", validate);
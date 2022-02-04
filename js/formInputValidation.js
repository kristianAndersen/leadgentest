import {phone} from 'phone';


const fname =document.getElementById('fname')
const fnamelable=document.getElementById('fnamelable')
const email=document.getElementById('email')
const emaillable=document.getElementById('emaillable')
const phoneNum=document.getElementById('phone')
const phoneLable=document.getElementById('phoneLable');
const crmcheck=document.getElementById('crmcheck')

let validName=false;
let validPhone=false;
let validEmail=false;

fname.addEventListener('input', function() {
    const namePattern=/^(?:((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-.\s])){1,}(['’,\-\.]){0,1}){2,}(([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-. ]))*(([ ]+){0,1}(((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){1,})(['’\-,\.]){0,1}){2,}((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){2,})?)*)$/;
    let validname=namePattern.test(this.value); 

    if(!validname){
       seemsCrooket(fnamelable)
    }else{
        seemsLegit(fnamelable)
        validName=true
    }

});

email.addEventListener('input', function() {

        const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let validemail=emailPattern.test(this.value); 

        if(!validemail){
           seemsCrooket(emaillable)
        }else{
            seemsLegit(emaillable)
            validEmail=true;
        }


});

phoneNum.addEventListener('input', function() {
    
    let isPhoneNumValid = phone(this.value, {country: 'NO'});

    if(!isPhoneNumValid.isValid){   
        seemsCrooket(phoneLable)
    }else{
        seemsLegit(phoneLable)
        validPhone=true
    }
});


function seemsLegit(elm){
    anime({
        targets: elm,
        color:"rgba(var(--Green), 1)",
        opacity: [1,0],
        duration: 1000,
        delay:500,
        easing: 'linear',
    })
}

function seemsCrooket(elm){
    anime({
        targets: elm,
        opacity: 1,
        color:"rgba(var(--LightRed), 1)",
        duration: 1000,
        delay:500,
        easing: 'linear',
    })
}
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="~`!@#$%^&*()-_+=[]{};:<>,.?/'";

const allChar=upperCase+lowerCase+number+symbol;

const length=12;
let inputBox=document.querySelector("#password-input");

function passGenerate(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];

    while(length >password.length){
        password+=allChar[Math.floor(Math.random()*allChar.length)];
    }

    inputBox.value=password;
}

let genPassBtn=document.querySelector("button");

genPassBtn.addEventListener("click",passGenerate);

function copyPassword(){
    inputBox.select();
    document.execCommand("copy");
}

let copy=document.querySelector("#copy");
copy.addEventListener("click",copyPassword);


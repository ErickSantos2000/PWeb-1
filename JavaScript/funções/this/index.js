// "use strict"
console.log(this);
console.log("globalThis");
console.log(globalThis);


import { teste } from './mod1.js';

// usando strict expression fuction se torna undifine
function expression(){
    console.log("this dentro de function expression");
    console.log(this);
}

expression();

// this dentro da arrow function é sempre o obj global
const fnArrow = () =>{
    console.log("this dentro de arrow function");
    console.log(this);
}

fnArrow();


// ao ativar sistema de modulo do browser o this em qualquer parte sera undfine
// tanto faz se tiver em Strict ou não
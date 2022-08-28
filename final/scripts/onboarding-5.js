import {navbar,buttons} from "./comp/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

let button = document.getElementById("buttons");
button.innerHTML = buttons();

window.Continue = () =>{
    window.location.href = "Onboarding-6.html";
}

window.previous = ()=>{
    window.location.href = "Onboarding-4.html";
}
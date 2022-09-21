import { navbar,buttons } from "./comp/navbar.js";

let nav = document.getElementById("navbar");

nav.innerHTML = navbar();

let btn = document.getElementById("buttons");
btn.innerHTML = buttons();

window.Continue = ()=>{
    window.location.href = "profile.html";
}

window.previous = ()=>{
    window.location.href = "Onboarding_chooseNeed.html";
}

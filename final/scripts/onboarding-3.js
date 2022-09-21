import{navbar,buttons} from "./comp/navbar.js";

let nav = document.getElementById("navbar");

nav.innerHTML = navbar();

let button = document.getElementById("buttons");
button.innerHTML = buttons();

// console.log("Yes");

window.previous = ()=>{
    window.location.href = 'Onboarding-2.html';
}
window.Continue = ()=>{
    let arr = [];
    let input1 = document.getElementsByName("Input-1").value;
    let input2 = document.getElementsByName("Input-2").value;
    let input3 = document.getElementsByName("Input-3").value;
    let input4 = document.getElementsByName("Input-4").value;
    arr.push(input1,input2,input3,input4);
    localStorage.setItem("team",JSON.stringify(arr));
    window.location.href = "Onboarding-5.html";
}
window.btn = ()=>{
    let buttun = document.getElementById("Continue");
    buttun.innerHTML = "Save & Continue";
}

import {navbar,buttons} from './comp/navbar.js';

let nav = document.getElementById("navbar");

nav.innerHTML = navbar();

window.fun1 = ()=>{
for(let i = 1; i <= 5; i++){
        let btn = document.getElementById(`${i}`);
        btn.style.border = "1px solid gray";
    }
    let u = document.getElementById("1");
    u.style.border = '2px solid #0a8b37';
    u.style.color = '#0a8b37';
    let cont = document.getElementById("continue");
    cont.style.color = "#FFF";
    cont.style.backgroundColor = "#0a8b37";
    cont.style.border="1px solid gray";
     cont.style.cursor = "pointer";
    cont.disabled = false;
    let res = document.getElementById("1").value;
    localStorage.setItem("responce",JSON.stringify(res));
    console.log(res);
}
window.fun2 = ()=>{
    for(let i = 1; i <= 5; i++){
        let btn = document.getElementById(`${i}`);
        btn.style.border = "1px solid gray";
    }
    let u = document.getElementById("2");
    u.style.border = '2px solid #0a8b37';
    u.style.color = '#0a8b37';
    let cont = document.getElementById("continue");
    cont.style.color = "#FFF";
    cont.style.backgroundColor = "#0a8b37";
    cont.style.border="1px solid gray";
     cont.style.cursor = "pointer";
    cont.disabled = false;
    let res = document.getElementById("2").value;
    localStorage.setItem("responce",JSON.stringify(res));
}
window.fun3 = ()=>{
    for(let i = 1; i <= 5; i++){
        let btn = document.getElementById(`${i}`);
        btn.style.border = "1px solid gray";
    }
    let u = document.getElementById("3");
    u.style.border = '2px solid #0a8b37';
    u.style.color = '#0a8b37';
    let cont = document.getElementById("continue");
    cont.style.color = "#FFF";
    cont.style.backgroundColor = "#0a8b37";
    cont.style.border="1px solid gray";
    cont.style.cursor = "pointer";
    cont.disabled = false;
    let res = document.getElementById("3").value;
    localStorage.setItem("responce",JSON.stringify(res));
}
window.fun4 = ()=>{
    for(let i = 1; i <= 5; i++){
        let btn = document.getElementById(`${i}`);
        btn.style.border = "1px solid gray";
    }
    let u = document.getElementById("4");
    u.style.border = '2px solid #0a8b37';
    u.style.color = '#0a8b37';
    let cont = document.getElementById("continue");
    cont.style.color = "#FFF";
    cont.style.backgroundColor = "#0a8b37";
    cont.style.border="1px solid gray";
     cont.style.cursor = "pointer";
    cont.disabled = false;
    let res = document.getElementById("4").value;
    localStorage.setItem("responce",JSON.stringify(res));
}
window.fun5 = ()=>{
    for(let i = 1; i <= 5; i++){
        let btn = document.getElementById(`${i}`);
        btn.style.border = "1px solid gray";
    }
    let u = document.getElementById("5");
    u.style.border = '2px solid #0a8b37';
    u.style.color = ' #0a8b37 ';
    let cont = document.getElementById("continue");
    cont.style.color = "#FFF";
    cont.style.backgroundColor = "#0a8b37";
    cont.style.border="1px solid gray";
     cont.style.cursor = "pointer";
    cont.disabled = false;
    let res = document.getElementById("5").value;
    localStorage.setItem("responce",JSON.stringify(res));
}
window.Continue=()=>{
    let responce = JSON.parse(localStorage.getItem("responce"));
    if(responce == "Just me"){
        window.location.href = "Onboarding_chooseNeed.html" ;
    }else{
        window.location.href = "Onboarding-3.html" ;
    }
}
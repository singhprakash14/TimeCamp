import {navbar,buttons} from './comp/navbar.js'

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

let button = document.getElementById("buttons");
button.innerHTML = buttons();

window.Continue = () =>{
    window.location.href = "Onboarding_chooseNeed.html";
}
window.previous = ()=>{
    window.location.href = "Onboarding-5.html";
}


let color = ['#ffbd88',"#2A868A",'#ACD1AF',"#48BF91","#769393","#0BA8E6","#0BE6B7","#c4a8b4"];

let name = [ "Brand warming"," Seafoam blue","Soft green"," Ocean green",'Dusty teal',"Dark sky blue two"," Dark sky blue"," Faded pink"];

let count = 0;
window.get = ()=>{
    let outer = document.getElementsByClassName("id");
    outer[0].innerHTML = null;
    if(count > 0){
        console.log("Yes");
        let div  = document.createElement("div");
        div.id = "span";
        div.style.backgroundColor = "#ffbd88";
        let span = document.createElement("span");
        span.innerHTML = "Brand warning";
        let div1 = document.createElement('div');
        div1.style.marginLeft = '10px'
        div1.append(div,span);
        outer[0].append(div1);
        outer[0].style.border = "0px solid gray";
        
        count = 0;
    }
    else{
        for(let i = 0; i < 8 ; i++){
            let div  = document.createElement("div");
            div.id = "span";
            div.style.backgroundColor = color[i];
            let span= document.createElement("span");
            span.innerHTML = name[i];
            let div1 = document.createElement('div');
            div1.append(div,span);
            outer[0].append(div1);
            outer[0].style.border = "1px solid lightblue";
            outer[0].style.width = "400px";
        }
        count++;
    }
}
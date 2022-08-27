let btn=document.getElementById("select");
let don=document.querySelector("#don_1")
let don2=document.querySelector("#don_2")
don.style.color="white";
function doller1(){
    don.style.color="white"
    don2.style.color="black"
    btn.style.left="0";
    btn.style.width="180px"
    btn.style.borderRadius = "30px 70px 10px 30px";
    document.getElementById("pro").innerText="9";
    document.getElementById("pro2").innerText="6.3"
}
function doller2(){
    don2.style.color="white"
    don.style.color="black"
    btn.style.left="180px";
    btn.style.width="120px"
    btn.style.borderRadius = "70px 30px 30px 10px";
    document.getElementById("pro").innerText="10";
    document.getElementById("pro2").innerText="7"
}
let block=(value)=>{
    let faq=document.querySelectorAll(".div14");
    for(let i=0;i<faq.length;i++){
        if(value==i){
            setTimeout(function(){
                faq[i].style.transform= "translatey(0)"
            },150)
            faq[i].style.display="block" 
        }
        else{
            faq[i].style.display="none"
        }
    }
}

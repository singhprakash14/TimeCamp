function navbar (){
    return `<div class="header_img" onclick="(location.href='index.html')"><img src="https://cdn-m.timecamp.com/img/greenbranding/colorLogo.svg" alt=""></span>
    </div>
    <div id="nav_div">
        <div></div>
    </div>`
}

function buttons(){
    return `<button id="previous" onclick="previous()">Previous Step</button>
    <button id="Continue" onclick="Continue()">Continue</button>`
}
export {navbar,buttons};
let btn = document.getElementById("btn");
let light = document.getElementById("light");
function toggleBtn(){
 btn.classList.toggle("active");
 light.classList.toggle("on");
}

var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");

menuBtn.onclick = function(){
    if(sideNav.style.left == "-250px"){
        sideNav.style.right = "0";
    }
    else{
        sideNav.style.right = "-250px";
    }
}



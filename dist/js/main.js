let btn = document.getElementById("btn");
let light = document.getElementById("light");
function toggleBtn() {
  btn.classList.toggle("active");
  light.classList.toggle("on");
}

const menuBtn = document.querySelector("menu-img");
const navLi = document.getElementById("nav-li");
const menu = document.getElementById("menu");

// menu.onclick = function a() {
//   if (navLi.style.left == "-250px") {
//     navLi.style.right = "0";
//   } else {
//     navLi.style.right = "-250px";
//   }
// };

// function toggle() {
//   menu.addEventListener("click", function () {
//     if (navLi.classList.contains("show-links")) {
//       navLi.classList.remove("show-links");
//     } else {
//       navLi.classList.add("show-links");
//     }
//   });
// }

menu.addEventListener("click", function () {
  navLi.classList.toggle("show-links");
});

let header = document.getElementById("header");

let fish1 = document.getElementById("fish1");
let fish2 = document.getElementById("fish2");
let grass1shadow = document.getElementById("grass1shadow");
let slogan = document.getElementById("slogan");
let btn = document.getElementById("btn");
let grass2shadow = document.getElementById("grass2shadow");
let grass1 = document.getElementById("grass1");
let grass2 = document.getElementById("grass2");
let bush1 = document.getElementById("bush1");
let lotus = document.getElementById("lotus");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  fish2.style.left = value * 0.4 + "px";
  fish1.style.left = value * -0.4 + "px";
  grass1shadow.style.left = value * -1.6 + "px";
  grass2shadow.style.left = value * 1.6 + "px";
  grass1.style.left = value * -0.2 + "px";
  bush1.style.left = value * -0.2 + "px";
  grass2.style.left = value * 0.2 + "px";
  lotus.style.marginTop = value * 0.06 + "px";
  btn.style.marginTop = value * 1 + "px";
  slogan.style.marginBottom = value * -1.3 + "px";
  header.style.marginTop = value * 0.4 + "px";
});

const navigation = document.querySelector("nav");
document.querySelector(".menu").onclick = function () {
  this.classList.toggle("active");
  navigation.classList.toggle("active");
};

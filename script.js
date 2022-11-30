var slideINdex = 1;
showSlides(slideINdex);
function plusSlides(n) {
  showSlides((slideINdex += n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("reviews__feedback");
  if (n > slides.length) {
    slideINdex = 1;
  }
  if (n < 1) {
    slideINdex = slides.length;
  }
  for (i = 0; i < slides.length; ++i) {
    slides[i].style.display = "none";
  }
  slides[slideINdex - 1].style.display = "block";
}
let time = 1800;
const countDownEl = document.getElementById("order__time");
setInterval(updateCountDown, 1000);
function updateCountDown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countDownEl.innerHTML = `${minutes}:${seconds}`;
  time = time - 1;
}
document
  .getElementById("button-one")
  .addEventListener("click", scrollToElement);
function scrollToElement(e) {
  element = document.getElementById("form");
  element.scrollIntoView(true);
}
document
  .getElementById("button-two")
  .addEventListener("click", scrollToElement);
function scrollToElement(e) {
  element = document.getElementById("form");
  element.scrollIntoView(true);
}
document
  .getElementById("button-theree")
  .addEventListener("click", scrollToElement);
function scrollToElement(e) {
  element = document.getElementById("form");
  element.scrollIntoView(true);
}
document
  .getElementById("button-four")
  .addEventListener("click", scrollToElement);
function scrollToElement(e) {
  element = document.getElementById("form");
  element.scrollIntoView(true);
}
document
  .getElementById("button-five")
  .addEventListener("click", scrollToElement);
function scrollToElement(e) {
  element = document.getElementById("form");
  element.scrollIntoView(true);
}
document
  .getElementById("button-six")
  .addEventListener("click", scrollToElement);
function scrollToElement(e) {
  element = document.getElementById("form");
  element.scrollIntoView(true);
}
document
  .getElementById("button-seven")
  .addEventListener("click", scrollToElement);
function scrollToElement(e) {
  element = document.getElementById("form");
  element.scrollIntoView(true);
}
document
  .getElementById("button-eight")
  .addEventListener("click", scrollToElement);
function scrollToElement(e) {
  element = document.getElementById("form");
  element.scrollIntoView(true);
}

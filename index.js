const rond1 = document.querySelector("#rond1");
const rond2 = document.querySelector("#rond2");
const rond3 = document.querySelector("#rond3");
const mouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = e.pageY + "px";
    mouse.style.left = e.pageX + "px";
  });
});

// window.addEventListener("mousemove", (e) => {
//   rond1.style.top = e.pageY + "px";
//   rond1.style.left = e.pageX + "px";
// });
// window.addEventListener("mousemove", (e) => {
//   rond2.style.top = e.pageY + "px";
//   rond2.style.left = e.pageX + "px";
// });
// window.addEventListener("mousemove", (e) => {
//   rond3.style.top = e.pageY + "px";
//   rond3.style.left = e.pageX + "px";
// });

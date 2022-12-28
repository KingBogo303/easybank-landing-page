const menu = document.querySelector("#menu");
const header = document.querySelector("header");
const closeMenu = document.querySelector("#close-menu");

menu.onclick = () => {
  header.classList.toggle("nav-open");
};
closeMenu.onclick = () => {
  header.classList.remove("nav-open");
};
window.onscroll = () => {
  header.classList.remove("nav-open");
};

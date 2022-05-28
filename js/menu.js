const menuIcon = document.getElementById("menu-icon");
const menuMobile = document.getElementById("menu-mobile");
menuIcon.addEventListener("click", (e) => {
  menuMobile.classList.add("menu-mobile--show");
  document.body.classList.add("body--overflow");
});
menuMobile.addEventListener("click", (e) => {
  if (e.target.classList.contains("bx-x")) {
    menuMobile.classList.remove("menu-mobile--show");
    document.body.classList.remove("body--overflow");
  }
});

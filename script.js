var menuToggle = document.querySelector(".navbar-menu-toggle");
var sideNavbar = document.querySelector(".side-navbar");
var xmarkBtn = document.querySelector(".xmark");
menuToggle.addEventListener("click", () => {
  sideNavbar.style.left = "0";
  sideNavbar.style.opacity = "5";
});

xmarkBtn.addEventListener("click", () => {
  sideNavbar.style.left = "-60%";
});

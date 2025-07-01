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

var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function () {
  var enteredValue = event.target.value.toUpperCase();
  for (count = 0; count < productList.length; count = count + 1) {
    var productName = productList[count].querySelector("p").textContent;
    if (productName.toUpperCase().indexOf(enteredValue) < 0) {
      productList[count].style.display = "none";
    } else {
      productList[count].style.display = "block";
    }
  }
});

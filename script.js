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

//select popup box,popup overlay,button
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.querySelector("#add-popup-button");
addpopupbutton.addEventListener("click", () => {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});
//select cancel button
var cancelpopup = document.querySelector(".cancel-popup");
cancelpopup.addEventListener("click", (event) => {
  event.preventDefault();
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});
//select container,addbook,booktitlt,bookauthor,bookdescription
var container = document.querySelector(".container");
var addbook = document.querySelector(".add-book");
var bookTitle = document.querySelector("#book-title-input");
var bookAuthor = document.querySelector("#book-author-input");
var bookDescription = document.querySelector("#book-description-input");

addbook.addEventListener("click", () => {
  event.preventDefault();
  var div = document.createElement("div");
  div.className = "book-container";
  div.innerHTML = `<h2>${bookTitle.value}</h2> <h5>${bookAuthor.value}</h5> <p>${bookDescription.value}</p>
  <button onclick="del(event)">Delete</button>`;
  container.append(div);
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});
function del(event) {
  event.target.parentElement.remove();
}

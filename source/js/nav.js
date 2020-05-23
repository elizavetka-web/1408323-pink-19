var navMain = document.querySelector (".main-header__inner");
var navToggle = document.querySelector (".nav-toggle");

navMain.classList.remove("main-header__inner--nojs");

navToggle.addEventListener ("click", function(event) {
  if (navMain.classList.contains("main-header__inner--opened")) {
    navMain.classList.remove("main-header__inner--opened");
  } else {
    navMain.classList.add("main-header__inner--opened");
  }
});

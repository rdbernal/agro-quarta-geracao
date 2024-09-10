//Body selection
const body = document.querySelector("body");
//Burger menu selection
const burger__menu = document.querySelector(".js-burger__menu");
//Burger menu lines selection
const burger__menu__lines = document.querySelectorAll(".js-menu__line");
//Menu selection
const nav__menu = document.querySelector(".js-nav__menu");
//Menu items selection
const nav__menu__items = document.querySelectorAll(".js-menu__item");
//Menu links selection
const nav__menu__links = document.querySelectorAll(".js-menu__links");

function showMenu() {
  //Fixed body when menu is open
  body.classList.toggle("body-hidden");
  //Menu animation
  nav__menu.classList.toggle("active");
  //Burger menu animation
  burger__menu__lines.forEach((item) => {
    item.classList.toggle("active");
  });
  //Menu items animation
  nav__menu__items.forEach((item, index) => {
    // console.log(item);

    if (item.style.animation) {
      item.style.animation = "";
    } else {
      item.style.animation = `slide__menu__items 0.5s forwards ${index / 7}s`;
    }
  });

  //Fixed body (no scroll)
  if (body.style.overflowY !== 'hidden') { 
    body.style.overflowY = 'hidden';
  } else {
    body.style.overflowY = 'auto';
  }
}

function showIndicator() {
  this.nextElementSibling.classList.add("active");
}

function hideIndicator() {
  this.nextElementSibling.classList.remove("active");
}

//Menu animation call
burger__menu.addEventListener("click", showMenu);
//Menu indicator call
nav__menu__links.forEach((item) => {
  item.addEventListener("mouseenter", showIndicator);
  item.addEventListener("mouseleave", hideIndicator);
});
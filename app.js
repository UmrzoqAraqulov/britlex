let navShrink = document.querySelector("#nav-shrink");
let backtop = document.querySelector("#bactop");

window.addEventListener("scroll", function () {
  showNavShrink();
  showBacktop();
});

function showNavShrink() {
  if (scrollY > 0) {
    navShrink.classList.add("show-nav__shrink");
  } else {
    navShrink.classList.remove("show-nav__shrink");
  }
}

function showBacktop() {
  if (scrollY > 100) {
    backtop.classList.add("show__backtop");
  } else {
    backtop.classList.remove("show__backtop");
  }
}

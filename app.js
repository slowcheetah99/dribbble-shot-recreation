const hamburgerMenu = document.querySelector(".hamburger");
const menuClose = document.querySelector(".cross");
const grayUi = document.querySelector(".center-gray");
const blueUi = document.querySelector(".center-blue");

hamburgerMenu.addEventListener("click", (e) => {
  if (
    grayUi.classList.contains("close") ||
    blueUi.classList.contains("close")
  ) {
    grayUi.classList.remove("close");
    blueUi.classList.remove("close");
    grayUi.classList.add("open");
    blueUi.classList.add("open");
  }
  grayUi.classList.add("open");
  blueUi.classList.add("open");
  e.target.classList.add("keydown");
  console.log(e.target.classList);
});

menuClose.addEventListener("click", () => {
  if (grayUi.classList.contains("open") || blueUi.classList.contains("open")) {
    grayUi.classList.remove("open");
    blueUi.classList.remove("open");
    grayUi.classList.add("close");
    blueUi.classList.add("close");
  }
  grayUi.classList.add("close");
  blueUi.classList.add("close");
});

//keydown animations

window.onscroll = function () {
  let nav = document.querySelector("header nav");
  let getStartedButton = document.querySelector("#buttonContainer .getStarted");

  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
    getStartedButton.style.backgroundColor = "#1a8917";
  } else {
    nav.classList.remove("scrolled");
    getStartedButton.style.backgroundColor = "#191919";
  }
};

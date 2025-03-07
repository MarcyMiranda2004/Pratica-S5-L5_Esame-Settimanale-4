window.onscroll = function () {
  let nav = document.querySelector("header nav");
  let getStartedButton = document.querySelector("header nav .get-started");

  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
    getStartedButton.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    getStartedButton.classList.remove("scrolled");
  }
};

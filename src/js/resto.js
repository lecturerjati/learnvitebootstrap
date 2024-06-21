import * as bootstrap from "bootstrap";

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var rect = document.getElementById("jumbo").getBoundingClientRect();
  //   console.log(rect.top, rect.right, rect.bottom, rect.left);
  console.log(rect.top);
  if (rect.top < -20) {
    document.getElementById("secondNav").classList.remove("bg-dark", "navbar-dark");
    document.getElementById("secondNav").classList.add("bg-body-tertiary", "navbar-light");
    document.getElementById("searchBtn").classList.remove("btn-outline-light");
    document.getElementById("searchBtn").classList.add("btn-outline-secondary");
  } else {
    document.getElementById("secondNav").classList.remove("bg-body-tertiary", "navbar-light");
    document.getElementById("secondNav").classList.add("bg-dark", "navbar-dark");
    document.getElementById("searchBtn").classList.remove("btn-outline-secondary");
    document.getElementById("searchBtn").classList.add("btn-outline-light");
  }
}

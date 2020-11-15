//DOM
const toggleNavbar = document.querySelector(".toggle-navbar");
const navbarLinks = document.querySelector(".navbar-links");

toggleNavbar.addEventListener("click", () => {
  navbarLinks.classList.toggle("toggle-navbar-on");
});

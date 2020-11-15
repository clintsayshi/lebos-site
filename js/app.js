//DOM
const toggleNavbar = document.querySelector(".toggle-navbar");
const navbarLinks = document.querySelector(".navbar-links");

toggleNavbar.addEventListener("click", () => {
  console.log(navbarLinks);
  navbarLinks.classList.toggle("toggle-navbar-on");
});

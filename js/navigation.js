const btnNav = document.querySelector(".btn-mobile-nav");
const navContainer = document.querySelector(".navigation-container");

btnNav.addEventListener("click", function () {
  navContainer.classList.toggle("nav-open");
});

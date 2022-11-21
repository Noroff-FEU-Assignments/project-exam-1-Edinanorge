const btnNav = document.querySelector(".btn-mobile-nav");
const navContainer = document.querySelector(".navigation-container");

btnNav.addEventListener("click", () => navContainer.classList.toggle("nav-open"));

window.addEventListener("scroll", () => {
  const scrollable = window.innerHeight;
  const scrolled = window.scrollY;

  if (scrollable <= Math.ceil(scrolled)) {
    document.body.classList.add("sticky");
  } else if (scrollable > Math.ceil(scrolled)) {
    document.body.classList.remove("sticky");
  }
});

const carousels = document.querySelectorAll(".section-carousel");

carousels.forEach((carousel) => {
  const carouselItems = carousel.querySelectorAll(".carousel-item");
  const dotsHtml = Array.from(carouselItems, () => {
    return `<button class="dot">&nbsp;</button>`;
  });

  carousel.insertAdjacentHTML("beforeend", `<div class="dots">${dotsHtml.join("")}</div>`);

  const dots = carousel.querySelectorAll(".dot");

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      carouselItems.forEach((carouselItem) => {
        carouselItem.classList.remove("carousel-item--selected");
      });
      dots.forEach((dot) => {
        dot.classList.remove("dot--selected");
      });
      carouselItems[i].classList.add("carousel-item--selected");
      dot.classList.add("dot--selected");
    });
  });

  carouselItems[0].classList.add("carousel-item--selected");
  dots[0].classList.add("dot--selected");
});

const carousels = document.querySelectorAll(".section-carousel");

carousels.forEach((carousel) => {
  const carouselItems = carousel.querySelectorAll(".carousel-item");
  const dotsHtml = Array.from(carouselItems, () => {
    return `<button class="dot">&nbsp;</button>`;
  });
  const buttonsHtml = `<button class="btn-arrow btn-left "><i class="fa-solid fa-chevron-left"></i></button>
                        <button class="btn-arrow btn-right btn--selected "><i class="fa-solid fa-chevron-right"></i></button>`;

  carousel.insertAdjacentHTML("beforeend", buttonsHtml);
  carousel.insertAdjacentHTML("beforeend", `<div class="dots">${dotsHtml.join("")}</div>`);

  const dots = carousel.querySelectorAll(".dot");
  const btnLeft = carousel.querySelector(".btn-left");
  const btnRight = carousel.querySelector(".btn-right");

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

function carousel() {
  const btnLeft = document.querySelector(".btn-left");
  const btnRight = document.querySelector(".btn-right");
  const carousel = document.querySelector(".carousel");
  const carouselItem = document.querySelectorAll(".carousel-item");

  let i = 0;
  let width = carouselItem[i].clientWidth;
  console.log(width);

  btnRight.addEventListener("click", () => {
    i++;
    carousel.style.transform = `translate(${-i * (width + 80)}px)`;

    if (i === carouselItem.length - 1) {
      btnRight.classList.add("disable");
    } else {
      btnLeft.classList.remove("disable");
    }
  });

  btnLeft.addEventListener("click", () => {
    i--;
    carousel.style.transform = `translate(${-i * (width + 80)}px)`;

    if (i === 0) {
      btnLeft.classList.add("disable");
    } else {
      btnRight.classList.remove("disable");
    }
  });

  btnLeft.classList.add("disable");
}

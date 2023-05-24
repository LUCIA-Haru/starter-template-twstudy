/*---Testimonial slider/Carousel---*/
function testimonialSlider() {
  const carouselOne = document.getElementById("carouselOne");
  if (carouselOne) {
    // if the element exists
    carouselOne.addEventListener("slide.bs.carousel", function () {
      const activeItem = this.querySelector(".active");
      document.querySelector(".js-testimonial-img").src =
        activeItem.getAttribute("data-js-testimonial-img");
    });
  }
}
testimonialSlider();

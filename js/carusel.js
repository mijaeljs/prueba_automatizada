document.addEventListener("DOMContentLoaded", function () {
  const myCarousel = document.querySelector('#carouselExample');
  new bootstrap.Carousel(myCarousel, {
    interval: 3000,
    ride: 'carousel',
    pause: false
  });
});

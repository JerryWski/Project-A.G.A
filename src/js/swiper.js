const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    220: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    950: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1250: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  },
});

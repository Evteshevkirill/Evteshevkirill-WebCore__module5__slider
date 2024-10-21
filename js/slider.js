window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
      let swiper;
  
      breakpoint = window.matchMedia(breakpoint);
  
      const enableSwiper = function(className, settings) {
        swiper = new Swiper(className, settings);
  
        if (callback) {
          callback(swiper);
        }
      }

      const checker = function() {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };
  
      breakpoint.addEventListener('change', checker);
      checker();
    }
  
    resizableSwiper(
      '(max-width: 767px)',
      '.js-slider',
      {
        loop: true,
        spaceBetween: 16,
        direction: 'horizontal',
        slidesPerView: "auto",
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
      },
    );
});



const button = document.querySelector('.js-brands__btn');
const content = document.querySelector('.js-slider__wrapper');
const iconMore = document.querySelector('.brands-btn__ico');
const textButton = document.querySelector('.brands-btn__text');

button.addEventListener('click', () => {
  
  if (!content.classList.contains('js-slider__wrapper--open')) {
    content.classList.remove('js-slider__wrapper--close');
    content.classList.add('js-slider__wrapper--open');
  } else {
    content.classList.add('js-slider__wrapper--close');
    content.classList.remove('js-slider__wrapper--open');
  }

  iconMore.classList.toggle('brands-btn__ico--rotate');

  if (!content.classList.contains("js-slider__wrapper--open")) {
    textButton.textContent = "Показать все";
  } else {
    textButton.textContent = "Скрыть";
  }
});

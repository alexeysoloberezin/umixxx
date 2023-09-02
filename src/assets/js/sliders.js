export const initSliders = () => {
  // if ($(".lastNews__wrp").length > 0) {
  //     new Swiper(".lastNews__wrp", {
  //         slidesPerView: 1,
  //         spaceBetween: 30,
  //         navigation: {
  //             nextEl: '.swiper-button-next',
  //             prevEl: '.swiper-button-prev',
  //         },
  //
  //         // Enable lazy loading
  //         lazy: {
  //             //  tell swiper to load images before they appear
  //             loadPrevNext: true,
  //             // amount of images to load
  //             loadPrevNextAmount: 1,
  //         },
  //
  //         breakpoints: {
  //             // when window width is <= 999px
  //             600: {
  //                 slidesPerView: 2,
  //                 loadPrevNext: true,
  //                 // amount of images to load
  //                 loadPrevNextAmount: 1,
  //             },
  //             1000: {
  //                 slidesPerView: 3,
  //                 preloadImages: false,
  //                 // Enable lazy loading
  //                 lazy: false,
  //             },
  //         }
  //     });
  // }


  if ($(".home__swiper ").length > 0) {
    new Swiper(".home__swiper", {
      slidesPerView: 1,
      loop: true,
      speed: 800,
      // autoplay: {
      //   delay: 3500,
      //   disableOnInteraction: true,
      // },
      navigation: {
        nextEl: '.home-next',
        prevEl: '.home-prev',
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }


  if ($(".project__swiper ").length > 0) {
    const mySwiper = new Swiper(".project__swiper", {
      slidesPerView: 1,
      spaceBetween: 15,
      speed: 500,
      navigation: {
        nextEl: '.project__swiper-next',
        prevEl: '.project__swiper-prev',
      },
    });

    const min = new Swiper(".project__swiper-mini", {
      slidesPerView: 3,
      slidesPerScroll: 2,
      spaceBetween: 20,
      speed: 500,
      navigation: {
        nextEl: '.project__swiper-mini-next',
        prevEl: '.project__swiper-mini-prev',
      },
      breakpoints: {
        600: {
          slidesPerView: 4,
          spaceBetween: 35,
        },
      },
      on: {
        click() {
          mySwiper.slideTo(this.clickedIndex);
        },
      },
    });

    mySwiper.on('slideChange', function () {
      const elems = $('.project__swiper-mini .swiper-slide')

      elems.removeClass('active')
      if (elems[mySwiper.realIndex]) {
        elems[mySwiper.realIndex].classList.add('active')
        min.slideTo(mySwiper.realIndex)
      }
    });
  }


  if ($(".partners__swiper ").length > 0) {
    new Swiper(".partners__swiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      speed: 400,
      // fade:{crossFade:true},
      autoplay: {
        delay: 2000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: '.partners-next',
        prevEl: '.partners-prev',
      },
      breakpoints: {
        600: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 4,
        },
      }
    });
  }

}

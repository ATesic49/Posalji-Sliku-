const link=document.querySelectorAll(".nav a")
    link[2].classList.add('active')
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView:1,
        spaceBetween:1,



        breakpoints:{
          500: {
            slidesPerView:1.85,
            spaceBetween: 1,
          }
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
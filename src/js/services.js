const sliderServ = document.querySelector('.swiper-container--services');


function mobileSliderServ() {
	if (window.innerWidth <= 767 && sliderServ.dataset.mobile == 'false') {
      var mySwiperServ = new Swiper(sliderServ, {
         // Optional parameters
         direction: 'horizontal',
         loop: false,
         spaceBetween: 16,
         slidesPerView: 'auto',

         // If we need pagination
         pagination: {
				el: '.swiper-pagination--services',
            type: 'bullets',
            clickable: true,
         },

         breakpoints: {
            // when window width is >= 480px
            480: {
               slidesPerView: 'auto',
               spaceBetween: 30,
            },
         	// when window width is >= 640px
            640: {
               slidesPerView: 'auto',
               spaceBetween: 40,
            }
         }
      });

      sliderServ.dataset.mobile = 'true';
   }

   if (window.innerWidth > 767) {
      var mySwiperServ = document.querySelector('.swiper-container--services').swiper
      sliderServ.dataset.mobile = 'false';
      if (sliderServ.classList.contains('swiper-container-initialized')) {
         mySwiperServ.destroy();    
      }
   }
}

mobileSliderServ();

window.addEventListener('resize', () => {
	mobileSliderServ();
});
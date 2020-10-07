const sliderTech = document.querySelector('.swiper-container--technics');
var buttonTech = document.querySelector('.technics__button');
var itemTech = document.querySelector('.swiper-wrapper--technics').children;
var attributeTech = buttonTech.getAttribute('data-buttonTech');
var textTech = document.querySelector('.button__text--technics');
var iconTech = document.querySelector('.button__icon--technics');


function mobileSliderTech() {
	if (window.innerWidth <= 767 && sliderTech.dataset.mobile == 'false') {
      var mySwiperTech = new Swiper(sliderTech, {
         // Optional parameters
         direction: 'horizontal',
         loop: false,
         spaceBetween: 16,
         slidesPerView: 'auto',

         // If we need pagination
         pagination: {
				el: '.swiper-pagination--technics',
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

      sliderTech.dataset.mobile = 'true';
   }

   if (window.innerWidth > 767) {
      var mySwiperTech = document.querySelector('.swiper-container--technics').swiper
      sliderTech.dataset.mobile = 'false';
      if (sliderTech.classList.contains('swiper-container-initialized')) {
         mySwiperTech.destroy();    
      }
   }
}

mobileSliderTech();

window.addEventListener('resize', () => {
	textTech.textContent = 'Показать все';
   iconTech.style.transform = 'rotate(0deg)';	
	mobileSliderTech();
	addItemsTech();
});


buttonTech.addEventListener('click', function () {
   var attrnumberTech = Number(attributeTech);
   var tempTech = attributeTech % 2;
   attributeTech = attrnumberTech + 1;
   console.log(attributeTech);
   console.log(tempTech);
   buttonTech.setAttribute('data-buttonTech', attributeTech);
   if (tempTech != 0) {
      textTech.textContent = 'Скрыть';
      iconTech.style.transform = 'rotate(180deg)';
      if ((window.innerWidth >= 768) && (window.innerWidth < 1120)) {
         for (var i = 3; i < itemTech.length - 1; i++) {
            itemTech[i].classList.remove('technics__item--visibility');
            itemTech[i].classList.add('technics__item');
         }
      } else if (window.innerWidth >= 1120) {
         for (var i = 3; i < itemTech.length - 1; i++) {
            itemTech[i].classList.remove('technics__item--visibility');
            itemTech[i].classList.add('technics__item');
         }
      }
   } else if (tempTech === 0) {
      textTech.textContent = 'Показать все';
      iconTech.style.transform = 'rotate(0deg)';
      if ((window.innerWidth >= 768) && (window.innerWidth < 1120)) {
         for (var i = 3; i < itemTech.length - 1; i++) {
            itemTech[i].classList.remove('technics__item');
            itemTech[i].classList.add('technics__item--visibility');
         }
      } else if (window.innerWidth >= 1120) {
         for (var i = 3; i < itemTech.length - 1; i++) {
            itemTech[i].classList.remove('technics__item');
            itemTech[i].classList.add('technics__item--visibility');
         }
      }
   }
});


function addItemsTech () {
	if ((window.innerWidth >= 768) && (window.innerWidth < 1120)) {
      for (var i = 2; i < itemTech.length - 1; i++) {
			var visibilityTech = itemTech[i].getAttribute('data-itemTech');
			if (visibilityTech = 'true') {
				itemTech[i].classList.remove('technics__item');
				itemTech[i].classList.add('technics__item--visibility');
				visibilityTech = 'false';
				itemTech[i].setAttribute('data-itemTech', visibilityTech);
			}
      }
   } else if (window.innerWidth >= 1120) {
      for (var i = 0; i < 3; i++) {
			var visibilityTech = itemTech[i].getAttribute('data-itemTech');
			if (visibilityTech = 'false') {
				itemTech[i].classList.remove('technics__item--visibility');
				itemTech[i].classList.add('technics__item');
				visibilityTech = 'true';
				itemTech[i].setAttribute('data-itemTech', visibilityTech);
			}
		}
		for (var i = 3; i < itemTech.length - 1; i++) {
			var visibilityTech2 = itemTech[i].getAttribute('data-itemTech');
			if (visibilityTech2 = 'true') {
				itemTech[i].classList.remove('technics__item');
				itemTech[i].classList.add('technics__item--visibility');
				visibilityTech2 = 'false';
				itemTech[i].setAttribute('data-itemTech', visibilityTech2);
			}
		}
	} else if (window.innerWidth < 768) {
      for (var i = 0; i < itemTech.length - 1; i++) {
			var visibilityTech = item[i].getAttribute('data-itemTech');
			if (visibilityTech = 'false') {
				itemTech[i].classList.remove('technics__item--visibility');
				itemTech[i].classList.add('technics__item');
				visibilityTech = 'true';
				itemTech[i].setAttribute('data-itemTech', visibilityTech);
			}
      }
   }
}

addItemsTech();
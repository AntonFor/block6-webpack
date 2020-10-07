const slider = document.querySelector('.swiper-container--brand');
var button = document.querySelector('.brand__button');
var item = document.querySelector('.swiper-wrapper--brand').children;
var attribute = button.getAttribute('data-button');
var text = document.querySelector('.button__text');
var icon = document.querySelector('.button__icon');


function mobileSlider() {
	if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
      var mySwiper = new Swiper(slider, {
         // Optional parameters
         direction: 'horizontal',
         loop: false,
         spaceBetween: 16,
         slidesPerView: 'auto',

         // If we need pagination
         pagination: {
				el: '.swiper-pagination--brand',
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

      slider.dataset.mobile = 'true';
   }

   if (window.innerWidth > 767) {
      var mySwiper = document.querySelector('.swiper-container--brand').swiper
      slider.dataset.mobile = 'false';
      if (slider.classList.contains('swiper-container-initialized')) {
         mySwiper.destroy();    
      }
   }
}

mobileSlider();

window.addEventListener('resize', () => {
	text.textContent = 'Показать все';
   icon.style.transform = 'rotate(0deg)';	
	mobileSlider();
	addItems();
});


button.addEventListener('click', function () {
   var attrNumber = Number(attribute);
   var temp = attribute % 2;
   attribute = attrNumber + 1;
   console.log(attribute);
   console.log(temp);
   button.setAttribute('data-button', attribute);
   if (temp != 0) {
      text.textContent = 'Скрыть';
      icon.style.transform = 'rotate(180deg)';
      if ((window.innerWidth >= 768) && (window.innerWidth < 1120)) {
         for (var i = 6; i < item.length; i++) {
            item[i].classList.remove('brand__item--visibility');
            item[i].classList.add('brand__item');
         }
      } else if (window.innerWidth >= 1120) {
         for (var i = 8; i < item.length; i++) {
            item[i].classList.remove('brand__item--visibility');
            item[i].classList.add('brand__item');
         }
      }
   } else if (temp === 0) {
      text.textContent = 'Показать все';
      icon.style.transform = 'rotate(0deg)';
      if ((window.innerWidth >= 768) && (window.innerWidth < 1120)) {
         for (var i = 6; i < item.length; i++) {
            item[i].classList.remove('brand__item');
            item[i].classList.add('brand__item--visibility');
         }
      } else if (window.innerWidth >= 1120) {
         for (var i = 8; i < item.length; i++) {
            item[i].classList.remove('brand__item');
            item[i].classList.add('brand__item--visibility');
         }
      }
   }
});


function addItems () {
	if ((window.innerWidth >= 768) && (window.innerWidth < 1120)) {
      for (var i = 6; i < item.length; i++) {
			var visibility = item[i].getAttribute('data-item');
			if (visibility = 'true') {
				item[i].classList.remove('brand__item');
				item[i].classList.add('brand__item--visibility');
				visibility = 'false';
				item[i].setAttribute('data-item', visibility);
			}
      }
   } else if (window.innerWidth >= 1120) {
      for (var i = 0; i < 8; i++) {
			var visibility = item[i].getAttribute('data-item');
			if (visibility = 'false') {
				item[i].classList.remove('brand__item--visibility');
				item[i].classList.add('brand__item');
				visibility = 'true';
				item[i].setAttribute('data-item', visibility);
			}
      }
      for (var i = 8; i < item.length; i++) {
			var visibility = item[i].getAttribute('data-item');
			if (visibility = 'true') {
				item[i].classList.remove('brand__item');
				item[i].classList.add('brand__item--visibility');
				visibility = 'false';
				item[i].setAttribute('data-item', visibility);
			}
      }
   } else if (window.innerWidth < 768) {
      for (var i = 0; i < item.length; i++) {
			var visibility = item[i].getAttribute('data-item');
			if (visibility = 'false') {
				item[i].classList.remove('brand__item--visibility');
				item[i].classList.add('brand__item');
				visibility = 'true';
				item[i].setAttribute('data-item', visibility);
			}
      }
   }
}

addItems();
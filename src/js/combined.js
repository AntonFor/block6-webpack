const slider = document.querySelector('.swiper-container--brand');
var button = document.querySelector('.brand__button');
var item = document.querySelector('.swiper-wrapper--brand').children;
var attribute = button.getAttribute('data-button');
var text = document.querySelector('.button__text');
var icon = document.querySelector('.button__icon');

var burger = document.querySelector('.burger');
var cross = document.querySelector('.cross');
var menu = document.querySelector('.container-menu');
var base = document.querySelector('.container-base');

var callButton1 = document.querySelector('.call-click1');
var callButton2 = document.querySelector('.call-click2');
var call = document.querySelector('.call');
var crossButton = document.querySelector('.call__link-cross');

var chatButton1 = document.querySelector('.chat-click1');
var chatButton2 = document.querySelector('.chat-click2');
var feedback = document.querySelector('.feedback');
var crossButtonFeedback = document.querySelector('.feedback__link-cross');

const sliderServ = document.querySelector('.swiper-container--services');

const sliderTech = document.querySelector('.swiper-container--technics');
var buttonTech = document.querySelector('.technics__button');
var itemTech = document.querySelector('.swiper-wrapper--technics').children;
var attributeTech = buttonTech.getAttribute('data-buttonTech');
var textTech = document.querySelector('.button__text--technics');
var iconTech = document.querySelector('.button__icon--technics');


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


menu.addEventListener('click', function (e) {
	if (!e.target.closest('.container-menu__wrapper')) {
		menu.classList.remove('container-menu--show');
		menu.classList.add('container-menu--hide');
		base.classList.remove('container-base--hide');
		base.classList.add('container-base--show');
	}
});

burger.addEventListener('click', function () {
	menu.classList.remove('container-menu--hide');
	menu.classList.add('container-menu--show');
	base.classList.remove('container-base--show');
	base.classList.add('container-base--hide');
});

cross.addEventListener('click', function () {
	menu.classList.remove('container-menu--show');
	menu.classList.add('container-menu--hide');
	base.classList.remove('container-base--hide');
	base.classList.add('container-base--show');
});


callButton1.addEventListener('click', function (e) {
	call.classList.add('call--show');
	e.preventDefault();
	if (window.innerWidth > 767) {
		base.classList.remove('container-base--hide');
		base.classList.add('container-base--hide-for-modal');
		menu.classList.remove('container-menu--show');
		menu.classList.add('container-menu--hide-for-modal');
		let temp = 'true';
		call.setAttribute('data-call', temp);
	}
});

callButton2.addEventListener('click', function (e) {
	call.classList.add('call--show');
	e.preventDefault();
	if (window.innerWidth > 767) {
		base.classList.remove('container-base--show');
		base.classList.add('container-base--hide-for-modal');
		menu.classList.remove('container-menu--hide');
		menu.classList.add('container-menu--hide-for-modal');
		let temp = 'false';
		call.setAttribute('data-call', temp);
	}
});

crossButton.addEventListener('click', function (e) {
	call.classList.remove('call--show');
	e.preventDefault();
	if (window.innerWidth > 767) {
		let attribute = call.getAttribute('data-call');
		if (attribute === 'true') {
			base.classList.remove('container-base--hide-for-modal');
			base.classList.add('container-base--hide');
			menu.classList.remove('container-menu--hide-for-modal');
			menu.classList.add('container-menu--show');
		} else {
			base.classList.remove('container-base--hide-for-modal');
			base.classList.add('container-base--show');
			menu.classList.remove('container-menu--hide-for-modal');
			menu.classList.add('container-menu--hide');
		}
	}
});


chatButton1.addEventListener('click', function (e) {
	feedback.classList.add('feedback--show');
	e.preventDefault();
	if (window.innerWidth > 767) {
		base.classList.remove('container-base--hide');
		base.classList.add('container-base--hide-for-modal');
		menu.classList.remove('container-menu--show');
		menu.classList.add('container-menu--hide-for-modal');
		let temp = 'true';
		feedback.setAttribute('data-feedback', temp);
	}
});

chatButton2.addEventListener('click', function (e) {
	feedback.classList.add('feedback--show');
	e.preventDefault();
	if (window.innerWidth > 767) {
		base.classList.remove('container-base--show');
		base.classList.add('container-base--hide-for-modal');
		menu.classList.remove('container-menu--hide');
		menu.classList.add('container-menu--hide-for-modal');
		let temp = 'false';
		feedback.setAttribute('data-feedback', temp);
	}
});

crossButtonFeedback.addEventListener('click', function (e) {
	feedback.classList.remove('feedback--show');
	e.preventDefault();
	if (window.innerWidth > 767) {
		let attribute = feedback.getAttribute('data-feedback');
		if (attribute === 'true') {
			base.classList.remove('container-base--hide-for-modal');
			base.classList.add('container-base--hide');
			menu.classList.remove('container-menu--hide-for-modal');
			menu.classList.add('container-menu--show');
		} else {
			base.classList.remove('container-base--hide-for-modal');
			base.classList.add('container-base--show');
			menu.classList.remove('container-menu--hide-for-modal');
			menu.classList.add('container-menu--hide');
		}
	}
});


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


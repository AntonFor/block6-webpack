import '../scss/style.scss';
import '../css/swiper-bundle.min.css';

import './brand.js';
import './technics.js';
import './services.js';
import './burger.js';
import './feedback.js';
import './call.js';
import Swiper from 'swiper';

Swiper.use([Pagination]);

const swiper = new Swiper(slider, {
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


console.log('Works!');

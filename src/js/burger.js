var burger = document.querySelector('.burger');
var cross = document.querySelector('.cross');
var menu = document.querySelector('.container-menu');
var base = document.querySelector('.container-base');


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
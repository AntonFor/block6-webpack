var callButton1 = document.querySelector('.call-click1');
var callButton2 = document.querySelector('.call-click2');
var call = document.querySelector('.call');
var crossButton = document.querySelector('.call__link-cross');
var menu = document.querySelector('.container-menu');
var base = document.querySelector('.container-base');


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
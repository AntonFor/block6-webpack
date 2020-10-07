var chatButton1 = document.querySelector('.chat-click1');
var chatButton2 = document.querySelector('.chat-click2');
var feedback = document.querySelector('.feedback');
var crossButton = document.querySelector('.feedback__link-cross');
var menu = document.querySelector('.container-menu');
var base = document.querySelector('.container-base');


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

crossButton.addEventListener('click', function (e) {
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
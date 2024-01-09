let navMenuBtn = document.querySelector('.nav-menu__btn');
let navLinks = document.querySelector('.header-nav-links');
let backDrop = document.querySelector('.header-nav-backdrop');
let socButton = document.querySelector('.social-button');
let socLinks = document.querySelector('.social-links');

navMenuBtn.addEventListener('click', function () {
	navMenuBtn.classList.toggle('active');
	navLinks.classList.toggle('active');
	backDrop.classList.toggle('active');
	socLinks.classList.remove('active');
	socButton.classList.remove('active');
});

backDrop.addEventListener('click', function () {
	navMenuBtn.classList.remove('active');
	navLinks.classList.remove('active');
	backDrop.classList.remove('active');
	socLinks.classList.remove('active');
	socButton.classList.remove('active');
});

socButton.addEventListener('click', function () {
	navMenuBtn.classList.remove('active');
	navLinks.classList.remove('active');
	backDrop.classList.toggle('active');
	socLinks.classList.toggle('active');
	socButton.classList.toggle('active');
});

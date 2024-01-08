let navMenuBtn = document.querySelector('.nav-menu__btn');
let navLinks = document.querySelector('.header-nav-links');
let backDrop = document.querySelector('.header-nav-backdrop');

navMenuBtn.addEventListener('click', function () {
	navMenuBtn.classList.toggle('active');
	navLinks.classList.toggle('active');
	backDrop.classList.toggle('active');
});

backDrop.addEventListener('click', function () {
	navMenuBtn.classList.remove('active');
	navLinks.classList.remove('active');
	backDrop.classList.toggle('active');
});

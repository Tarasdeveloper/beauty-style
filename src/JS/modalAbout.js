document.addEventListener('DOMContentLoaded', function () {
	const modal = document.querySelector('.modal_about');
	const contactBtn = document.querySelector('.modal_about-button');
	const viewMoreBtn = document.querySelector('.about-button');
	const closeButton = document.querySelector('.modal_about-close');
	const backdrop = document.querySelector('.modal_about-backdrop');
	const body = document.querySelector('body');

	viewMoreBtn.addEventListener('click', function () {
		modal.classList.toggle('is-hidden');
		body.classList.toggle('no-scroll');
		backdrop.classList.toggle('is-hidden');
	});

	closeButton.addEventListener('click', function () {
		modal.classList.toggle('is-hidden');
		body.classList.toggle('no-scroll');
		backdrop.classList.toggle('is-hidden');
	});

	contactBtn.addEventListener('click', function () {
		modal.classList.toggle('is-hidden');
		body.classList.toggle('no-scroll');
		backdrop.classList.toggle('is-hidden');
	});

	backdrop.addEventListener('click', function () {
		modal.classList.toggle('is-hidden');
		body.classList.toggle('no-scroll');
		backdrop.classList.toggle('is-hidden');
	});
});

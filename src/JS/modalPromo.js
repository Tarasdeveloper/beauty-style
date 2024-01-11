document.addEventListener('DOMContentLoaded', function () {
	const modal = document.querySelector('.modal_promo');
	const contactBtn = document.querySelector('.modal_promo-button');
	const viewMoreBtn = document.querySelector('.promotion-button');
	const closeButton = document.querySelector('.modal_promo-close');
	const backdrop = document.querySelector('.modal_promo-backdrop');
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

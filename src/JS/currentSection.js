document.addEventListener('DOMContentLoaded', () => {
	const currentLocation = window.location.pathname;
	const navigationLinks = document.querySelectorAll('.navigation a');

	for (let link of navigationLinks) {
		const href = link.getAttribute('href');

		if (href === currentLocation) {
			link.classList.add('current');
		}
	}
});

const scrollUpButton = document.getElementById('scrollUpButton');

window.addEventListener('scroll', () => {
	if (window.scrollY > window.innerHeight / 2) {
		scrollUpButton.style.transform = 'translate3d(0, 0, 0)';
	} else {
		scrollUpButton.style.transform = 'translate3d(0, 100px, 0)';
	}
});

scrollUpButton.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

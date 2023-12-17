document.addEventListener('DOMContentLoaded', function () {
	const tabs = document.querySelectorAll('.tab');
	const tabContents = document.querySelectorAll('.pricing-content_item');

	tabs.forEach((tab, index) => {
		tab.addEventListener('click', function () {
			// Hide all tab contents
			tabContents.forEach(content => {
				content.style.display = 'none';
			});

			// Убрать активный класс со всех вкладок
			tabs.forEach(t => {
				t.classList.remove('active');
			});

			// Show the selected tab content
			const tabId = this.getAttribute('data-tab');
			const selectedTabContent = document.getElementById(tabId);
			selectedTabContent.style.display = 'block';

			// Добавить активный класс к выбранной вкладке
			this.classList.add('active');
		});

		if (index === 0) {
			tab.classList.add('active');
		}
	});
});

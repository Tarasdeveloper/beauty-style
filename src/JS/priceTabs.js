document.addEventListener('DOMContentLoaded', function () {
	const tabs = document.querySelectorAll('.tab');
	const tabContents = document.querySelectorAll('.pricing-content_item');

	tabs.forEach(tab => {
		tab.addEventListener('click', function () {
			// Hide all tab contents
			tabContents.forEach(content => {
				content.style.display = 'none';
			});

			// Show the selected tab content
			const tabId = this.getAttribute('data-tab');
			const selectedTabContent = document.getElementById(tabId);
			selectedTabContent.style.display = 'block';
		});
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const tabs = document.querySelectorAll('.tab');
	const tabContents = document.querySelectorAll('.pricing-content_item');

	tabs.forEach((tab, index) => {
		tab.addEventListener('click', function () {
			// Скрыть все вкладки
			tabContents.forEach(content => {
				content.setAttribute('hidden', 'true');
				content.setAttribute('aria-hidden', 'true');
			});

			// Убрать активный класс со всех вкладок
			tabs.forEach(t => {
				t.classList.remove('active');
			});

			// Показать выбранную вкладку
			const tabId = this.getAttribute('data-tab');
			const selectedTabContent = document.getElementById(tabId);
			selectedTabContent.removeAttribute('hidden');
			selectedTabContent.removeAttribute('aria-hidden');

			// Добавить активный класс к выбранной вкладке
			this.classList.add('active');
		});

		// Установить первую вкладку активной по умолчанию
		if (index === 0) {
			tab.classList.add('active');
			const tabId = tab.getAttribute('data-tab');
			const selectedTabContent = document.getElementById(tabId);
			selectedTabContent.removeAttribute('hidden');
			selectedTabContent.removeAttribute('aria-hidden');
		}
	});
});

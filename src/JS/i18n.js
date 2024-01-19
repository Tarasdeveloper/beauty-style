import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
	.use(Backend) // передаем экземпляр i18n в react-i18next, который сделает его доступным для всех компонентов через context API.
	.use(LanguageDetector) // с помощью плагина определяем язык пользователя в браузере
	.init({
		resources, // передаем переводы текстов интерфейса в формате JSON
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false, // экранирование уже есть в React, поэтому отключаем
		},
		backend: {
			loadPath: '../translation{{lng}}/{{ns}}.json',
		},
	});

export default i18next;

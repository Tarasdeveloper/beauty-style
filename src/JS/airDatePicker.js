import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localePl from 'air-datepicker/locale/pl';
import localeEn from 'air-datepicker/locale/en';
import localeDe from 'air-datepicker/locale/de';
import localeUK from 'air-datepicker/locale/uk';

new AirDatepicker('#appointmentPicker', {
	isMobile: true,
	minDate: new Date(),
	firstDay: 1,
	dateFormat: 'dd/MM/yyyy',
	locale: localeDe,
	locale: localeUK,
	locale: localePl,
	locale: localeEn,
	weekends: [6, 0],
	navTitles: {
		days(dp) {
			dp.selectedDates.length;
			let date = dp.selectedDates[0];
			return `
                  ${dp.formatDate(
										date,
										'<div>EEEE</div> <span>MMM</span> <strong>dd</strong> <i>yyyy</i>'
									)}
                `;
		},
	},
	buttons: ['today', 'clear'],
	// timepicker: true,
});

document.addEventListener('DOMContentLoaded', function () {
	const inputDate = document.getElementById('appointmentPicker');

	const currentDate = new Date();
	const formattedDate =
		('0' + currentDate.getDate()).slice(-2) +
		'/' +
		('0' + (currentDate.getMonth() + 1)).slice(-2) +
		'/' +
		currentDate.getFullYear();
	inputDate.setAttribute('placeholder', formattedDate);
});

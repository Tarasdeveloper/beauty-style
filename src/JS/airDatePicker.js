import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localePl from 'air-datepicker/locale/pl';
import localeEn from 'air-datepicker/locale/en';
import localeDe from 'air-datepicker/locale/de';
import localeUK from 'air-datepicker/locale/uk';

new AirDatepicker('#appointmentPicker', {
	inline: true,
	// isMobile: true,
	// position: 'left center',
	// locale: ['localeDe', 'localeUK', 'localePl', 'localeEn'],
	autoClose: true,
	minDate: new Date(),
	dateFormat: 'dd/MM/yyyy',
	locale: localeDe,
	locale: localeUK,
	locale: localePl,
	locale: localeEn,
});

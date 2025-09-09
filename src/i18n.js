import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(Backend) // تحميل الملفات من /public/locales
	.use(LanguageDetector) // يحدد لغة المتصفح
	.use(initReactI18next) // ربط مع React
	.init({
		fallbackLng: "en", // اللغة الافتراضية لو ما لقى اللغة
		debug: true,
		interpolation: {
			escapeValue: false,
		},
		backend: {
			loadPath: "/locales/{{lng}}/translation.json",
		},
	});

export default i18n;

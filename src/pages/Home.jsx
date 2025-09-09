import React, { useEffect, useState } from "react";
import HeroSection from "../components/Beautyhero";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import AboutUs from "../components/AboutUs";
import OurTeam from "../components/OurTeam";
import AboutCEO from "../components/AboutCEO";
import CallToAction from "../components/CallToAction";

const Home = () => {
	const [isRTL, setIsRTL] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false); // لحين تحميل اللغة
	const { i18n } = useTranslation();

	useEffect(() => {
		const storedLang = localStorage.getItem("language") || "en"; // نفس المفتاح المستخدم في LanguageSwitcher
		i18n.changeLanguage(storedLang);
		setIsRTL(storedLang === "ar");
		document.documentElement.dir = storedLang === "ar" ? "rtl" : "ltr";
		document.documentElement.lang = storedLang;

		setIsLoaded(true); // تم تحميل اللغة
	}, [i18n]);

	// تحديث isRTL عند تغيير اللغة ديناميكيًا
	useEffect(() => {
		const handleLanguageChange = (lang) => {
			setIsRTL(lang === "ar");
			document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
			document.documentElement.lang = lang;
		};
		i18n.on("languageChanged", handleLanguageChange);
		return () => i18n.off("languageChanged", handleLanguageChange);
	}, [i18n]);

	if (!isLoaded) return null; // تأجيل عرض HeroSection حتى معرفة اللغة

	return (
		<div>
			<HeroSection isRTL={isRTL} />
			<AboutUs />
			<OurTeam />
			<AboutCEO />
			<CallToAction />
		</div>
	);
};

export default Home;

import { Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import KSA from '../assets/KSA.svg'
import USA from '../assets/USA.svg'
const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const [openToggleLang, setOpenToggleLang] = useState(false);
	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang);
		localStorage.setItem("language", lang); // حفظ اللغة في localStorage
		document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
		document.documentElement.lang = lang;
		setOpenToggleLang(false); // إغلاق القائمة
	};

	useEffect(() => {
		const savedLang = localStorage.getItem("language") || "en";
		i18n.changeLanguage(savedLang);
		document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
		document.documentElement.lang = savedLang;
	}, [i18n]);

	return (
		<div className="relative inline-block">
			{/* زر اللغة */}
			<button
				onClick={() => setOpenToggleLang(!openToggleLang)}
				className="bg-gray-100 text-button hover:bg-gray-200 transition-colors p-2 rounded-lg cursor-pointer flex items-center gap-2 shadow-sm border border-gray-300"
			>
				<Globe size={18} />
				{/* <span className="hidden sm:inline text-sm font-medium">
					{i18n.language === "ar" ? "اللغة" : "Language"}
				</span> */}
			</button>

			{/* القائمة المنسدلة */}
			<AnimatePresence>
				{openToggleLang && (
					<motion.div
						initial={{ opacity: 0, scale: 0.9, y: -10 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: -10 }}
						transition={{ duration: 0.2, ease: "easeOut" }}
						className={`absolute top-12 min-w-[120px] shadow-lg bg-white text-button border border-gray-200 rounded-lg p-2 flex flex-col gap-y-1 text-sm font-medium z-50 ${
							i18n.language === "ar" ? "left-0" : "right-0"
						}`}
					>
						<button
							onClick={() => changeLanguage("ar")}
							className={`px-3 py-2 rounded-md hover:bg-gray-100 text-start flex items-center gap-x-2 cursor-pointer ${
								i18n.language === "ar" ? "bg-gray-100 font-semibold" : ""
							}`}
						>
							<img width={20} height={20} src={KSA} alt="" /> العربية
						</button>
						<button
							onClick={() => changeLanguage("en")}
							className={`px-3 py-2 rounded-md hover:bg-gray-100 text-start flex items-center gap-x-2 cursor-pointer ${
								i18n.language === "en" ? "bg-gray-100 font-semibold" : ""
							}`}
						>
							<img width={20} height={20} src={USA} alt="" />  English
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default LanguageSwitcher;

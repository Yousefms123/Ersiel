import { useTranslation } from "react-i18next";
import CEOimg from "../assets/AboutImg.png";
import SectionsTitle from "../components/SectionsTitle";
import { motion } from "motion/react";

const AboutCEO = () => {
	const { t, i18n } = useTranslation();
	const isRTL = i18n.dir() === "rtl";

	return (
		<section className="px-6 max-w-7xl mx-auto overflow-x-hidden">
			<SectionsTitle>{t("aboutCeo.title")}</SectionsTitle>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
				{/* النص */}
				<motion.div
					className="text-button order-2 md:order-1"
					initial={{ opacity: 0, x: isRTL ? 80 : -80 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					viewport={{ once: true }}
				>
					<p className="text-sm md:text-lg mb-6 leading-8 text-justify">{t("aboutCeo.content")}</p>
				</motion.div>

				{/* الصورة */}
				<motion.div
					className="order-1 md:order-2"
					initial={{ opacity: 0, x: isRTL ? -80 : 80 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
					viewport={{ once: true }}
				>
					<img src={CEOimg} alt="CEO" className="w-full h-full object-cover rounded-2xl" />
				</motion.div>
			</div>
		</section>
	);
};

export default AboutCEO;

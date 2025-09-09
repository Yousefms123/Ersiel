import { useTranslation } from "react-i18next";
import SectionsTitle from "./SectionsTitle";
import Global from "../assets/Global.png";
import Proven from "../assets/Proven.png";
import Diverse from "../assets/Diverse.png";
import Decades from "../assets/Decades.png";
import { motion } from "motion/react";

const OurTeam = () => {
	const { t } = useTranslation();
	const cards = t("ourTeam.cards", { returnObjects: true });

	// Array للأيقونات (نفس الترتيب الموجود في الترجمة)
	const icons = [Global, Proven, Diverse, Decades];

	return (
		<section className="px-6 max-w-7xl mx-auto">
			<SectionsTitle>{t("ourTeam.title")}</SectionsTitle>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{cards.map((card, index) => (
					<motion.div
						key={index}
						className="bg-white rounded-2xl border border-gray-300 p-6 flex flex-col gap-y-4 items-center text-center shadow-sm"
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.6,
							ease: "easeOut",
							delay: index * 0.2, // ✨ يخلي كل كارد يطلع بعد اللي قبله
						}}
						viewport={{ once: true }}
					>
						<img src={icons[index]} alt={card.title} className="w-24 h-16 object-contain" />
						<h3 className="text-xl font-semibold mb-2">{card.title}</h3>
						<p className="text-gray-600">{card.desc}</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default OurTeam;

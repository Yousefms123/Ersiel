import { useTranslation } from "react-i18next";
import AboutImg from "../assets/AboutImg.png";
import SectionsTitle from "../components/SectionsTitle";
// ملاحظة: تأكد من أنك تستورد motion من "framer-motion" وليس "motion/react"
// إذا كنت تستخدم مكتبة motion الأساسية، فقد تختلف بعض الخصائص. الكود التالي يفترض أنك تستخدم "framer-motion".
import { motion } from "framer-motion";

const AboutUs = () => {
	const { t } = useTranslation();
	const content = t("aboutUs.content");
	const values = t("aboutUs.values", { returnObjects: true });
	const closing = t("aboutUs.closing");

	return (
		// 👇 أضفنا overflow-x-hidden هنا لحل المشكلة
		<section className="px-6 max-w-7xl mx-auto overflow-x-hidden">
			{/* العنوان مع حركة */}
			<motion.div
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ once: true }}
			>
				<SectionsTitle>{t("aboutUs.title")}</SectionsTitle>
			</motion.div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
				{/* Left side (images) */}
				<motion.div
					className="grid grid-cols-1 gap-4"
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					viewport={{ once: true }}
				>
					<img
						src={AboutImg}
						alt="Team work"
						className="rounded-2xl w-full h-full object-cover"
					/>
				</motion.div>

				{/* Right side (text) */}
				<motion.div
					className="text-button"
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
					viewport={{ once: true }}
				>
					{/* ... باقي الكود يبقى كما هو ... */}
					<motion.p
						className="text-sm md:text-lg mb-6"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						viewport={{ once: true }}
					>
						{content}
					</motion.p>

					<motion.ul
						className="list-disc pl-6 space-y-3 mb-6"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: { staggerChildren: 0.2 },
							},
						}}
					>
						{values.map((item, index) => (
							<motion.li
								key={index}
								className="text-lg leading-relaxed flex gap-2 list-item"
								variants={{
									hidden: { opacity: 0, y: 20 },
									visible: { opacity: 1, y: 0 },
								}}
								transition={{ duration: 0.5 }}
							>
								<span className="font-bold text-sm md:text-lg">{item.label} – </span>
								<span className="text-sm md:text-lg">{item.text}</span>
							</motion.li>
						))}
					</motion.ul>

					<motion.p
						className="text-sm md:text-lg"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						viewport={{ once: true }}
					>
						{closing}
					</motion.p>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutUs;

import React from "react";
import { useTranslation } from "react-i18next";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "motion/react";
import { Mail, Phone, Printer } from "lucide-react";
const contactLink = [
	{ icon: Mail, text: "eng.nermeen@ersiel.com" },
	{ icon: Phone, text: "+821096277360" },
	{ icon: Printer, text: "0508-9603-7360" },
];
const containerVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const circleVariants = {
	hidden: { scale: 0.8, opacity: 0 },
	visible: (custom) => ({
		scale: 1,
		opacity: 1,
		transition: { delay: custom, duration: 0.7, type: "spring" },
	}),
};

const CallToAction = () => {
	const { t } = useTranslation();
	return (
		<motion.div className="p-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
			<motion.div
				variants={containerVariants}
				className="relative max-w-7xl px-6 md:my-10 flex flex-col items-center justify-center bg-white rounded-lg border border-gray-200 p-8 shadow-sm overflow-hidden  mx-auto"
			>
				<motion.div
					className=" md:text-4xl font-semibold text-center mb-4 z-[2]"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.35 }}
				>
					<motion.h1
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: "easeOut" }}
						viewport={{ once: true }}
						className="text-button text-2xl sm:text-3xl md:text-4xl font-bold  max-w-[20ch]"
					>
						{t("cta.button")}
					</motion.h1>
				</motion.div>
				<motion.div className="z-[99] my-3 mb-10 flex flex-col md:flex-row gap-y-2 w-3xl items-center justify-between ">
					{contactLink.map((link, index) => (
						<motion.span
							key={index}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.5,
								ease: "easeOut",
								delay: index * 0.08, // ✨ يخلي كل كارد يطلع بعد اللي قبله
							}}
							viewport={{ once: true }}
							className="flex items-center gap-x-1 text-sm md:text-lg text-button/75"
						>
							{link.icon && <link.icon className="w-4 h-4 md:w-6 md:h-6" />} {link.text}{" "}
						</motion.span>
					))}
				</motion.div>

				<motion.a
					href="https://wa.me/821096277360"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 text-xs sm:text-sm md:text-lg bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-600 transition z-[2]"
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.5 }}
					whileHover={{ scale: 1.05 }}
				>
					<BsWhatsapp className="text-lg" />
					{t("cta.button")}
				</motion.a>

				<motion.div
					className="absolute -top-16 -left-10 w-40 h-40 md:w-52 md:h-52 rounded-full border-[30px] border-gray-300 border-opacity-40 z-[1]"
					variants={circleVariants}
					custom={0.7}
					initial="hidden"
					animate="visible"
				></motion.div>

				<motion.div
					className="absolute -bottom-16 -right-10 w-40 h-40 md:w-52 md:h-52 rounded-full border-[30px] border-gray-300 border-opacity-40 z-[1]"
					variants={circleVariants}
					custom={0.9}
					initial="hidden"
					animate="visible"
				></motion.div>
			</motion.div>
		</motion.div>
	);
};

export default CallToAction;

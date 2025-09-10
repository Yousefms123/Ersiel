import React from "react";
import { motion } from "motion/react";

const SectionsTitle = ({ children }) => {
	return (
		<div className="my-10 md:my-16 flex items-center justify-center text-center">
			<motion.h1
				className="text-button text-2xl sm:text-3xl md:text-4xl font-bold  max-w-[20ch]"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, ease: "easeOut" }}
				viewport={{ once: true }}
			>
				{children}
			</motion.h1>
		</div>
	);
};

export default SectionsTitle;

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const HeroServices = ({ bgImage, title, desc, classNameBg }) => {
	const { t } = useTranslation();

	return (
		<div className="relative w-full overflow-hidden mt-16">
			<div className="h-full">
				<div className="outline-none">
					<div className="relative h-[70vh] w-full flex items-center overflow-hidden">
						{/* Background Image Animation */}
						<motion.img
							initial={{ scale: 1.2, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 1.5, ease: "easeOut" }}
							src={bgImage}
							alt={title}
							className={`absolute inset-0 h-full w-full object-cover ${classNameBg}`}
						/>

						{/* Overlay */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.5 }}
							transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
							className="absolute inset-0 bg-black"
						/>

						{/* Content */}
						<div className="relative z-10 w-full px-6 sm:px-10 md:px-20 lg:px-28">
							<motion.div
								initial="hidden"
								animate="visible"
								variants={{
									hidden: { opacity: 0, y: 50 },
									visible: {
										opacity: 1,
										y: 0,
										transition: {
											staggerChildren: 0.3,
											duration: 0.8,
											ease: "easeOut",
										},
									},
								}}
								className="flex w-full flex-col gap-6 items-center justify-center"
							>
								<div className="space-y-4 max-w-2xl text-center">
									<motion.h1
										variants={{
											hidden: { opacity: 0, y: -40 },
											visible: { opacity: 1, y: 0 },
										}}
										className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
									>
										{title}
									</motion.h1>

									<motion.p
										variants={{
											hidden: { opacity: 0, y: 20 },
											visible: { opacity: 1, y: 0 },
										}}
										className="text-base leading-relaxed text-white/90 sm:text-lg md:text-xl lg:text-2xl"
									>
										{desc}
									</motion.p>

									<motion.div
										variants={{
											hidden: { opacity: 0, scale: 0.8 },
											visible: { opacity: 1, scale: 1 },
										}}
										className="pt-4 text-center"
									>
										<button className="text-center cursor-pointer rounded-full px-6 py-3 font-semibold md:px-8 md:py-4 bg-white/90 text-gray-800 hover:bg-white transition-colors duration-300">
											{t("servicesHero.motorsHero.button")}
										</button>
									</motion.div>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroServices;

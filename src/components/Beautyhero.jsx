import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import BeautyHero from "../assets/BeautyHero.png";
import BeautyImg from "../assets/beautyImg.png";
import DermaHero from "../assets/DermaHero.png";
import DermaImg from "../assets/DermaImg.png";
import MotorsHero from "../assets/MotorsHero.png";

import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { motion } from "motion/react";

export default function HeroSection({ isRTL }) {
	const { t } = useTranslation();
	const translatedSlides = t("hero.slides", { returnObjects: true });

	const heroData = [
		{ image: MotorsHero, sideImage: null, ...translatedSlides[2] },
		{ image: BeautyHero, sideImage: DermaImg, ...translatedSlides[0] },
	];

	const settings = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		swipe: true,
		touchMove: true,
		arrows: true,
		fade: false,
		rtl: isRTL,
		cssEase: "ease-in-out",
		lazyLoad: "ondemand",
		responsive: [
			{
				breakpoint: 600,
				settings: { arrows: false, dots: true, fade: false, slidesToShow: 1, slidesToScroll: 1 },
			},
		],
	};

	return (
		<div className={`relative w-full overflow-hidden ${isRTL ? "text-right" : "text-left"}`}>
			<div className="hero-slider h-full">
				<Slider {...settings}>
					{heroData.map((hero, idx) => (
						<div key={idx} className="outline-none">
							<div className="relative min-h-screen w-full flex items-center overflow-hidden">
								<img
									src={hero.image}
									alt={hero.title}
									className="absolute inset-0 h-full w-full object-cover bg-center overflow-hidden"
								/>

								<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

								<div className="z-10 w-full px-6 sm:px-10 md:px-20 lg:px-28">
									<div
										className={`flex w-full flex-col gap-6 items-center justify-between ${
											isRTL ? "lg:flex-row-reverse" : "lg:flex-row"
										}`}
									>
										<div className="space-y-4 max-w-2xl">
											<motion.h1
												initial={{ opacity: 0, y: 50 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.8, ease: "easeOut" }}
												className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-8xl"
											>
												{hero.title}
											</motion.h1>

											<motion.p
												initial={{ opacity: 0, y: 30 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{
													duration: 0.9,
													delay: 0.3,
													ease: "easeOut",
												}}
												className="text-base leading-relaxed text-white/90 sm:text-lg md:text-xl lg:text-2xl"
											>
												{hero.desc}
											</motion.p>

											<motion.div
												initial={{ scale: 0.8, opacity: 0 }}
												animate={{ scale: 1, opacity: 1 }}
												transition={{
													duration: 0.7,
													delay: 0.6,
													type: "spring",
												}}
												className={`flex pt-4 ${
													isRTL ? "justify-end" : "justify-start"
												}`}
											>
												<button
													className={`transform  font-Raleway rounded-full ${
														hero.sideImage
															? "bg-button text-white"
															: "text-button bg-white"
													} px-6 py-3 font-semibold md:px-8 md:py-4`}
												>
													<a href="https://wa.me/821096277360" className="order-1 flex items-center gap-x-2" target="_blank">
														<span className="">
															{hero.button}
														</span>
														{!isRTL ? (
															<ArrowRight className="order-2" />
														) : (
															<ArrowLeft />
														)}
													</a>
												</button>
											</motion.div>
										</div>

										{hero.sideImage && (
											<motion.div
												initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{
													duration: 0.9,
													delay: 0.4,
													ease: "easeOut",
												}}
												className="hidden sm:flex items-center justify-center relative top-20 w-full"
											>
												<img
													src={hero.sideImage}
													alt="side hero"
													className="h-full object-cover"
												/>
											</motion.div>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
}

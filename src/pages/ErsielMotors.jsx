import React, { useRef } from "react";
import HeroVedioDialog from "../components/HeroVedioDialog";
import MotorThumbnail from "../assets/MotorThumbnail.png";
import HeroServices from "../components/HeroServices";
import HeroMotorService from "../assets/MotorService.png";
import { Trans, useTranslation } from "react-i18next";
import MotorCard from "../components/MotorCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionsTitle from "../components/SectionsTitle";
import { motion } from "motion/react";

const koreanCars = [
	{
		image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1215&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		model: "Vogue 2024",
		company: "Range Rover",
		price: "54,730",
		details: ["Gasoline", "24,865 km", "Auto"],
	},
	{
		image: "https://images.unsplash.com/photo-1620547316190-289b3899e010?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		model: "BMW X5 2023",
		company: "BMW",
		price: "62,400",
		details: ["Diesel", "12,500 km", "Manual"],
	},
	{
		image: "https://images.unsplash.com/photo-1622551997608-400d763b0f64?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		model: "Tesla Model S",
		company: "Tesla",
		price: "75,900",
		details: ["Electric", "8,000 km", "Auto"],
	},
	{
		image: HeroMotorService,
		model: "Tesla Model S",
		company: "Tesla",
		price: "75,900",
		details: ["Electric", "8,000 km", "Auto"],
	},
	{
		image: HeroMotorService,
		model: "Tesla Model S",
		company: "Tesla",
		price: "75,900",
		details: ["Electric", "8,000 km", "Auto"],
	},
];
const foreignCars = [
	{
		image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		model: "911 Carrera 2024",
		company: "Porsche",
		price: "120,000",
		details: ["Gasoline", "28,457 km", "Auto"],
	},
	{
		image: "https://images.unsplash.com/photo-1555652736-e92021d28a10?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		model: "R8 V10 2023",
		company: "Audi",
		price: "150,000",
		details: ["Gasoline", "30,775 km", "Auto"],
	},
	{
		image: "https://images.unsplash.com/photo-1626072557464-90403d788e8d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		model: "Land Cruiser 2024",
		company: "Toyota",
		price: "75,000",
		details: ["Diesel", "33,847 km", "Auto"],
	},
	{
		image: "https://images.unsplash.com/photo-1555652736-e92021d28a10?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		model: "R8 V10 2023",
		company: "Audi",
		price: "150,000",
		details: ["Gasoline", "30,775 km", "Auto"],
	},
	{
		image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		model: "911 Carrera 2024",
		company: "Porsche",
		price: "120,000",
		details: ["Gasoline", "28,457 km", "Auto"],
	},
];
const soldOutCars = [
	// --- سيارات ألمانية ---
	{
		image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		model: "M4 Competition 2022",
		company: "BMW",
		price: "95,000",
		details: ["Gasoline", "15,200 km", "Auto"],
	},
	{
		image: "https://images.unsplash.com/photo-1652549423957-d9c4445ee9bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		model: "C-Class 2023",
		company: "Mercedes-Benz",
		price: "58,500",
		details: ["Hybrid", "9,800 km", "Auto"],
	},
	{
		image: "https://images.unsplash.com/photo-1517942491415-4fc176d3c2f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		model: "Cayenne GTS 2022",
		company: "Porsche",
		price: "110,750",
		details: ["Gasoline", "21,000 km", "Auto"],
	},

	// --- سيارات يابانية ---
	{
		image: "https://images.unsplash.com/photo-1654704089490-2ed8dc3285cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		model: "Supra GR 2022",
		company: "Toyota",
		price: "55,000",
		details: ["Gasoline", "18,500 km", "Auto"],
	},
	{
		image: "https://images.unsplash.com/photo-1642078995682-9bf815ec79f8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		model: "Patrol Nismo 2023",
		company: "Nissan",
		price: "82,000",
		details: ["Gasoline", "11,300 km", "Auto"],
	},
	{
		image: "https://images.unsplash.com/photo-1587735420291-4672e790db42?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		model: "CX-5 2023",
		company: "Mazda",
		price: "34,600",
		details: ["Diesel", "25,000 km", "Auto"],
	},

	// --- سيارات كورية ---
	{
		image: "https://images.unsplash.com/photo-1720594646721-09d43635faf8?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		model: "Stinger GT 2022",
		company: "Kia",
		price: "51,800",
		details: ["Gasoline", "29,500 km", "Auto"],
	},
	{
		image: "https://images.unsplash.com/photo-1660264596893-a687d0761fe9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		model: "Palisade Calligraphy 2023",
		company: "Hyundai",
		price: "49,500",
		details: ["Gasoline", "14,000 km", "Auto"],
	},
	{
		image: "https://images.unsplash.com/photo-1704951547872-944a3b505b67?q=80&w=1177&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		model: "GV80 2023",
		company: "Genesis",
		price: "68,000",
		details: ["Diesel", "19,800 km", "Auto"],
	},
];

const ErsielMotors = () => {
	const koreanPrevRef = useRef(null);
	const koreanNextRef = useRef(null);

	// --- Refs للكاروسيل الثاني (Foreign) ---
	const foreignPrevRef = useRef(null);
	const foreignNextRef = useRef(null);

	// --- Refs للكاروسيل الثالث (Sold Out) ---
	const soldOutPrevRef = useRef(null);
	const soldOutNextRef = useRef(null);
	const { t, i18n } = useTranslation();
	const isRtl = i18n.dir() === "rtl";

	return (
		<div>
			<HeroServices
				bgImage={HeroMotorService}
				classNameBg={"object-cover object-center"}
				title={t("servicesHero.motorsHero.title")}
				desc={t("servicesHero.motorsHero.desc")}
			/>

			<div className="max-w-7xl mx-auto mb-16 px-4">
				<HeroVedioDialog
					videoSrc="https://www.youtube.com/embed/Ue9PmjcBHqM?si=3EwUFMhkxDSGNJQF"
					thumbnailSrc={MotorThumbnail}
					thumbnailAlt="Ersiel Motors Video"
					textOnImage="Discover Ersiel Motors"
				></HeroVedioDialog>
				<SectionsTitle>
					<Trans
						i18nKey="motorsTitles.KoreanTitle"
						values={!isRtl ? { brand: "Korean" } : { brand: "الكورية" }}
					>
						Available <span className="text-span">Korean</span> brand cars
					</Trans>
				</SectionsTitle>
				<div className="relative w-full ">
					{/* الأزرار خارج Swiper */}
					<button
						ref={koreanPrevRef}
						className="absolute cursor-pointer -left-3 lg:-left-10 top-1/2 -translate-y-1/2 z-10 border border-gray-200 bg-white text-button/60 p-1 md:p-3 rounded-full"
					>
						<ChevronLeft />
					</button>
					<button
						ref={koreanNextRef}
						className="absolute cursor-pointer -right-3 lg:-right-10 top-1/2 -translate-y-1/2 z-10 border border-gray-200 bg-white text-button/60 p-1 md:p-3 rounded-full"
					>
						<ChevronRight />
					</button>

					<Swiper
						// 2. استخدم i18n.language كـ key لإعادة تحميل المكون عند تغيير اللغة
						key={i18n.language}
						spaceBetween={20}
						slidesPerView={3}
						breakpoints={{
							310: { slidesPerView: 1, spaceBetween: 20 },
							640: { slidesPerView: 1, spaceBetween: 20 },
							768: { slidesPerView: 2, spaceBetween: 25 },
							1024: { slidesPerView: 3, spaceBetween: 30 },
						}}
						modules={[Navigation]}
						navigation={{
							prevEl: isRtl ? koreanNextRef.current : koreanPrevRef.current,
							nextEl: isRtl ? koreanPrevRef.current : koreanNextRef.current,
						}}
						onBeforeInit={(swiper) => {
							swiper.params.navigation.prevEl = isRtl
								? koreanNextRef.current
								: koreanPrevRef.current;
							swiper.params.navigation.nextEl = isRtl
								? koreanPrevRef.current
								: koreanNextRef.current;
						}}
						className="py-2"
					>
						{koreanCars.map((car, index) => (
							<SwiperSlide key={index}>
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.2,
										ease: "easeOut",
										delay: index * 0.08, // ✨ يخلي كل كارد يطلع بعد اللي قبله
									}}
									viewport={{ once: true }}
								>
									<MotorCard
										cardImg={car.image}
										model={car.model}
										brand={car.company}
										price={car.price}
										details={car.details}
									/>
								</motion.div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<SectionsTitle>
					<Trans
						i18nKey="motorsTitles.foreignTitle"
						values={!isRtl ? { brand: "Foreign" } : { brand: "الأجنبية" }}
					>
						Available <span className="text-span">Foreign</span> brand cars
					</Trans>
				</SectionsTitle>
				<div className="relative w-full ">
					{/* الأزرار خارج Swiper */}
					<button
						ref={foreignPrevRef}
						className="absolute cursor-pointer -left-3 lg:-left-10 top-1/2 -translate-y-1/2 z-10 border border-gray-200 bg-white text-button/60 p-1 md:p-3 rounded-full"
					>
						<ChevronLeft />
					</button>
					<button
						ref={foreignNextRef}
						className="absolute cursor-pointer -right-3 lg:-right-10 top-1/2 -translate-y-1/2 z-10 border border-gray-200 bg-white text-button/60 p-1 md:p-3 rounded-full"
					>
						<ChevronRight />
					</button>

					<Swiper
						dir={i18n.dir()}
						// 2. استخدم i18n.language كـ key لإعادة تحميل المكون عند تغيير اللغة
						key={i18n.language}
						spaceBetween={20}
						slidesPerView={3}
						breakpoints={{
							310: { slidesPerView: 1, spaceBetween: 20 },
							640: { slidesPerView: 1, spaceBetween: 20 },
							768: { slidesPerView: 2, spaceBetween: 25 },
							1024: { slidesPerView: 3, spaceBetween: 30 },
						}}
						modules={[Navigation]}
						navigation={{
							prevEl: isRtl ? foreignNextRef.current : foreignPrevRef.current,
							nextEl: isRtl ? foreignPrevRef.current : foreignNextRef.current,
						}}
						onBeforeInit={(swiper) => {
							swiper.params.navigation.prevEl = isRtl
								? foreignNextRef.current
								: foreignPrevRef.current;
							swiper.params.navigation.nextEl = isRtl
								? foreignPrevRef.current
								: foreignNextRef.current;
						}}
						className="py-2"
					>
						{foreignCars.map((car, index) => (
							<SwiperSlide key={index}>
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.2,
										ease: "easeOut",
										delay: index * 0.08, // ✨ يخلي كل كارد يطلع بعد اللي قبله
									}}
									viewport={{ once: true }}
								>
									<MotorCard
										cardImg={car.image}
										model={car.model}
										brand={car.company}
										price={car.price}
										details={car.details}
									/>
								</motion.div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<SectionsTitle>
					<p className={`flex ${isRtl ? "flex-row-reverse" : "flex-row"} gap-x-2 `}>
						<span className="text-span ">{t("motorsTitles.soldTitle.span")}</span>{" "}
						{t("motorsTitles.soldTitle.text")}
					</p>
				</SectionsTitle>
				<div className="relative w-full ">
					{/* الأزرار خارج Swiper */}
					<button
						ref={soldOutPrevRef}
						className="absolute cursor-pointer -left-3 lg:-left-10 top-1/2 -translate-y-1/2 z-10 border border-gray-200 bg-white text-button/60 p-1 md:p-3 rounded-full"
					>
						<ChevronLeft />
					</button>
					<button
						ref={soldOutNextRef}
						className="absolute cursor-pointer -right-3 lg:-right-10 top-1/2 -translate-y-1/2 z-10 border border-gray-200 bg-white text-button/60 p-1 md:p-3 rounded-full"
					>
						<ChevronRight />
					</button>

					<Swiper
						dir={i18n.dir()}
						// 2. استخدم i18n.language كـ key لإعادة تحميل المكون عند تغيير اللغة
						key={i18n.language}
						spaceBetween={20}
						slidesPerView={3}
						breakpoints={{
							310: { slidesPerView: 1, spaceBetween: 20 },
							640: { slidesPerView: 1, spaceBetween: 20 },
							768: { slidesPerView: 2, spaceBetween: 25 },
							1024: { slidesPerView: 3, spaceBetween: 30 },
						}}
						modules={[Navigation]}
						navigation={{
							prevEl: isRtl ? soldOutNextRef.current : soldOutPrevRef.current,
							nextEl: isRtl ? soldOutPrevRef.current : soldOutNextRef.current,
						}}
						onBeforeInit={(swiper) => {
							swiper.params.navigation.prevEl = isRtl
								? soldOutNextRef.current
								: soldOutPrevRef.current;
							swiper.params.navigation.nextEl = isRtl
								? soldOutPrevRef.current
								: soldOutNextRef.current;
						}}
						className="py-2"
					>
						{soldOutCars.map((car, index) => (
							<SwiperSlide key={index}>
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.2,
										ease: "easeOut",
										delay: index * 0.08, // ✨ يخلي كل كارد يطلع بعد اللي قبله
									}}
									viewport={{ once: true }}
								>
									<MotorCard
										cardImg={car.image}
										model={car.model}
										brand={car.company}
										price={car.price}
										details={car.details}
									/>
								</motion.div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default ErsielMotors;

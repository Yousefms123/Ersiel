import React, { useRef } from "react";
import HeroServices from "../components/HeroServices";
import HeroBeautyService from "../assets/BeautyService.png";
import { useTranslation } from "react-i18next";
import MarqueeImages from "../components/Marquee";
import BeautyJsoen from "../assets/beauty&joseon.png";
import Fwee from "../assets/Fwee.png";
import Auna from "../assets/auna.png";
import Medicube from "../assets/medicube.png";
import TirTir from "../assets/tirtir.png";
import BeautyThumbnail from "../assets/BeautyThumbnail.png";
import HeroVedioDialog from "../components/HeroVedioDialog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionsTitle from "../components/SectionsTitle";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { BsWhatsapp } from "react-icons/bs";
const ErsielBeauty = () => {
	const koreanBrandPrevRef = useRef(null);
	const koreanBrandNextRef = useRef(null);
	const offerPrevRef = useRef(null);
	const offerNextRef = useRef(null);

	// --- Refs للكاروسيل الثاني (Foreign) ---

	const brandImages = [
		{
			src: BeautyJsoen,
			alt: "BeautyJsoen",
		},
		{
			src: Fwee,
			alt: "Fwee",
		},
		{
			src: Auna,
			alt: "Auna",
		},
		{
			src: Medicube,
			alt: "Medicube",
		},
		{
			src: TirTir,
			alt: "TirTir",
		},
		{
			src: BeautyJsoen,
			alt: "BeautyJsoen",
		},
		{
			src: Fwee,
			alt: "Fwee",
		},
		{
			src: Auna,
			alt: "Auna",
		},
		{
			src: Medicube,
			alt: "Medicube",
		},
		{
			src: TirTir,
			alt: "TirTir",
		},
	];
	const cosmeticServices = [
		{
			name: "Botox",
			image: "https://images.unsplash.com/photo-1737215398603-2ef701df8036?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			link: "/services/botox",
		},
		{
			name: "Skin Care",
			image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			link: "/services/filler",
		},
		{
			name: "Laser Hair Removal",
			image: "https://images.unsplash.com/photo-1700760934166-4c766d708139?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			link: "/services/laser-hair-removal",
		},
		{
			name: "Skin Booster",
			image: "https://images.unsplash.com/photo-1733808916780-df2596866ddf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			link: "/services/hydrafacial",
		},
		{
			name: "Chemical Peel",
			image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			link: "/services/chemical-peel",
		},
		{
			name: "Filler",
			image: "https://images.unsplash.com/photo-1584457361626-06effef61a7c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			link: "/services/chemical-peel",
		},
		{
			name: "Laser Hair Removal",
			image: "https://images.unsplash.com/photo-1700760934166-4c766d708139?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			link: "/services/laser-hair-removal",
		},
		{
			name: "Skin Booster",
			image: "https://images.unsplash.com/photo-1733808916780-df2596866ddf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			link: "/services/hydrafacial",
		},
	];
	const koreanBrands = [
		{
			src: "https://images.unsplash.com/photo-1741896136288-b04426b65558?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			alt: null,
		},
		{
			src: "https://images.unsplash.com/photo-1738721797050-f4f1fb63acd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
			alt: null,
		},
		{
			src: "https://images.unsplash.com/photo-1739980129988-a7529a82a34f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
			alt: null,
		},
		{
			src: "https://images.unsplash.com/photo-1582103540024-f12c99ace136?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8",
			alt: null,
		},
		{
			src: "https://images.unsplash.com/photo-1659635749898-e110570d6e78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8",
			alt: null,
		},
		{
			src: "https://images.unsplash.com/photo-1691162240783-12355afa2912?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8",
			alt: null,
		},
		{
			src: "https://images.unsplash.com/photo-1640625695572-7289bd767f59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8",
			alt: null,
		},
		{
			src: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ3fHx8ZW58MHx8fHx8",
			alt: null,
		},
		{
			src: "https://images.unsplash.com/photo-1585652757141-8837d676fac8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8",
			alt: null,
		},
		{
			src: "https://images.unsplash.com/photo-1686831889383-290d9bab10e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU4fHx8ZW58MHx8fHx8",
			alt: null,
		},
		{
			src: "https://images.unsplash.com/photo-1637043819961-968278c865f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU5fHx8ZW58MHx8fHx8",
			alt: null,
		},
		{
			src: "https://images.unsplash.com/photo-1738721798337-1c0036181229?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYxfHx8ZW58MHx8fHx8",
			alt: null,
		},
		{
			src: "https://images.unsplash.com/photo-1601070846144-6be3aad73f7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc4fHx8ZW58MHx8fHx8",
			alt: null,
		},
		{
			src: "https://images.unsplash.com/photo-1704297004699-9bd54f75081e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg5fHx8ZW58MHx8fHx8",
			alt: null,
		},
		{
			src: "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg3fHx8ZW58MHx8fHx8",
			alt: null,
		},
	];
	const { t, i18n } = useTranslation();
	const isRtl = i18n.dir() === "rtl";
	return (
		<div>
			<HeroServices
				bgImage={HeroBeautyService}
				classNameBg={"object-cover object-bottom-right md:object-center"}
				title={t("servicesHero.beautyHero.title")}
				desc={t("servicesHero.beautyHero.desc")}
			/>
			<MarqueeImages dire="right">
				{brandImages.map((image, index) => (
					<img
						className="w-16 sm:w-24 md:w-36 mx-4 sm:mx-10 md:mx-10"
						src={image.src}
						alt={image.alt}
						key={index}
					/>
				))}
			</MarqueeImages>
			<div className="max-w-7xl mx-auto  px-4">
				<HeroVedioDialog
					videoSrc="https://www.youtube.com/embed/Ue9PmjcBHqM?si=3EwUFMhkxDSGNJQF"
					thumbnailSrc={BeautyThumbnail}
					thumbnailAlt="Ersiel Motors Video"
					textOnImage="Discover Ersiel Beauty"
				></HeroVedioDialog>
			</div>
			<MarqueeImages dire="left">
				<div className="flex gap-6 px-4">
					{cosmeticServices.map((service, index) => (
						<a
							key={index}
							href={service.link}
							className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-44 md:h-44 rounded-lg overflow-hidden shadow-md flex-shrink-0 group"
						>
							<img
								src={service.image}
								alt={service.name}
								className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center p-4">
								<span className="text-white text-xs md:text-lg font-semibold text-center">
									{service.name}
								</span>
							</div>
						</a>
					))}
				</div>
			</MarqueeImages>
			<SectionsTitle>{t("beautyTitles.fTitle")}</SectionsTitle>
			<div className="relative mx-auto max-w-7xl px-5">
				{/* الأزرار خارج Swiper */}
				<button
					ref={koreanBrandPrevRef}
					className="absolute cursor-pointer left-8 lg:-left-3 top-1/2 -translate-y-1/2 z-10 border border-gray-200 bg-white text-button/60 p-1 md:p-3 rounded-full"
				>
					<ChevronLeft />
				</button>
				<button
					ref={koreanBrandNextRef}
					className="absolute cursor-pointer right-8 lg:-right-3 top-1/2 -translate-y-1/2 z-10 border border-gray-200 bg-white text-button/60 p-1 md:p-3 rounded-full"
				>
					<ChevronRight />
				</button>

				<Swiper
					// 2. استخدم i18n.language كـ key لإعادة تحميل المكون عند تغيير اللغة
					key={i18n.language}
					slidesPerView={5}
					breakpoints={{
						300: { slidesPerView: 2, spaceBetween: 10 },
						640: { slidesPerView: 3, spaceBetween: 12 },
						768: { slidesPerView: 5, spaceBetween: 20 },
					}}
					modules={[Navigation]}
					navigation={{
						prevEl: isRtl ? koreanBrandNextRef.current : koreanBrandPrevRef.current,
						nextEl: isRtl ? koreanBrandPrevRef.current : koreanBrandNextRef.current,
					}}
					onBeforeInit={(swiper) => {
						swiper.params.navigation.prevEl = isRtl
							? koreanBrandNextRef.current
							: koreanBrandPrevRef.current;
						swiper.params.navigation.nextEl = isRtl
							? koreanBrandPrevRef.current
							: koreanBrandNextRef.current;
					}}
					className="py-2"
				>
					{koreanBrands.map((brand, index) => (
						<SwiperSlide key={index}>
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.2,
									ease: "easeOut",
									delay: index * 0.01, // ✨ يخلي كل كارد يطلع بعد اللي قبله
								}}
								viewport={{ once: true }}
							>
								<img
									className="object-cover  h-72 rounded-md"
									src={brand.src}
									alt={brand.alt}
								/>
							</motion.div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<SectionsTitle>{t("beautyTitles.sTitle")}</SectionsTitle>
			<div className="relative mx-auto max-w-7xl px-5">
				{/* الأزرار خارج Swiper */}
				<button
					ref={offerPrevRef}
					className="absolute cursor-pointer left-8 lg:-left-3 top-1/2 -translate-y-1/2 z-10 border border-gray-200 bg-white text-button/60 p-1 md:p-3 rounded-full"
				>
					<ChevronLeft />
				</button>
				<button
					ref={offerNextRef}
					className="absolute cursor-pointer right-8 lg:-right-3 top-1/2 -translate-y-1/2 z-10 border border-gray-200 bg-white text-button/60 p-1 md:p-3 rounded-full"
				>
					<ChevronRight />
				</button>

				<Swiper
					// 2. استخدم i18n.language كـ key لإعادة تحميل المكون عند تغيير اللغة
					key={i18n.language}
					slidesPerView={5}
					breakpoints={{
						300: { slidesPerView: 2, spaceBetween: 10 },
						640: { slidesPerView: 3, spaceBetween: 12 },
						768: { slidesPerView: 5, spaceBetween: 20 },
					}}
					modules={[Navigation]}
					navigation={{
						prevEl: isRtl ? offerNextRef.current : offerPrevRef.current,
						nextEl: isRtl ? offerPrevRef.current : offerNextRef.current,
					}}
					onBeforeInit={(swiper) => {
						swiper.params.navigation.prevEl = isRtl
							? offerNextRef.current
							: offerPrevRef.current;
						swiper.params.navigation.nextEl = isRtl
							? offerPrevRef.current
							: offerNextRef.current;
					}}
					className="py-2"
				>
					{koreanBrands.map((brand, index) => (
						<SwiperSlide key={index}>
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.2,
									ease: "easeOut",
									delay: index * 0.01, // ✨ يخلي كل كارد يطلع بعد اللي قبله
								}}
								viewport={{ once: true }}
							>
								<img
									className="object-cover  h-72 rounded-md"
									src={brand.src}
									alt={brand.alt}
								/>
							</motion.div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="bg-[#C8D3D3]/50 py-11 mt-10 text-center flex flex-col justify-center items-center gap-y-9">
				<motion.p
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.5,
						delay: 0.4,
						ease: "easeOut",
					}}
					className="text-sm md:text-lg lg:text-3xl"
				>
					{t("note")}
				</motion.p>
				<motion.a
					href="https://wa.me/821096277360"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-600 transition z-[2]"
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.5 }}
					whileHover={{ scale: 1.05 }}
				>
					<BsWhatsapp className="text-lg" />
					{t("cta.button")}
				</motion.a>
			</div>
		</div>
	);
};

export default ErsielBeauty;

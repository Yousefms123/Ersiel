import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter, FaSnapchat } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { PiPhoneCall } from "react-icons/pi";
import { MapPin } from "lucide-react";
import Logo from "../assets/Logo.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const { t } = useTranslation();
	const links = t("footer.links.items", { returnObjects: true });
	const contact = t("footer.contact", { returnObjects: true });
	const location = t("footer.location", { returnObjects: true });

	const social = [
		{ icon: FaSnapchat, link: "/", color: "hover:bg-yellow-400" },
		{ icon: IoLogoInstagram, link: "/", color: "hover:bg-pink-500" },
		{ icon: FaXTwitter, link: "/", color: "hover:bg-black" },
		{ icon: FiFacebook, link: "/", color: "hover:bg-blue-600" },
		{ icon: FaWhatsapp, link: "/", color: "hover:bg-green-500" },
	];

	const contactLink = [
		{ icon: CiMail, text: contact.email },
		{ icon: PiPhoneCall, text: contact.phone },
	];

	const locationLink = [
		{ icon: <MapPin />, text: location.hq, link: "https://maps.app.goo.gl/yvgEzWaWq6eLbARW8" },
		{ icon: <MapPin />, text: location.yemen, link: "https://maps.app.goo.gl/RpvYoS55tPbWjQNV8" },
	];

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.6,
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};

	const linkVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: { opacity: 1, x: 0 },
	};

	const sectionVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	return (
		<motion.footer
			className="bg-white px-2 md:px-28 border-t-2 border-gray-200 font-Tajawal overflow-hidden"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			variants={containerVariants}
		>
			<div className="flex flex-col justify-between">
				{/* Header Section with Logo and Social Media */}
				<motion.div
					className="flex items-center gap-x-5 sm:justify-between lg:px-8 border-b-2 border-gray-200"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.6,
						ease: "easeOut",
					}}
				>
					<div className="flex w-20 h-20 sm:w-20 sm:h-20 md:w-36 md:h-36">
						<img src={Logo} className="md:w-36 md:h-36" alt="Logo" />
					</div>

					<div className="flex gap-x-2 lg:gap-x-5 items-center">
						{social.map((item, index) => (
							<Link
								key={index}
								to={item.link}
								className=" relative text-gray-600 border border-gray-300 p-3 rounded-full text-sm lg:text-xl 
								         hover:border-transparent hover:shadow-lg transform hover:scale-110 
								         transition-all duration-300 ease-in-out overflow-hidden"
							>
								{React.createElement(item.icon)}
							</Link>
						))}
					</div>
				</motion.div>

				{/* Main Content Sections */}
				<motion.div
					className="flex gap-6 mt-4 flex-wrap justify-between px-4 lg:p-8"
					variants={itemVariants}
				>
					{/* Links Section */}
					<motion.div className="" variants={sectionVariants}>
						<motion.h1
							className="font-bold text-start text-lg md:text-2xl"
							initial={{ opacity: 0, y: -20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							{t("footer.links.title")}
						</motion.h1>
						<ul>
							{links.map((item, index) => (
								<motion.li
									key={index}
									className="text-gray-600 text-sm md:text-lg text-start mt-2 lg:mt-5"
									variants={linkVariants}
									whileHover="hover"
									initial="hidden"
									whileInView="visible"
									transition={{ delay: index * 0.1 }}
								>
									<Link to={item.link}>{item.text}</Link>
								</motion.li>
							))}
						</ul>
					</motion.div>

					{/* Contact Section */}
					<motion.div className="" variants={sectionVariants}>
						<motion.h1
							className="font-bold text-start text-lg md:text-2xl"
							initial={{ opacity: 0, y: -20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							{contact.title}
						</motion.h1>
						<ul>
							{contactLink.map((item, index) => (
								<motion.li
									key={index}
									className="text-gray-600 text-sm md:text-xl text-start mt-5 flex items-center gap-x-4"
									variants={linkVariants}
									initial="hidden"
									whileInView="visible"
									transition={{ delay: index * 0.1 }}
								>
									<motion.span
										animate={{ rotate: [0, 10, -10, 0] }}
										transition={{
											duration: 2,

											ease: "easeInOut",
										}}
									>
										{React.createElement(item.icon)}
									</motion.span>
									| <span>{item.text}</span>
								</motion.li>
							))}
						</ul>
					</motion.div>

					{/* Location Section */}
					<motion.div className="" variants={sectionVariants}>
						<motion.h1
							className="font-bold text-start text-base md:text-2xl"
							initial={{ opacity: 0, y: -20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							{location.title}
						</motion.h1>
						<ul>
							{locationLink.map((item, index) => (
								<motion.li
									key={index}
									className="text-gray-600 text-sm md:text-xl text-start mt-5 flex items-center gap-x-4"
									variants={linkVariants}
									initial="hidden"
									whileInView="visible"
									transition={{ delay: index * 0.1 }}
								>
									<motion.span
										animate={{
											y: [0, -3, 0],
											rotate: [0, 5, -5, 0],
										}}
										transition={{
											duration: 3,
											ease: "easeInOut",
										}}
									>
										{item.icon}
									</motion.span>
									|{" "}
									<Link to={item.link} target="_blank">
										{item.text}
									</Link>
								</motion.li>
							))}
						</ul>
					</motion.div>
				</motion.div>

				{/* Copyright Section */}
				<motion.div
					className="flex items-center justify-center gap-x-2 lg:gap-x-6 py-4 text-gray-600 mt-3 border-t-2 border-gray-200"
					variants={itemVariants}
					whileInView={{
						scale: [1, 1.02, 1],
						transition: { duration: 0.5 },
					}}
				>
					<motion.span
						className="text-[12px]"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.5 }}
					>
						{t("footer.copyright")} {currentYear} © - {t("navbar.Ersiel")}
					</motion.span>
				</motion.div>
			</div>
		</motion.footer>
	);
};

export default Footer;

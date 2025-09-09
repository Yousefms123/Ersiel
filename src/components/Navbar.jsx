import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "../assets/Logo.svg";
import { Menu, X } from "lucide-react"; // أيقونات

const Navbar = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const location = useLocation();
	const { t } = useTranslation();

	// نحدد اتجاه الموقع (RTL أو LTR)
	const isRTL = document.documentElement.dir === "rtl";

	const navItem = [
		{ href: "/", text: "Ersiel" },
		{ href: "/ersiel_motors", text: "Ersiel.Motors" },
		{ href: "/ersiel_beauty", text: "Ersiel.Beauty" },
		{ href: "/ersiel_derma", text: "Ersiel.Derma" },
	];

	return (
		<nav className="fixed bg-white w-full z-50 top-0 start-0 shadow-lg font-Raleway">
			<div className="flex flex-wrap items-center justify-between mx-auto px-4 lg:px-12 py-4">
				{/* Logo */}
				<Link to={"/"} className="flex items-center">
					<img src={Logo} className="h-8" alt="Logo" />
				</Link>

				{/* أيقونة المنيو على الموبايل */}
				<div className="md:hidden">
					<button onClick={() => setIsOpenMenu(true)}>
						<Menu className="w-7 h-7 text-black" />
					</button>
				</div>

				{/* روابط على الشاشات الكبيرة */}
				<div className="hidden md:block">
					<ul className="flex flex-row text-base lg:gap-x-6 font-medium">
						{navItem.map((nav, index) => (
							<li
								key={index}
								className={`border-b-2 border-transparent hover:border-b-black transition-all duration-200 ${
									nav.href === location.pathname ? "border-b-black" : ""
								}`}
							>
								<Link to={nav.href} className="block py-2 px-3 text-black rounded-sm">
									{t(`navbar.${nav.text}`)}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* زر اللغة (يظهر فقط على الشاشات الكبيرة) */}
				<div className="hidden md:block">
					<LanguageSwitcher />
				</div>
			</div>

			{/* سايد بار الموبايل */}
			<div
				className={`fixed top-0 ${
					isRTL ? "left-0" : "right-0"
				} h-full w-64 bg-button text-white z-50 transform transition-transform duration-300 ease-in-out
        ${isOpenMenu ? "translate-x-0" : isRTL ? "-translate-x-full" : "translate-x-full"}`}
			>
				{/* زر إغلاق */}
				<div
					className={`flex items-center p-4 border-b border-white/30 ${
						isRTL ? "flex-row-reverse justify-between" : "justify-between"
					}`}
				>
					<button onClick={() => setIsOpenMenu(false)}>
						<X className="w-6 h-6" />
					</button>
					<h2 className="font-bold">{t("navbar.menu")}</h2>
				</div>

				<ul className="flex flex-col gap-y-4 p-6 ">
					{navItem.map((nav, index) => (
						<li key={index}>
							<Link
								to={nav.href}
								className="block py-2 px-3 hover:bg-white/20 rounded"
								onClick={() => setIsOpenMenu(false)}
							>
								{t(`navbar.${nav.text}`)}
							</Link>
						</li>
					))}

					<li className="mt-4 md:hidden">
						<LanguageSwitcher />
					</li>
				</ul>
			</div>

			{/* خلفية سوداء شفافة عند فتح القائمة */}
			{isOpenMenu && (
				<div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpenMenu(false)}></div>
			)}
		</nav>
	);
};

export default Navbar;

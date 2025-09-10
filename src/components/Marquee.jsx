import React from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
const MarqueeImages = ({ children, dire }) => {
	const { i18n } = useTranslation();
	const isRtl = i18n.dir() === "rtl";
	return (
		<div dir={isRtl ? "ltr" : "ltr"} className="my-8 md:my-16">
			<Marquee direction={dire} autoFill={true}>
				{children}
			</Marquee>
		</div>
	);
};

export default MarqueeImages;

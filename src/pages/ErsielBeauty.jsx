import React from "react";
import HeroServices from "../components/HeroServices";
import HeroBeautyService from "../assets/BeautyService.png";
import { useTranslation } from "react-i18next";
const ErsielBeauty = () => {
	const { t } = useTranslation();
	return (
		<div>
			<HeroServices
				bgImage={HeroBeautyService}
				classNameBg={"object-cover object-bottom-right md:object-center"}
				title={t("servicesHero.beautyHero.title")}
				desc={t("servicesHero.beautyHero.desc")}
			/>
		</div>
	);
};

export default ErsielBeauty;

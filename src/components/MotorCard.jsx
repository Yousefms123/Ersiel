import React from "react";
import { Fuel, Gauge, Settings } from "lucide-react";
const MotorCard = ({ cardImg, model, brand, price, details }) => {
	const icons = [<Fuel size={20} />, <Gauge size={20} />, <Settings size={20} />];
	return (
		<div className="bg-white border border-gray-300 rounded-2xl overflow-hidden ">
			{/* الصورة */}
			<img src={cardImg} alt={model} className="w-full h-48 object-cover" />

			{/* المحتوى */}
			<div className="p-5">
				{/* العنوان + السعر */}
				<div className="flex items-center justify-between mb-2">
					<h2 className="text-lg font-bold">{model}</h2>
					<span className="text-green-600 font-semibold">${price}</span>
				</div>
				<p className="text-gray-500 text-sm">{brand}</p>

				{/* التفاصيل */}
				<div className="flex justify-between mt-4 text-gray-600 text-xs md:text-sm">
					{details.map((label, index) => (
						<React.Fragment key={index}>
							<div className="flex flex-col items-center gap-1 px-4">
								{icons[index]}
								<span>{label}</span>
							</div>
							{index !== details.length - 1 && <div className="w-px bg-gray-300"></div>}
						</React.Fragment>
					))}
				</div>

				{/* زر */}
				<button className="mt-5 w-full rounded-full bg-span cursor-pointer text-white py-2 hover:bg-gray-700 transition">
					View Details
				</button>
			</div>
		</div>
	);
};

export default MotorCard;

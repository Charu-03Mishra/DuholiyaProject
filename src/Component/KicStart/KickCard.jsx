import React from "react";
import { KickStartData } from "../../constant/KickStartData/KickStartData";
import { Logo } from "../../Component/Logo/Logo";
import { Link, useParams } from "react-router-dom";

const KickCard = () => {
	const { id } = useParams();
	console.log(id);

	return (
		<>
			<div className="flex flex-wrap justify-center gap-10 lg:px-10">
				{KickStartData.card.map((item, i) => (
					<div
						className="mt-10 rounded-2xl w-48 shadow-lg cursor-pointer shadow-black transition-transform duration-300 hover:scale-110 hover:shadow-black hover:shadow-xl"
						key={i}>
						<div className="bg-gray-200 rounded-t-2xl  ">
							<div className="flex justify-center pt-5">
								{Logo(item.icon, "black")}
							</div>

							<img
								className="w-48"
								src={`/Images/KickStart/${item.image}`}
								alt=""
							/>
						</div>
						<div className="px-3 py-2">
							{item.title.toLowerCase() === "assessment" ? (
								<Link to={`/journey/${item.title.toLowerCase()}/assessments`}>
									<h1 className="text-center inter text-primary text-lg font-bold">
										{item.title}
									</h1>
								</Link>
							) : item.title.toLowerCase() === "hris" ? (
								<Link to={`/journey/${item.title.toLowerCase()}/tanent`}>
									<h1 className="text-center font-bold text-primary text-lg inter">
										{item.title}
									</h1>
								</Link>
							) : item.title.toLowerCase() === "users" ? (
								<Link to={`/journey/${item.title.toLowerCase()}/group`}>
									<h1 className="text-center text-primary font-bold text-lg inter">
										{item.title}
									</h1>
								</Link>
							) : null}

							<p className="text-justify  px-1 text-[11px] lg:text-[11px] inter text-gray-600">
								{item.data}
							</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default KickCard;

import React from "react";
import { KickStartData } from "../../constant/KickStartData/KickStartData";
import { Logo } from "../../Component/Logo/Logo";
import { Link, useParams } from "react-router-dom";

const KickCard = () => {
	const { id } = useParams();
	console.log(id);

	return (
		<>
			<div className="grid md:grid-cols-3 grid-cols-2 gap-7 lg:px-24 px-4 ">
				{KickStartData.card.map((item, i) => (
					<div className="mt-10 rounded-lg shadow-lg shadow-black" key={i}>
						<div className="border-b-2 border-black">
							<div className="flex justify-center pt-5">
								{Logo(item.icon, "black")}
							</div>

							<img
								className="w-full "
								src={`/Images/KickStart/${item.image}`}
								alt=""
							/>
						</div>
						<div className="px-3 py-2">
							{item.title.toLowerCase() === "assessment" ? (
								<Link to={`/journey/${item.title.toLowerCase()}/assessments`}>
									<h1 className="text-center text-2xl font-bold">
										{item.title}
									</h1>
								</Link>
							) : item.title.toLowerCase() === "hris" ? (
								<Link to={`/journey/${item.title.toLowerCase()}/tanent`}>
									<h1 className="text-center text-2xl font-bold">
										{item.title}
									</h1>
								</Link>
							) : item.title.toLowerCase() === "users" ? (
								<Link to={`/journey/${item.title.toLowerCase()}/group`}>
									<h1 className="text-center text-2xl font-bold">
										{item.title}
									</h1>
								</Link>
							) : null}

							<p className="text-justify lg:text-lg">{item.data}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default KickCard;

import React from "react";

const Page2 = () => {
	return (
		<div className="w-full h-full px-4 md:px-8 lg:px-16">
			<div className="w-full mt-5 flex flex-col md:flex-row">
				{/* Text Section */}
				<div className="w-full md:w-1/2 text-center md:text-left">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800 leading-tight">
						We are Focusing On Your Study Goals
					</h1>
					<p className="text-justify mt-4 text-base md:text-lg text-gray-600">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
						dolores, corporis soluta sequi omnis molestiae? Tempora modi quam
						aspernatur nostrum, id assumenda dolorem explicabo placeat impedit,
						ea quo voluptatum ut. Impedit non velit itaque ut? Reiciendis,
						culpa! Velit molestiae pariatur nisi quo nemo. Neque sequi suscipit
						quasi vitae doloribus odio accusamus nesciunt, distinctio
						consequatur nemo vel minus optio, voluptas architecto? Ipsa odio
						facilis animi, ad fugiat non! Veritatis facere nulla non, esse odio
						voluptatum sed dolore, architecto ipsam officiis nisi vel aperiam
						obcaecati deserunt veniam rum, numquam culpa sit consequuntur!
					</p>
					<div className="mt-6 flex justify-center md:justify-start">
						<button className="w-40 h-12 bg-blue-900 text-white text-lg font-semibold rounded-2xl hover:bg-blue-700 transition duration-300">
							Explore More
						</button>
					</div>
				</div>

				{/* Image Section */}
				<div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
					<img
						className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto rounded-lg"
						src="/Images/Home/test.png"
						alt="Study Goals"
					/>
				</div>
			</div>
		</div>
	);
};

export default Page2;

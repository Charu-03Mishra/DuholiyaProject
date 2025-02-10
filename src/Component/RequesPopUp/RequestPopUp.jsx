import React from "react";
import { RxCross2 } from "react-icons/rx";

const RequestPopUp = ({ setsubmit }) => {
	return (
		<div className="fixed inset-0 top-[15%] flex items-center justify-center bg-black bg-opacity-50 p-4">
			<div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm sm:max-w-md md:max-w-lg relative">
				<button
					onClick={() => setsubmit(false)}
					className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
					aria-label="Close popup">
					<RxCross2 size={24} className="cursor-pointer" />
				</button>
				<div className="text-4xl mb-4 text-center">🎉</div>
				<h1 className="text-xl font-semibold mb-2 text-center">
					Request Received!
				</h1>
				<div className="mb-4 flex justify-center">
					<img
						className="w-32 h-32 md:w-40 md:h-40"
						src="/Images/Login/c43b999c9ec4f575ea5323e37ece8166.gif"
						alt="Celebration Animation"
					/>
				</div>
				<p className="text-gray-600 mb-4 text-center text-sm md:text-base">
					Thank you for requesting a demo. Our team will reach out to you
					shortly!
				</p>
			</div>
		</div>
	);
};

export default RequestPopUp;

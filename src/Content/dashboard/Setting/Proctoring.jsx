import React from "react";
import SaveButton from "../../../Component/SaveButton/SaveButton";

const Proctoring = () => {
	return (
		<>
			<div className="w-full   py-5 border-l-2 border-blue-600  ">
				<div className="mb-5">
					<p className="text-center text-xl font-bold">Proctoring Options </p>
				</div>
				<div className="flex flex-col items-center px-5">
					<div className="border-2 w-full max-w-[400px] border-blue-800 rounded-lg px-3 py-3">
						<form>
							<div className="py-3">
								<input
									type="checkbox"
									id="idcard"
									name="idcard"
									value="Idcard"
									className="w-[18px] h-[18px]"
								/>
								<label for="idcard" className="px-3 text-xl">
									Require Id Card
								</label>
							</div>
							<div className="py-3">
								<input
									type="checkbox"
									id="capture"
									name="capcturephoto"
									value="Photo"
									className="w-[18px] h-[18px]"
								/>
								<label for="capcturephoto" className="px-3 text-xl">
									Capture Photo
								</label>
								 
							</div>
						</form>
					</div>

					<SaveButton />
				</div>
			</div>
		</>
	);
};

export default Proctoring;

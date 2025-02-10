import React from "react";
import SaveButton from "../../../Component/SaveButton/SaveButton";
import DashBoardButton from "../../../Component/dashboard/DashBoardButton/DashBoardButton";

const Proctoring = () => {
	return (
		<>
			<div className="col-span-10   py-5 border-l-2 border-blue-600  ">
				<div className="mb-5">
					<p className="text-center text-[21px] Inter font-bold">
						Proctoring Options{" "}
					</p>
				</div>
				<div className="flex flex-col items-center px-5">
					<div className="border-2 w-full max-w-[400px] border-blue-800 rounded-lg px-3 py-3">
						<form>
							<div className="py-3 flex items-center gap-3">
								<input
									type="checkbox"
									id="idcard"
									name="idcard"
									value="Idcard"
									className="w-[14px] h-[14px]"
								/>
								<label
									for="idcard"
									className="Inter text-[14px] inter  text-[#4F4F4F]">
									Require Id Card
								</label>
							</div>
							<div className="py-3 flex items-center gap-3">
								<input
									type="checkbox"
									id="capture"
									name="capcturephoto"
									value="Photo"
									className="w-[14px] h-[14px]"
								/>
								<label
									for="capcturephoto"
									className="Inter text-[14px] inter  text-[#4F4F4F]">
									Capture Photo
								</label>
								 
							</div>
						</form>
					</div>
					<DashBoardButton />
				</div>
			</div>
		</>
	);
};

export default Proctoring;

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Button from "@mui/material/Button";
import { FaRegCheckCircle } from "react-icons/fa";
import { Close } from "@mui/icons-material";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const AddPopUp = ({ animate, handleClose }) => {
	const [active, setActiive] = useState(false);
	const showhandler = () => {
		setActiive(!active);
	};
	const [data, setData] = useState();
	const handlerChange = (e, editor) => {
		setData(editor.getData());
	};
	return (
		<>
			<div
				className={`absolute -top-[152px] z-50 w-full px-6  bg-slate-500 items-center rounded-md ${
					animate ? "animate-bottomToUp" : "opacity-0 translate-y-24"
				}`}>
				<div className=" absolute right-2 top-2 ">
					<div className="">
						<RxCross2 onClick={handleClose} size={20} />
					</div>
				</div>
				<div className="flex h-full w-full gap-10 mt-5">
					<div className="w-64 bg-white border-2 border-black relative rounded-lg px-4 py-3 flex  items-center justify-between">
						<div className="">Section</div>
						<div>
							<button onClick={showhandler}>
								{active ? <IoIosArrowDown /> : <IoIosArrowUp />}
							</button>
						</div>
					</div>
					<div className="w-64 bg-white border-2 border-black relative rounded-lg px-4 py-3 flex  items-center justify-between">
						<div className="">Section</div>
						<div>
							<button onClick={showhandler}>
								{active ? <IoIosArrowDown /> : <IoIosArrowUp />}
							</button>
						</div>
					</div>
					<div className="w-64 bg-white border-2 border-black  relative rounded-lg px-4 py-3 flex  items-center justify-between">
						<div className="">Section</div>
						<div>
							<button onClick={showhandler}>
								{active ? <IoIosArrowDown /> : <IoIosArrowUp />}
							</button>
						</div>
					</div>
				</div>

				<div
					className={`absolute top-16 ${
						active ? "block" : "hidden"
					} mt-2 w-64 px-4 py-3 rounded-lg bg-white `}>
					<div className="flex items-center  py-3 px-3  gap-5">
						<div>
							<FaRegCheckCircle />
						</div>
						<div className="">Open in Text</div>
					</div>
					<div className="flex items-center  py-3 px-3  gap-5">
						<div>
							<FaRegCheckCircle />
						</div>
						<div className="">Open in Text</div>
					</div>
					<div className="flex items-center  py-3 px-3  gap-5">
						<div>
							<FaRegCheckCircle />
						</div>
						<div className="">Open in Text</div>
					</div>
					<div className="flex items-center py-3 px-3  gap-5">
						<div>
							<FaRegCheckCircle />
						</div>
						<div className="">Open in Text</div>
					</div>
				</div>
				{/* <div>
					<CKEditor
						editor={ClassicEditor}
						data="<p> Ck editor data</p>"
						onReady={(editor) => {
							console.log("editor is ready to use", editor);
						}}
						onChange={(event, Editor) => {
							const data = Editor.getData();
							setAddBook((prev) => {
								{
									return { ...prev, description: e.target.value };
								}
							});
						}}
						onBlur={(event, editor) => {
							console.log("blur", editor);
						}}
						onFocus={(event, editor) => {
							console.log("focus", editor);
						}}
					/>
				</div> */}
			</div>
		</>
	);
};

export default AddPopUp;

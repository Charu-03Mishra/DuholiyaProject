import React, { useState } from "react";
import UserSideBar from "../../../Layout/UserSideBar/UserSideBar";
import { AssessmentData } from "../../../constant/AssessmentData/AssessmentData";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RxCross1 } from "react-icons/rx";

import Button from "@mui/material/Button";

import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";
import { FaPlus } from "react-icons/fa";

import { HiViewfinderCircle } from "react-icons/hi2";
import { Switch } from "@mui/material";
import Tanent from "../../../Component/dashboard/Tanent/Tanent";
import SearchAndAdd from "../../../Component/dashboard/Tanent/SearchAndAdd";
import GroupPop from "./GroupPop";

const GroupData = () => {
	const { name } = useParams();
	const [group, setGroupPop] = useState(false);

	const filtername = AssessmentData.filter((ele) => ele.name == name);
	console.log(filtername);

	const groupdata = filtername && filtername[0]?.group;
	console.log(groupdata);

	return (
		<>
			<Tanent>
				<div className="grid grid-cols-12 bg-white">
					<UserSideBar />
					<div className=" col-span-10 px-3 py-5 border-l-2 relative border-gray-500 bg-white ">
						<div className="px-4">
							<h1 className="font-bold text-sm lg:text-[16px] inter   text-[#3A3A3A] text-justify">
								Group Module
							</h1>
							<p className="text-justify inter text-xs text-[#545454]">
								Manage and organize group effortlessly. Create, Join or maderate
								position based on your preference and objectives.
							</p>
						</div>
						<SearchAndAdd setstateChange={setGroupPop} />
						<div className="absolute z-10 top-[8%] left-1/2 transform -translate-x-1/2 flex justify-center px-4 w-full">
							{group && <GroupPop setGroupPop={setGroupPop} />}
						</div>
						<div className="px-4">
							<TableContainer component={Paper}>
								<Table
									sx={{
										minWidth: 550,
									}}
									aria-label="simple table">
									<TableHead>
										<TableRow
											sx={{
												textAlign: "center",
											}}>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													fontFamily: "Manrope",
													fontWeight: "bold",
													color: "#003262",
												}}>
												Name
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													fontFamily: "Manrope",
													fontWeight: "bold",
													color: "#003262",
												}}>
												Tag
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													fontFamily: "Manrope",
													fontWeight: "bold",
													color: "#003262",
												}}>
												Members
											</TableCell>
											<TableCell
												sx={{
													fontSize: "14px",
													textAlign: "center",
													fontFamily: "Manrope",
													fontWeight: "bold",
													color: "#003262",
												}}>
												Status
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{groupdata.map((row, i) => (
											<TableRow
												key={i}
												sx={{
													textAlign: "center",
													fontFamily: "Manrope",
													fontWeight: "bold",
												}}>
												<TableCell
													component="th"
													scope="row"
													sx={{
														fontSize: "16px",
														fontFamily: "Manrope",
														fontWeight: "bold",
														textAlign:"center",
												
													}}>
													{row.name}
												</TableCell>
												<TableCell
													sx={{
														fontSize: "16px",
														textAlign: "center",
														display: "flex",
														fontFamily: "Manrope",
														fontWeight: "bold",
														alignItems: "center",
														justifyContent: "center",
														gap: "7px",
													}}>
													<div className="border-[2px] text-[9.32px] flex items-center border-[#003262] rounded-sm px-2">
														{row.tag}{" "}
														<span>
															<RxCross1 size={10} className="text-[#003262]" />
														</span>
													</div>
													<div className="border-[2px] text-[9.32px] flex items-center border-[#003262] rounded-sm px-2">
														{row.tag}
														<span>
															<RxCross1 size={10} className="text-[#003262]" />
														</span>
													</div>
													<div className="border-[2px] text-[9.32px] flex items-center border-[#003262] rounded-sm px-2">
														{row.tag}
														<span>
															<RxCross1 size={10} className="text-[#003262]" />
														</span>
													</div>
												</TableCell>
												<TableCell
													sx={{
														fontSize: "12.5px",
														fontFamily: "Manrope",
														width: "15px",
													}}>
													<div className="flex justify-center items-center bg-primary gap-2 py-1 rounded-sm px-2  text-white">
														<HiViewfinderCircle size={10} />
														<span>{row.members}</span>
													</div>
												</TableCell>
												<Switch
													checked={row.active}
													sx={{
														" & .css-161ms7l-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked":
															{
																color: "#5bc17f",
															},
													}}
												/>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</div>
					</div>
				</div>
			</Tanent>
		</>
	);
};

export default GroupData;

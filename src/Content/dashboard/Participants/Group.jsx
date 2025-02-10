import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { AssessmentData } from "../../../constant/AssessmentData/AssessmentData";
import { Logo } from "../../../Component/Logo/Logo";
import { Switch } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import { HiViewfinderCircle } from "react-icons/hi2";
import GroupPopUp from "./GroupPopUp";
const Group = () => {
	const [click, setClick] = useState();
	const GroupData = AssessmentData.find((data) => data.name == "Group");
	console.log(GroupData.group);
	const clickHAndler = () => {
		setClick(true);
	};

	return (
		<div className="col-span-10">
			<div className=" relative lg:px-3 py-5 border-l-2 border-blue-600  ">
				<div className="flex items-center justify-between px-4 my-5">
					<Paper
						component="form"
						sx={{
							border: 2,
							display: "flex",
							alignItems: "center",
							minWidth: 180,
							width: 800,
						}}>
						<InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search By Name" />
						<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
							<SearchIcon />
						</IconButton>
					</Paper>
					<Stack
						spacing={1}
						direction="row"
						className="flex items-center text-white border-2 border-black rounded-lg bg-[#003262] lg:ml-10 ml-2 px-4 ">
						<span>
							<FaPlus onClick={clickHAndler} size={20} />
						</span>
						<Button
							onClick={clickHAndler}
							sx={{
								fontSize: "18px",
								color: "white",
							}}>
							Add
						</Button>
					</Stack>
				</div>
				<div className="absolute z-10 top-[8%] left-1/2 transform -translate-x-1/2 flex justify-center px-4 w-full">
					{click && <GroupPopUp setClick={setClick} />}
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
										fontSize: "14px",
										fontWeight: "bold",
										color: "#003262",
										textAlign: "center",
										fontStyle: "Manrope",
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
											fontWeight: "bold",
											color: "#003262",
											textAlign: "center",
											fontStyle: "Manrope",
										}}>
										Tags
									</TableCell>
									<TableCell
										sx={{
											fontSize: "14px",
											fontWeight: "bold",
											color: "#003262",
											textAlign: "center",
											fontStyle: "Manrope",
										}}>
										Participants
									</TableCell>
									<TableCell
										sx={{
											fontSize: "14px",
											fontWeight: "bold",
											color: "#003262",
											textAlign: "center",
											fontStyle: "Manrope",
										}}>
										Status
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{GroupData?.group?.map((row, i) => (
									<TableRow
										key={i}
										sx={{
											textAlign: "center",
										}}>
										<TableCell
											component="th"
											scope="row"
											sx={{
												fontSize: "16px",
												fontFamily: "Manrope",
												fontWeight: "bold",
												textAlign: "center",
											}}>
											{row.name}
										</TableCell>
										<TableCell
											sx={{
												fontSize: "16px",
												fontFamily: "Manrope",
												fontWeight: "bold",
												textAlign: "center",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												gap: "7px",
											}}>
											<div className="border-2 text-[9.32px] flex items-center border-[#003262] rounded-md px-2">
												{row.tag}{" "}
												<span>
													<RxCross1 size={10} className="text-[#003262]" />
												</span>
											</div>
											<div className="border-2 text-[9.32px] flex items-center border-[#003262] rounded-md px-2">
												{row.tag}
												<span>
													<RxCross1 size={10} className="text-[#003262]" />
												</span>
											</div>
											<div className="border-2 text-[9.32px] flex items-center border-[#003262] rounded-md px-2">
												{row.tag}
												<span>
													<RxCross1 size={10} className="text-[#003262]" />
												</span>
											</div>
										</TableCell>
										<TableCell
											sx={{
												fontFamily: "Manrope",
												fontWeight: "bold",
												textAlign: "center",
												
												paddingLeft:"80px"
											}}>
											<div className="flex w-24 justify-center text-[12.5px]  items-center gap-2 py-1 rounded-lg bg-[#003262] text-white">
												<HiViewfinderCircle size={10} />
												<span>{row.participants}</span>
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
	);
};

export default Group;

import React from "react";
import Nav from "./Layout/Navbar/Nav";

import Footer from "./Layout/Footer/Footer";

import { Outlet, useLocation, useParams } from "react-router-dom";
import DashBoardNavbar from "./Layout/DashBoardNavbar/DashBoardNavbar";
import SideNavBarResult from "./Layout/SideNavBarResult/SideNavBarResult";

const App = () => {
	const path = useLocation();
	const pathname = path.pathname;
	const { name } = useParams();

	return (
		<>
			{pathname == "/register" ||
			pathname == "/login" ||
			pathname == "/profile" ||
			pathname == "/journey" ||
			pathname == `/journey/assessment` ||
			pathname == `/journey/assessment/${name}` ||
			pathname == `/journey/hris` ||
			pathname == `/journey/hris/${name}` ||
			pathname == `/journey/users` ||
			pathname == `/journey/users/${name}` ||
			pathname == `/journey/assissment/assessments/${name}` ? (
				""
			) : (
				<Nav />
			)}

			{pathname == "/journey" ||
			pathname == `/journey/assessment/${name}` ||
			pathname == `/journey/hris` ||
			pathname == `/journey/hris/${name}` ||
			pathname == `/journey/users` ||
			pathname == `/journey/users/${name}` ||
			pathname == `/journey/assissment/assessments/${name}` ? (
				<DashBoardNavbar />
			) : (
				""
			)}
			<Outlet />

			{pathname == "/register" ||
			pathname == "/login" ||
			pathname == "/profile" ||
			pathname == "/journey" ||
			pathname == `/journey/assessment` ||
			pathname == `/journey/assessment/${name}` ||
			pathname == `/journey/hris` ||
			pathname == `/journey/hris/${name}` ||
			pathname == `/journey/users` ||
			pathname == `/journey/users/${name}` ||
			pathname == `/journey/assissment/assessments/${name}` ? (
				""
			) : (
				<Footer />
			)}
		</>
	);
};

export default App;


import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const WithNav = () => {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
}

export default WithNav;
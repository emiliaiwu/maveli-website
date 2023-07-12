import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Main = () => {
	return (
		<main className='mt-20'>
			<Outlet />
			<ScrollToTop />
		</main>
	);
};

export default Main;

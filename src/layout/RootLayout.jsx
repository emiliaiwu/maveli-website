import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";


export const RootLayout = () => {
	return (
		<div className=' min-h-screen w-full'>
			
				<Header />
			

			<main className='mt-20 h-[1240px]'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

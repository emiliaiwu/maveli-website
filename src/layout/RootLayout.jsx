import { Header, Footer, Main } from "../components";

export const RootLayout = () => {
	return (
		<div className='max-w-screen min-h-screen'>
			<Header />
			<Main />
			<Footer />
		</div>
	);
};

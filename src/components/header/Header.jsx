import Logo from "../Logo";
import { useContext } from "react";
import HeaderContext from "../../context/HeaderContext";
import SearchButton from "./SearchButton";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import MobileMenuToggle from "./MobileMenuToggle";
import DownloadButton from "./DownloadButton";

const Header = () => {
	const { isActive } = useContext(HeaderContext);

	return (
		<header
			className={`z-[9999] fixed left-0 top-0 mb-6 w-full bg-white px-6 md:px-10 ${
				isActive ? "shadow-md" : "shadow-none"
			}`}
		>
			<div
				className={` md:max-w-[1240px] mx-auto flex w-full items-center justify-between bg-white py-4 md:py-5 leading-[25px] ${
					isActive ? "border-none" : "border-b-[0.6px] border-black"
				}`}
			>
				<Logo />
				<Navbar />

				{/* Search and Download buttons */}
				<div className='flex items-center justify-end gap-4'>
					<SearchButton />

					<DownloadButton
						text={"Download"}
						link={"/"}
						bgColor={"bg-tertiary"}
					/>

					<MobileMenuToggle />

					{/* Mobile Menu */}
					<MobileMenu />
				</div>
			</div>
		</header>
	);
};

export default Header;

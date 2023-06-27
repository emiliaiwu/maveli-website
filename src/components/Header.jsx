import Logo from "./Logo";
import { useContext } from "react";
import HeaderContext from "../context/HeaderContext";
import SearchButton from "./SearchButton";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import Button from "./Button";
import MobileMenuToggle from "./MobileMenuToggle";

const Header = () => {
	const {
		isActive,
		handleDropdownLeave,
		handleDropdownToggle,
		handleDropdownEnter,
		isDropdownOpen,
	} = useContext(HeaderContext);

	return (
		<header
			className={`fixed left-0 top-0 z-10 mb-6 w-full bg-white px-6 md:px-10 ${
				isActive ? "shadow-md" : "shadow-none"
			}`}
		>
			<div
				className={`container mx-auto flex w-full max-w-[1240px] items-center justify-between bg-white py-5 leading-[25px] ${
					isActive ? "border-none" : "border-b-[0.6px] border-black"
				}`}
			>
				<Logo />
				<Navbar
					handleDropdownToggle={handleDropdownToggle}
					handleDropdownEnter={handleDropdownEnter}
					handleDropdownLeave={handleDropdownLeave}
					isDropdownOpen={isDropdownOpen}
				/>

				{/* Search and Download buttons */}
				<div className='flex items-center justify-end gap-4'>
					<SearchButton />

					<Button text={"Download"} link={"/"} bgColor={"bg-tertiary"} />

					<MobileMenuToggle />

					{/* Mobile Menu */}
					<MobileMenu />
				</div>
			</div>
		</header>
	);
};

export default Header;

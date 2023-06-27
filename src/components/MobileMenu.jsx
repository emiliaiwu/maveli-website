import { navLinks } from "../constants";
import MobileMenuItem from "./MobileMenuItem";
import { useContext } from "react";
import HeaderContext from "../context/HeaderContext";

const MobileMenu = () => {
	const { isOpen, isDropDownOpen, handleDropdownToggle } = useContext(HeaderContext);
	return (
		<nav
			className={`absolute left-0 right-0 top-16 -z-20 ml-6 mr-6 gap-6 bg-white px-8 pt-16 shadow-lg md:hidden ${
				isOpen
					? "h-[500px] transition-all duration-300 ease-in-out"
					: "-translate-y-full duration-300 ease-in-out"
			}`}
		>
			<ul className='flex flex-1 flex-col gap-6'>
				{navLinks.map((nav) => (
					<MobileMenuItem
						key={nav.id}
						title={nav.title}
						sublinks={nav.sublinks}
						id={nav.id}
						isDropdownOpen={isDropDownOpen}
						handleDropdownToggle={handleDropdownToggle}
					/>
				))}
			</ul>
			
		</nav>
	);
};

export default MobileMenu;

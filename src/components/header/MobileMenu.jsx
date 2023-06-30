import { navLinks } from "../../constants";
import MobileMenuItem from "./MobileMenuItem";
import { useContext } from "react";
import HeaderContext from "../../context/HeaderContext";
import Logo from "../Logo";

const MobileMenu = () => {
	const { isOpen } = useContext(HeaderContext);
	return (
		<nav
			className={`absolute left-0 top-0 z-50 h-screen w-[60%] bg-white px-8 pt-8 shadow-lg sm:px-12 md:hidden ${
				isOpen
					? " left-0 transition-all duration-300 ease-in-out"
					: " left-[-100%] duration-300 ease-in-out"
			}`}
		>
			<Logo />
			<ul className='mt-10 flex flex-1 flex-col gap-5'>
				{navLinks.map((nav) => (
					<MobileMenuItem
						key={nav.id}
						title={nav.title}
						sublinks={nav.sublinks}
						id={nav.id}
					/>
				))}
			</ul>
		</nav>
	);
};

export default MobileMenu;

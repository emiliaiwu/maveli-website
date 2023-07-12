import NavItem from "./NavItem";
import { navLinks } from "../../constants";

const Navbar = () => {
	return (
		<nav className='hidden md:flex'>
			<ul className='flex list-none'>
				{navLinks.map((nav) => (
					<NavItem key={nav.id} nav={nav} />
				))}
			</ul>
		</nav>
	);
};

export default Navbar;

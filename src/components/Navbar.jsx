
import NavItem from "./NavItem";
import { navLinks } from "../constants";

const Navbar = ({ handleDropdownEnter, handleDropdownLeave, handleDropdownToggle, isDropdownOpen}) => {
	return (
		<nav className='hidden md:flex'>
			<ul className='flex list-none'>
				{navLinks.map((nav) => (
					<NavItem
						key={nav.id}
						nav={nav}
						handleDropdownToggle={handleDropdownToggle}
						handleDropdownEnter={handleDropdownEnter}
						handleDropdownLeave={handleDropdownLeave}
						isDropdownOpen={isDropdownOpen}
					/>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;

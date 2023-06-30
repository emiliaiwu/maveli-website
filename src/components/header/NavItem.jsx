import { NavLink } from "react-router-dom";
import DropdownMenu from "./DropDown";
import { BiChevronDown } from "../../constants";
import HeaderContext from "../../context/HeaderContext";
import { useContext } from "react";

const NavItem = ({ nav }) => {
	const { id, title, sublinks } = nav;
	const {
		handleDropdownToggle,
		handleDropdownEnter,
		isDropdownOpen,
		handleDropdownLeave,
	} = useContext(HeaderContext);

	return (
		<li className='px-6 font-grotesk text-sm font-semibold uppercase tracking-widest text-black'>
			{sublinks ? (
				<div
					className='relative flex items-center justify-between'
					onMouseEnter={handleDropdownEnter}
					onMouseLeave={handleDropdownLeave}
				>
					<button
						className='mr-1 cursor-pointer font-grotesk text-sm font-semibold uppercase tracking-widest opacity-50 hover:opacity-100 duration-200 ease'
						onClick={handleDropdownToggle}
					>
						{title}
					</button>
					<BiChevronDown
						size={20}
						className={`${
							isDropdownOpen
								? "rotate-180 duration-200 ease-in-out"
								: "rotate-0 duration-200 ease-in-out"
						}`}
					/>

					{isDropdownOpen && <DropdownMenu sublinks={sublinks} />}
				</div>
			) : (
				<NavLink
					to={`/${id}`}
					className='cursor-pointer opacity-50 hover:opacity-100 duration-200 ease'
				>
					{title}
				</NavLink>
			)}
		</li>
	);
};

export default NavItem;

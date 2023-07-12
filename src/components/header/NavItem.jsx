import { NavLink } from "react-router-dom";

const NavItem = ({ nav }) => {
	const { id, title, sublinks } = nav;

	return (
		<li className='px-6 font-grotesk text-sm font-semibold uppercase tracking-widest text-black'>
			<NavLink
				to={`/${id}`}
				className='ease cursor-pointer opacity-50 duration-200 hover:opacity-100'
			>
				{title}
			</NavLink>
		</li>
	);
};

export default NavItem;

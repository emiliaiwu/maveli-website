import { NavLink } from "react-router-dom";

const MobileMenuItem = ({ title, sublinks, id, setIsOpen }) => {
	return (
		<li className='mb-2 font-grotesk text-sm font-semibold uppercase tracking-widest text-black'>
			<NavLink
				to={`/${id}`}
				className='cursor-pointer opacity-50 hover:opacity-100'
				onClick={() => setIsOpen(false)}
			>
				{title}
			</NavLink>
		</li>
	);
};

export default MobileMenuItem;

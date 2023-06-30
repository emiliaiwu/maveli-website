
import { NavLink } from "react-router-dom";

const DropdownMenu = ({ sublinks}) => {
	return (
		<ul
			className='absolute left-1/2 top-12 z-10 w-[180px] -translate-x-1/2 transform rounded border-black bg-white p-5 shadow outline-none transition-all duration-200 ease'
		>
			{sublinks.map((sublink) => (
				<li
					key={sublink.id}
					className='mb-2 font-grotesk text-sm font-semibold capitalize tracking-normal text-black'
				>
					<NavLink
						to={`/${sublink.id}`}
						className='block cursor-pointer opacity-50 hover:opacity-100'
					>
						{sublink.title}
					</NavLink>
				</li>
			))}
		</ul>
	);
};

export default DropdownMenu;


import { BiChevronDown } from "../constants";
import { NavLink } from "react-router-dom";


const MobileMenuItem = ({ title, sublinks, id, isDropdownOpen, handleDropdownToggle }) => {
	

	return (
		<li className='mb-2 font-grotesk text-sm font-semibold uppercase tracking-normal text-black'>
			{sublinks ? (
				<div
					className='relative flex items-center'
					onClick={handleDropdownToggle}
				>
					<NavLink
						to='#'
						className='mr-6 cursor-pointer font-grotesk text-sm font-semibold uppercase tracking-widest opacity-50 hover:opacity-100'
					>
						{title}
					</NavLink>
					<BiChevronDown
						size={20}
						className={`${
							isDropdownOpen
								? "rotate-180 duration-200 ease-in-out"
								: "rotate-0 duration-200 ease-in-out"
						}`}
					/>

					{isDropdownOpen && (
						<ul className='absolute left-0 top-4 z-10 w-[180px] transform p-5 outline-none'>
							{sublinks.map((sublink) => (
								<li
									key={sublink.id}
									className='mb-2 font-grotesk text-sm font-semibold capitalize tracking-normal text-black '
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
					)}
				</div>
			) : (
				<NavLink
					to={`/${id}`}
					className='cursor-pointer opacity-50 hover:opacity-100'
				>
					{title}
				</NavLink>
			)}
		</li>
	);
};

export default MobileMenuItem;

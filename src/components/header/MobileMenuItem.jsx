import { BiChevronDown } from "../../constants";
import { NavLink, Link } from "react-router-dom";
import HeaderContext from "../../context/HeaderContext";
import { useContext } from "react";

const MobileMenuItem = ({ title, sublinks, id }) => {
	const { isDropdownOpen, handleDropdownToggle } = useContext(HeaderContext);

	return (
		<li className='mb-2 font-grotesk text-sm font-semibold uppercase tracking-widest text-black'>
			{sublinks ? (
				<div
					className='relative flex items-center'
					onClick={handleDropdownToggle}
				>
					<Link
						to='#'
						className='mr-6 cursor-pointer font-grotesk text-sm font-semibold uppercase tracking-widest opacity-50 hover:opacity-100'
					>
						{title}
					</Link>
					<BiChevronDown
						size={20}
						className={`${
							isDropdownOpen
								? "rotate-180 duration-200 ease-in-out"
								: "rotate-0 duration-200 ease-in-out"
						}`}
					/>

					{isDropdownOpen && (
						<ul className='absolute left-0 top-4 z-10 transform bg-white p-5 outline-none'>
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

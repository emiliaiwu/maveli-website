import { FaEllo } from "../constants";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link to={"/"} className='flex items-center hover:translate-y-[-0.5rem] duration-300 ease'>
			<div className='mr-2 h-[1.8rem] w-[1.8rem] rounded-full border border-black bg-black'>
				<FaEllo className='h-[100%] w-[100%] text-primary' />
			</div>
			<h1 className='text-grotesk text-xl sm:text-2xl font-semibold'>Maveli</h1>
		</Link>
	);
};

export default Logo;

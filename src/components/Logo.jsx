import { FaEllo } from "../constants";
import { Link } from "react-router-dom";

const Logo = ({ textSize, num }) => {
	return (
		<Link
			to={"/"}
			className='ease flex items-center duration-300 hover:translate-y-[-0.5rem]'
		>
			<div className='mr-2 rounded-full bg-black'>
				<FaEllo className=' text-primary' size={num} />
			</div>

			<h1 className={`text-grotesk font-semibold  ${textSize} `}>Maveli</h1>
		</Link>
	);
};

export default Logo;

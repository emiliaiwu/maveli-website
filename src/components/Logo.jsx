import { FaEllo } from "../constants";
import { Link } from "react-router-dom";

const Logo = ({ textSize, height, width }) => {
	return (
		<Link
			to={"/"}
			className='ease flex items-center duration-300 hover:translate-y-[-0.5rem]'
		>
			<div
				className={`mr-2 ${height} ${width} rounded-full border border-black bg-black`}
			>
				<FaEllo className='h-[100%] w-[100%] text-primary' />
			</div>
			<h1 className={`text-grotesk font-semibold  ${textSize} `}>Maveli</h1>
		</Link>
	);
};

export default Logo;

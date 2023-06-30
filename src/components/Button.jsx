import { Link } from "react-router-dom";

const Button = ({ text, bgColor, link, textColor }) => {
	return (
		<Link
			to={link}
			className={`${bgColor} inline-block rounded-[5px] border-[0.6px] border-black px-[30px] py-[12px] ${bgColor} ease transition-colors duration-300 hover:bg-primary ${textColor} leading-3 hover:text-black`}
		>
			<span className='flex items-center justify-center'>
				<span className='font-grotesk text-sm font-medium'>{text}</span>
			</span>
		</Link>
	);
};

export default Button;

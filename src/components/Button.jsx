
import { BiDownload } from "../constants";
import { Link } from "react-router-dom";

const DownloadButton = ({ link, text, bgColor }) => {
	const buttonClasses = `flex cursor-pointer items-center justify-center rounded-[7px] border-[0.6px] border-black px-[10px] py-[8px] sm:px-[25px] sm:py-[12px] ${bgColor}`;

	return (
		<div className={buttonClasses}>
			<Link to={link}>
				<BiDownload className='text-[18px] sm:hidden' />
				<span className='hidden font-grotesk text-sm font-semibold text-black sm:block'>
					{text}
				</span>
			</Link>
		</div>
	);
};

export default DownloadButton;

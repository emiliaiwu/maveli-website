import { BiDownload } from "../../constants";
import { Link } from "react-router-dom";

const DownloadButton = ({ link, text, bgColor }) => {
	const buttonClasses = `flex cursor-pointer items-center justify-center rounded-[5px] border-[0.6px] border-black px-[10px] py-[8px] sm:px-[30px] sm:py-[12px] ${bgColor} hover:bg-primary duration-200 ease`;

	return (
		<div className={buttonClasses} role="link">
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

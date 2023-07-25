import {
	FaFacebookF,
	FaTwitter,
	FaYoutube,
	FaLinkedinIn,
} from "react-icons/fa";

const Socials = ({ className }) => {
	const socials = [
		{ icon: <FaFacebookF />, name: "Facebook", url: "https://facebook.com" },
		{ icon: <FaTwitter />, name: "Twitter", url: "https://twitter.com" },
		{ icon: <FaYoutube />, name: "YouTube", url: "https://youtube.com" },
		{ icon: <FaLinkedinIn />, name: "LinkedIn", url: "https://linkedin.com" },
	];

	return (
		<div className='flex items-center justify-center gap-3'>
			{socials.map((social, index) => (
				<a
					href={social.url}
					target='_blank'
					rel='noopener noreferrer'
					key={index}
					className={`${className} ease flex items-center justify-center rounded-full duration-200 hover:bg-primary`}
				>
					{social.icon}
				</a>
			))}
		</div>
	);
};

export default Socials;

import Logo from "../Logo";
import { useState } from "react";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import MobileMenuToggle from "./MobileMenuToggle";
import { styles } from "../../style";
import DownloadButton from "./DownloadButton";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleMenuToggle = () => {
		setIsOpen((pre) => !pre);
	};

	return (
		<header className='fixed left-0 top-0 z-[9999] w-full bg-white px-6 sm:px-8 mdd:px-12'>
			<div
				className={`${styles.flexBetween} mx-auto border-b-[0.6px] border-black bg-white py-4 md:py-5
				 ${styles.boxWidth}`}
			>
				<Logo
					height='h-[1.8rem]'
					width='h-[1.8rem]'
					textSize='text-xl sm:text-2xl'
				/>
				<Navbar />
				<div className='flex items-center justify-end gap-5'>
					<DownloadButton text='Download' link='/' bgColor='bg-tertiary' />
					<MobileMenuToggle
						handleMenuToggle={handleMenuToggle}
						isOpen={isOpen}
					/>
					<MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
				</div>
			</div>
		</header>
	);
};

export default Header;

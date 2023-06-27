import HeaderContext from "../context/HeaderContext";
import { RxCross2, RxHamburgerMenu } from "../constants";
import { useContext } from "react";

const MobileMenuToggle = () => {
	const { isOpen, handleMenuToggle } = useContext(HeaderContext);
	return (
		<button className='cursor-pointer md:hidden' onClick={handleMenuToggle}>
			{isOpen ? (
				<RxCross2 className='text-[25px] ss:text-[30px]' />
			) : (
				<RxHamburgerMenu className=' text-[25px] ss:text-[30px]' />
			)}
		</button>
	);
};

export default MobileMenuToggle;

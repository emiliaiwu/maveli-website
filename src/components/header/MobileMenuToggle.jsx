import { RxCross2, RxHamburgerMenu } from "../../constants";

const MobileMenuToggle = ({ handleMenuToggle, isOpen }) => {
	return (
		<button
			role='navigation'
			className='ease cursor-pointer duration-200 hover:opacity-50 md:hidden'
			onClick={handleMenuToggle}
		>
			{isOpen ? (
				<RxCross2 className='text-[25px] ss:text-[30px]' />
			) : (
				<RxHamburgerMenu className=' text-[25px] ss:text-[30px]' />
			)}
		</button>
	);
};

export default MobileMenuToggle;

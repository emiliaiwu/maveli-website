
import { BiSearch } from "../../constants";

const SearchButton = () => {
	return (
		<button className="hover:opacity-50 duration-200 ease">
			<BiSearch className='cursor-pointer text-[24px] ss:text-[28px]' />
		</button>
	);
};

export default SearchButton;

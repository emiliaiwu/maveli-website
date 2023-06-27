import { createContext, useState, useEffect } from "react";

const HeaderContext = createContext();

export function HeaderProvider ({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	// handle Menu
	const handleMenuToggle = () => {
		setIsOpen((prev) => !prev);
	};

	// header state
	const [isActive, setIsActive] = useState(false);

	// scroll listerner
	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
		});
	}, []);

	const handleDropdownToggle = () => {
		setIsDropdownOpen((prev) => !prev);
	};

	const handleDropdownEnter = () => {
		setIsDropdownOpen(true);
	};

	const handleDropdownLeave = () => {
		setIsDropdownOpen(false);
	};

	return (
		<HeaderContext.Provider
			value={{
				isOpen,
				setIsOpen,
				handleDropdownEnter,
				handleDropdownLeave,
				handleDropdownToggle,
				handleMenuToggle,
				isActive,
				isDropdownOpen,
			}}
		>
			{children}
		</HeaderContext.Provider>
	);
}


export default HeaderContext;
import { useEffect, useRef } from "react";
import { BsFillPatchMinusFill, BsFillPatchPlusFill } from "react-icons/bs";

const AccordionItem = ({ item, num, lastItem, clicked, setClicked }) => {
	const isOpen = num === clicked;
	const contentRef = useRef(null);

	const handleClick = () => {
		setClicked(isOpen ? null : num);
	};

	useEffect(() => {
		const contentHeight = contentRef.current.scrollHeight;
		contentRef.current.style.maxHeight = isOpen ? `${contentHeight}px` : "0px";
	}, [isOpen]);

	return (
		<div
			className={`${
				num === lastItem ? "border-none" : "border-b-[0.6px]"
			} border-black border-opacity-20 px-6`}
		>
			<div
				className='flex items-start justify-between py-6'
				onClick={handleClick}
			>
				<p className='font-grotesk text-[16px] font-semibold text-black'>
					{item.title}
				</p>
				<button onClick={handleClick} className="ml-3">
					{isOpen ? (
						<BsFillPatchMinusFill
							size={30}
							className='ease text-black text-opacity-60 duration-200 hover:scale-110'
						/>
					) : (
						<BsFillPatchPlusFill
							size={30}
							className='ease text-black duration-200 hover:scale-110'
						/>
					)}
				</button>
			</div>

			<div
				ref={contentRef}
				className={`transition-max-height overflow-hidden duration-[400ms] ease-in-out`}
			>
				<p className='mb-7 font-DMSans text-sm leading-7 text-paragraph'>
					{item.content} 
				</p>
			</div>
		</div>
	);
};

export default AccordionItem;



import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ faq }) => {
	const [clicked, setClicked] = useState(null);

	return (
		<div className='rounded-[8px] border-[0.6px] border-black bg-white shadow-box  '>
			{faq.map((item, index) => (
				<AccordionItem
					key={index}
					item={item}
					num={index}
					clicked={clicked}
					setClicked={setClicked}
					lastItem={faq.length - 1}
				/>
			))}
		</div>
	);
};

export default Accordion;

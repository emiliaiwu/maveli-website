import { useState } from "react";
import AccordionItem from "./AccordionItem";
import Reveal from "../animation/Reveal";

const Accordion = ({ faq }) => {
	const [clicked, setClicked] = useState(0);

	return (
		<div className='rounded-[8px] border-[0.6px] border-black bg-white shadow-box  '>
			{faq.map((item, index) => (
				<Reveal key={index}>
					<AccordionItem
						item={item}
						num={index}
						clicked={clicked}
						setClicked={setClicked}
						lastItem={faq.length - 1}
					/>
				</Reveal>
			))}
		</div>
	);
};

export default Accordion;

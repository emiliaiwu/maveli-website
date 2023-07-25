import { useState } from "react";
import { BiSolidRightArrow, howItWorks } from "../constants";
import { H2Header, Heading, InfoTextCenter } from "./Texts";
import Button from "./Button";
import Video from "./Video";
import { styles } from "../style";
import Reveal from "./animation/Reveal";

const HowItWorks = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const { text, title, paragraph, buttonText } = howItWorks;

	return (
		<section>
			<div
				className={`mx-auto flex w-full flex-col items-stretch overflow-hidden rounded-[8px] rounded-b-[8px] border border-black sm:flex-row-reverse ${styles.boxWidth} relative`}
			>
				<div className='flex flex-col items-center gap-4 bg-tertiary px-[30px] py-[50px] text-center sm:w-[50%] sm:items-start sm:px-[50px] sm:py-[70px] sm:text-left md:px-[70px] md:py-[140px]'>
					<Reveal>
						<Heading text={text} />
					</Reveal>
					<Reveal>
						<H2Header text={title} />
					</Reveal>
					<Reveal>
						<InfoTextCenter text={paragraph} />
					</Reveal>
					<Reveal>
					<Button
						text={buttonText}
						bgColor={"bg-black"}
						textColor={"text-white"}
						link={"/"}
					/></Reveal>
				</div>
				<div className='howitworks-bg-img flex w-full items-center justify-center border-t border-black sm:w-[50%] sm:border-r  sm:border-t-0 '>
					<div className='py-[120px]'>
						<div
							className={` ${styles.flexCenter} ease h-20 w-20 rounded-full border border-black bg-white shadow-circle2 duration-200 hover:bg-tertiary `}
							onClick={openModal}
						>
							<BiSolidRightArrow className='text-[30px] ' />
						</div>
					</div>
				</div>
				<Video isOpen={isOpen} closeModal={closeModal} />
			</div>
		</section>
	);
};

export default HowItWorks;

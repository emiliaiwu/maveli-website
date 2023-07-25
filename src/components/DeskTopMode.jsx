import { Heading, H2Header, InfoText } from "./Texts";
import { desktopModeData } from "../constants";
import Button from "./Button";
import { styles } from "../style";
import Reveal from "./animation/Reveal";

const DeskTopMode = () => {
	const { heading, title, image, paragraph, buttonText } = desktopModeData;

	return (
		<section>
			<div
				className={`${styles.boxWidth} mx-auto w-full justify-between gap-10 sm:flex sm:flex-row-reverse`}
			>
				<div className='mb-10 flex w-full flex-col justify-center sm:mb-0 sm:w-[50%] '>
					{/* Heading */}
					<div className='mb-5 flex flex-col gap-5'>
						<Reveal>
							<Heading text={heading} />
						</Reveal>
						<Reveal>
							<H2Header text={title} />
						</Reveal>
						<Reveal>
							<InfoText text={paragraph} />
						</Reveal>
					</div>

					{/* button */}
					<Reveal>
						<Button
							text={buttonText}
							bgColor={"bg-black"}
							textColor={"text-white"}
							link={"/"}
						/>
					</Reveal>
				</div>
				<div className='w-full sm:w-1/2'>
					<Reveal>
						<div className='border-rounded overflow-hidden shadow-box'>
							<div className='w-full'>
								<img
									src={image}
									alt='app desktop mode image w-full h-auto object-contain'
								/>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
};

export default DeskTopMode;

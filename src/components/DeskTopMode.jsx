import { Heading, H2Header, InfoText } from "./Texts";
import { desktopModeData } from "../constants";
import Button from "./Button";
import { styles } from "../style";

const DeskTopMode = () => {
    const { heading, title, image, paragraph, buttonText } = desktopModeData;

	return (
		<section>
			<div
				className={`${styles.boxWidth} mx-auto w-full justify-between sm:flex sm:flex-row-reverse gap-10`}
			>
				<div className='flex w-full flex-col justify-center sm:w-[50%] mb-10 sm:mb-0 '>
					{/* Heading */}
					<div className='mb-5 flex flex-col gap-5'>
						<Heading text={heading} />
						<H2Header text={title} />
						<InfoText text={paragraph} />
					</div>

					{/* button */}
					<div>
						<Button
							text={buttonText}
							bgColor={"bg-black"}
							textColor={"text-white"}
							link={"/"}
						/>
					</div>
				</div>
				<div className='w-full sm:w-1/2'>
					<div className='border-rounded overflow-hidden shadow-box'>
						<div className="w-full">
							<img src={image} alt='app desktop mode image w-full h-auto object-contain' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DeskTopMode;

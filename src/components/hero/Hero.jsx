import { heroDetails } from "../../constants";
import { styles } from "../../style";
import ActiveUsers from "../ActiveUsers";
import Button from "../Button";
import { Heading, InfoText } from "../Texts";

const Hero = () => {
	const {
		headingText,
		headingTitle,
		headingParagraph,
		headingButtonText,
		heroImage,
	} = heroDetails;

	return (
		<section id='home' className={`${styles.flexCenter}`}>
			<div
				className={`flex flex-col items-center justify-between gap-8 sm:flex-row ${styles.boxWidth}`}
			>
				<div className='flex w-full flex-col justify-center gap-5 py-4 sm:w-[60%] mdd:w-[50%]'>
					<Heading text={headingText} />
					<div className='w-full'>
						<h1 className='text-left font-grotesk text-[41px] font-medium leading-[49.2px] sm:text-[48px] sm:leading-[60px] md:text-[65px] md:leading-[78px]'>
							{headingTitle[0]}{" "}
							<span className='inline-block border-none bg-primary px-[10px] pb-[5px]'>
								<span>{headingTitle[1]}</span>
							</span>{" "}
							{headingTitle[2]}
						</h1>
					</div>
					<InfoText text={headingParagraph} />
					<div className='mb-5 flex items-center gap-5'>
						<Button
							text={headingButtonText[0]}
							bgColor={"bg-black"}
							link={"#home"}
							textColor={"text-white"}
						/>
						<Button
							text={headingButtonText[1]}
							bgColor={"transparent"}
							link={"contact"}
							textColor={"text-black"}
						/>
					</div>
					<ActiveUsers />
				</div>

				<div className='flex h-full w-full sm:w-[50%] '>
					<div className='hero-bg-img h-full w-full overflow-hidden rounded-[10px] border-[0.6px] border-black bg-tertiary '>
						<div className='mt-[30px] flex w-full items-end bg-transparent'>
							<img
								loading='lazy'
								src={heroImage}
								className='inline-block aspect-auto h-auto w-[70%] max-w-[704px] object-contain sm:w-[80%]'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

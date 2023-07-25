import { heroDetails } from "../../constants";
import { styles } from "../../style";
import ActiveUsers from "./ActiveUsers";
import Button from "../Button";
import { Heading, InfoText } from "../Texts";
import Reveal from "../animation/Reveal";

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
				<div className='mb-6 flex w-full flex-col justify-center gap-5 py-4 sm:mb-0 sm:w-[60%] mdd:w-[50%] '>
					<Reveal>
						<Heading text={headingText} />
					</Reveal>
					<div className='w-full'>
						<Reveal>
							<h1 className='text-left font-grotesk text-[41px] font-medium leading-[50px] sm:text-[48px] sm:leading-[60px] md:text-[65px] md:leading-[78px]'>
								{headingTitle[0]}{" "}
								<span className='inline-block border-none bg-primary px-[10px] pb-[5px]'>
									<span>{headingTitle[1]}</span>
								</span>{" "}
								{headingTitle[2]}
							</h1>
						</Reveal>
					</div>
					<Reveal>
						<InfoText text={headingParagraph} />
					</Reveal>

					<div className='mb-7 flex items-center gap-5'>
						<Reveal>
							<Button
								text={headingButtonText[0]}
								bgColor={"bg-black"}
								link={"#home"}
								textColor={"text-white"}
							/>
						</Reveal>

						<Reveal>
							<Button
								text={headingButtonText[1]}
								bgColor={"transparent"}
								link={"contact"}
								textColor={"text-black"}
							/>
						</Reveal>
					</div>
					<ActiveUsers />
				</div>

				<div className='ease flex h-full w-full duration-300 sm:w-[50%]'>
					<Reveal>
						<div className='hero-bg-img h-full w-full overflow-hidden rounded-[10px] border-[0.6px] border-black bg-tertiary '>
							<div className='mt-[30px] flex w-full items-end bg-transparent'>
								<img
									loading='lazy'
									src={heroImage}
									width="700"
									height="1024"
									className='inline-block aspect-auto h-auto w-[70%] max-w-[704px] object-contain sm:w-[80%]'
								/>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
};

export default Hero;

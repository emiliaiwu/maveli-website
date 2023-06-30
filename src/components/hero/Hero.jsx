import { heroDetails } from "../../constants";
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
		<section className=' w-full bg-white px-6 py-[70px] sm:px-[30px] '>
			<div className=' mx-auto flex w-full flex-col justify-between sm:flex-row sm:items-stretch md:max-w-[1240px] md:px-8 lg:px-0'>
				<div className='flex w-full shrink basis-auto flex-col justify-center gap-5 py-4 sm:w-[55%] lg:w-[50%]'>
					<Heading text={headingText} />
					<div className='w-full'>
						<h1 className=' text-left font-grotesk text-[41px] font-medium leading-[49.2px] sm:text-[50px] sm:leading-[60px] md:text-[65px] md:leading-[78px]'>
							{headingTitle[0]}{" "}
							<span className='inline-block border-none bg-primary px-[10px] pb-[5px]'>
								<span>{headingTitle[1]}</span>
							</span>{" "}
							{headingTitle[2]}
						</h1>
					</div>
					<InfoText text={headingParagraph}/>
					<div className='mb-5 flex items-center gap-5'>
						<Button
							text={headingButtonText[0]}
							bgColor={"bg-black"}
							link={"#"}
							textColor={"text-white"}
						/>
						<Button
							text={headingButtonText[1]}
							bgColor={"transparent"}
							link={"#"}
							textColor={"text-black"}
						/>
					</div>
					<ActiveUsers />
				</div>

				<div className='flex h-full w-full shrink basis-auto self-auto sm:w-[50%] '>
					<div className='hero-bg-img mt-[70px] w-full overflow-hidden rounded-[10px] border-[0.6px] border-black bg-tertiary sm:ml-8 md:mb-[50px] md:ml-[50px] md:mt-[0px]'>
						<div className='container mt-[30px] flex w-full items-end '>
							<img
								src={heroImage}
								className='inline-block aspect-auto h-auto w-[70%] max-w-[704px] align-middle sm:w-[80%]'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

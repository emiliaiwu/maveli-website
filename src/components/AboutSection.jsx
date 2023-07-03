import { H2Header, Heading, InfoText } from "./Texts";
import { aboutMaveli } from "../constants";
import { AboutBox } from "./Box";

const AboutSection = () => {
	const {
		headingText,
		headingTitle,
		headingParagraph,
		image,
		phoneImage,
		details,
	} = aboutMaveli;
	return (
		<section className='flex items-center justify-center'>
			<div className='mx-auto w-full justify-between md:flex md:max-w-[1240px] md:flex-row-reverse'>
				<div className='mb-5 flex w-full flex-col flex-wrap border-none md:mb-0 md:w-[50%] md:px-8'>
					{/* Details */}
					<div className='mb-5 flex w-full shrink basis-auto flex-col gap-5'>
						<Heading text={headingText} />
						<H2Header text={headingTitle} />
						<InfoText text={headingParagraph} />
					</div>

					{/* box */}
					<div className='w-full gap-5 sm:flex'>
						{details.map(
							(detail) =>
								detail.id !== "detail-3" && (
									<AboutBox
										key={detail.id}
										width={"w-full"}
										bgColor={detail.bgColor}
										iconBgColor={detail.iconBgColor}
										fontColor={detail.fontColor}
										headerText={detail.heading}
										borderColor={detail.borderColor}
										paragraphText={detail.paragraph}
										iconComponent={
											<detail.icon className={`text-xl ${detail.iconColor}`} />
										}
									/>
								)
						)}
					</div>

					<div className='w-full'>
						{details.map(
							(detail) =>
								detail.id === "detail-3" && (
									<AboutBox
										key={detail.id}
										width={"w-full"}
										bgColor={detail.bgColor}
										iconBgColor={detail.iconBgColor}
										fontColor={detail.fontColor}
										headerText={detail.heading}
										paragraphText={detail.paragraph}
										borderColor={detail.borderColor}
										iconComponent={
											<detail.icon className={`text-xl ${detail.iconColor}`} />
										}
									/>
								)
						)}
					</div>
				</div>

				{/* Image */}
				<div className='relative flex justify-center px-5 md:w-[45%]'>
					<div className='h-auto w-full overflow-hidden rounded-md border border-black'>
						<img
							src={image}
							className='aspect-[1/1] h-full w-full object-cover'
							alt='Responsive Image'
						/>
					</div>
					<div className='absolute bottom-[-20px] right-[-3px] h-auto w-[35%]'>
						<img src={phoneImage} className='h-full w-full' loading='lazy' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;

import { H2Header, Heading, InfoText } from "./Texts";
import { aboutMaveli } from "../constants";
import { AboutBox } from "./Box";
import { styles } from "../style";

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
		<section>
			<div className={`mx-auto w-full justify-between md:flex md:flex-row-reverse ${styles.boxWidth}`}>
				<div className='mb-5 flex w-full flex-col flex-wrap border-none md:mb-0 md:w-[50%] '>
					{/* Details */}
					<div className='mb-5 flex w-full flex-col gap-5 '>
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
				<div className='relative flex justify-center pr-5 md:w-[45%]'>
					<div className='h-auto w-full overflow-hidden rounded-md border border-black'>
						<img
							src={image}
							className='aspect-[1/1] h-full w-full object-cover'
							alt='African boy holding phone'
							loading="lazy"
						/>
					</div>
					<div className='absolute bottom-[-20px] right-[-3px] h-auto w-[35%]'>
						<img src={phoneImage} className='object-contain w-full' loading='lazy' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;

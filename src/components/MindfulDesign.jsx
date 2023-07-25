import { mindfulDesign } from "../constants";
import { styles } from "../style";
import { Heading, H2Header, InfoText } from "./Texts";
import { Link } from "react-router-dom";
import Reveal from "./animation/Reveal";

export const MindfulDesign = () => {
	const { text, title, paragraph, downloadImg, image } = mindfulDesign;
	return (
		<section id='mindful-design'>
			<div
				className={`mx-auto w-full justify-between gap-4 sm:flex ${styles.boxWidth} `}
			>
				<div className='flex w-full flex-col justify-center sm:w-1/2'>
					{/* Heading */}
					<div className='mb-5 flex flex-col gap-5'>
						<Reveal>
							<Heading text={text} />
						</Reveal>
						<Reveal>
							<H2Header text={title} />
						</Reveal>
						<Reveal>
							{" "}
							<InfoText text={paragraph} />
						</Reveal>
					</div>

					{/* download app */}
					<div className='mb-[50px] flex flex-wrap gap-4 '>
						{downloadImg.map((item, index) => (
							<Reveal key={index}>
								<Link to={item.link} key={index} target='_blank'>
									<img
										src={item.icon}
										alt='Apple Store'
										className='ease h-auto w-[140px] cursor-pointer duration-300 hover:translate-y-[-0.5rem] md:w-[160px]'
									/>
								</Link>
							</Reveal>
						))}
					</div>
				</div>

				{/* image */}
				<div className='flex w-full sm:w-1/2'>
					<div className='border-rounded my-[30px] flex w-full items-center justify-center bg-tertiary px-5 sm:my-0 sm:px-10 sm:py-0'>
						<Reveal>
							<div className='my-[-30px] sm:my-[-55px] '>
								<img src={image} className='h-auto w-auto' loading='lazy' />
							</div>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	);
};

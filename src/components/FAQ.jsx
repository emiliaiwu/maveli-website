import { iPhone5 } from "../assets";
import { faqs } from "../constants";
import { styles } from "../style";
import Accordion from "./Accordion";
import { H2Header, Heading } from "./Texts";
import Reveal from "./animation/Reveal";

const Faq = () => {
	const { text, title, questions } = faqs;

	return (
		<section>
			<div
				className={`${styles.boxWidth} mx-auto flex flex-col justify-between gap-10 md:flex-row-reverse`}
			>
				<div className='mb-10 w-full md:mb-0 md:mt-[50px] md:w-[50%]'>
					<div className='mb-10 flex flex-col items-center gap-8 text-center'>
						<Reveal>
							<Heading text={text} />
						</Reveal>
						<div className=' '>
							<Reveal>
								<H2Header text={title} />
							</Reveal>
						</div>
					</div>
					<Reveal>
						<Accordion faq={questions} />
					</Reveal>
				</div>

				{/* image */}
				<div className='w-full md:w-[50%] '>
					<div className='my-[30px] w-full rounded-[8px] border-[0.6px] border-black bg-tertiary px-8 md:my-[50px] '>
						<div className='w-full'>
							<div className='my-[-30px] flex w-full items-center justify-center md:my-[-50px]'>
								<Reveal>
									<img src={iPhone5} className=' w-[70%] ' />
								</Reveal>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq;

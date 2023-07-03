import { iPhone5 } from "../assets";
import { faqs } from "../constants";
import Accordion from "./Accordion";
import { H2Header, Heading } from "./Texts";

const FAQ = () => {
	const { text, title, questions } = faqs;

	return (
		<section className='flex justify-center items-center'>
			<div className='flex flex-col justify-between md:flex-row-reverse gap-10 max-w-[1240px] md:px-8'>
				<div className='w-full md:w-[50%] md:mt-[50px] mb-10 md:mb-0'>
					<div className='mb-10 flex shrink basis-auto flex-col items-center gap-8 text-center'>
						<Heading text={text} />
						<div className=' '>
							<H2Header text={title} />
						</div>
					</div>
					<Accordion faq={questions} />
				</div>

				{/* image */}
				<div className='w-full md:w-[50%] '>
					<div className='my-[30px] w-full rounded-[8px] border-[0.6px] border-black bg-tertiary px-8 md:my-[50px] '>
						<div className='w-full'>
							<div className='my-[-30px] flex w-full items-center justify-center md:my-[-50px]'>
								<img src={iPhone5} className=' w-[70%] ' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;

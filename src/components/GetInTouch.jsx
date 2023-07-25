import { getInTouchData } from "../constants";
import { GetInTouchBox } from "./Box";
import { Heading, H2Header } from "./Texts";
import Reveal from "./animation/Reveal";

const GetInTouch = () => {
	const { heading, title, cards } = getInTouchData;

	return (
		<section>
			<div className='mx-auto w-full max-w-[900px]'>
				{/* heading */}
				<div className='mb-16 flex flex-col items-center justify-center gap-5 text-center'>
					<Reveal>
						<Heading text={heading} />
					</Reveal>
					<Reveal>
						<H2Header text={title} />
					</Reveal>
				</div>

				<div className='grid grid-cols-1 gap-8 sm:grid-cols-3'>
					{cards.map((card) => (
						<Reveal key={card.title}>
							<GetInTouchBox
								title={card.title}
								iconBgColor={card.color}
								info1={card.Info[0]}
								info2={card.Info[1]}
								iconComponent={<card.icon className='text-[30px]' />}
							/>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};

export default GetInTouch;

import { ValueBox } from "./Box";
import { ourValues } from "../constants";
import { styles } from "../style";
import { H2Header, Heading } from "./Texts";
import Reveal from "./animation/Reveal";
const OurValues = () => {
	const { heading, title, values } = ourValues;

	return (
		<section className='bg-paragraph2'>
			<div
				className={`${styles.boxWidth} mx-auto flex flex-col items-center gap-14`}
			>
				{/* heading */}
				<div className='mb-5 flex flex-col gap-6 text-center'>
					<Reveal>
						<Heading text={heading} />
					</Reveal>
					<Reveal>
						<div className='sm:mx-[80px]  md:mx-[250px] lg:mx-[350px]'>
							<H2Header text={title} />
						</div>
					</Reveal>
				</div>

				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 mdd:grid-cols-3'>
					{values.map((value) => (
						<Reveal key={value.title}>
							<ValueBox
								title={value.title}
								paragraph={value.paragraph}
								iconBgColor={value.color}
								iconComponent={<value.icon className='text-[28px]' />}
							/>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurValues;

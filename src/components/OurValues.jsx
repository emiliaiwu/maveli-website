import { ValueBox } from "./Box";
import { ourValues } from "../constants";
import { styles } from "../style";
import { H2Header, Heading } from "./Texts";

const OurValues = () => {
    const { heading, title, values } = ourValues;


	return (
		<section className="bg-paragraph2">
			<div
				className={`${styles.boxWidth} mx-auto flex flex-col items-center gap-14`}
			>
				{/* heading */}
				<div className='flex flex-col gap-6 text-center mb-5'>
					<Heading text={heading} />
					<div className='sm:mx-[80px]  md:mx-[250px] lg:mx-[350px]'>
						<H2Header text={title} />
					</div>
                </div>
                
				<div className='grid gap-6 sm:grid-cols-2 mdd:grid-cols-3 grid-cols-1'>
					{values.map((value) => (
						<ValueBox
							key={value.title}
							title={value.title}
							paragraph={value.paragraph}
							iconBgColor={value.color}
							iconComponent={<value.icon className='text-[28px]' />}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurValues;

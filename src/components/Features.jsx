import { ourFeatures } from "../constants";
import { styles } from "../style";
import { FeatureBox } from "./Box";
import { H2Header, Heading } from "./Texts";
import Reveal from "./animation/Reveal";

const Features = () => {
	const { text, title, features } = ourFeatures;
	return (
		<section id='features' className='bg-paragraph2'>
			<div
				className={`mx-auto flex flex-col items-center ${styles.boxWidth} gap-8`}
			>
				{/* heading */}
				<div className='flex flex-col gap-6 text-center'>
					<Reveal>
						<Heading text={text} />
					</Reveal>
					<div className='sm:mx-[80px]  md:mx-[250px] lg:mx-[350px]'>
						<Reveal>
							<H2Header text={title} />
						</Reveal>
					</div>
				</div>

				{/* content */}


				<div className='grid grid-cols-1 gap-8 ss:grid-cols-2 sm:grid-cols-3'>
					{features.map((feature) => (
						<Reveal key={feature.id}>
							<FeatureBox
								heading={feature.title}
								iconComponent={<feature.icon className='h-auto w-[32px]' />}
								paragraph={feature.info}
							/>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;

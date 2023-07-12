import { ourFeatures } from "../constants";
import { styles } from "../style";
import { FeatureBox } from "./Box";
import { H2Header, Heading } from "./Texts";

const Features = () => {
	const {text, title, features} = ourFeatures;
	return (
		<section id="features" className="bg-paragraph2">
			<div className={`mx-auto flex flex-col items-center ${styles.boxWidth} gap-8`}>
				{/* heading */}
				<div className='flex flex-col gap-6 text-center'>
					<Heading text={text} />
					<div className='sm:mx-[80px]  md:mx-[250px] lg:mx-[350px]'>
						<H2Header text={title} />
					</div>
				</div>

				{/* content */}
				<div className='grid grid-cols-1 gap-8 ss:grid-cols-2 sm:grid-cols-3'>
					{features.map((feature) => (
						<FeatureBox
							key={feature.id}
							heading={feature.title}
							iconComponent={<feature.icon className='h-auto w-[32px]' />}
							paragraph={feature.info}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;

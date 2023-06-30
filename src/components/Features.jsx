import { ourFeatures } from "../constants";
import { H2Header, Heading } from "./Texts";

const Features = () => {
	const {text, title} = ourFeatures;
	return (
		<section className='flex items-center justify-center'>
			<div>
				<div className='mb-5 flex w-full shrink basis-auto flex-col gap-5 text-center'>
					<Heading text={text} />
					<div className='mb-[30px] sm:mx-[80px] sm:mb-[50px] lg:mx-[250px]'>
						<H2Header text={title} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;

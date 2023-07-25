import { pricingPlan } from "../constants";
import { H2Header, Heading } from "./Texts";
import Button from "./Button";
import { PricingBox } from "./Box";
import { styles } from "../style";
import Reveal from "./animation/Reveal";

const PricingPlan = () => {
	const { text, title, buttonText, pricing } = pricingPlan;

	return (
		<section>
			<div
				className={`${styles.boxWidth} mx-auto flex flex-col items-center gap-10 md:max-w-[1240px] md:px-8 lg:px-0 `}
			>
				<div className=' flex flex-col items-center gap-7 text-center'>
					<Reveal>
						<Heading text={text} />
					</Reveal>
					<div className=' sm:mx-[80px] md:mx-[250px] lg:mx-[350px]'>
						<Reveal>
							<H2Header text={title} />
						</Reveal>
					</div>
				</div>

				<div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
					{pricing.map((price) => (
						<Reveal key={price.id}>
							<PricingBox
								amount={price.amount}
								name={price.name}
								description={price.description}
								per={price.per}
								list={price.list}
								listTitle={price.listTitle}
								buttonText={price.buttonText}
								bgColor={price.bgColor}
							/>
						</Reveal>
					))}
				</div>
				<div className='mt-10'>
					<Reveal>
						<Button
							text={buttonText}
							bgColor={"bg-black"}
							textColor={"text-white"}
							link={"/contact"}
						/>
					</Reveal>
				</div>
			</div>
		</section>
	);
};

export default PricingPlan;

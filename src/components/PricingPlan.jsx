import { pricingPlan } from "../constants";
import { H2Header, Heading } from "./Texts";
import Button from "./Button";
import { PricingBox } from "./Box";
import { styles } from "../style";

const PricingPlan = () => {
	const { text, title, buttonText, pricing } = pricingPlan;

	return (
		<section>
			<div
				className={`${styles.boxWidth} mx-auto flex flex-col items-center gap-10 md:max-w-[1240px] md:px-8 lg:px-0 `}
			>
				<div className=' flex flex-col items-center gap-7 text-center'>
					<Heading text={text} />
					<div className=' sm:mx-[80px] md:mx-[250px] lg:mx-[350px]'>
						<H2Header text={title} />
					</div>
				</div>

				<div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
					{pricing.map((price) => (
						<PricingBox
							key={price.id}
							amount={price.amount}
							name={price.name}
							description={price.description}
							per={price.per}
							list={price.list}
							listTitle={price.listTitle}
							buttonText={price.buttonText}
							bgColor={price.bgColor}
						/>
					))}
				</div>
				<div className='mt-10'>
					<Button
						text={buttonText}
						bgColor={"bg-black"}
						textColor={"text-white"}
						link={"/contact"}
					/>
				</div>
			</div>
		</section>
	);
};

export default PricingPlan;

import { useState } from "react";
import { testimonials } from "../constants";
import { TestimonialsBox } from "./Box";
import { H2Header, Heading } from "./Texts";
import { styles } from "../style";
import Reveal from "./animation/Reveal";

const Testimonials = () => {
	const { text, title, reviews } = testimonials;
	const [showAll, setShowAll] = useState(false);

	const renderedReviews = showAll ? reviews : reviews.slice(0, 3);

	const handleShowAll = () => {
		// setShowAll(true);
		setShowAll(!showAll);
	};

	return (
		<section id='testimonials'>
			<div
				className={`${styles.boxWidth} mx-auto ${styles.flexCenter} flex-col gap-8`}
			>
				<div className=' flex shrink basis-auto flex-col items-center gap-5 text-center'>
					<Reveal>
						<Heading text={text} />
					</Reveal>
					<div className='sm:mx-[80px] md:mx-[250px] lg:mx-[350px] '>
						<Reveal>
							<H2Header text={title} />
						</Reveal>
					</div>
				</div>
				{/* this is the rendered iews */}
				<div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
					{renderedReviews.map((review) => (
						<Reveal key={review.id}>
							<TestimonialsBox
								image={review.image}
								clientName={review.name}
								occupation={review.occupation}
								message={review.message}
							/>
						</Reveal>
					))}
				</div>
				<Reveal>
					<button
						onClick={handleShowAll}
						className='ease inline-block cursor-pointer rounded-[5px] border-[0.6px] border-black bg-black px-10 py-[12px] text-sm font-[500] text-white duration-200 hover:bg-primary hover:text-black'
					>
						{showAll ? "View Less" : "View More"}
					</button>
				</Reveal>
			</div>
		</section>
	);
};

export default Testimonials;

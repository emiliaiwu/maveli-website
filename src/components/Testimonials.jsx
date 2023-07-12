import { useState } from "react";
import { testimonials } from "../constants";
import { TestimonialsBox } from "./Box";
import { H2Header, Heading } from "./Texts";

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
			<div className='flex flex-col items-center gap-10 md:max-w-[1240px] md:px-8 lg:px-0'>
				<div className=' flex shrink basis-auto flex-col items-center gap-5 text-center'>
					<Heading text={text} />
					<div className='sm:mx-[80px] md:mx-[250px] lg:mx-[350px] '>
						<H2Header text={title} />
					</div>
				</div>
				<div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
					{renderedReviews.map((review) => (
						<TestimonialsBox
							key={review.id}
							image={review.image}
							clientName={review.name}
							occupation={review.occupation}
							message={review.message}
						/>
					))}
				</div>

				<button
					onClick={handleShowAll}
					className='font-[500] ease inline-block rounded-[5px] border-[0.6px] border-black bg-black px-10 py-[12px] text-sm text-white duration-200 hover:bg-primary hover:text-black cursor-pointer'
				>
					{showAll ? "Cancel" : "View All"}
				</button>
			</div>
		</section>
	);
};

export default Testimonials;

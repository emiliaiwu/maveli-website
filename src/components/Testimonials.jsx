import { testimonials } from "../constants";
import { TestimonialsBox } from "./Box";
import { H2Header, Heading } from "./Texts";

const Testimonials = () => {
	const { text, title, reviews } = testimonials;

	return (
		<section className='flex items-center justify-center'>
			<div className='flex flex-col items-center gap-10 md:max-w-[1240px] md:px-8 lg:px-0'>
				<div className=' flex shrink basis-auto flex-col items-center gap-4 text-center'>
					<Heading text={text} />
					<div className='sm:mx-[80px] md:mx-[250px] lg:mx-[350px] '>
						<H2Header text={title} />
					</div>
				</div>
				<div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
					{reviews.map((review) => (
						<TestimonialsBox
							key={review.id}
							image={review.image}
							clientName={review.name}
							occupation={review.occupation}
							message={review.message}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;

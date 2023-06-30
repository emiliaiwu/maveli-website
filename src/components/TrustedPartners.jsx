import { trustedPartners } from "../constants";

const TrustedPartners = () => {
	const { heading, images } = trustedPartners;
	return (
		<section className='w-full py-8 '>
			<div className='overflow-hidden'>
				<p className='mb-12 text-center font-grotesk text-sm font-semibold uppercase leading-[25.2px] tracking-[4px] text-black px-5'>
					{heading}
				</p>

				<div className='logo-slide whitespace-nowrap'>
					{images.map((image, index) => (
						<div key={index} className='inline'>
							<img
								src={image}
								width='1000px'
								height='600px'
								className='mr-12 inline h-[60px] w-auto sm:mr-16 '
							/>
						</div>
					))}

					{images.map((image, index) => (
						<div key={index} className='inline'>
							<img
								src={image}
								width='1000px'
								height='600px'
								className='mr-12 inline h-[60px] w-auto sm:mr-16 '
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TrustedPartners;

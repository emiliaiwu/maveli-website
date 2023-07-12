import { trustedPartners } from "../constants";
import { styles } from "../style";

const TrustedPartners = () => {
	const { heading, images } = trustedPartners;
	return (
		<section id="trusted-partners">
			<div className={`${styles.boxWidth} overflow-hidden mx-auto`}>
				<p className='mb-12 text-center font-grotesk text-sm font-semibold uppercase leading-[25.2px] tracking-[4px] text-black px-5'>
					{heading}
				</p>

				<div className='logo-slide whitespace-nowrap opacity-50'>
					{images.map((image, index) => (
						<div key={index} className='inline'>
							<img
								src={image}
								width='1000px'
								height='600px'
								className='mr-12 inline h-[80px] w-auto sm:mr-16 '
							/>
						</div>
					))}

					{images.map((image, index) => (
						<div key={index} className='inline'>
							<img
								src={image}
								width='1000px'
								height='600px'
								className='mr-12 inline h-[80px] w-auto sm:mr-16 '
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TrustedPartners;

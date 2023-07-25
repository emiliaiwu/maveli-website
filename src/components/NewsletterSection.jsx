import { styles } from "../style";
import Newsletter from "./Newsletter";
import Reveal from "./animation/Reveal";

const NewsletterSection = () => {
	return (
		<section className='pt-0'>
			<div className={`${styles.boxWidth} mx-auto`}>
				<Reveal>
					<Newsletter />
				</Reveal>
			</div>
		</section>
	);
};

export default NewsletterSection;

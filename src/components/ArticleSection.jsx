import { articleSection } from "../constants";
import { Heading, H2Header, InfoTextCenter } from "./Texts";
import Button from "./Button";
import { styles } from "../style";
import Articles from "./Articles";
import Reveal from "./animation/Reveal";

const ArticleSection = () => {
	const { text, title, paragraph } = articleSection;

	return (
		<section>
			<div
				className={`${styles.boxWidth} mx-auto flex flex-col items-center justify-center gap-9`}
			>
				{/* heading */}
				<div className='flex flex-col items-center justify-center gap-5 text-center sm:px-24 md:px-80'>
					<Reveal>
						<Heading text={text} />
					</Reveal>
					<Reveal>
						{" "}
						<H2Header text={title} />
					</Reveal>
					<Reveal>
						<InfoTextCenter text={paragraph} />
					</Reveal>
				</div>

				{/* articles */}
				<Articles requestedAmount={3} />

				{/* button */}
				<div className='mt-5'>
					<Reveal>
						<Button
							link={"/blog"}
							textColor={"text-white"}
							text={"See Our Blog"}
							bgColor={"bg-black"}
						/>
					</Reveal>
				</div>
			</div>
		</section>
	);
};

export default ArticleSection;

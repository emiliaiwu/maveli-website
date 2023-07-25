import { articleSection } from "../../constants";
import { Heading, H2Header, InfoTextCenter } from "../Texts";
import Button from "../Button";
import { styles } from "../../style";
import Articles from "./Articles";

const ArticleSection = () => {
	const { text, title, paragraph } = articleSection;

	return (
		<section>
			<div
				className={`${styles.boxWidth} mx-auto flex flex-col items-center justify-center gap-9`}
			>
				{/* heading */}
				<div className='flex flex-col items-center justify-center gap-5 text-center sm:px-24 md:w-[70%]'>
					<Heading text={text} />
					<H2Header text={`Other ${title}`} />
					<InfoTextCenter text={paragraph} />
				</div>

				{/* articles */}
				<Articles requestedAmount={3} />

				{/* button */}
				<div className='mt-5'>
					<Button
						link={"/blog"}
						textColor={"text-white"}
						text={"See Our Blog"}
						bgColor={"bg-black"}
					/>
				</div>
			</div>
		</section>
	);
};

export default ArticleSection;

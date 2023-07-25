import { styles } from "../style";
import { achievements } from "../constants";
import { AchievementBox } from "./Box";
import Reveal from "./animation/Reveal";

const Achievements = () => {
	const { text, title, rating, asset } = achievements;

	return (
		<section className='achievements-bg-img relative z-[-2] my-[70px]'>
			<div
				className={`${styles.boxWidth}  mx-auto h-full ${styles.flexCenter} z-20 my-6 flex-col gap-12`}
			>
				{/* Heading */}
				<div className=' mb-5 flex w-full flex-col items-center justify-center gap-10 text-white'>
					<Reveal>
						<p className='text-center font-grotesk text-sm font-[500] uppercase tracking-[0.2rem] text-white'>
							{text}
						</p>
					</Reveal>
					<Reveal className='w-full text-center sm:w-1/2 '>
						<h3 className='text-center font-grotesk text-[35px] font-[500] leading-[45px] text-white md:text-[45px] md:leading-[60px]'>
							{title}
						</h3>
					</Reveal>
				</div>
				{/* Cards */}

				<div className='mb-6 grid w-full max-w-[600px] grid-cols-1 gap-6 sm:grid-cols-2 md:max-w-[800px]'>
					{rating.map((rates, index) => (
						<Reveal key={index}>
							<AchievementBox rate={rates[0]} appName={rates[1]} />
						</Reveal>
					))}
				</div>

				{/* assets */}
				<div className='grid w-full grid-cols-2 sm:grid-cols-4'>
					{asset.map((item, index) => (
						<Reveal
							key={index}
							className={`${styles.flexCenter} mb-16 w-full sm:mb-0`}
						>
							<img
								src={item}
								className='inline-block w-1/2 max-w-full sm:w-[55%] mdd:w-[60%]'
							/>
						</Reveal>
					))}
				</div>
				<div className='absolute inset-0 z-[-1] bg-black opacity-50'></div>
			</div>
		</section>
	);
};

export default Achievements;

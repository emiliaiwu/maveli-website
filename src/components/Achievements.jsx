import { styles } from "../style";
import { achievements } from "../constants";
import { AchievementBox } from "./Box";

const Achievements = () => {
	const { text, title, rating, asset } = achievements;

	return (
		<section className='achievements-bg-img relative z-[-2] my-[70px]'>
			<div
				className={`${styles.boxWidth}  mx-auto h-full ${styles.flexCenter} z-20 my-6 flex-col gap-12`}
			>
				{/* Heading */}
				<div className=' mb-5 flex w-full flex-col items-center justify-center gap-10 text-white'>
					<p className='text-center font-grotesk text-sm font-[500] uppercase tracking-[0.2rem] text-white'>
						{text}
					</p>

					<h3 className='sm:w-1/2 text-center font-grotesk text-[35px] font-[500] leading-[45px] text-white md:text-[45px] md:leading-[60px]'>
						{title}
					</h3>
				</div>
				{/* Cards */}

				<div className='mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[600px] md:max-w-[800px] w-full'>
					{rating.map((rates, index) => (
						<AchievementBox key={index} rate={rates[0]} appName={rates[1]} />
					))}
				</div>

				{/* assets */}
				<div className='grid w-full grid-cols-2 sm:grid-cols-4'>
					{asset.map((item, index) => (
						<div
							key={index}
							className={`${styles.flexCenter} mb-16 w-full sm:mb-0`}
						>
							<img
								src={item}
								className='inline-block w-1/2 max-w-full sm:w-[55%] mdd:w-[60%]'
							/>
						</div>
					))}
				</div>
				<div className='absolute inset-0 z-[-1] bg-black opacity-50'></div>
			</div>
		</section>
	);
};

export default Achievements;

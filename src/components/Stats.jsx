const Stats = () => {
	const StatsData = [
		["140", "K+", "Active Users"],
		["12", "K+", "Total Downloads"],
		["99.5", "%", "Positive Feedback"],
		["$", "12", "M+", "Total Transaction"],
	];

	return (
		<section className='px-[100px] py-5 sm:px-0 sm:py-8 md:py-[50px] flex justify-center items-center'>
			<div className='flex w-full flex-col items-center sm:flex-row'>
				{StatsData.map(
					(stat, index) =>
						index !== StatsData.length - 1 && (
							<div key={index} className='w-full'>
								<div className='border-b border-black py-10 text-center sm:border-b-0 sm:border-r sm:py-0'>
									<div className='font-grotesk text-[35px] font-medium text-black sm:text-[38px] md:text-[48px]'>
										<span>{stat[0]}</span> {stat[1]}
									</div>
									<h3 className='font-DMSans text-sm text-paragraph'>
										{stat[2]}
									</h3>
								</div>
							</div>
						)
				)}

				{StatsData.map(
					(stat, index) =>
						index === StatsData.length - 1 && (
							<div key={index} className='w-full'>
								<div className='border-b border-black py-10 text-center sm:border-b-0 sm:border-r sm:py-0'>
									<div className='font-grotesk text-[35px] font-medium text-black sm:text-[38px] md:text-[48px]'>
										{" "}
										{stat[0]} <span>{stat[1]}</span> {stat[2]}
									</div>
									<h3 className='font-DMSans text-sm text-paragraph'>
										{stat[3]}
									</h3>
								</div>
							</div>
						)
				)}
			</div>
		</section>
	);
};

export default Stats;

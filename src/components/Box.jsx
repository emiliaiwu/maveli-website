export function AboutBox({
	width,
	bgColor,
	iconColor,
	iconBgColor,
	fontColor,
	headerText,
	paragraphText,
    iconComponent,
    borderColor
}) {
	return (
		<div className='mb-5 flex w-full'>
			<div
				className={`${width} ${bgColor} flex flex-wrap items-start rounded-[5px] border border-solid ${borderColor} p-[30px] shadow-box shadow-black`}
			>
				<div className='flex flex-col items-start'>
					<div className='mb-[12px] text-left'>
						<span
							className={`rounded-full bg-black ${iconBgColor} flex items-center justify-center p-[10px]`}
						>
							{/* <FaChrome className={`text-xl ${iconColor}`} /> */}
							{iconComponent}
						</span>
					</div>
					<div className='text-left'>
						<h3
							className={`${fontColor} text-lg mb-[6px] font-grotesk font-medium`}
						>
							<span className='text-lg'>{headerText}</span>
						</h3>
						<p
							className={`${fontColor} border-none pr-2 font-DMSans text-[14px] leading-[25px]`}
						>
							{paragraphText}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

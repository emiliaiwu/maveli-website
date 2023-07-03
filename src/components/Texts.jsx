export function Heading({ text }) {
	return (
		<div>
			<p className='font-grotesk text-sm font-semibold uppercase tracking-[0.2rem] text-headingColor'>
				{text}
			</p>
		</div>
	);
}

export function InfoText({ text }) {
	return (
		<div className='px-1 xs:mr-[80px] sm:mr-[50px] md:mr-[150px]'>
			<p className='mb-3 text-left font-DMSans text-sm leading-[25.5px] text-paragraph md:text-[15px] md:leading-[27px]'>
				{text}
			</p>
		</div>
	);
}

export function InfoTextCenter({ text }) {
	return (
		<div className='px-1'>
			<p className='mb-3 font-DMSans text-sm leading-[25.5px] text-paragraph md:text-[15px] md:leading-[27px]'>
				{text}
			</p>
		</div>
	);
}

export function H2Header({ text }) {
	return (
		
			<h2 className='font-grotesk text-[36px] font-medium leading-[45.5px] text-black sm:text-[38px] sm:leading-[50px] md:text-[45px] md:leading-[58.5px]'>
				{text}
			</h2>
	
	);
}

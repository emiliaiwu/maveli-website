import { BsArrowRight, FiCheck } from "../constants";
import { Link } from "react-router-dom";
import { pricingPlan } from "../constants";
import Button from "./Button";

// AboutBox
export function AboutBox({
	width,
	bgColor,
	iconColor,
	iconBgColor,
	fontColor,
	headerText,
	paragraphText,
	iconComponent,
	borderColor,
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
							className={`${fontColor} mb-[6px] font-grotesk text-lg font-medium`}
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

// FeatureBox
export function FeatureBox({ iconComponent, heading, paragraph }) {
	return (
		<div className='flex w-full justify-center'>
			<div className='ease w-full max-w-md rounded-[8px] border border-black shadow-box duration-300 hover:bg-primary'>
				<div className='sm:p-30px flex flex-col gap-5 px-[30px] py-10 md:p-10'>
					<div className='flex items-center font-grotesk text-[16px] font-medium text-black sm:text-[17px] md:text-[19px]'>
						<span className='mr-3 inline-block'>
							{/* <LuShieldCheck className='w-[32px] h-auto' /> */}
							{iconComponent}
						</span>
						{heading}
					</div>

					<p className='border-none pr-3 font-DMSans text-[15px] leading-[25px] text-paragraph'>
						{paragraph}
					</p>

					<div className='group'>
						<Link className='align-middle font-grotesk text-sm font-medium text-black'>
							<span>Learn More</span>{" "}
							<BsArrowRight className='inline-block transition-transform ml-1 duration-200 group-hover:translate-x-1 ' />{" "}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

// Pricing BOX
export function PricingBox({ bgColor, amount, name, per, description,listTitle, list, buttonText }) {
	

	return (
		<div className='w-full'>
			<div
				className={`${bgColor} flex flex-col gap-5 rounded-[8px] border border-black px-10 py-[50px] shadow-box shadow-black`}
			>
				<div className='inline-block'>
					<p className='mr-2 inline-block font-grotesk text-4xl font-medium text-black'>
						{amount}
					</p>
					<span className='font-grotesk text-sm font-medium text-paragraph '>
						{per}
					</span>
				</div>
				<div className=''>
					<h3 className='mb-1 font-grotesk text-xl font-medium'>
						{name}
					</h3>
					<p className='font-DMSans text-sm leading-[25px] text-paragraph'>
						{description}
					</p>
				</div>
				<div className='my-2 h-[0.6px] w-full bg-black'></div>
				<div>
					<h6 className='mb-3 font-grotesk text-sm font-medium text-black'>
						{listTitle}
					</h6>
					<ul>
						{list.map((item, index) => (
							<li
								key={index}
								className='mb-4 font-DMSans text-sm text-paragraph'
							>
								<FiCheck className='mr-2 inline-block text-xl text-black' />{" "}
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className='mt-2 flex sm:flex-col justify-center'>
					<Button
						text={buttonText}
						bgColor={"bg-black"}
						textColor={"text-white"}
						link={"/"}
					/>
				</div>
			</div>
		</div>
	);
}


export function TestimonialsBox({image, clientName, occupation, message}) {
	return (
		<div className='w-full rounded-[8px] border-[0.6px] border-black px-10 py-12 shadow-box'>
			<div className='flex items-center gap-5'>
				<div className='h-[70px] w-[70px] overflow-hidden rounded-full'>
					<img src={image} className='h-full w-full' />
				</div>
				<div>
					<p className='font-grotesk text-[16px] font-medium text-black'>
						{clientName}
					</p>
					<p className='font-grotesk text-sm font-medium text-paragraph'>
						{occupation}
					</p>
				</div>
			</div>
			<div className='mt-[20px] font-DMSans text-lg leading-[32px] text-paragraph'>
				<p>{message}</p>
			</div>
		</div>
	);
}

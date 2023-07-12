import {
	BsArrowRight,
	FiCheck,
	FaCircle,
	BsStarFill,
	BsStarHalf,
	FaFacebookF,
	FaInstagram,
	FaTwitter,
} from "../constants";
import { Link } from "react-router-dom";
import Button from "./Button";
import { styles } from "../style";
import { collage2 } from "../assets";

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
						<Link
							className='align-middle font-grotesk text-sm font-medium text-black'
							to={"/"}
						>
							<span>Learn More</span>{" "}
							<BsArrowRight className='ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1 ' />{" "}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

// Pricing BOX
export function PricingBox({
	bgColor,
	amount,
	name,
	per,
	description,
	listTitle,
	list,
	buttonText,
}) {
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
					<h3 className='mb-1 font-grotesk text-xl font-medium'>{name}</h3>
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
				<div className='mt-2 flex justify-center sm:flex-col'>
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

// Testimonial Box
export function TestimonialsBox({ image, clientName, occupation, message }) {
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

// Article Box
export function ArticleBox({ link, id, title, date, category, image }) {
	return (
		<div className='w-full'>
			<div className='w-full overflow-hidden rounded-[8px]  border-[0.6px] border-black bg-white shadow-box'>
				<div className='w-full'>
					<img src={image} alt='blogpost image' className='w-full' />
				</div>
				<div className='flex flex-col items-start justify-between gap-5 p-[25px]'>
					<div className='flex items-center justify-start gap-3 font-grotesk text-sm font-semibold text-paragraph mdd:text-[15px]'>
						<span>{date}</span>
						<span>
							<FaCircle size={8} className='text-black' />
						</span>
						<span className='ease duration-200 hover:text-black'>
							<Link>{category}</Link>
						</span>
					</div>
					<div>
						<h2 className='ease pr-4 font-grotesk text-lg font-semibold text-black duration-200 hover:opacity-50 mdd:text-[19px] lg:text-[22px]'>
							<Link to={link}>{title}</Link>
						</h2>
					</div>
					<Button
						link={link}
						text='Read More'
						bgColor={"bg-black"}
						textColor={"text-white"}
					/>
				</div>
			</div>
		</div>
	);
}

// Values Box
export function ValueBox({ iconComponent, title, paragraph, iconBgColor }) {
	return (
		<div className='flex w-full justify-center'>
			<div className='border-rounded bg-white px-8 py-10 shadow-box'>
				<div className='flex flex-col items-center gap-4'>
					<div
						className={`${styles.flexCenter} h-[56px] w-[56px] rounded-full ${iconBgColor}`}
					>
						{iconComponent}
					</div>
					<div>
						<h3 className='font-grotesk text-[21px] font-[500] text-black sm:text-[22px] md:text-[25px]'>
							{title}
						</h3>
					</div>
					<div>
						<p className='text-center font-DMSans text-sm font-normal leading-[25px] text-paragraph'>
							{paragraph}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

// Achievement Box
export function AchievementBox({ rate, appName }) {
	const starIcons = [
		{ icon: BsStarFill },
		{ icon: BsStarFill },
		{ icon: BsStarFill },
		{ icon: BsStarFill },
		{ icon: BsStarHalf },
	];

	return (
		<div className='w-full'>
			<div className='border-rounded flex flex-col items-center gap-5 bg-white px-12 py-10 shadow-box'>
				<div className='font-grotesk text-[35px] font-[500] text-black sm:text-[38px] md:text-[45px]'>
					{rate}
				</div>
				<div className='flex gap-2'>
					{starIcons.map((star, index) => (
						<span key={index}>
							{<star.icon className='text-[12px] text-[#FFC42E]' />}
						</span>
					))}
				</div>
				<div className='font-grotesk text-[21px] font-[500] text-paragraph sm:text-[22px] md:text-[25px]'>
					{appName}
				</div>
			</div>
		</div>
	);
}

// TeamsBox
export function TeamsBox({
	image,
	socials,
	teamMemberName,
	teamMemberPosition,
}) {
	return (
		<div className='mt-4 w-full'>
			<div className='  border-rounded  group  relative mb-4 w-full overflow-hidden bg-white shadow-box'>
				<img
					src={image}
					className='aspect-[800/1000] h-auto w-full object-cover'
					width='800px'
					height='1000px'
					alt='team members'
					loading='lazy'
				/>

				<div className='ease absolute bottom-0 left-0 right-0 flex h-0 items-center justify-center bg-black bg-opacity-80 opacity-0 duration-300 group-hover:h-full group-hover:opacity-100'>
					<div className='flex items-center justify-center gap-2'>
						{socials.map((social) => (
							<Link
								to={social.url}
								target='_blank'
								rel='noopener noreferrer'
								key={social.name}
								className='ease flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-white text-sm text-black duration-200 hover:bg-primary'
							>
								{<social.icon className='text-lg' />}
							</Link>
						))}
					</div>
				</div>
			</div>
			<div className='w-full text-center'>
				<h4 className='mb-1 font-grotesk text-lg font-[500] text-black sm:text-[19px] md:text-[21px]'>
					{teamMemberName}
				</h4>
				<p className='font-DMSans text-sm font-[500] text-paragraph lg:text-[15px]'>
					{teamMemberPosition}
				</p>
			</div>
		</div>
	);
}

// Office Box
export function OfficeBox({ image, stateName, address, showMap, url }) {
	return (
		<div className='w-full'>
			<div className='border-rounded w-full overflow-hidden shadow-box mb-7'>
				<div className='w-full'>
					<img
						src={image}
						alt='office images'
						loading='lazy'
						className='aspect-auto h-full w-full object-cover'
					/>
				</div>
			</div>

			<div>
				<h4 className='font-grotesk text-lg font-[500] text-black sm:text-[19px] md:text-[21px] mb-2'>
					{stateName}
				</h4>
				<p className='font-DMSans text-[14.5px] text-paragraph md:text-[15px] '>
					{address}
				</p>
				<button className='font-grotesk text-[15px] font-[500] text-black mt-5 hover:opacity-50 duration-200 ease cursor-pointer' onClick={() => showMap(url)}>
					Visit Office{" "}
					<span>
						<BsArrowRight className='ml-1 inline-block' />{" "}
					</span>
				</button>
			</div>
		</div>
	);
}

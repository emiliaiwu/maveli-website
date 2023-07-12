import Logo from "./Logo";

import { footer } from "../constants";
import { Link } from "react-router-dom";
import { styles } from "../style";
import Socials from "./Socials";

const Footer = () => {
	const { contact, address, explore, support, download } = footer;

	return (
		<section className=' relative bg-black'>
			<div className={`${styles.boxWidth} mx-auto text-white`}>
				<div className='px-8 '>
					<div className='mb-10 flex w-full flex-col justify-between gap-14 md:flex-row'>
						{/* Logo and socials */}
						<div className='flex w-full flex-col items-center gap-6 md:w-[40%] md:items-start'>
							<Logo
								height={"h-[2.5rem]"}
								width='h-[2.5rem]'
								textSize={"text-3xl sm:text-4xl"}
							/>
							<p className='font-DMSans text-sm leading-[25px] text-paragraph2'>
								Lorem ipsum dolor sit amet, <br /> consec tetur adipiscing elit.
							</p>

							{/* socials */}
							<Socials className={"h-8 w-8 bg-white text-sm text-black"} />
						</div>

						{/* content */}
						<div className='mb-10 flex w-full flex-col justify-between gap-10 sm:flex-row'>
							<div className='flex flex-col gap-7'>
								<div>
									<h3 className='mb-4 font-grotesk text-xl font-semibold'>
										{contact.heading}
									</h3>
									<ul className='font-DMSans text-sm text-paragraph2'>
										<li className='mb-3'>{contact.number}</li>
										<li>{contact.email}</li>
									</ul>
								</div>
								<div>
									<h3 className='mb-4 font-grotesk text-xl font-semibold'>
										{address.heading}
									</h3>
									<ul className='font-DMSans text-sm text-paragraph2'>
										<li className='mb-3'>{address.ourAddress}</li>
										<li>{address.time}</li>
									</ul>
								</div>
							</div>
							{/* explore */}
							<div>
								<h3 className='mb-4 font-grotesk text-xl font-semibold '>
									Explore
								</h3>
								<ul>
									{explore.map((item) => (
										<li
											key={item.id}
											className='ease mb-3 font-DMSans text-sm text-paragraph2 duration-200 hover:translate-x-2 md:text-base'
										>
											<Link to={`/${item.id}`}>{item.title}</Link>
										</li>
									))}
								</ul>
							</div>

							<div>
								<h3 className='mb-4 font-grotesk text-xl font-semibold '>
									Support
								</h3>
								<ul>
									{support.map((item) => (
										<li
											key={item.id}
											className='ease mb-3 font-DMSans text-sm text-paragraph2 duration-200 hover:translate-x-2 md:text-base'
										>
											<Link to={`/${item.id}`}>{item.title}</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>

					<div className='flex flex-col items-center justify-center gap-6 text-center'>
						<h2 className='font-grotesk text-2xl font-semibold text-white'>
							Download Maveli
						</h2>
						<p className='mb-3 font-DMSans text-base leading-7 text-paragraph2'>
							Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Ut
							elit tellus, luctus nec.
						</p>
						<div className='flex flex-wrap items-center justify-center gap-4'>
							<img
								src={download[0]}
								alt='Apple Store'
								className='ease h-auto w-[140px] cursor-pointer rounded-[5px] border-[0.6px] border-white duration-300 hover:translate-y-[-0.5rem] md:w-[160px]'
							/>
							<img
								src={download[1]}
								alt='Play Store'
								className='ease h-auto w-[140px] cursor-pointer rounded-[5px] border-[0.6px] border-white duration-300 hover:translate-y-[-0.5rem]   md:w-[160px]'
							/>
						</div>
					</div>
				</div>

				<div className='absolute bottom-[-4rem] left-0 right-0 flex flex-col-reverse items-center justify-between gap-4 border-t-[0.6px] border-paragraph bg-black px-8 py-6 sm:flex-row'>
					<div>
						<span className='font-grotesk text-sm font-semibold text-white'>
							Copyright © 2023{" "}
							<span className='ease duration-200 hover:text-primary'>
								<Link to={"https://emiliaiwu.io"}>Emilia Iwu Projects</Link>
							</span>
						</span>
					</div>
					<div className='font-grotesk text-sm font-semibold text-white'>
						<Link className='mr-5'>Private Policy</Link>
						<Link>Term & Services</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;

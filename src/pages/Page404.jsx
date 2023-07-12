import errorImage from "../assets/errorimage.jpg";
import { Button } from "../components";

const Page404 = () => {
	return (
		<section className="flex justify-center items-center">
			<div className='flex flex-col items-center justify-center gap-4 mdd:flex-row md:max-w-[1240px]'>
				<div className='w-full mdd:w-[60%]'>
					<img
						src={errorImage}
						alt='404 image'
						className='w-full object-cover'
					/>
				</div>
				<div className='flex w-full flex-col items-center justify-center gap-6 px-4 text-center mdd:w-[40%]'>
					<h2 className='font-grotesk text-4xl md:text-[45px] font-bold text-black leading-[50px]'>
						Oh no! the <br/> page... is gone!
					</h2>
					<p className='font-DMSans text-base text-paragraph mb-4 leading-7'>
						Sorry, this page does not exist. <br/> Please go back to homepage
					</p>
					<Button
						link={"/"}
						bgColor={"bg-black"}
						textColor={"text-white"}
						text={"Home"}
					/>
				</div>
			</div>
		</section>
	);
};

export default Page404;

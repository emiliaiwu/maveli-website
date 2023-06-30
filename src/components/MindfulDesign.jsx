import { mindfulDesign } from "../constants";
import { Heading, H2Header, InfoText } from "./Texts";

export const MindfulDesign = () => {
	const { text, title, paragraph, downloadImg, image } = mindfulDesign;
	return (
		<section className="flex justify-center items-center">
			<div className='w-full justify-between gap-4 sm:flex md:max-w-[1240px]'>
				<div className='flex w-full flex-col justify-center sm:w-[50%]'>
					<div className='mb-5 flex w-full shrink basis-auto flex-col gap-5'>
						<Heading text={text} />
						<H2Header text={title} />
						<InfoText text={paragraph} />
					</div>
					<div className='mb-[50px] flex flex-wrap gap-4'>
						<img
							src={downloadImg[0]}
							alt='Apple Store'
							className='h-auto w-[140px] md:w-[160px]'
						/>
						<img
							src={downloadImg[1]}
							alt='Play Store'
							className='h-auto w-[140px] md:w-[160px]'
						/>
					</div>
				</div>

				<div className='flex w-full sm:w-1/2'>
					<div className='my-[30px] flex w-full items-center justify-center rounded-[10px] border-[0.6px] border-black bg-tertiary px-5 sm:my-0 sm:px-10 sm:py-0'>
						<div className='my-[-30px] sm:my-[-55px] '>
							<img src={image} className='h-auto w-auto' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

import image404 from "../assets/404_Asset-7.png";
import { Heading, H2Header, InfoTextCenter } from "../components/Texts";
import { Button } from "../components";

const Page404 = () => {
	return (
		<section className="h-screen">
			<div className='mx-auto min-h-[73vh] max-w-[1000px] flex justify-center items-center'>
				<div className='mx-auto flex max-w-[500px] flex-col items-center justify-center gap-5 text-center'>
					<Heading text={"ERROR PAGE"} />
					<div className='max-w-[400px]'>
						<div className="h-[323]">
							<img
								src={image404}
								alt='error image'
								className='w-full'
								width='800'
								height='323'
							/>
						</div>
					</div>
					<H2Header text={"Oops, page not found!"} />
					<InfoTextCenter
						text={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,  leo."
						}
					/>
					<Button
						text='Back to Homepage'
						textColor={"text-white"}
						bgColor={"bg-black"}
						link={"/"}
					/>
				</div>
			</div>
		</section>
	);
};

export default Page404;

import { FaCircle } from "../constants";
import {Link} from "react-router-dom"
import { styles } from "../style";
import Reveal from "./animation/Reveal";

const PageHeader = ({title, location}) => {
    return (
			<section id='page-header' className='pb-5 pt-0'>
				<div
					className={`${styles.boxWidth} mx-auto ${styles.flexCenter} flex-col gap-3 border-b-[0.6px] border-black py-8 sm:py-12 mdd:py-16`}
				>
					<Reveal>
						<h1 className='font-grotesk text-[35px] font-[500] capitalize text-black sm:text-[38px] md:text-[45px]'>
							{title}
						</h1>
					</Reveal>

					<Reveal>
						<div className='flex items-center gap-3 font-DMSans text-sm font-[500] text-paragraph'>
							<span className='ease duration-200 hover:text-black'>
								<Link to='/'>Home</Link>
							</span>
							<span>
								<FaCircle size={8} className='text-black' />
							</span>
							<span className='ease capitalize duration-200 hover:text-black'>
								{location}
							</span>
						</div>
					</Reveal>
				</div>
			</section>
		);
}

export default PageHeader
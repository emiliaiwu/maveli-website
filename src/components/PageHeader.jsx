import { FaCircle } from "../constants";
import {Link} from "react-router-dom"
import { styles } from "../style";

const PageHeader = ({title, location}) => {
    return (
			<section id='page-header' className='pt-0 pb-5'>
				<div
					className={`${styles.boxWidth} mx-auto ${styles.flexCenter} flex-col gap-3 border-b-[0.6px] border-black mdd:py-16 py-8 sm:py-12`}
				>
					<div>
						<h1 className='font-grotesk text-[35px] font-[500] text-black sm:text-[38px] md:text-[45px] capitalize'>
							{title}
						</h1>
					</div>
					<div className='flex items-center gap-3 font-DMSans text-sm font-[500] text-paragraph'>
						<span className='ease duration-200 hover:text-black'>
							<Link to='/'>Home</Link>
						</span>
						<span>
							<FaCircle size={8} className='text-black' />
						</span>
						<span className='ease duration-200 hover:text-black capitalize'>
						{location}
						</span>
					</div>
				</div>
			</section>
		);
}

export default PageHeader
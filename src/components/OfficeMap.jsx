import { styles } from "../style";

const OfficeMap = ({ url }) => {
	return (
		<div className={`${styles.boxWidth} ${styles.flexCenter}`}>
			<div
				className='border-rounded w-full overflow-hidden shadow-box md:w-[70%]'
				aria-label='map'
				aria-roledescription='map'
				role='region'
			>
				<iframe
					src={url}
                    allowfullscreen=''
                    height="450"
                    loading='lazy'
                    className="border-0 w-full"
				></iframe>
			</div>
		</div>
	);
};

export default OfficeMap;

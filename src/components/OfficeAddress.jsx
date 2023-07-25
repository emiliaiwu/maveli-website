import { Heading, H2Header } from "./Texts";
import { styles } from "../style";
import { ourOffice } from "../constants";
import { OfficeBox } from "./Box";
import OfficeMap from "./OfficeMap";
import { useState } from "react";
import { RxCross2 } from "../constants";
import Reveal from "./animation/Reveal";

const OfficeAddress = () => {
	const { heading, title, address } = ourOffice;
	const [mapLink, setMapLink] = useState("");
	const handleShowMap = (url) => {
		setMapLink(url);
	};

	const handleCloseMap = () => {
		setMapLink("");
	};

	return (
		<section className=''>
			<div
				className={`${styles.boxWidth} mx-auto ${styles.flexCenter} flex-col gap-6`}
			>
				{/* heading */}
				<div className='flex max-w-[500px] flex-col items-center justify-center gap-5 text-center md:max-w-[600px]'>
					<Reveal>
						<Heading text={heading} />
					</Reveal>
					<Reveal>
						<H2Header text={title} />
					</Reveal>
				</div>

				{/* office address */}
				<div className='mt-5 grid grid-cols-1 gap-5 ss:grid-cols-2 sm:grid-cols-3'>
					{address.map((office) => (
						<Reveal key={office.state}>
							<OfficeBox
								image={office.image}
								stateName={office.state}
								address={office.address}
								url={office.url}
								showMap={handleShowMap}
							/>
						</Reveal>
					))}
				</div>

				{mapLink && (
					<section
						className={`${styles.flexCenter} fixed inset-0 z-[99999] bg-black bg-opacity-50`}
					>
						<div className={`${styles.flexCenter} w-full`}>
							<OfficeMap url={mapLink} />
						</div>

						<button
							className='absolute right-6 top-4 z-20 cursor-pointer text-white'
							onClick={handleCloseMap}
						>
							<RxCross2 size={30} />
						</button>
					</section>
				)}

				{/* <OfficeMap url={url} /> */}
			</div>
		</section>
	);
};

export default OfficeAddress;

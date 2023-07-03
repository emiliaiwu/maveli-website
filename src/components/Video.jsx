import { RxCross2 } from "../constants"

const Video = ({ isOpen, closeModal }) => {
	return (
		<>
			{isOpen && (
				<div className='fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-80'>
					<div className='container relative mx-auto w-full max-w-3xl p-5 '>
						<div className=''>
							<iframe
								className='aspect-video w-full'
								src='https://www.youtube.com/embed/ScMzIvxBSi4'
								title='YouTube video player'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								allowFullScreen
							></iframe>
						</div>
					</div>
					<button
						className='absolute right-6 top-4 z-20 text-white'
						onClick={closeModal}
					>
                        <RxCross2 size={30}/>
					</button>
				</div>
			)}
		</>
	);
};

export default Video;

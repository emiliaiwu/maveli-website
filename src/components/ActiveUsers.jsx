import { heroDetails } from "../constants";
import Reveal from "./animation/Reveal";

const ActiveUsers = () => {
	const { ActiveUsersObj } = heroDetails;
	return (
		<div className='flex w-full items-center'>
			<Reveal>
				<div className='mr-10 flex'>
					{ActiveUsersObj.map((user, index) => (
						<div
							key={index}
							className='mr-[-15px] h-[50px] w-[50px] rounded-full '
						>
							<img
								src={user}
								alt='active users'
								className='h-[45px] w-[45px] rounded-full border-[0.6px] border-black object-contain shadow-circle shadow-black'
							/>
						</div>
					))}
				</div>
			</Reveal>
			<div className='flex flex-col items-start justify-center'>
				<Reveal>
					<div className='font-grotesk text-[21px] font-semibold leading-7'>
						<span className=''>140</span> K+
					</div>
				</Reveal>
				<Reveal>
					<h3 className='font-DMSans text-sm font-medium text-headingColor'>
						Active User
					</h3>
				</Reveal>
			</div>
		</div>
	);
};

export default ActiveUsers;

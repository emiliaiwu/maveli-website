import { heroDetails } from "../constants";

const ActiveUsers = () => {
	const { ActiveUsersObj } = heroDetails;
	return (
		<div className='flex w-full items-center'>
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
			<div className="flex flex-col justify-center items-start">
				<div className='font-grotesk text-[21px] font-semibold leading-7'>
					<span className=''>140</span> K+
				</div>
				<h3 className='font-DMSans text-sm text-headingColor font-medium'>Active User</h3>
			</div>
		</div>
	);
};

export default ActiveUsers;

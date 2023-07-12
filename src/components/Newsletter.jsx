import { useState } from "react";
import Button from "./Button";

const Newsletter = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setEmail("");
	};

	const handleChange = (e) => {
		setEmail(e.target.value);
	};

	return (
		<div className='flex w-full flex-col items-center justify-center gap-6 rounded-[8px] border-[0.6px] border-black bg-tertiary p-10 shadow-box md:flex-row md:justify-between md:gap-12 md:p-14'>
			<h2 className='text-center font-grotesk text-[21px] font-semibold text-black md:text-left md:text-[26px]'>
				Subscribe to our newsletter for latest update
			</h2>

			<form
				onSubmit={handleSubmit}
				className='w-full justify-center gap-3 text-center sm:flex '
			>
				<label className='w-full sm:w-[60%] mdd:w-[70%]  '>
					<input
						type='email'
						placeholder='Your Email'
						value={email}
						onChange={handleChange}
						className='w-full rounded-[7px] border-[0.6px] border-black bg-white px-5 py-[14px] font-DMSans text-[15px] outline-none '
					/>
				</label>
				<button
					type='submit'
					className='mdd:[180%] mt-6 cursor-pointer rounded-[7px] border-[0.6px] border-black bg-black px-12 py-[14px] text-center text-[15px] font-semibold text-white hover:bg-primary hover:text-black duration-200 ease sm:mt-0'
				>
					Subscribe
				</button>
			</form>
		</div>
	);
};

export default Newsletter;

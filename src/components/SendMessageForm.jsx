import { useState } from "react";

const SendMessageForm = () => {
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setEmail("");
		setFirstName("");
		setLastName("");
		setMessage("");
	};

	const handleChange = (e) => {
		setEmail(e.target.value);
		setFirstName(e.target.value);
		setLastName(e.target.value);
		setMessage(e.target.value);
	};

	return (
		<div className='border-rounded w-full bg-tertiary p-12 shadow-box'>
			<form
				onSubmit={handleSubmit}
				className='flex w-full flex-col gap-5 text-center'
			>
				<div className='flex w-full items-center justify-between gap-6 flex-col ss:flex-row'>
					<label className='w-full'>
						<input
							type='text'
							placeholder='First Name'
							value={firstName}
							onChange={handleChange}
							className='w-full rounded-[7px] border-[0.6px] border-black bg-white px-5 py-[14px] font-DMSans text-[15px] outline-none '
						/>
					</label>

					<label className='w-full'>
						<input
							type='text'
							placeholder='Last Name'
							value={lastName}
							onChange={handleChange}
							className='w-full rounded-[7px] border-[0.6px] border-black bg-white px-5 py-[14px] font-DMSans text-[15px] outline-none '
						/>
					</label>
				</div>
				<label>
					<input
						type='email'
						placeholder='Your Email'
						value={email}
						onChange={handleChange}
						className='w-full rounded-[7px] border-[0.6px] border-black bg-white px-5 py-[14px] font-DMSans text-[15px] outline-none '
					/>
				</label>
				<label>
					<textarea
						value={message}
						placeholder='Message'
						className='h-[140px] w-full rounded-[7px] border-[0.6px] border-black bg-white px-5 py-[14px] font-DMSans text-[15px] outline-none '
					/>
				</label>
				<div>
					<button
						type='submit'
						className='ease cursor-pointer rounded-[7px] border-[0.6px] border-black bg-black px-12 py-[14px] text-center text-[15px] font-semibold text-white duration-200 hover:bg-primary hover:text-black'
					>
						Send Message
					</button>
				</div>
			</form>
		</div>
	);
};

export default SendMessageForm;

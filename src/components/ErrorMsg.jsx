const ErrorMsg = ({ error }) => {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center bg-gray-100'>
			<h1 className='mb-4 font-grotesk text-4xl font-bold text-red-500'>
				Oops! {error}
			</h1>
			<p className='mb-8 font-DMSans text-lg text-gray-800'>
				An error occurred while loading the page.
			</p>
			<button className='ease rounded bg-red-500 px-10 py-3 font-DMSans text-white duration-200 hover:bg-red-600'>
				<a href='/'>Reload</a>
			</button>
		</div>
	);
};

export default ErrorMsg;

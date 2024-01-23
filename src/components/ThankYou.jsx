function ThankYou({ onSubmitted }) {
	return (
		<div className="flex flex-col items-center justify-center w-[350px] gap-7">
			<img src="./images/icon-complete.svg" alt="" />
			<h1 className="text-3xl tracking-widest uppercase from-neutral-veryDarkViolet">
				Thank you!
			</h1>
			<p className="text-neutral-darkGrayishViolet">
				We&apos;ve added your card details
			</p>
			<button
				type="submit"
				onClick={() => onSubmitted(false)}
				className="w-[90%] py-4 mt-6 rounded-lg text-neutral-lightGrayishViolet bg-neutral-veryDarkViolet"
			>
				Confirm
			</button>
		</div>
	);
}
export default ThankYou;

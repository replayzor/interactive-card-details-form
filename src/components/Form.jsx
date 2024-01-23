// library imports
import { useForm } from "react-hook-form";

function Form({ updateCardData, onSubmitted }) {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm();

	const onSubmit = async (data) => {
		await new Promise((resolve) => setTimeout(resolve, 2000));
		updateCardData({
			cardNumber: data.cardNumber,
			cardHolderName: data.name,
			expDate: `${data.month}/${data.year}`,
		});

		console.log(data);
		onSubmitted(true);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="px-6 md:flex md:flex-col md:items-center md:justify-center md:h-screen"
		>
			<div className="flex flex-col w-[320px]">
				<label className="uppercase pb-2 tracking-wider text-[16px]">
					Cardholder Name
				</label>
				<input
					className={`text-neutral-darkGrayishViolet  outline-none border-2 py-2 pl-4 text-[18px] rounded-lg ${
						errors.name ? "border-red-500" : "focus:border-purple-900"
					}`}
					placeholder="e.g. Jane Appleseed"
					{...register("name", { required: "Name is required" })}
				/>
				{errors.name && (
					<span className="pt-1 text-xs text-red-500">
						{errors.name.message}
					</span>
				)}
				<label className="uppercase pb-2 mt-4 tracking-wider text-[16px]">
					Card Number
				</label>
				<input
					className={`text-neutral-darkGrayishViolet  outline-none border-2 py-2 pl-4 text-[18px] rounded-lg ${
						errors.cardNumber ? "border-red-500" : "focus:border-purple-900"
					}`}
					placeholder="e.g. 1234 5678 9123 0000"
					{...register("cardNumber", {
						required: "Card number is required",
						pattern: {
							value: /^[0-9 ]*$/,
							message: "Wrong format, numbers only",
						},
					})}
				/>
				{errors.cardNumber && (
					<span className="pt-1 text-xs text-red-500">
						{errors.cardNumber.message}
					</span>
				)}
			</div>
			<div className="flex flex-col">
				<div className="flex gap-4 mt-4">
					<label className="uppercase pb-2 tracking-wider text-[16px]">
						Exp. Date (MM/YY)
					</label>
					<label className="uppercase pb-2 ml-4 tracking-wider text-[16px]">
						CVC
					</label>
				</div>
				<div className="flex flex-row gap-4">
					<div className="flex flex-col">
						<input
							className={`${
								errors.month ? "border-red-500" : "focus:border-purple-900"
							}  outline-none text-neutral-darkGrayishViolet w-[75px] border-2 py-2 pl-4 text-[18px] rounded-lg`}
							placeholder="mm"
							{...register("month", {
								required: "Can't be blank",
								pattern: {
									value: /^(0[1-9]|1[0-2])$/,
									message: "Enter a valid month (01-12)",
								},
							})}
						/>
						{errors.month && (
							<span className="pt-1 text-xs text-red-500">
								{errors.month.message}
							</span>
						)}
					</div>
					<div className="flex flex-col">
						<input
							className={`${
								errors.month ? "border-red-500" : "focus:border-purple-900"
							} outline-none text-neutral-darkGrayishViolet w-[75px] border-2 py-2 pl-4 text-[18px] rounded-lg`}
							placeholder="yy"
							{...register("year", {
								required: "Can't be blank",
								pattern: {
									value: /^[0-9]{2}$/,
									message: "Enter a valid 2-digit year",
								},
							})}
						/>
						{errors.year && (
							<span className="pt-1 text-xs text-red-500">
								{errors.year.message}
							</span>
						)}
					</div>
					<div className="flex flex-col">
						<input
							className={`${
								errors.month ? "border-red-500" : "focus:border-purple-900"
							} outline-none text-neutral-darkGrayishViolet w-[140px] border-2 py-2 pl-4 text-[18px] rounded-lg`}
							placeholder="e.g. 123"
							{...register("cvc", { required: "Can't be blank" })}
						/>
						{errors.cvc && (
							<span className="pt-1 text-xs text-red-500">
								{errors.cvc.message}
							</span>
						)}
					</div>
				</div>
			</div>
			<button
				disabled={isSubmitting}
				type="submit"
				className="w-[95%] py-4 mt-6 text-neutral-lightGrayishViolet rounded-lg bg-neutral-veryDarkViolet"
			>
				{isSubmitting ? "Loading..." : "Confirm"}
			</button>
		</form>
	);
}
export default Form;

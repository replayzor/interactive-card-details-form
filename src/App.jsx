// react imports
import { useState } from "react";

// library imports
import { useMediaQuery } from "react-responsive";

// components
import Footer from "./components/Footer";
import Form from "./components/Form";
import ThankYou from "./components/ThankYou";

function App() {
	const [submitted, setIsSubmitted] = useState(false);
	const [cardData, setCardData] = useState({
		cardNumber: "0000 0000 0000 0000",
		cardHolderName: "JANE APPLESEED",
		expDate: "00/00",
	});

	const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

	const updateCardData = (newData) => {
		setCardData(newData);
	};

	return (
		<main className="flex flex-col items-center justify-center w-full h-screen md:flex-row font-spaceGrotesk">
			<section className="w-full md:flex md:flex-row max-w-[400px] md:h-screen md:max-w-full">
				<div
					className={`relative md:w-[500px] ${
						isMobile
							? 'bg-[url("/images/bg-main-mobile.png")] bg-no-repeat'
							: 'bg-[url("/images/bg-main-desktop.png")] bg-no-repeat h-full md:w-[30%] bg-cover'
					}`}
				>
					<img
						src="/images/bg-card-back.png"
						alt=""
						className="md:h-auto md:top-[570px] md:left-[200px] relative top-8 left-[80px] h-[150px]"
					/>
					<p className="absolute md:mt-[570px] md:ml-[220px] text-xs font-medium text-white top-[98px] left-[290px]">
						000
					</p>
					<img
						src="/images/bg-card-front.png"
						alt=""
						className="md:h-auto md:top-[120px] md:left-[120px] relative -top-[33px] left-[30px] h-[150px] shadow-xl"
					/>
					<img
						src="/images/card-logo.svg"
						alt=""
						className="md:top-[360px] md:h-10 md:left-[150px] absolute h-8 top-[140px] left-12"
					/>
					<div className="md:top-[440px] md:w-[260px] md:ml-[120px] absolute top-[200px] left-12 text-white">
						<p className="text-[18px] md:text-xl tracking-widest">
							{cardData.cardNumber}
						</p>
						<div className="flex justify-between mt-4 text-xs md:mt-8">
							<span>{cardData.cardHolderName}</span>
							<span>{cardData.expDate}</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center mt-6 md:mt-0 md:w-full">
					{!submitted ? (
						<Form
							updateCardData={updateCardData}
							onSubmitted={setIsSubmitted}
						/>
					) : (
						<ThankYou onSubmitted={setIsSubmitted} />
					)}
					<Footer />
				</div>
			</section>
		</main>
	);
}

export default App;

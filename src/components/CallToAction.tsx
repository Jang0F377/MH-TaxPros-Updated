import { Container } from "./common/Container";

export function CallToAction() {
	return (
		<section
			id="get-started-today"
			className="relative overflow-hidden bg-blue-900  py-32"
		>
			<div
				aria-hidden="true"
				className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
			>
				<svg
					className="absolute inset-0 h-full w-full"
					preserveAspectRatio="xMidYMid slice"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 1463 360"
				>
					<path
						className="opacity-80"
						fill="currentColor"
						d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
					/>
					<path
						className="text-blue-500 opacity-70 "
						fill="currentColor"
						d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
					/>
				</svg>
			</div>
			<Container className="relative">
				<div className="mx-auto max-w-lg text-center">
					<h2 className="m-1 p-1 text-4xl  font-extrabold text-[#ECA72C] sm:text-6xl">
						<span className="block">$ $</span>
						<span className="block rotate-90 text-5xl sm:text-7xl">)</span>
					</h2>
					<h2 className="m-2 p-2 text-3xl font-extrabold text-blue-50 sm:text-4xl">
						<span className="block">
							Check on your refund status right here!
						</span>
					</h2>
					<div className="mt-8 flex justify-evenly">
						<div className="inline-flex rounded-md shadow">
							<a
								href="https://www.irs.gov/refunds"
								className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-700 px-2.5
                                        py-1.5 text-base font-semibold text-blue-50 hover:bg-blue-50 hover:text-blue-900
                                        hover:ring-1 hover:ring-blue-900 md:px-5 md:py-3 "
							>
								Check Refund Status
							</a>
						</div>
						<div className="ml-3 inline-flex">
							<a
								href="https://www.irs.gov/filing/wheres-my-amended-return"
								className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-700 px-2.5
                                        py-1.5 text-base font-semibold text-blue-50 hover:bg-blue-50 hover:text-blue-900
                                        hover:ring-1 hover:ring-blue-900 md:px-5 md:py-3"
							>
								Check Amended Status
							</a>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

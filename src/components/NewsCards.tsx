import { AnimatePresence, motion, useInView } from "framer-motion";
import { newsCards } from "../sharedData/newsCards";
import { useRef, useState } from "react";

function RecentNewsCards() {
	const [news] = useState(newsCards);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<>
			<div
				ref={ref}
				className=" mx-auto grid grid-cols-1 items-center md:grid-cols-2 lg:max-w-4xl  "
			>
				<AnimatePresence>
					{isInView &&
						news.map((x) => (
							<motion.div
								initial={{
									opacity: 0,
									transform: "perspective(600px) rotateX(0deg)",
									color: "#fff",
								}}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.25 }}
								className="mx-auto flex"
								key={x.id}
							>
								<div className="bg-money-green-complimentary lg: m-1.5 m-3 flex max-w-lg justify-center rounded-lg px-1.5 pb-1.5 md:my-2.5 ">
									<div className="flex flex-col text-center text-black ">
										<h1 className="mt-0.5 py-0.5 text-center text-lg font-medium">
											{x?.title}
										</h1>
										<img
											src={x?.image}
											alt={"IMG"}
											className="mx-auto mb-1 h-48 w-80"
										/>
										<p className="my-1  w-80 px-1 text-left text-sm">
											{x?.description}
										</p>

										<a
											href={x?.href}
											className="my-2 mx-16 flex items-center justify-center  rounded-md border border-blue-900 bg-blue-600 py-1 text-base font-medium text-white shadow-sm hover:bg-transparent hover:text-blue-800 hover:ring-1"
										>
											Learn More
										</a>
									</div>
								</div>
							</motion.div>
						))}
				</AnimatePresence>
			</div>
		</>
	);
}

export default RecentNewsCards;

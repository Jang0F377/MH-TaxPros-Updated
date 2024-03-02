import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function NavLinks() {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return [
		["Stay Current", "#current"],
		["About", "#about"],
		["Contact", "#contact"],
	].map(([label, href], index) => (
		<a
			key={label}
			href={href}
			className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-xl text-blue-50 transition-colors delay-150 hover:text-blue-800 hover:delay-[0ms]"
			onMouseEnter={() => setHoveredIndex(index)}
			onMouseLeave={() => setHoveredIndex(null)}
		>
			<AnimatePresence>
				{hoveredIndex === index && (
					<motion.span
						className="absolute inset-0 rounded-lg bg-blue-50"
						layoutId="hoverBackground"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 0.15 } }}
						exit={{
							opacity: 0,
							transition: { duration: 0.15, delay: 0.2 },
						}}
					/>
				)}
			</AnimatePresence>
			<span className="relative z-10">{label}</span>
		</a>
	));
}

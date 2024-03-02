import { Container } from "./common/Container";
import { NavLinks } from "./NavLinks";

export function Footer() {
	return (
		<footer className="bg-blue-800 ">
			<Container className="">
				<div className="rounded-xl  py-16">
					<img
						src={"/mh-logo.webp"}
						alt="ERR"
						className=" mx-auto h-20 w-auto   rounded-full object-cover p-2 "
					/>
					<nav className="mt-10 text-sm" aria-label="quick links">
						<div className="-my-1 flex justify-center gap-x-6 text-center">
							<NavLinks />
						</div>
					</nav>
				</div>
				<div className="flex flex-col items-center border-t border-slate-100/10 py-10 sm:flex-row-reverse sm:justify-between">
					<p className="mt-6 text-sm text-blue-50 sm:mt-0">
						Copyright &copy; {new Date().getFullYear()} MHTaxPros. All rights
						reserved.
					</p>
				</div>
			</Container>
		</footer>
	);
}

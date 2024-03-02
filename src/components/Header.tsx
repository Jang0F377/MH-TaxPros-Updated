import { Fragment, ReactNode } from "react";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Button } from "./common/Button";
import { Container } from "./common/Container";
import { Link } from "react-router-dom";
import { NavLinks } from "./NavLinks";
import { FULLSLATE_URL } from "../constants/environment";

interface MobileNavLinkProps {
	href: string;
	children?: ReactNode;
}
function MobileNavLink({ href, children }: MobileNavLinkProps) {
	return (
		<Popover.Button
			as={Link}
			to={href}
			className="block w-full rounded-lg p-2 hover:bg-blue-200 hover:text-blue-800 hover:ring-1 hover:ring-blue-800"
		>
			{children}
		</Popover.Button>
	);
}

interface MobileNavIconProps {
	open: boolean;
}

function MobileNavIcon({ open }: MobileNavIconProps) {
	return (
		<svg
			aria-hidden="true"
			className="h-3.5 w-3.5 overflow-visible stroke-blue-50"
			fill="none"
			strokeWidth={2}
			strokeLinecap="round"
		>
			<path
				d="M0 1H14M0 7H14M0 13H14"
				className={clsx(
					"origin-center transition",
					open && "scale-90 opacity-0"
				)}
			/>
			<path
				d="M2 2L12 12M12 2L2 12"
				className={clsx(
					"origin-center transition",
					!open && "scale-90 opacity-0"
				)}
			/>
		</svg>
	);
}

function MobileNavigation() {
	return (
		<Popover>
			<Popover.Button
				className="relative z-10 flex h-8 w-8 items-center justify-center  [&:not(:focus-visible)]:focus:outline-none"
				aria-label="Toggle Navigation"
			>
				{({ open }) => <MobileNavIcon open={open} />}
			</Popover.Button>
			<Transition.Root>
				<Transition.Child
					as={Fragment}
					enter="duration-150 ease-out"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="duration-150 ease-in"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
				</Transition.Child>
				<Transition.Child
					as={Fragment}
					enter="duration-150 ease-out"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="duration-100 ease-in"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<Popover.Panel
						as="div"
						className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
					>
						<MobileNavLink href="#current">Stay Current</MobileNavLink>
						<MobileNavLink href="#about">About</MobileNavLink>
						<MobileNavLink href="#contact">Contact</MobileNavLink>
					</Popover.Panel>
				</Transition.Child>
			</Transition.Root>
		</Popover>
	);
}

export function Header() {
	return (
		<header className="bg-blue-800 py-4 ">
			<Container>
				<nav className="relative z-50 flex justify-between ">
					<div className="flex items-center  md:gap-x-12">
						<Link to="#" aria-label="Home">
							<img
								src={"/mh-logo.webp"}
								alt="ERR"
								className=" w-20  rounded-full object-cover p-2 "
							/>
						</Link>
						<div className="hidden md:flex md:gap-x-7 ">
							<NavLinks />
						</div>
					</div>
					<div className="flex items-center gap-x-5 md:gap-x-8">
						<Button href={FULLSLATE_URL} color="blue">
							<span>
								Schedule <span className="hidden lg:inline">today</span>
							</span>
						</Button>
						<div className="-mr-1 md:hidden">
							<MobileNavigation />
						</div>
					</div>
				</nav>
			</Container>
		</header>
	);
}

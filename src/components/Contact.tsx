import {
	PhoneIcon,
	EnvelopeIcon,
	BuildingOfficeIcon,
} from "@heroicons/react/16/solid";
// import { useState } from "react";

function Contact() {
	// const [firstName, setFirstName] = useState("");
	// const [lastName, setLastName] = useState("");
	// const [email, setEmail] = useState("");
	// const [phone, setPhone] = useState("");
	// const [subject, setSubject] = useState("");
	// const [message, setMessage] = useState("");

	// const handleClick = () => {
	// 	setFirstName("");
	// 	setLastName("");
	// 	setEmail("");
	// 	setPhone("");
	// 	setSubject("");
	// 	setMessage("");
	// 	alert("Thank you for your message");
	// };
	return (
		<div className="font-inter flex mx-auto" id="contact">
			<div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8 ">
				<h2 className="sr-only">Contact me</h2>
				<div className="grid grid-cols-1">
					{/* Contact information */}
					<div className="relative overflow-hidden rounded-tl rounded-bl bg-blue-800 py-10 px-6 sm:px-10 xl:p-12">
						<h3 className="text-lg font-medium text-blue-50">
							Contact information
						</h3>
						<p className="mt-6 max-w-3xl text-base text-blue-50">
							MH Tax Pros - The better tax professional, the better tax
							experience.
						</p>
						<dl className="mt-8 space-y-6">
							<dt>
								<span className="sr-only">Phone number</span>
							</dt>
							<dd className="flex items-center text-base text-blue-50">
								<PhoneIcon
									className="h-6 w-6 flex-shrink-0 text-blue-50"
									aria-hidden="true"
								/>
								<a className="ml-3" href="tel:+17022776916">
									702-277-6916
								</a>
							</dd>
							<dt>
								<span className="sr-only">Email</span>
							</dt>
							<dd className="flex items-center text-base text-blue-50">
								<EnvelopeIcon
									className="h-6 w-6 flex-shrink-0 text-blue-50"
									aria-hidden="true"
								/>
								<p>
									<a className="ml-3" href="mailto:michael@mhtaxpro.com">
										michael@mhtaxpro.com
									</a>
								</p>
							</dd>
							<dt>
								<span className="sr-only">Address</span>
							</dt>
							<dd className="flex items-center text-base text-blue-50">
								<BuildingOfficeIcon
									className="h-6 w-6 flex-shrink-0 text-blue-50"
									aria-hidden="true"
								/>
								<p className="ml-3 ">
									8460 S. Eastern Ave Suite A<br />
									Las Vegas, NV 89123
									<br />
									We are located on the NE corner
									<br />
									of Eastern and Wigwam!
								</p>
							</dd>
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;

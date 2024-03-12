import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import { datesToRemember } from "../sharedData/datesToRemember";

function DatesToRemember() {
	const [dates] = useState(datesToRemember);

	return (
		<div className="mx-auto justify-center rounded-lg bg-blue-200 py-4 px-4   ">
			<h1 className="text-center text-2xl font-bold text-blue-900 ">
				Dates to Remember
			</h1>
			<dl className="my-3 items-center divide-y divide-gray-200 border">
				{dates.map((day) => (
					<Disclosure
						as="div"
						key={day.entity}
						className="items-center py-4 px-1"
					>
						<>
							<Disclosure.Panel static as="div">
								<div className="mt-8 flex flex-col">
									<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
										<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
											<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
												<table className="min-w-full divide-y divide-gray-300">
													<thead className="bg-platinum">
														<tr className="divide-x divide-gray-200">
															<th
																scope="col"
																className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-blue-900 sm:pl-6"
															>
																Due Date
															</th>
															<th
																scope="col"
																className="px-4 py-3.5 text-left text-sm font-semibold text-blue-900"
															>
																Ext. Due Date
															</th>
															<th
																scope="col"
																className="px-4 py-3.5 text-left text-sm font-semibold text-blue-900"
															>
																Form #
															</th>
														</tr>
													</thead>
													<tbody className="divide-y divide-gray-200 ">
														<tr className="divide-x divide-gray-200">
															<td className="whitespace-nowrap rounded-lg bg-blue-50 p-4 text-sm font-medium text-blue-800">
																{day.dueDate}
															</td>
															<td className="whitespace-nowrap rounded-lg bg-blue-50 p-4 text-sm font-medium text-blue-800">
																{day.extendedDueDate}
															</td>
															<td className="whitespace-nowrap rounded-lg bg-blue-50 py-4 pl-4 pr-4 text-sm font-medium text-blue-800 sm:pr-6">
																{day.form}
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</Disclosure.Panel>
						</>
					</Disclosure>
				))}
			</dl>
		</div>
	);
}

export default DatesToRemember;

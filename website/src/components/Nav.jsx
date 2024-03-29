import React from "react";
import { Link } from "@reach/router";

export default function Nav() {
	return (
		<>
			<nav class="bg-gray-800 fixed w-full z-20 top-0 start-0 drop-shadow-xl">
				<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
						<img src="MetaBlocks-logos_black.png" class="h-20" alt="Logo" />
						<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
					</a>
					<div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
						<button type="button" class="text-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
						<button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
						</button>
					</div>
					<div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
						<ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 dark:border-gray-700">
							<li>
								<a href="/" class="text-xl block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 " aria-current="page">Home</a>
							</li>
							<li>
								<a href="/marketplace" class="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
							</li>
							<li>
								<a href="https://metablockskavi.netlify.app/" class="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">CF Calculator</a>
							</li>
							<li>
								<a href="https://metablockskavi.netlify.app/ar-des" class="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">AR Projects</a>
							</li>
							<li>
								<a href="https://www.spatial.io/s/Refinery-Expansion-65aa556e62783248c496bfe4?share=8979420811796324836" class="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Refinery</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

		</>
	);
}

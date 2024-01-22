import React from "react";
import AboutUs from "../components/AboutUs";
import Features from "../components/Features";
import Downloads from "../components/Downloads";
import Newsletter from "../components/Newsletter";

export default function componentName() {
	return (
		<>
			<section class="bg-center bg-no-repeat bg-opacity-70 bg-fixed bg-cover bg-[url('/public/bg2.webp')] bg-gray-400 bg-blend-multiply">
				<div class="px-4 mx-auto max-w-screen-xl text-center pt-56 pb-20">
					<h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-800">Sustainabilty in Architecture using <br /><span className="text-7xl bg-gradient-to-r from-blue-500 via-green-600 to-blue-500 inline-block text-transparent bg-clip-text">Metaverse</span></h1>
					<p class="my-16 text-white font-semibold text-xl px-20">Designing eco-friendly virtual spaces for a harmonious future. Explore, inspire, and transform with us by crafting digital spaces that have eco-conscious design. Experience the future of virtual architecture now!</p>
					<div class="flex flex-row-2 space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
						<a href="#whatwedo" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center border-4 border-blue-700 text-blue-700 rounded-lg bg-white hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-64 mx-10 h-12">
							Services
						</a>
						<a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-64 mx-10  h-12">
							Get Started
						</a>
					</div>
				</div>
			</section>
			<AboutUs/>
			<Features/>
			<Downloads/>
			<Newsletter/>
		</>
	);
}

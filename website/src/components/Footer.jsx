import React from 'react'

function Footer() {
    return (
        <footer class="shadow-[rgba(0,0,5,0.3)_0px_-2px_3px_1px] bg-gray-800">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="MetaBlocks-just_logos.png" class="h-40" alt="Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-xl font-medium text-gray-900 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6 mx-5">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6 mx-5">Features</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6 mx-5">Services</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline mx-5">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-3xl text-gray-900 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">MetaBlocks</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer
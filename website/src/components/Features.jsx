import React from 'react'

function Features() {
    return (
        <>
            <section className='bg-gray-500 pb-20'>
                <div className='text-6xl p-20 text-gray-900'>
                    Features & Services
                </div>
                <div className="container">
                    <div class="absolute right-0 w-80 flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Immersive Designs</h5>
                        <p class="my-3 text-center text-xl font-normal text-gray-900 ">Elevate experiences with visually stunning virtual architectures, blending form and function seamlessly for an immersive and captivating metaverse environment.</p>
                    </div>
                    <a href="#" class="bg-[url('/public/bg2.webp')] bg-fixed h-96  flex flex-col items-center rounded-lg max-w-4xl mx-20 shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-20">
                    </a>
                </div>
                <div className="container">
                    <div class="absolute left-0 w-80 flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Collaborative Planning</h5>
                        <p class="my-3 text-center text-xl font-normal text-gray-900 ">Foster teamwork in the metaverse. Our platform enables architects, clients, and stakeholders to collaboratively design and refine sustainable projects, enhancing creativity and efficiency.</p>
                    </div>
                    <a href="#" class="relative left-80 bg-[url('/public/bg.png')] bg-fixed h-96  flex flex-col items-center rounded-lg max-w-4xl mx-20 shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-20">
                    </a>
                </div>
                <div className="container">
                    <div class="absolute right-0 w-80 flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Eco-friendly Elements</h5>
                        <p class="my-3 text-center text-xl font-normal text-gray-900 ">Integrate sustainable materials and technologies, ensuring a minimal environmental footprint while creating vibrant, eco-conscious virtual spaces that mirror real-world sustainability.</p>
                    </div>
                    <a href="#" class="bg-[url('/public/bg2.webp')] bg-fixed h-96  flex flex-col items-center rounded-lg max-w-4xl mx-20 shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-20">
                    </a>
                </div>
                <div className="container">
                    <div class="absolute left-0 w-80 flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Interactive Simulations</h5>
                        <p class="my-3 text-center text-xl font-normal text-gray-900 ">Engage users with dynamic simulations, allowing them to interact with and experience the impact of sustainable design choices in the virtual environment.</p>
                    </div>
                    <a href="#" class="relative left-80 bg-[url('/public/bg.png')] bg-fixed h-96  flex flex-col items-center rounded-lg max-w-4xl mx-20 shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-20">
                    </a>
                </div>
                


            </section>

        </>
    )
}

export default Features
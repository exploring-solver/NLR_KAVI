import React from 'react'

function Downloads() {
    return (
        <>
            <section className='bg-gray-800'>
                <div className='text-6xl p-20 text-gray-300'>
                    Downloads
                </div>

                <div className='grid grid-cols-2 justify-center'>


                    <div class="relative mx-auto border-black bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                        <div class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                        <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                        <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                        <div class="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                        <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                            <img src="bg.png" class="hidden dark:block w-[272px] h-[572px]" alt="" />
                        </div>
                    </div>


                    <div class="relative mx-auto border-black bg-black border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                        <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-black">
                            <img src="bg2.webp" class="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt="" />
                        </div>
                    </div>
                    <div class="relative mx-auto bg-black  rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                        <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-black"></div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Downloads
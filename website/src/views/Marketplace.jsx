import React from "react";

export default function componentName() {
    return (
        <>
            <h1 className="mt-28 ml-20  text-7xl">Furniture Marketplace</h1>
            <div className="grid grid-cols-3 p-20">
                <Product title="Wooden Table" price="4000" cf="1T/m3" advice="Good Option" />
                <Product title="Wooden Table" price="4000" cf="1T/m3" advice="Good Option" />
                <Product title="Wooden Table" price="4000" cf="1T/m3" advice="Good Option" />
                <Product title="Wooden Table" price="4000" cf="1T/m3" advice="Good Option" />
                <Product title="Wooden Table" price="4000" cf="1T/m3" advice="Good Option" />
                <Product title="Wooden Table" price="4000" cf="1T/m3" advice="Good Option" />
                <Product title="Wooden Table" price="4000" cf="1T/m3" advice="Good Option" />
                <Product title="Wooden Table" price="4000" cf="1T/m3" advice="Good Option" />
                <Product title="Wooden Table" price="4000" cf="1T/m3" advice="Good Option" />
            </div >
            <h1 className="mt-28 ml-20  text-7xl">Component Marketplace</h1>
            <div className="grid grid-cols-3 p-20">
                <Product title="Chimney" price="10000" cf="1T/m3" advice="Good Option" />
                <Product title="Chimney" price="10000" cf="1T/m3" advice="Good Option" />
                <Product title="Chimney" price="10000" cf="1T/m3" advice="Good Option" />
                <Product title="Chimney" price="10000" cf="1T/m3" advice="Good Option" />
                <Product title="Chimney" price="10000" cf="1T/m3" advice="Good Option" />
                <Product title="Chimney" price="10000" cf="1T/m3" advice="Good Option" />
                <Product title="Chimney" price="10000" cf="1T/m3" advice="Good Option" />
                <Product title="Chimney" price="10000" cf="1T/m3" advice="Good Option" />
                <Product title="Chimney" price="10000" cf="1T/m3" advice="Good Option" />
            </div >
        </>
    );
}

function Product(props) {
    return (
        <>
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2">
                <a href="#">
                    <img class="p-8 rounded-t-lg" src="bg.png" alt="product image" />
                </a>
                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                    </a>
                    <div class="grid grid-cols-1 items-center justify-between m-3">
                        <span class="text-xl font-bold text-gray-900 dark:text-white my-2">Price: Rs. <span className="text-2xl">{props.price}</span></span>
                        <span class="text-xl font-bold text-gray-900 dark:text-white my-2">CF: <span className="text-2xl">{props.cf}</span></span>
                        <span class="text-xl font-bold text-gray-900 dark:text-white my-2">Advice: <span className="text-2xl">{props.advice}</span></span>
                        <a href="#" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 my-2">View in Ar</a>
                    </div>
                </div>
            </div>
        </>
    )
}
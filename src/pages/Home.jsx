import React from "react";

function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-center">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <div className="w-full max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mt-2 mb-6">
                        Discover the Best Products Online;<br />Shopping Made Easy.
                    </h1>
                    <p className="px-4 leading-relaxed">
                        Our eCommerce platform provides you with a seamless shopping experience.<br />Browse through a wide range of products from multiple categories,<br />enjoying the convenience of shopping from the comfort of your home.
                    </p>
                    <p className="mb-8 mt-4 px-4 leading-relaxed">
                        And the best part...
                        <span className="text-pink-600 font-bold">Exclusive deals and discounts!</span>
                    </p>
                    <div>
                        <a className="inline-block py-4 px-8 leading-none text-white bg-slate-800 hover:bg-pink-600 rounded shadow text-sm font-bold"
                            href="/signup">
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>
            
            
        </div>
        
    );
}

export default Home;
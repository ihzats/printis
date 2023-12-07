import React from 'react'

export default function Card() {
    return (
        <div className='container mb-20'>
            <h1 className='text-3xl font-bold font-chillax pt-10 md:pt-20 pb-10 text-center'>Our Services</h1>
            <div className="flex flex-wrap justify-center gap-10">

                <div className="max-w-sm rounded overflow-hidden relative sm:flex sm:justify-center cursor-pointer">
                    <img src="/design.jpg" alt="Card" className="w-full" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
                    <div className="text-amber-300 text-center p-4 absolute bottom-0 left-0 w-full">
                        <div className="font-bold text-xl mb-2">Design</div>
                        <p className="text-white text-base hidden md:flex lg:flex ">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, ratione dicta? Eaque quo tenetur velit illum a. Et, suscipit obcaecati.
                        </p>
                    </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg relative flex justify-center cursor-pointer">
                    <img src="/cetak.jpg" alt="Card" className="w-full" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
                    <div className="text-amber-300 text-center p-4 absolute bottom-0 left-0 w-full">
                        <div className="font-bold text-xl mb-2">Cetak</div>
                        <p className="text-white text-base hidden md:flex lg:flex ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis culpa quasi quibusdam saepe mollitia, esse eos impedit nulla qui illum!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

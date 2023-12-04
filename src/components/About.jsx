import React from 'react'

export default function About() {
    return (
        <div className="container pt-36">
            <h1 className="block text-4xl font-bold lg:text-4xl text-primary font-poppinsy text-center">What is PRINTIS?</h1>
            <div className="flex flex-wrap md:pt-12 md:pb-12 lg:pt-12 ">
                <div className="w-full self-center px-4 lg:w-1/2">
                    {/* <h1 className="mt-1 block text-4xl font-bold lg:text-5xl text-primary font-poppinsy">What is printis?
                    </h1> */}
                    <img src="/logo.png" alt="logo" width="310" className='lg:mx-20'/>
                    {/* <div className="w-full md:w-1/3 md:mx-12 lg:w-1/2 h-1 mt-1 mx-auto rounded-full bg-primary"></div> */}
                </div>
                <div className="w-full mt-8 lg:mt-0  self-center px-4 lg:w-1/2 ">
                    <p className="mb-10 font-medium leading-relaxed text-slate-500">
                        Printis (Printing Solution) merupakan startup
                        berbasis web yang menghubungkan desainer
                        percetakan dan pelanggan UMKM. Solusi ini
                        untuk menawarkan layanan dalam mengatasi
                        tantangan UMKM dalam pemasaran produk dan
                        kualitas desain.
                        Printis membantu UMKM meningkatkan citra
                        produk melalui tampilan yang memukau. Printis
                        juga menyediakan paket yang hemat biaya
                        mencakup layanan desain, dan cetak. Dengan
                        opsi customizing yang fleksibel, UMKM dapat
                        menyesuaikan produk cetak sesuai dengan
                        kebutuhan mereka. Platform yang mudah
                        digunakan oleh Printis juga memberikan
                        kemudahan dalam proses pemesanan dan
                        desain, memastikan pengalaman pengguna yang
                        lancar bagi UMKM.</p>
                </div>
            </div>

        </div>
    )
}

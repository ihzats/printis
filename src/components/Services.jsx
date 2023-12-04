import React from 'react'

export default function Services() {
    return (
        <div className='container px-36'>
            <h1 className="block text-2xl font-bold lg:text-4xl text-primary font-poppinsy text-center">Mengapa memilih PRINTIS?</h1>
            <div class="w-full pt-16">
                <div class=" flex flex-wrap items-center justify-center lg:gap-20">
                    <div
                        class="w-28 bg-blue-50 mx-4 py-10 mb-10 transition shadow-teal-500 shadow-lg hover:shadow-xl hover:shadow-primary rounded-md">
                        <img src="user.png" class="w-12 h-12 p-1 active:scale-95 m-auto" alt="" />
                        <div class="w-1/2 h-1 mx-auto mt-2 rounded-full bg-primary"></div>
                        <p class="text-center font-bold text-xs pt-2 text-gray-500">Sumber Daya Manusia
                            yang Cekatan & Handal</p>
                    </div>
                    <div
                        class="w-28 bg-blue-50 mx-4 py-10 mb-10 transition shadow-teal-500 shadow-lg hover:shadow-xl hover:shadow-primary rounded-md">
                        <img src="printer.png" class="w-12 h-12 p-1 active:scale-95 m-auto" alt="" />
                        <div class="w-1/2 h-1 mx-auto mt-2 rounded-full bg-primary"></div>
                        <p class="text-center font-bold text-xs pt-2 text-gray-500">Kami Menggunakan Mesin
                            Cetak Teknologi Terbarul</p>
                    </div>
                    <div
                        class="w-28 bg-blue-50 mx-4 py-10 mb-10 transition shadow-teal-500 shadow-lg hover:shadow-xl hover:shadow-primary rounded-md">
                        <img src="bahan.png" class="w-12 h-12 p-1 active:scale-95 m-auto" alt="" />
                        <div class="w-1/2 h-1 mx-auto mt-2 rounded-full bg-primary"></div>
                        <p class="text-center font-bold text-xs pt-2 text-gray-500">Terdapat Banyak Pilihan
                            Media Cetak (kertas, plastik, dll.)</p>
                    </div>
                    <div
                        class="w-28 bg-blue-50 mx-4 py-10 mb-10 transition shadow-teal-500 shadow-lg hover:shadow-xl hover:shadow-primary rounded-md">
                        <img src="like.png" class="w-12 h-12 p-1 active:scale-95 m-auto" alt="" />
                        <div class="w-1/2 h-1 mx-auto mt-2 rounded-full bg-primary"></div>
                        <p class="text-center font-bold text-xs pt-2 text-gray-500">Kepuasan Pelanggan adalah
                            Prioritas Kami</p>
                    </div>
                    <div
                        class="w-28 bg-blue-50 mx-4 py-10 mb-10 transition shadow-teal-500 shadow-lg hover:shadow-xl hover:shadow-primary rounded-md">
                        <img src="lokasi.png" class="w-12 h-12 p-1 active:scale-95 m-auto" alt="" />
                        <div class="w-1/2 h-1 mx-auto mt-2 rounded-full bg-primary"></div>
                        <p class="text-center font-bold text-xs pt-2 text-gray-500">Lokasi Percetakan yang
                            Strategis untuk Didatangi</p>
                    </div>
                    <div
                        class="w-28 bg-blue-50 mx-4 py-10 mb-10 transition shadow-teal-500 shadow-lg hover:shadow-xl hover:shadow-primary rounded-md">
                        <img src="delivery.png" class="w-12 h-12 p-1 active:scale-95 m-auto" alt="" />
                        <div class="w-1/2 h-1 mx-auto mt-2 rounded-full bg-primary"></div>
                        <p class="text-center font-bold text-xs pt-2 text-gray-500">Jasa Pengantaran Gratis
                            (untuk wilayah Yogyakarta)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

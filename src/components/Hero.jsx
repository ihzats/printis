import React from 'react'
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <>
            <div
                className=" h-screen bg-cover bg-center flex items-center"
                style={{
                    backgroundImage: 'url("/hero.jpg")',
                }}

            >
                <div className="container text-white text-center">
                    <h1 className="text-4xl font-bold mb-4 text-amber-300">Welcome at PRINTIS</h1>
                    <p className="text-md font-semibold mb-6 text-primary">Solusi Cetak dan Desain keren dengan harga bersahabat </p>
                    <Link to="/" className="p-3 rounded-sm hover:bg-red-600 font-base bg-primary">Explore Now</Link>
                </div>
            </div>
        </>
    )
}

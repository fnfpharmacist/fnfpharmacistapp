import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export default function Error() {
    const router = useRouter()

    return (
        <section className="flex items-center h-full p-16 bg-gray-900 text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-lg text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">{"Sorry, an error occured we couldn't find this page."}</p>
                    <p className="mt-4 mb-8 text-gray-400">But dont worry, contact us through any means below or <span onClick={() => { router.back() }} className='cursor-pointer text-white'>go back</span></p>
                    <div className="flex flex-col md:flex-row gap-5">
                        <a rel="noopener noreferrer" href="tel:+1(507) 668-0846" className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">Call us <br /> +1(507) 668-0846</a>
                        <a rel="noopener noreferrer" href="mailto:fnfpharmacist@gmail.com" className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">Send an email <br /> fnfpharmacist@gmail.com</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

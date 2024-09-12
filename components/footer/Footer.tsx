import { Link } from '@/navigation'
import { ForkKnifeCrossed } from 'lucide-react'
import React from 'react'

export default function Footer() {
    return (
        <footer className='text-forbgwhite-color border-t border-forbgwhite-color bg-gray-200 lg:py-16 p-7 pb-16'>
            <div className='max-w-[1600px] mx-auto'>
                <div className='flex lg:flex-row flex-col lg:gap-10 gap-16 lg:justify-between lg:text-lg'>
                    <div className='w-full'>
                        <h1 className='tracking-tighter text-3xl lg:text-4xl font-bold'>CompanyName</h1>
                        <div className='mt-3 tracking-tight'>
                            <h2>Phnom Penh | Cambodia</h2>
                            <h2>California | United States</h2>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 w-full'>
                        <div className='space-y-4 lg:ml-auto'>
                            <h2 className='uppercase tracking-widest font-semibold text-xl'>Company</h2>
                            <Link
                                href={''}
                                className='block hover:underline underline-offset-2'
                            >
                                About
                            </Link>
                            <Link
                                href={''}
                                className='block hover:underline underline-offset-2'
                            >
                                Career
                            </Link>
                        </div>
                        <div className='space-y-4 lg:ml-auto'>
                            <h2 className='uppercase tracking-widest text-xl font-semibold'>Follow Us</h2>
                            <Link
                                href={''}
                                className='block hover:underline underline-offset-2'
                            >
                                X (Twitter)
                            </Link>
                            <Link
                                href={''}
                                className='block hover:underline underline-offset-2'
                            >
                                Instagram
                            </Link>
                            <Link
                                href={''}
                                className='block hover:underline underline-offset-2'
                            >
                                Facebook
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex mt-14 lg:mt-20 lg:justify-between lg:items-center lg:flex-row flex-col-reverse text-sm lg:text-base gap-7'>
                    <h2 className='text-center lg:text-start'>© 2024 Company Inc. All Rights Reserved.</h2>
                    <Link href={''} className='p-3 block transition-all w-fit mx-auto shadow-sm hover:scale-105 bg-mainBg-color/50 rounded-full'>
                        <ForkKnifeCrossed size={34} className='text-forbgwhite-color' />
                    </Link>
                    <div className='lg:flex items-center lg:gap-5'>
                        <button className='hover:underline underline-offset-2'>support@gmail.com</button>
                        <h2>[ Location ] : Cambodia | United States</h2>
                    </div>
                </div>
            <p className='text-xs text-gray-500 text-right'>Thanks for stopping by!</p>
            </div>
        </footer>
    )
}

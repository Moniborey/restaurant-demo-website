import DishLookingLink from '@/components/ui/DishLookingLink'
import { fraunces } from '@/fonts/font'
import Image from 'next/image'
import React from 'react'
export default function ViewMenu() {

    return (
        <div className={`${fraunces.className} text-forbgwhite-color size-full px-5 py-10 xl:p-16 xl:pb-36`}>
            <h1 className={`text-4xl xl:text-7xl text-center tracking-tight mb-5 xl:mb-14`}>Menu</h1>
            <div className='relative mx-auto h-[470px] lg:h-[570px] xl:h-full xl:py-10 py-5 size-full max-w-[750px]'>
                <Image
                    src={'/Best-authentic-Khmer-cuisine-beyond-Fish-Amok-and-Kdam-Chaa.webp'}
                    alt='menuimg'
                    width={10000}
                    height={10000}
                    className='object-cover brightness-75 size-full'
                />
                <DishLookingLink
                    textContent='Menu'
                    href=''
                    colorVariants='white'
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                />
            </div>
        </div>
    )
}

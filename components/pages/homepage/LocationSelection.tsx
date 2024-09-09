'use client'

import { fraunces } from '@/fonts/font'
import { currentAvailableLocation } from '@/libs/data'
import { cn } from '@/libs/utils'
import { Link } from '@/navigation'
import { ArrowDown, ArrowUp, DotIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const test = [{
    label:'placeholder store',
    href:''
},{
    label:'placeholder store',
    href:''
},{
    label:'placeholder store',
    href:''
},{
    label:'placeholder store',
    href:''
},{
    label:'placeholder store',
    href:''
},{
    label:'placeholder store',
    href:''
},{
    label:'placeholder store',
    href:''
},{
    label:'placeholder store',
    href:''
},{
    label:'placeholder store',
    href:''
},{
    label:'placeholder store',
    href:''
},{
    label:'placeholder store',
    href:''
},]

const colors = ['bg-forbgwhite-color','bg-[#BF6B21]','bg-[#01499E]']

export default function LocationSelection() {

    const [activeLocation, setActiveLocation] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const handleToggleSelectShop = () => {
        setIsOpen(prev => !prev)
    }

    const handlesetActiveLocation = (id: number) => {
        setActiveLocation(id)
    }

    return (
        <div className={`${colors[activeLocation]} size-full px-5 py-10 xl:p-16 xl:pb-36 text-mainBg-color`}>
            <h1 className={`${fraunces.className} text-4xl xl:text-7xl text-center tracking-tight mb-5 xl:mb-14`}>Location</h1>
            <div className='mx-auto max-w-[750px]'>
                <div className='flex flex-wrap gap-5 xl:gap-12 w-full items-center'>
                    {
                        currentAvailableLocation.map(({ href, label, id }) => {
                            const isActive = activeLocation === id
                            return (
                                <button
                                    onClick={() => handlesetActiveLocation(id)}
                                    key={href + label}
                                >
                                    <DotIcon className={cn('size-10 opacity-0 mx-auto', isActive && 'opacity-100')} />
                                    <h1 className={cn('whitespace-nowrap brightness-[65%] text-xl xl:text-4xl tracking-tight', isActive && 'brightness-100')}>{label}</h1>
                                </button>
                            )})
                    }
                </div>
                <div className='xl:mt-14 mt-8 relative w-full'>
                    <button onClick={handleToggleSelectShop} className='py-2 w-full border-b-2 flex justify-between transition-all border-white'>
                        <h1 className='brightness-75 xl:text-2xl'>Select Shop</h1>
                        {isOpen ? <ArrowUp size={22}/> :<ArrowDown size={22} />}
                    </button>
                    {isOpen && <div className={cn('scrollable-container z-30 h-[260px] absolute w-full bg-white text-forbgwhite-color xl:text-2xl text-xl')}>
                        {test.map((test,index) => (
                            <Link
                            key={index}
                            href={test.href}
                            className='block py-1 px-5 hover:bg-slate-100 transition-all'
                            >
                            {test.label}
                            </Link>
                        ))}
                    </div>}
                </div>
                <div className='relative mt-10'>
                    <Image
                        src={currentAvailableLocation[activeLocation].locationSelectIMG || '/3009c3150279919.62f6c24635263.png'}
                        alt='storeimg'
                        width={10000}
                        height={10000}
                        className='w-full brightness-75 xl:h-[420px] h-[250px] md:h-[360px] object-cover'
                    />
                    <Link
                        href={''}
                        className={`${fraunces.className} uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        tracking-tighter border-b-2 xl:text-2xl text-lg hover:scale-95 transition-all`}
                    >
                        Shop List
                    </Link>
                </div>
            </div>
        </div>
    )
}

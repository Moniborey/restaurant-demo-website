'use client'

import { Link } from '@/navigation'
import { ArrowDown, ArrowUp } from 'lucide-react'
import React, { useState } from 'react'
import AccordianBody from './ui/AccordianBody'

export default function StoreLocationSwitcher({country}:{country:string}) {

    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => setIsOpen(prev => !prev)

    const isCambodia = country === 'kh'

    return (
        <div className='relative overflow-hidden lg:text-2xl text-lg w-fit'>
            <button onClick={handleToggle} className='flex lg:gap-5 gap-4 items-center'>
                <h1>{isCambodia ? 'Cambodia' : 'United State'}</h1>
                {isOpen ? <ArrowUp /> : <ArrowDown />}
            </button>
            <AccordianBody
            className='border-forbgwhite-color pb-2 border-b-2'
            isOpen = {isOpen}
            >
                <>
                <Link
                    href={isCambodia ? '/en' : '/kh'}
                    target='_parent'
                    className='block lg:mt-1 mt-2'
                >
                    <h1>{isCambodia ? 'United State' : 'Cambodia'}</h1>
                </Link>
                </>
            </AccordianBody>
        </div>
    )
}

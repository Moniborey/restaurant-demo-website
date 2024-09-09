'use client'

import { Link } from '@/navigation'
import { ArrowDown, ArrowUp } from 'lucide-react'
import React, { useRef, useState } from 'react'
import AccordianBody from './ui/AccordianBody'

export default function StoreLocationSwitcher() {

    const [isOpen, setIsOpen] = useState(false)
    const contentHeight = useRef<HTMLDivElement | null>(null)
    const accordianHeight = contentHeight.current ? contentHeight.current.scrollHeight : 0

    const handleToggle = () => setIsOpen(prev => !prev)

    return (
        <div className='relative overflow-hidden lg:text-2xl text-lg w-fit'>
            <button onClick={handleToggle} className='flex lg:gap-5 gap-4 items-center'>
                <h1>Cambodia</h1>
                {isOpen ? <ArrowUp /> : <ArrowDown />}
            </button>
            <AccordianBody
            className='border-forbgwhite-color pb-2 border-b-2'
            isOpen = {isOpen}
            >
                <>
                <Link
                    href={''}
                    className='block lg:mt-1 mt-2'
                >
                    <h1>Vietnam</h1>
                </Link>
                <Link
                    href={''}
                    className='block lg:mt-1 mt-2'
                >
                    <h1>United State</h1>
                </Link>
                <Link
                    href={''}
                    className='block lg:mt-1 mt-2'
                >
                    <h1>Thailand</h1>
                </Link>
                </>
            </AccordianBody>
        </div>
    )
}

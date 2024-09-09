import { cn } from '@/libs/utils'
import { locationLink } from '@/types/links'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function LocationLink({ href, isComingSoon, label }: locationLink) {
    const activeLink = label === 'Cambodia'
    return (
        <div>
            <Link
                href={href}
                className={cn('flex gap-2 text-4xl lg:text-7xl tracking-tight group transition-all duration-100 text-white brightness-75 hover:brightness-200',activeLink &&'brightness-200')}
            >
                {label}
                {isComingSoon && <span className='text-lg lg:text-2xl ml-3 lg:ml-5 mt-auto'>Coming Soon</span>}
                {!activeLink && <ArrowRightIcon className='lg:size-12 size-6 group-hover:block hidden'/>}
            </Link>
        </div>
    )
}

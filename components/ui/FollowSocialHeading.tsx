import { fraunces } from '@/fonts/font'
import { ArrowUp } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function FollowSocialHeading({ label,labelsocial, href }: { label?: string, href: string,labelsocial:string }) {
    return (
        <Link
            href={href || ''}
            className='flex gap-3 items-center w-fit lg:text-4xl text-2xl text-forbgwhite-color'
        >
            <h2 className={`${fraunces.className} tracking-tighter`}>{label || 'Follow'}</h2> <span className='font-bold flex items-center tracking-tight'>{labelsocial || "Social"} <ArrowUp className='rotate-45'/></span>
        </Link>
    )
}

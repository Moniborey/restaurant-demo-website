'use client'

import React, { LiHTMLAttributes } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Link } from '@/navigation';
import Image from 'next/image';
import { cn } from '@/libs/utils';
import { PlayIcon } from 'lucide-react';
import FacebookPost from '@/components/ui/FacebookPost';
import { SwiperOptions } from 'swiper/types';

type socialData = {
    href: string
    img: string
    desc?: string
}

type ShowcaseSocialMobileProps = LiHTMLAttributes<HTMLLIElement> & {
    data: socialData[]
    spaceBetween?: number
    customBreakpoints?: {
        [width: number]: SwiperOptions;
        [ratio: string]: SwiperOptions;
    },
    slidesPerView?: number
    isYoutube?: boolean
    isFacebook?: boolean
}

export default function ShowcaseSocialMobile({
    data,
    className,
    spaceBetween,
    isYoutube,
    isFacebook,
    customBreakpoints,
    slidesPerView,
    ...liProps
}: ShowcaseSocialMobileProps) {
    return (
        <div className='xl:hidden mt-4'>
            <Swiper
                spaceBetween={spaceBetween || 0}
                slidesPerView={1.5}
                breakpoints={customBreakpoints || {
                    640: {
                        slidesPerView: 2.5
                    },
                }
                }
            >
                <ul className='w-full'>
                    {
                        data.map((data, index) => (
                            <SwiperSlide key={index}>
                                {
                                    isFacebook
                                        ?
                                        <FacebookPost key={index} href={data.href} img={data.img} desc={data.desc || ''} />
                                        :
                                        isYoutube
                                            ?
                                            <li key={index} className={cn('group relative', className)}>
                                                <Link
                                                    target='_blank'
                                                    href={data.href}
                                                >
                                                    <Image
                                                        src={data.img}
                                                        alt={data.img}
                                                        width={10000}
                                                        height={10000}
                                                        className='object-cover brightness-90 size-full'
                                                    />
                                                    <PlayIcon className='absolute size-14 group-hover:-rotate-12 text-white fill-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                                                </Link>
                                            </li>
                                            :
                                            <li {...liProps} key={index} className={cn('group relative', className)}>
                                                <Link
                                                    target='_blank'
                                                    href={data.href}
                                                >
                                                    <Image
                                                        src={data.img}
                                                        alt={''}
                                                        width={10000}
                                                        height={10000}
                                                        className='object-cover size-full'
                                                    />
                                                    <div className='absolute opacity-0 group-hover:opacity-100 transition-all inset-0 bg-black/30 duration-200' />
                                                </Link>
                                            </li>}
                            </SwiperSlide>
                        ))
                    }
                </ul>
            </Swiper>
        </div>
    )
}

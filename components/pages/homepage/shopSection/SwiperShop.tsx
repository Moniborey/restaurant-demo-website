'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import 'swiper/css';
import { Link } from '@/navigation';
import Image from 'next/image';
import { placeholderDataProps } from './ShopSection';

type swiperProps = {
    data: Array<placeholderDataProps>,
    spaceBetween?: number
    customBreakpoints?: {
        [width: number]: SwiperOptions;
        [ratio: string]: SwiperOptions;
    },
    slidesPerView?: number
}

export default function SwiperShop({
    data,
    spaceBetween,
    customBreakpoints,
    slidesPerView
}: swiperProps) {
    return (
        <div className='xl:hidden mt-4'>
            <Swiper
                spaceBetween={spaceBetween || 0}
                slidesPerView={slidesPerView || 1.5}
                breakpoints={customBreakpoints}
            >
                <ul className='w-full'>
                    {
                        data.map((data, index) => (
                            <SwiperSlide key={index}>
                                <Link
                                    href={data.href}
                                    className='w-full'
                                >
                                    <Image
                                        src={data.img}
                                        alt='prdimg'
                                        width={10000}
                                        height={10000}
                                        className='object-cover object-center aspect-square size-[300px]'
                                    />
                                    <h2 className='mt-3 xl:text-2xl text-lg text-forbgwhite-color'>
                                        {data.name}
                                    </h2>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </ul>
            </Swiper>
        </div>
    )
}

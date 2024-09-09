import React from 'react'
import { TrendingDishChildProps } from './TrendingDishMobile'
import { cn } from '@/libs/utils'
import { Link } from '@/navigation'
import { LeafIcon } from 'lucide-react'
import Image from 'next/image'
import { fraunces } from '@/fonts/font'

const zIndex = ['z-20', 'z-10', 'z-5']

export default function TrendingDishDesktop({
    activeDish,
    data,
    setActive
}: TrendingDishChildProps) {

    const derivedZIndex = activeDish === data.length - 1 ? [...zIndex].reverse() : [...zIndex]

    return (
        <div className='hidden xl:grid grid-cols-2 border-forbgwhite-color'>
            <div className='grid grid-cols-3 z-10'>
                {data.map((dish, index) => {
                    const isActive = activeDish === index
                    return (
                        <button
                            onClick={() => setActive(index)}
                            key={dish.name + index}
                            className={cn(`${derivedZIndex[index]} block relative lg:size-[33dvw] hover:bg-yellow-50 border-x-2 border-b-2 border-forbgwhite-color overflow-hidden px-20 bg-mainBg-color`, isActive && 'z-20')}>
                            <div className='relative'>
                                <Image
                                    src={dish.img}
                                    alt={dish.name}
                                    width={10000}
                                    height={10000}
                                    className={cn(`size-full hover:brightness-100 brightness-[65%] object-cover object-center`, isActive && 'brightness-100')}
                                />
                                {dish?.isVegie && <h2 className='absolute top-0 left-0 bg-green-900 text-white p-1 px-2 font-bold tracking-wide'>Vegetarian</h2>}
                            </div>
                        </button>
                    )
                })}
            </div>
            <div className='w-full h-full bg-forbgwhite-color'>
                <div className='text-mainBg-color relative h-full'>
                    <div className={`${fraunces.className} w-2/3 absolute right-0 p-5 xl:space-y-8 space-y-5`}>
                        <h1 className='xl:text-6xl text-3xl tracking-tighter flex items-center gap-2'>{data[activeDish].name}{data[activeDish]?.isVegie && <LeafIcon />}</h1>
                        <p className='2xl:text-2xl xl:text-xl text-base'>{data[activeDish].desc}</p>
                    </div>
                    <Link
                        href={''}
                        className='underline underline-offset-2 uppercase text-xl absolute right-[3%] bottom-5'
                    >
                        View Menu
                    </Link>
                </div>
            </div>
        </div>
    )
}

import React, { Dispatch, SetStateAction } from 'react'
import { TrendingDish } from './TrendingDish'
import Image from 'next/image'
import { LeafIcon } from 'lucide-react'
import AccordianBody from '@/components/ui/AccordianBody'

export type TrendingDishChildProps = {
    data: TrendingDish[]
    activeDish: number
    setActive: Dispatch<SetStateAction<number>>
}

export default function TrendingDishMobile({
    data,
    activeDish,
    setActive
}: TrendingDishChildProps) {

    return (
        <div className='xl:hidden bg-forbgwhite-color p-4'>
            {
                data.map((dish, index) => {
                    const isActive = activeDish === index
                    return (
                        <div key={dish.name} className='bg-mainBg-color'>
                            <button onClick={() => setActive(index)} className={`w-full overflow-x-hidden p-2 tracking-wider text-forbgwhite-color text-3xl ${isActive && 'font-bold'} ${!isActive && 'hover:bg-slate-200'} transition-all`}>
                                {dish.name} { dish?.isVegie && <span className='inline-block'><LeafIcon /></span>}
                            </button>
                            <AccordianBody
                            isOpen= {isActive}
                            className='border-b-2'
                            >
                                <div className='relative max-w-[500px] mx-auto'>
                                    <Image 
                                    src={dish.img}
                                    alt={dish.name}
                                    width={10000}
                                    height={10000}
                                    className='object-center max-h-[500px] object-cover size-full'
                                    />
                                    <p className='text-pretty px-4 text-gray-600 py-2'>{dish.desc}</p>
                                    {dish?.isVegie && <h2 className='absolute top-0 left-0 bg-green-900 text-white p-1 px-2 text-sm font-bold tracking-wide'>Vegetarian</h2>}
                                </div>
                            </AccordianBody>
                        </div>
                    )
                })
            }
        </div>
    )
}

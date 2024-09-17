'use client'

import PaddingTopWrapper from '@/components/ui/PaddingTopWrapper'
import { fraunces } from '@/fonts/font'
import { currentAvailableLocation } from '@/libs/data'
import { Link } from '@/navigation'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

export default function AllLocations() {

    const [isOpen, setIsOpen] = useState(false)
    const [filterCountry, setFilterCountry] = useState([''])

    const handleFilterCountry = (country: string) => {
        setFilterCountry(prev => prev.includes(country) ? prev.filter(value => value !== country) : [...prev, country])
    }

    const resetFilter = () => {
        setFilterCountry([''])
    }

    const handleToggleOpen = () => {
        setIsOpen(prev => !prev)
    }

    const filteredCountry = currentAvailableLocation.filter((country) => !filterCountry.includes(country.label))
    const btnText = filterCountry.length === 1 ? 'All Locations (Default)' : filteredCountry.length === 0 ? 'Filter' : filteredCountry.map(country => country.label).join(' | ')

    return (
        <PaddingTopWrapper>
            <div className='fixed lg:bottom-5 top-14 lg:top-auto w-full flex flex-col-reverse lg:flex-col z-20 lg:w-[350px] lg:left-10 bg-white'>
                {isOpen && <div className='lg:border border-forbgwhite-color w-full border-b lg:border-b-0'>
                    {currentAvailableLocation.map(({ label }, index) => {
                        const isActive = !filterCountry.includes(label)
                        return (
                            <button key={index} onClick={() => handleFilterCountry(label)} className='w-full text-forbgwhite-color flex justify-between items-center p-2 transition-all group'>
                                <h2>{label}</h2>
                                {isActive && <Check className='group-hover:opacity-50' />}
                            </button>
                        )
                    })}
                </div>}
                <button onClick={handleToggleOpen} className='w-full lg:border border-y border-forbgwhite-color p-3 font-bold hover:bg-gray-200 transition-all lg:text-xl text-forbgwhite-color'>
                    {btnText}
                </button>
            </div>
            {
                filteredCountry.length === 0
                    ?
                    <div className='h-[90dvh] grid place-content-center'>
                        <button onClick={resetFilter} className='border border-forbgwhite-color hover:bg-gray-200 py-2 px-6 lg:text-xl font-bold uppercase'>
                            Reset Filter
                        </button>
                    </div>
                    :
                    <div className='mt-14 lg:mt-0 max-w-[2000px] mx-auto'>
                        {filteredCountry.map(location => (
                            <div key={location.id} className='lg:pb-20 pb-10 lg:space-y-14 space-y-7'>
                                <h1 className={`${fraunces.className} text-center lg:text-8xl text-4xl`}>{location.label}</h1>
                                <div className='grid grid-cols-2'>
                                    {
                                        location.branches.map(branch => (
                                            <div key={branch.id} className='w-full relative aspect-square lg:aspect-auto max-h-[500px]'>
                                                <Image
                                                    src={branch.img || '/cambodiaStore.jpg'}
                                                    width={10000}
                                                    height={10000}
                                                    alt='img'
                                                    className='object-cover brightness-90 size-full object-center'
                                                />
                                                <h2
                                                    style={{ backgroundColor: 'green' }}
                                                    className='absolute z-10 text-white lg:text-base text-[10px] top-0 left-0 lg:p-2 p-1 font-bold'>
                                                    Phnom Penh
                                                </h2>
                                                <div className='group overflow-hidden transition-all duration-300 absolute inset-0 hover:bg-black/40'>
                                                    <h2 className={'transition-all duration-300 group-hover:scale-[80%] group-hover:-translate-y-12 md:text-2xl xl:text-4xl text-lg flex justify-center items-center h-full tracking-tight text-mainBg-color text-ellipsis w-full text-center'}>
                                                        {branch.name}
                                                    </h2>
                                                    <div className='h-1/2 lg:h-[90px] transition-all translate-y-full group-hover:translate-y-0 duration-300 absolute bottom-0 w-full lg:border-t border-white flex items-center lg:flex-row flex-col'>
                                                        {
                                                            branch.links.map(({ label, href }, index) => {
                                                                const isLastLabel = index === branch.links.length - 1
                                                                return (
                                                                    <Link
                                                                        key={label}
                                                                        href={href || `/${location.shortname}/location/${branch.id}`}
                                                                        className={`${fraunces.className} ${isLastLabel && 'border-r-0'} flex justify-center items-center size-full lg:border-r lg:text-2xl p-2 text-sm uppercase tracking-tighter text-white border-t lg:border-t-0 hover:bg-black/30 transition-all duration-300`}
                                                                    >
                                                                        {label}
                                                                    </Link>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
            }
        </PaddingTopWrapper>
    )
}

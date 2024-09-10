import { fraunces } from '@/fonts/font'
import React from 'react'
import LocationLink from './LocationLink'
import { locations } from '@/libs/data'
import { videoUrlCloudinary } from '@/constants'

export default function HeroSection() {
  return (
    <section className='h-screen relative'>
      <video
        playsInline
        muted
        loop
        autoPlay
        className='object-cover brightness-75 object-center size-full'
      >
        <source src={videoUrlCloudinary + '/rcszxcn85iyfhquqmhkr'} />
      </video>
      <div className={`${fraunces.className} lg:space-y-4 space-y-1 absolute left-4 lg:left-8 bottom-[70%] lg:bottom-10`}>
        {
          locations.map(({ href, isComingSoon, label }) => (
            <LocationLink key={label} href={href} isComingSoon={isComingSoon} label={label} />
          ))
        }
      </div>
      <div className='bg-[#01499E] xl:p-3 p-2 rounded-sm absolute xl:bottom-7 xl:right-7 bottom-12 right-2'>
        <h2 className={`${fraunces.className} text-mainBg-color xl:text-3xl text-lg uppercase`}>Promotion Deals</h2>
      </div>
    </section>
  )
}

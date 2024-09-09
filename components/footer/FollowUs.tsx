import { fraunces } from '@/fonts/font'
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTiktok } from '@tabler/icons-react'
import React from 'react'

export default function FollowUs() {
  return (
    <section className='lg:text-2xl text-xl tracking-tighter space-y-2 text-forbgwhite-color'>
        <h1 className={`${fraunces.className}`}>Follow Us!</h1>
        <div className='flex items-center lg:gap-9 gap-5'>
            <IconBrandFacebook className='hover:text-blue-500 size-7 lg:size-9'/>
            <IconBrandInstagram className='hover:text-blue-500 size-7 lg:size-9'/>
            <IconBrandTiktok className='hover:text-blue-500 size-7 lg:size-9'/>
            <IconBrandLinkedin className='hover:text-blue-500 size-7 lg:size-9'/>
        </div>
    </section>
  )
}

import FollowSocialHeading from '@/components/ui/FollowSocialHeading'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import ShowcaseSocialMobile from './ShowcaseSocialMobile';

const placeholderData = [{
  img: '/134a4e184187735.Y3JvcCwxMDgwLDg0NCwwLDI1MQ.png',
  href: ''
}, {
  img: '/134a4e184187735.Y3JvcCwxMDgwLDg0NCwwLDI1MQ.png',
  href: ''
}, {
  img: '/134a4e184187735.Y3JvcCwxMDgwLDg0NCwwLDI1MQ.png',
  href: ''
}, {
  img: '/134a4e184187735.Y3JvcCwxMDgwLDg0NCwwLDI1MQ.png',
  href: ''
}, {
  img: '/134a4e184187735.Y3JvcCwxMDgwLDg0NCwwLDI1MQ.png',
  href: ''
}, {
  img: '/134a4e184187735.Y3JvcCwxMDgwLDg0NCwwLDI1MQ.png',
  href: ''
}, {
  img: '/134a4e184187735.Y3JvcCwxMDgwLDg0NCwwLDI1MQ.png',
  href: ''
}, {
  img: '/134a4e184187735.Y3JvcCwxMDgwLDg0NCwwLDI1MQ.png',
  href: ''
}, {
  img: '/134a4e184187735.Y3JvcCwxMDgwLDg0NCwwLDI1MQ.png',
  href: ''
}]

export default function ShowcasePostInstagram() {
  return (
    <>
      <FollowSocialHeading href='' labelsocial='Instagram' />
      <ul className='xl:grid hidden grid-cols-3 gap-4 xl:mt-7'>
        {
          placeholderData.map((data, index) => (
            <li key={index} className='w-[280px] group relative aspect-square h-[280px] xl:w-full'>
              <Link
                target='_blank'
                href={data.href}
              >
                <Image
                  src={data.img}
                  alt={data.img}
                  width={10000}
                  height={10000}
                  className='object-cover size-full'
                />
                <div className='absolute opacity-0 group-hover:opacity-100 transition-all inset-0 bg-black/30 duration-200' />
              </Link>
            </li>))
        }
      </ul>
      <ShowcaseSocialMobile
        data={placeholderData}
        className='aspect-square size-[280px] md:size-[320px]'
        customBreakpoints={{
          1200: {
            slidesPerView: 3.5
          }
        }}
      />
    </>
  )
}

import FollowSocialHeading from '@/components/ui/FollowSocialHeading'
import { PlayIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ShowcaseSocialMobile from './ShowcaseSocialMobile'

const placeholderData = [{
  img: '/hero3.png',
  href: ''
}, {
  img: '/hero3.png',
  href: ''
}, {
  img: '/hero3.png',
  href: ''
}]

export default function ShowcasePostYoutube() {
  return (
    <div className='w-full'>
      <FollowSocialHeading href='' label='Subscribe' labelsocial='Youtube' />
      <ul className='xl:grid hidden gap-4 xl:mt-7'>
        {
          placeholderData.map((data, index) => (
            <li key={index} className='w-[370px] group relative xl:w-full h-[200px] xl:h-[280px]'>
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
          ))
        }
      </ul>
      <ShowcaseSocialMobile
        data={placeholderData}
        className='group relative h-[200px] md:h-[310px]'
        spaceBetween={15}
        isYoutube
        customBreakpoints={{
          640: {
            slidesPerView: 1.5
          },
          1024: {
            slidesPerView: 2.5
          }
        }}
      />
    </div>
  )
}

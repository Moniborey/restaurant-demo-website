import { fraunces } from '@/fonts/font'
import { Link } from '@/navigation'
import Image from 'next/image'
import React from 'react'
import SwiperShop from './SwiperShop'

export type placeholderDataProps = {
  img: string;
  name: string;
  href: string;
}

const placeholderData: placeholderDataProps[] = [{
  img: '/hero2.png',
  name: 'Placeholder Name',
  href: ''
}, {
  img: '/hero2.png',
  name: 'Placeholder Name',
  href: ''
}, {
  img: '/pizza.jpg',
  name: 'Placeholder Name',
  href: ''
}, {
  img: '/hero2.png',
  name: 'Placeholder Name',
  href: ''
}]

export default function ShopSection() {
  return (
    <section className='bg-mainBg-color xl:py-28 xl:pb-36 lg:py-20 py-12 px-5 xl:px-10 text-forbgwhite-color'>
      <div className='max-w-[1600px] mx-auto'>
        <div className='flex xl:flex-row flex-col xl:gap-14 gap-7 items-center'>
          <h1 className={`${fraunces.className} xl:text-7xl text-4xl text-center xl:text-start w-full xl:w-1/3`}>Original Products</h1>
          <p className='xl:text-2xl xl:w-2/3 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint veritatis quis quod illo quas illum ratione deserunt rerum! Dolor totam, omnis hic quia asperiores ducimus possimus laudantium laborum veritatis.</p>
        </div>
        <div className='xl:grid hidden grid-cols-4 gap-10 mt-9'>
          {
            placeholderData.map(({ name, href, img }, index) => (
              <Link
                key={index}
                href={href}
                className='w-full'
              >
                <Image
                  src={img}
                  alt='prdimg'
                  width={10000}
                  height={10000}
                  className='object-cover object-center aspect-square size-full'
                />
                <h2 className='mt-3 xl:text-2xl text-lg text-forbgwhite-color'>
                  {name}
                </h2>
              </Link>
            ))
          }
        </div>
        <SwiperShop
          data={placeholderData}
          spaceBetween={10}
          customBreakpoints={{
            640:{
              slidesPerView:2.5
            },
            1024:{
              slidesPerView:3.5
            }
          }}
        />
      </div>
    </section>
  )
}

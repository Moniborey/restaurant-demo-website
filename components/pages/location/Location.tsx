import DishLookingLink from '@/components/ui/DishLookingLink'
import { fraunces } from '@/fonts/font'
import { MapPinIcon, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ViewMap from './ViewMap'

export default function Location() {
  return (
    <main className='text-forbgwhite-color bg-mainBg-color pt-24 xl:pt-40'>
      <h1 className='xl:text-7xl font-bold text-3xl text-center'>
        Location Name
      </h1>
      <section className='grid grid-cols-1 lg:grid-cols-3 xl:mt-12 mt-6 border-y border-forbgwhite-color'>
        <div className='lg:col-span-2'>
          <div className='w-full overflow-hidden max-h-[600px] xl:max-h-[700px]'>
            <Image
              src={'/usStore.jpg'}
              alt='storeIMG'
              width={10000}
              height={10000}
              className='object-center object-cover size-full'
            />
          </div>
        </div>
        <div className='lg:px-20 flex flex-col py-10 lg:py-0 justify-center items-center lg:items-start xl:gap-5 gap-3'>
          <h1 className={`${fraunces.className} xl:text-5xl text-3xl text-center lg:text-left`}>Reservation Line</h1>
          <div className='flex items-center w-fit xl:text-3xl text-xl gap-3 border-b border-forbgwhite-color py-1'>
            <Phone size={20} />
            <h2>+855 12334400</h2>
          </div>
          <p className='xl:text-2xl text-lg mt-5 tracking-wider'>Mon-Sun <span className='ml-3'>| 11:00 - 24:00</span></p>
          <DishLookingLink
            firstText='Book'
            textContent='A Table'
            href=''
            colorVariants='brightBlue'
            className='w-fit xl:mt-16 mt-10 mb-5 lg:mb-0'
          />
        </div>
        <div className='flex flex-col lg:flex-row w-full border-t border-forbgwhite-color col-span-full'>
          <div className='w-full flex flex-col items-center h-full lg:items-start lg:p-16 py-10 gap-7 bg-[#EAE6DC]'>
            <h2 className={`${fraunces.className} tracking-wide xl:text-4xl text-3xl`}>
              Access
            </h2>
            <div className='flex-1 lg:flex lg:flex-col lg:justify-between'>
              <div className='flex gap-2 items-start'>
                <MapPinIcon size={30}/>
                <p className='xl:text-3xl text-lg'>0 St.589 Village 10, Sangkat Boeung Keng Kang, Phnom Penh 120102, Cambodia</p>
              </div>
              <div>
                <Link
                  href={'https://www.google.com/maps/place/In-N-Out+Burger/@37.6950558,-121.1170771,12z/data=!4m10!1m2!2m1!1sIn-N-Out+Burger!3m6!1s0x809050178d00c439:0x5dd3e975c6f80406!8m2!3d37.6998194!4d-121.0675867!15sCg9Jbi1OLU91dCBCdXJnZXIiA4gBAVoRIg9pbiBuIG91dCBidXJnZXKSARRoYW1idXJnZXJfcmVzdGF1cmFudOABAA!16s%2Fg%2F1tftrb61?entry=ttu&g_ep=EgoyMDI0MDkwOS4wIKXMDSoASAFQAw%3D%3D'}
                  target='_blank'
                  className={`${fraunces.className} text-center lg:text-start w-full uppercase tracking-wide xl:text-xl mt-5 block underline underline-offset-4`}
                >
                  google map
                </Link>
                <h2 className='text-xs text-slate-500 mt-3'>This is only for showcasing purpose</h2>
              </div>
            </div>
          </div>
          <div className='w-full'>
            <ViewMap />
          </div>
        </div>
      </section>
      <section className='xl:py-12 py-8 px-4'>
        <h2 className={`${fraunces.className} xl:text-5xl text-3xl tracking-wide text-center`}>Gallery</h2>
        <div className='max-w-[1300px] mt-8 lg:mt-12 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-5 lg:gap-7'>
          <div>
            <Image 
            src={'/gallery.jpg'}
            alt='img'
            width={10000}
            height={10000}
            className='size-full max-h-[450px] object-center object-cover'
            />
          </div>
          <div>
            <Image 
            src={'/458787424_918899536947466_8816989798225093099_n.jpg'}
            alt='img'
            width={10000}
            height={10000}
            className='size-full max-h-[450px] object-center object-cover'
            />
          </div>
        </div>
      </section>
    </main>
  )
}

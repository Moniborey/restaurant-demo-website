import Image from 'next/image'
import React from 'react'

type ParallaxSectionsProps = {
  children: React.ReactNode
  parallaxBg: string
  isVideo?: boolean
}

export default function ParallaxSections({ children, parallaxBg, isVideo = false }: ParallaxSectionsProps) {
  return (
    <section className='w-full overflow-hidden'>
      <div className='fixed inset-0 h-screen w-full -z-10'>
        {isVideo
          ?
          <video
            muted
            playsInline
            loop
            autoPlay
            className='object-cover brightness-75 object-center size-full'
          >
            <source src={parallaxBg || '/video/restaurantpromovideo.mp4'} />
          </video>
          :
          <Image
            loading='lazy'
            src={parallaxBg || '/Featured-photo-Cambodia-restaurants-1244x700.jpg'}
            alt='parallaximg'
            width={10000}
            height={10000}
            className='size-full brightness-75 object-center object-cover'
          />}
      </div>
      {children}
    </section>
  )
}
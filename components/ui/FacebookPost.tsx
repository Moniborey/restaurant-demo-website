import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type FacebookPostProps = {
  href:string
  img:string
  desc:string
}

export default function FacebookPost({href, img, desc}:FacebookPostProps) {
  return (
    <Link
      href={href}
      className='lg:flex relative group lg:h-[180px] w-[220px] lg:w-full overflow-hidden'
    >
      <Image
        src={img || '/hero.png'}
        alt='fbimg'
        width={10000}
        height={10000}
        className='aspect-square max-h-[180px] w-full object-cover object-center'
      />
      <div className='px-2 py-3 lg:px-5 lg:py-6 w-full text-forbgwhite-color bg-slate-300/50'>
        <h2>{desc}</h2>
      </div>
      <div className='absolute inset-0 opacity-0 bg-white/30 group-hover:opacity-100 transition-all duration-300'/>
    </Link>
  )
}

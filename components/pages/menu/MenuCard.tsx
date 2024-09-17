import Image from 'next/image';
import React from 'react'

type MenuCardProps = {
    name:string;
    desc?:string;
    price:string;
    img:string;
}

export default function MenuCard({name, img, desc, price}:MenuCardProps) {
  return (
    <div className='w-full'>
        <Image 
        src={`/${img}`}
        alt={name + 'img'}
        width={10000}
        height={10000}
        className='lg:max-h-[450px] aspect-square object-cover object-center'
        />
        <div className='lg:mt-5 mt-3 lg:space-y-1f'>
          <h2 className='lg:text-3xl text-lg font-bold'>{name}</h2>
          <h2 className='lg:text-xl text-sm'>{price} $</h2>
        </div>
    </div>
  )
}

'use client'

import { fraunces } from '@/fonts/font'
import React, { useState } from 'react'
import TrendingDishDesktop from './TrendingDishDesktop';
import TrendingDishMobile from './TrendingDishMobile';

export type TrendingDish = {
  img: string;
  name: string;
  desc: string;
  isVegie?: boolean
}

const trendingDishes: TrendingDish[] = [{
  img: '/66139f7a4beec3a966d1ee25_Carbonara-p-500.png',
  name: 'Carbonara',
  desc: 'Creamy Cacio e Pepe style sauce, Italian guanciale or French vegetable bacon, shavings of Parmigiano Reggiano PDO, grated Grana Padano PDO, black pepper.',
  isVegie: true
}, {
  img: '/66139f2552e283944fc9235e_Monterosso-p-500.png',
  name: 'Monterosso',
  desc: 'Tomato basil sauce, sliced ​​Halal chicken marinated in herbs, sliced ​​vegetable chicken, roasted eggplant, fresh rocket, free-range poached egg with a runny center, walnut kernels.',
  isVegie: true
}, {
  img: '/6613a49f2db4c04150785bb3_Symi-p-500.png',
  name: 'Symi',
  desc: 'Old-fashioned vinaigrette (honey and mustard), Italian guanciale or French veggie bacon, creamy DOP burrata, shaved Parmigiano Reggiano PDO, Datterino tomatoes, pan-fried mushrooms, crispy fried onions.'
}]

export default function TrendingDishSection() {

  const [active, setActive] = useState(0)

  return (
    <section className='border-t-2 bg-[#F75B37] border-forbgwhite-color'>
      <div className='py-6 xl:py-10 2xl:text-8xl xl:text-7xl text-4xl w-full text-center'>
        <h1 className={`${fraunces.className} text-forbgwhite-color tracking-wider`}>
          Current Trending Dish
        </h1>
      </div>
      <TrendingDishDesktop
      setActive={setActive} 
      activeDish={active} 
      data={trendingDishes}
      />
      <TrendingDishMobile
      setActive={setActive} 
      activeDish={active} 
      data={trendingDishes} 
      />
    </section>
  )
}

import PaddingTopWrapper from '@/components/ui/PaddingTopWrapper'
import { fraunces } from '@/fonts/font'
import React from 'react'
import MenuCard from './MenuCard'

const placeholderMenuData = [{
  label:'Featured',
  foods:[{
    img:'crispyricebowl.png',
    name:'Crispy Rice Bowl',
    desc:'',
    price:'13.9'
  },{
    img:'fishtacoseattle.png',
    name:'Fish Taco Seattle',
    desc:'',
    price:'14.9'
  },{
    img:'steak-chopped.png',
    name:'Steakhouse Chopped',
    desc:'',
    price:'16.9'
  }]
},{
  label:'Main Dishes',
  foods:[{
    img:'creamycarbonara.jpg',
    name:'Egg Creamy Carbonara',
    desc:'',
    price:'15.9'
  },{
    img:'tomatospaghetti.jpg',
    name:'Tomato Spaghetti',
    desc:'',
    price:'14.9'
  },{
    img:'chickenbuffalo.png',
    name:'Buffalo Chicken',
    desc:'',
    price:'14.9'
  },{
    img:'chickensalad.png',
    name:'BBQ Chicken Salad',
    desc:'',
    price:'13.9'
  }]
},{
  label:'Drinks',
  foods:[{
    img:'ollielime.png',
    name:'OLIPOP Lemon Lime Soda',
    desc:'',
    price:'1.9'
  },{
    img:'vintagecola.png',
    name:'OLIPOP Vintage Cola',
    desc:'',
    price:'1.9'
  },{
    img:'healthadedrink.png',
    name:'Health-ade kombucha pink lady apple',
    desc:'',
    price:'3.9'
  }]
}]

export default function Menu() {
  return (
    <PaddingTopWrapper>
      <div className='lg:space-y-10 space-y-7'>
        <h1 className={`${fraunces.className} text-center lg:text-8xl text-4xl`}>Menu</h1>
        <div className='max-w-[1400px] mx-auto px-4'>
          {
            placeholderMenuData.map(data => (
              <div key={data.label} className='text-forbgwhite-color lg:pb-40 pb-20'>
                <h2 className='lg:text-5xl text-2xl font-bold tracking-tight lg:mb-10 mb-5'>{data.label}</h2>
                <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-x-8 lg:gap-y-12 gap-x-4 gap-y-10'>
                  {
                    data.foods.map(dish => (
                      <MenuCard 
                      key={dish.name + dish.price}
                      img={dish.img}
                      name={dish.name}
                      price={dish.price}
                      />
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </PaddingTopWrapper>
  )
}

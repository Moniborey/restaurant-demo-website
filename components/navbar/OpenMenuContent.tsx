import { cn } from '@/libs/utils'
import React from 'react'
import StoreLocationSwitcher from '../StoreLocationSwitcher'
import FollowUs from '../footer/FollowUs'
import { navLink } from '@/types/links'
import { ForkKnife, TriangleIcon } from 'lucide-react'
import Link from 'next/link'
import { fraunces } from '@/fonts/font'
import { IconPizza } from '@tabler/icons-react'

const menuOptions: navLink[] = [{
  label: 'Location',
  href: ""
}, {
  label: 'Menu',
  href: ""
}, {
  label: 'Career',
  href: ""
}, {
  label: '[Other Link]',
  href: ""
}, {
  label: '[Other Link]',
  href: ""
}, {
  label: '[Other Link]',
  href: ""
}, {
  label: '[Other Link]',
  href: ""
}]

const linksPerCol = 5

const firstLinkSection = menuOptions.slice(0, linksPerCol)
const secondLinkSection = menuOptions.reverse().slice(0, menuOptions.length - firstLinkSection.length)


export default function OpenMenuContent({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <section className={cn('fixed h-[100dvh] bg-transparent text-forbgwhite-color inset-0 transition-all duration-300 -z-10', isMenuOpen && 'bg-mainBg-color opacity-100 z-30')}>
      <div className={cn('opacity-0 grid lg:grid-cols-2 m-4 lg:m-28 inset-0 transition-all duration-500 ease-in-out -translate-y-6 absolute top-[84px]', isMenuOpen && 'opacity-100 translate-y-0')}>
        <div className='flex flex-col gap-10 lg:gap-0'>
          <div className='lg:flex-1'>
            <StoreLocationSwitcher />
          </div>
          <div className={`${fraunces.className} grid lg:grid-cols-2 gap-2 font-normal`}>
            <div className='lg:space-y-3 space-y-2'>
              {
                firstLinkSection.map((link, index) => (
                  <MenuOptionLink key={link.label + index} href={link.href} label={link.label} />
                ))
              }
            </div>
            <div className='lg:space-y-3 space-y-2 mt-auto'>
              {
                secondLinkSection.map((link, index) => (
                  <MenuOptionLink key={link.label + index} href={link.href} label={link.label} />
                ))
              }
            </div>
          </div>
        </div>
        <div className='flex pb-10 lg:pb-0 items-end lg:justify-end'>
          <FollowUs />
        </div>
      </div>
    </section>
  )
}

const MenuOptionLink = ({ href, label }: navLink) => (
  <Link href={href} className='group flex items-center gap-2'>
    <ForkKnife className='rotate-90 w-0 lg:group-hover:w-6 group-hover:w-4 transition-all' />
    <h1 className='lg:text-4xl text-2xl first-letter:uppercase'>{label}</h1>
  </Link>
)

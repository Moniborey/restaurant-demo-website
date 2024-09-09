'use client'

import React, { ButtonHTMLAttributes, useState } from 'react'
import LanguageSwitcher from '../LanguageSwitcher'
import { Book, BriefcaseBusiness, UserSquare2, X } from 'lucide-react'
import OpenMenuContent from './OpenMenuContent'
import { cn, isNotEven } from '@/libs/utils'
import useScrollEffect from '@/hooks/useScrollEffect'
import { dm_sans, space_mono } from '@/fonts/font'
import { navLink } from '@/types/links'
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import Image from 'next/image'

const navLinks: navLink[] = [{
  label: "Reservation",
  href: "",
  icon: <Book size={20} />
}, {
  label: "About Us",
  href: "",
  icon: <UserSquare2 size={20} />
}, {
  label: "Career",
  href: "",
  icon: <BriefcaseBusiness size={20} />
}]

export default function Navbar() {

  const t = useTranslations('navbar')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = useScrollEffect({ scrollY: 100 })

  const handleMenuClick = () => {
    setIsMenuOpen(prev => !prev)
  }

  const isShouldToggleStyle = (isMenuOpen || isScrolled)

  return (
    <>
      <header className={cn('w-full top-0 z-50 fixed bg-transparent lg:py-5 py-3 transition-all duration-300', isScrolled && 'bg-mainBg-color')}>
        <section className={cn('md:container relative px-mobile flex justify-between text-sm lg:text-xl text-white', isShouldToggleStyle && 'text-forbgwhite-color')}>
          <Link href={''} className={`${dm_sans.className} flex lg:gap-3 gap-2 items-center uppercase`}>
            <h1 className='tracking-widest whitespace-nowrap text-lg lg:text-2xl saturate-150'>{t('companyname')}</h1>
            <h2 className='text-[11px] tracking-tight font-normal saturate-150 pb-1'>Optional</h2>
          </Link>
          <nav className='flex bg-inherit items-center gap-5 lg:gap-14'>
            {/* //navbarLinks */}
            <ul className={cn(`flex items-center border-t lg:border-0 transition-all duration-300 border-mainBg-color bg-inherit lg:gap-10 fixed z-20 lg:static bottom-0 lg:bg-transparent left-0 right-0 ${space_mono.className} text-inherit tracking-wide whitespace-nowrap uppercase`, isShouldToggleStyle && 'bg-mainBg-color text-forbgwhite-color border-forbgwhite-color')}>
              {
                navLinks.map(({ href, icon, label }, index) => (
                  isNotEven(index)
                    ? <li className='w-full' key={label}><Link className='w-full text-center flex lg:gap-3 gap-2 items-center justify-center' href={href}>
                      {icon} {label}
                    </Link></li>
                    : <li key={label} className={cn('py-2 w-full border-x lg:border-x-0 border-inherit', isShouldToggleStyle && 'border-forbgwhite-color')}><Link className='w-full items-center text-center flex lg:gap-3 gap-2 justify-center' href={href}>
                      {icon} {label}
                    </Link></li>
                ))
              }
            </ul>
            <LanguageSwitcher />
            <CustomMenuButton
              isMenuOpen={isMenuOpen}
              onClick={handleMenuClick}
              isShouldToggleStyle={isShouldToggleStyle}
            />
          </nav>
        </section>
      </header>
      <OpenMenuContent isMenuOpen={isMenuOpen} />
    </>
  )
}

type CustomMenuButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isMenuOpen: boolean
  isShouldToggleStyle: boolean
}

const CustomMenuButton = ({ isMenuOpen, isShouldToggleStyle, ...buttonProps }: CustomMenuButtonProps) => (
  <div className='xl:w-14 w-10'>
    <button
      {...buttonProps}
      className={cn('flex group transition-all ease-linear items-center group', !isMenuOpen && 'spin')}>
      <Image
        src={isShouldToggleStyle ? '/icons8-fork-48.png' : '/icons8-fork-48-white.png'}
        alt='fork'
        width={10000}
        height={10000}
        className={cn('size-[32px] lg:size-[40px] group-hover:-mr-4 lg:group-hover:-mr-5 group-hover:rotate-0 transition-all duration-500 -rotate-45', isMenuOpen && 'rotate-0 lg:-mr-5 -mr-4')}
      />
      <Image
        src={isShouldToggleStyle ? '/icons8-knife-48.png' : '/icons8-knife-48-white.png'}
        alt='knife'
        width={10000}
        height={10000}
        className={cn('lg:-ml-5 -ml-4 transform group-hover:rotate-0 transition-all duration-500 rotate-45 -scale-x-100 size-[32px] lg:size-[40px]', isMenuOpen && 'rotate-0')}
      />
    </button>
  </div>
)

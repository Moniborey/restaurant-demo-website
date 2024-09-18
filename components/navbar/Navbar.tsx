'use client'

import React, { ButtonHTMLAttributes, useState } from 'react'
import LanguageSwitcher from '../LanguageSwitcher'
import { Book, ChefHatIcon, UserSquare2 } from 'lucide-react'
import OpenMenuContent from './OpenMenuContent'
import { cn, isNotEven } from '@/libs/utils'
import useScrollEffect from '@/hooks/useScrollEffect'
import { dm_sans, space_mono } from '@/fonts/font'
import { navLink } from '@/types/links'
import { useTranslations } from 'next-intl'
import { Link, locales, usePathname } from '@/navigation'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { currentAvailableLocation } from '@/libs/data'

// {
//   label: "Career",
//   href: "",
//   icon: <BriefcaseBusiness size={20} className='group-hover:-translate-y-1 group-hover:rotate-12 transition-all'/>
// }

const navLinks: navLink[] = [{
  label: "Reservation",
  href: "/not-available",
  icon: <Book size={20} className='group-hover:-translate-y-1 group-hover:rotate-12 transition-all'/>
}, {
  label: "About Us",
  href: "/not-available",
  icon: <UserSquare2 size={20} className='group-hover:-translate-y-1 group-hover:rotate-12 transition-all'/>
},{
  label:'Menu',
  href:'/menu',
  icon:<ChefHatIcon size={20} className='group-hover:-translate-y-1 group-hover:rotate-12 transition-all'/>
}]

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = useScrollEffect({ scrollY: 100 })
  const pathname = usePathname()
  const t = useTranslations('navbar')
  const {country} = useParams()
  const countryCode = country || 'kh' 
  const countryText = currentAvailableLocation.find(c => c.shortname === country)?.label
  
  const handleMenuClick = () => {
    setIsMenuOpen(prev => !prev)
  }

  //check if homepage then navbar start with bgtransparent and have style toggle when scroll
  const splittedPathname = pathname.split('/')
  const pathnameToCheck = splittedPathname.length > 2 ? splittedPathname[2] : splittedPathname[1] 
  const isNotHomePage =  pathnameToCheck.length === 0 ? false : !locales.includes(pathnameToCheck)
  const isShouldToggleStyle = isNotHomePage ? true : (isMenuOpen || isScrolled)
  const isShouldChangeNavBgColor = isNotHomePage ? true : isScrolled

  return (
    <>
      <header className={cn('w-full top-0 z-50 fixed bg-transparent lg:py-5 py-3 transition-all duration-300', isShouldChangeNavBgColor && 'bg-mainBg-color')}>
        <section className={cn('md:container relative px-mobile flex justify-between text-sm lg:text-lg xl:text-xl text-white', isShouldToggleStyle && 'text-forbgwhite-color')}>
          <Link target='_parent' href={'/'+countryCode} className={`${dm_sans.className} flex lg:gap-3 gap-2 items-center uppercase`}>
            <h1 className='tracking-widest whitespace-nowrap text-lg lg:text-2xl saturate-150'>{t('companyname')}</h1>
            <h2 className='text-[11px] tracking-tight font-normal saturate-150 pb-1 uppercase'>{countryText || 'Cambodia'}</h2>
          </Link>
          <nav className='flex bg-inherit items-center gap-5 lg:gap-14'>
            {/* //navbarLinks */}
            <ul className={cn(`flex items-center border-t lg:border-0 transition-all duration-300 border-mainBg-color bg-inherit lg:gap-10 fixed z-20 lg:static bottom-0 lg:bg-transparent left-0 right-0 ${space_mono.className} text-inherit tracking-wide whitespace-nowrap uppercase`, isShouldToggleStyle && 'bg-mainBg-color text-forbgwhite-color border-forbgwhite-color')}>
              {
                navLinks.map(({ href, icon, label }, index) => {
                  const hrefFormatted = href === '/not-available' ? href : '/' + countryCode + href
                  return (
                    isNotEven(index)
                      ? <li className='w-full' key={label}><Link className='w-full group text-center flex lg:gap-3 gap-2 items-center justify-center' href={hrefFormatted}>
                        {icon} {label}
                      </Link></li>
                      : <li key={label} className={cn('py-2 w-full border-x lg:border-x-0 border-inherit', isShouldToggleStyle && 'border-forbgwhite-color')}><Link className='w-full group items-center text-center flex lg:gap-3 gap-2 justify-center' href={hrefFormatted}>
                        {icon} {label}
                      </Link></li>
                  )})
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
      <OpenMenuContent country={country as string} isMenuOpen={isMenuOpen} handleCloseMenu={() => setIsMenuOpen(false)}/>
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

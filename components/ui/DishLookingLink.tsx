import { fraunces } from '@/fonts/font'
import { cn } from '@/libs/utils'
import { Link } from '@/navigation'
import React, { ButtonHTMLAttributes } from 'react'

const Variants = {
  brightBlue:{
    linkClassName: 'hover:text-[#02499D] text-white',
    divClassName: 'bg-[#02499D]',
    btnClassName: 'border-[#02499D]'
  },
  blue: {
    linkClassName: 'hover:text-forbgwhite-color text-white',
    divClassName: 'bg-forbgwhite-color',
    btnClassName: 'border-forbgwhite-color'
  },
  white: {
    linkClassName: 'hover:text-mainBg-color',
    divClassName: 'bg-mainBg-color',
    btnClassName: 'border-mainBg-color'
  }
} as const

type DishLookingLinkProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href: string
  firstText?: string,
  textContent?: string
  colorVariants?: keyof typeof Variants
}

export default function DishLookingLink({ className, href, textContent, firstText = "View", colorVariants = 'white', ...buttonProps }: DishLookingLinkProps) {
  return (
    <button
      {...buttonProps}
      className={cn(`${Variants[colorVariants].btnClassName} group relative overflow-hidden border rounded-[50%] z-10`, className)}>
      <Link
        href={href}
        className={`${Variants[colorVariants].linkClassName} block lg:py-10 lg:px-12 py-5 px-7 text-center leading-5 lg:leading-7 uppercase lg:text-2xl text-lg ${fraunces.className}`}
      >
        {firstText}<br />{textContent}
      </Link>
      <div className={`${Variants[colorVariants].divClassName} absolute inset-0 group-hover:-translate-x-full -z-10 transition-all ease-linear duration-200`} />
    </button>
  )
}

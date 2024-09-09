import { cn } from '@/libs/utils'
import { Link } from '@/navigation'
import React, { ButtonHTMLAttributes } from 'react'

const Variants = {
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
  textContent?: string
  colorVariants?: keyof typeof Variants
}

export default function DishLookingLink({ className, href, textContent, colorVariants = 'white', ...buttonProps }: DishLookingLinkProps) {
  return (
    <button
      {...buttonProps}
      className={cn(`${Variants[colorVariants].btnClassName} group relative overflow-hidden border rounded-[50%]`, className)}>
      <Link
        href={href}
        className={`${Variants[colorVariants].linkClassName} block lg:py-10 lg:px-14 py-5 px-7 text-center leading-5 lg:leading-7 uppercase lg:text-2xl text-lg`}
      >
        View<br />{textContent}
      </Link>
      <div className={`${Variants[colorVariants].divClassName} absolute inset-0 group-hover:-translate-x-full transition-all ease-linear -z-10 duration-200`} />
    </button>
  )
}

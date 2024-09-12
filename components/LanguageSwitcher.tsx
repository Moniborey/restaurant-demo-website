'use client'

import { cn } from '@/libs/utils'
import { locales, usePathname, useRouter } from '@/navigation'
import { ArrowDown, ArrowUp } from 'lucide-react'
import { useParams } from 'next/navigation'
import React, { useState, useTransition } from 'react'

export default function LanguageSwitcher() {

  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const { locale } = useParams()

  function handleSelectChange(value: string) {
    startTransition(() => {
      router.replace(pathname, { locale: value });
      setIsOpen(false)
    });
  }
  // try useTransition to see difference later

  return (
    <div className='relative tracking-wide transition-all duration-300'>
      <button disabled={isPending} onClick={() => setIsOpen(prev => !prev)} className='flex xl:text-xl lg:text-lg text-base gap-[2px] items-center uppercase'>{locale}{isOpen ? <ArrowUp className='lg:size-5 size-4' /> : <ArrowDown className='lg:size-5 size-4' />}</button>
      <div className={cn('absolute hidden -bottom-5 lg:-bottom-7', isOpen && 'block')}>
        {locales.filter(value => value !== locale ).map(value =>
        (
          <button className='uppercase xl:text-xl lg:text-lg text-base' key={value} onClick={() => handleSelectChange(value)}>{value}</button>
        ))}
      </div>
    </div>
  )
}

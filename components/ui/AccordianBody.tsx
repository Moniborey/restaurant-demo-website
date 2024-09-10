'use client'

import { cn } from '@/libs/utils'
import React, { HTMLAttributes, useRef } from 'react'

type AccordianBodyProps = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean
  children: React.ReactNode
}

export default function AccordianBody({ children, isOpen, className, ...divProps }: AccordianBodyProps) {

  const ref = useRef<HTMLDivElement | null>(null)
  const accordianHeight = ref.current ? ref.current.scrollHeight : 0

  return (
    <div
      {...divProps}
      ref={ref}
      className={cn('overflow-hidden transition-all ease-in-out duration-[.45s]', className)}
      style={
        isOpen
          ? { height: accordianHeight }
          : { height: "0px" }
      }
    >
      {children}
    </div>
  )
}

'use client'

import React from 'react'
import { useTranslations } from 'use-intl'

export default function NotPartOfDemo() {

    const t = useTranslations('notpartdemo')

  return (
    <div className='h-[90dvh] bg-mainBg-color grid place-content-center'>
        <h2 className='font-bold lg:text-2xl text-xl text-center text-forbgwhite-color'>{t('text')}</h2>
    </div>
  )
}

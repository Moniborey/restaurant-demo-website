import NotPartOfDemo from '@/components/NotPartOfDemo'
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react'

export default function page({ params: { locale } }: { params: { locale: string}}) {

unstable_setRequestLocale(locale);

  return <NotPartOfDemo />
}

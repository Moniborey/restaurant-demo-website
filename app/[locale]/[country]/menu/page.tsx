import Menu from '@/components/pages/menu/Menu'
import { locales } from '@/navigation';
import { openGraphImage } from '@/shared-metadata';
import { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import React from 'react'

export const metadata: Metadata = {
  title:'menu',
  description:'Menu page design',
  openGraph:{
    ...openGraphImage,
    title:'menu'
  }
}

export function generateStaticParams(){
  return locales.map((locale) => ({
      country: locale,
  }))
}

export default function pageMenu({ params: { locale, country } }: { params: { locale: string, country: string } }) {

  unstable_setRequestLocale(locale);

  if (!locales.includes(country)) notFound()

  return <Menu />
}

import React from 'react'
import { unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/navigation';
import { notFound } from 'next/navigation';
import Home from '@/components/pages/homepage/Home';

export default function pageDynamicHome({ params: { locale, country } }: { params: { locale: string, country: string } }) {

    unstable_setRequestLocale(locale);

    if (!locales.includes(country)) notFound()

    return (
        <Home country={country}/>
    )
}

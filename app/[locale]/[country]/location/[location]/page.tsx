import Location from '@/components/pages/location/Location';
import { locales } from '@/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react'

export function generateStaticParams(){
    return locales.map((locale) => ({
        country: locale,
        location:'bkk'
    }))
}

export default function page({ params: { locale, location } }: { params: { locale: string, location: string } }) {

    unstable_setRequestLocale(locale);

    return <Location />
}
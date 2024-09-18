import AllLocations from '@/components/pages/locationspage/AllLocations';
import { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react'

export const metadata: Metadata = {
    title:'Locations'
}

export default function page({ params: { locale } }: { params: { locale: string } }) {

    unstable_setRequestLocale(locale);

    return <AllLocations />
}

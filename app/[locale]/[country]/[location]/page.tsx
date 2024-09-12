import Location from '@/components/pages/location/Location';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react'

export default function page({ params: { locale, location } }: { params: { locale: string, location: string } }) {

    unstable_setRequestLocale(locale);

    return <Location />
}

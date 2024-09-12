import React from 'react'
import Home from '../page'
import { unstable_setRequestLocale } from 'next-intl/server';

export default function pageDynamicHome({ params: { locale, country } }: { params: { locale: string, country: string } }) {

    unstable_setRequestLocale(locale);
    const params = {
        locale,
        country
    }

    // if(!locales.includes(country)) notFound()

    return (
        <Home params={params} />
    )
}

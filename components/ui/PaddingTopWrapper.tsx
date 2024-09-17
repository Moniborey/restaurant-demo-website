import React from 'react'

export default function PaddingTopWrapper({ children }: { children: React.ReactNode }) {
    return (
        <main className='text-forbgwhite-color bg-mainBg-color pt-24 lg:pt-40'>
            {children}
        </main>
    )
}

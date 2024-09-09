import React from 'react'
import ShowcasePostInstagram from './ShowcasePostInstagram'
import ShowcasePostYoutube from './ShowcasePostYoutube'
import ShowcasePostFacebook from './ShowcasePostFacebook'

export default function SocialSection() {
  return (
    <section className='bg-mainBg-color xl:py-28 lg:py-20 py-14 px-5 xl:px-10'>
      <div className='xl:grid space-y-12 xl:space-y-0 xl:grid-cols-3 mx-auto gap-10 max-w-[1600px] auto-rows-auto'>
        <div className='xl:col-span-2 2xl:pr-28'>
          <ShowcasePostInstagram />
        </div>
        <ShowcasePostYoutube />
        <div className='xl:col-span-full xl:pt-5'>
          <ShowcasePostFacebook />
        </div>
      </div>
    </section>
  )
}

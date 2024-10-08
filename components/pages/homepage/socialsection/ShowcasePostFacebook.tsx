import FacebookPost from '@/components/ui/FacebookPost'
import FollowSocialHeading from '@/components/ui/FollowSocialHeading'
import React from 'react'
import ShowcaseSocialMobile from './ShowcaseSocialMobile'

const placeholderData = [{
  img: '/458787424_918899536947466_8816989798225093099_n.jpg',
  href: '',
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam harum dolorem sapiente voluptate iusto reprehenderit libero.'
}, {
  img: '/458787424_918899536947466_8816989798225093099_n.jpg',
  href: '',
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam harum dolorem sapiente voluptate iusto reprehenderit libero.'
}, {
  img: '/pizza.jpg',
  href: '',
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam harum dolorem sapiente voluptate iusto reprehenderit libero.'
}]

export default function ShowcasePostFacebook() {
  return (
    <>
      <FollowSocialHeading href='' labelsocial='Facebook' />
      {
        <ul className='xl:grid hidden xl:grid-cols-3 xl:gap-10 gap-4 xl:mt-7'>
          {
            placeholderData.map(({ href, img, desc }, index) => (
              <FacebookPost key={index} href={href} img={img} desc={desc} />
            ))
          }
        </ul>
      }
      <ShowcaseSocialMobile
        data={placeholderData}
        spaceBetween={10}
        isFacebook
      />
    </>
  )
}

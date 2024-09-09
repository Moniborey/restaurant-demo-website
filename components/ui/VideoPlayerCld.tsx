'use client'

import { CldVideoPlayer, CldVideoPlayerProps } from 'next-cloudinary'
import React from 'react'

type VideoPlayerCldProps = CldVideoPlayerProps

export default function VideoPlayerCld({
  ...props
}: VideoPlayerCldProps) {
  return (
    <>
      <CldVideoPlayer
        {...props}
      />
    </>
  )
}

'use client'

import Image from 'next/image'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import './RotatingPortrait.css'

type Props = {
  size: 'small' | 'medium'
}

const sizeMap: {
  [key in Props['size']]: number
} = {
  small: 40,
  medium: 120,
}

export const RotatingPortrait: FC<Props> = ({ size }) => {
  const [isRotating, setIsRotating] = useState(true)
  const _size = sizeMap[size]

  const toggleRotation = () => {
    setIsRotating(!isRotating)
  }

  useEffect(() => {
    const image = document.querySelector<HTMLImageElement>('.rotating-image')
    if (!image) return
    image.style.animationPlayState = isRotating ? 'running' : 'paused'
  }, [isRotating])

  return (
    <button type="button" className="image-container" onClick={toggleRotation}>
      <Image
        width={_size}
        height={_size}
        src="/portrait.png"
        className={'rotating-image'}
        alt="Rotating"
      />
    </button>
  )
}

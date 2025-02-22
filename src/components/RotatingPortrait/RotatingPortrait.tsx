'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import './RotatingPortrait.css'

export const RotatingPortrait = () => {
  const [isRotating, setIsRotating] = useState(true)

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
        width={120}
        height={120}
        src="/portrait.png"
        className="rotating-image"
        alt="Rotating"
      />
    </button>
  )
}

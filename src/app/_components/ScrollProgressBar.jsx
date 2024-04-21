'use client'

import { useEffect, useState } from "react"

export default function ScrollProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollY = window.scrollY

      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100
      setScrollPercentage(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='top-0 left-0 right-0 fixed h-1 w-full bg-transparent'>
      <div className='h-full bg-primary' style={{ width: `${scrollPercentage}%` }}></div>
    </div>
  )
}

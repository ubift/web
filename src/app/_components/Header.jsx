'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { button, logo, menuItems } from '@/constants/header'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset

      if (scrollY > 90) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`sticky top-4 w-auto flex justify-between items-center p-2 rounded-md header-glass-background ${scrolled && 'border-[1px] border-[#222]'}`}>
      <div>
        {logo.map((item, index) => (
          <Link href={item.href} className='gap-1 flex items-center justify-center font-bold text-xl hover:opacity-70 transition-all' key={index}>
            <Image src='/ubift.png' width={32} height={32} alt='ubift' />
            <span className='max-[380px]:hidden'>{item.name}</span>
          </Link>
        ))}
      </div>
      <nav className='gap-4 flex items-center'>
        <ul className='gap-4 flex items-center group max-[480px]:text-sm max-[480px]:gap-2'>
          {menuItems.map((item, index) => (
            <li key={index}><Link href={item.href} className='px-3 py-1 hover:!text-primary group-hover:text-primary-gray transition-all' key={index}>{item.name}</Link></li>
          ))}
        </ul>
        {button.map((item, index) => (
          <button className='flex items-center justify-center bg-primary text-primary-dark px-4 py-1 rounded-md group transition-all max-[430px]:px-2 max-[480px]:text-sm' key={index}>
            <Link href={item.href} key={index} className='max-[430px]:hidden'>{item.name}</Link>
            <Image src='/assets/icon/contact.svg' width={16} height={16} className='hidden max-[430px]:block' />
            <Image src='/assets/icon/arrow-right.svg' width={16} height={16} className='opacity-0 -mr-4 group-hover:opacity-100 group-hover:ml-1 group-hover:mr-0 transition-all max-[430px]:hidden' alt='arrow-right' />
          </button>
        ))}
      </nav>
    </header>
  );
}

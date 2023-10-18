'use client'

import menus from '@/data/menus.json'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Discord, Github} from '@/components/Icons'
import Image from 'next/image'

export const Footer = () => {
  const pathName = usePathname()

  return (
    <div className="container mx-auto px-4 py-[2rem]">
      <div className='grid gap-4'>
        <div className='flex flex-col md:flex-row md:justify-between gap-4 justify-center items-center'>
          <Image src="/chessuniverse-white.png" alt="chess-universe" width="150" height="150" />
          <ul className="flex gap-[2rem]">
              {
                menus.map((item) => (
                  <li key={item.name} className={`font-bold ${pathName === item.link ? 'text-primary-100' : null} hover:text-primary-300 transition-all`}>
                    <Link href={item.link}>
                      {item.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1170 2" fill="none">
          <path opacity="0.5" d="M1 1H1169" stroke="#EBEAED" strokeWidth="2" strokeLinecap="square" />
        </svg>
        <div className='flex justify-center md:justify-end'>
            <div className='flex gap-4'>
              <Discord className='w-6 h-6 fill-primary-300' />
              <Github className='w-6 h-6 fill-primary-300' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
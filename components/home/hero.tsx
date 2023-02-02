import style from '@styles/components/home/hero.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Hero() {
  const [login, setLogin] = useState(false)

  return (
    <div className={style.hero + " w-full bg-center bg-cover h-[38rem]"}>
      <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">Share your link <span className="text-blue-400">Easily</span></h1>
          <Link href={login ? '/dashboard' : '/login'} className="text-lg block px-5 py-2 mt-4 font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start</Link>
        </div>
      </div>
    </div>
  )
}
import { useEffect, useState } from "react"
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx"
import { CgClose } from "react-icons/cg"
import jwt_decode from "jwt-decode"
import cookie from 'js-cookie'

interface IProps {
  login: boolean
}

interface IJwt {
  name: string
}

export default function Navbar({ login } : IProps) {
  const [open, setOpen] = useState(false)
  const [token, setToken] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    setToken(cookie.get('token_') ? cookie.get('token_')! : '')
    const { name } : IJwt = token ? jwt_decode(token) : { name: '' } 
    setName(name)
  }, [token, name])

  return (
    <>
      <nav x-data="{ isOpen: false }" className="z-10 sticky top-0 bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <Link
                href="/"
              >
                <div className="font-bold text-xl px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200">Shortlink</div>
              </Link>
              <div className="flex lg:hidden">
                <button onClick={e => setOpen(!open)} type="button" className='translate-x-0 opacity-100 text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 mr-4' aria-label="toggle menu">
                  {
                    open ?
                      <CgClose size={24} />
                      :
                      <RxHamburgerMenu size={24} />
                  }
                </button>
              </div>
            </div>

            <div className={open ? 'absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center' : 'absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center hidden'}>
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <Link href="/#content" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Feature</Link>
                <Link href="/#faq" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Faq</Link>
                <Link href="/#contact" className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">About Me</Link>
              </div>

              <div className="flex items-center mt-4 lg:mt-0">
                {
                  login ?
                    <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                      <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                      </div>

                      <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">{ name }</h3>
                    </button>
                  :
                    <Link href="/login" className="p-2 -ml-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">Login</Link>
                }
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
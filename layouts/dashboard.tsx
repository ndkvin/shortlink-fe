import { useState, useEffect } from "react"
import jwt_decode from "jwt-decode"
import cookies from "js-cookie"
import Aside from "@components/dashboard/aside"
import Navbar from "@components/dashboard/navbar"
import Head from "next/head"
import AsideCollapse from "@components/dashboard/asideCollapse"
import { ToastContainer } from "react-toastify"

interface IProps {
  children: JSX.Element
}

interface IJwt {
  name: string
}

export default function Dashboard({ children }: IProps) {
  const [open, setOpen] = useState(true)
  const [token, setToken] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    setToken(cookies.get('token_') ? cookies.get('token_')! : '')
    const { name }: IJwt = token ? jwt_decode(token) : { name: '' }
    setName(name)
  }, [token])

  return (
    <>
      <Head>
        <title>Shortlink</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex">
          {
            open ?
              <Aside 
                name={name} 
                open={open}
                setOpen={setOpen}  
              />
            :
              <AsideCollapse />
          }

          <div className={open ? "w-full text-gray-700 bg-white dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200 md:ml-64" : "w-[100vw] text-gray-700 bg-white dark:bg-gray-900 dark:border-gray-600 dark:text-gray-200 md:ml-16"}>
            <Navbar sideOpen={open} setSideOpen={setOpen} setToken={setToken} name={name} />
            <ToastContainer />
            <div className="p-4 min-h-screen">
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
import form from '@helpers/form';
import Link from 'next/link'
import React, { ChangeEvent, useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import cookies from 'js-cookie'
import Router from 'next/router';
import { error } from '@components/common/toast';

export default function Form() {
  const [visible, setVisible] = useState(false)
  const [field, setField] = useState({})

  function changeField(e: ChangeEvent<HTMLInputElement>): void {
    const name = e.target.name
    const value = e.target.value

    setField({
      ...field,
      [name]: value
    })
  }

  async function login(e: ChangeEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault()

    const res = await form('POST', '/user/login', JSON.stringify(field))
    if (res.code == 200) {
      cookies.set('token_', res.access_token, { expires: 3 })
      setField({})
      Router.replace('/')
    } else {
      error(res.message)
    }
  }

  return (
    <>
      <form onSubmit={login}>
        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
          <input type="email" name="email" onChange={changeField} id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />
        </div>

        <div className="mt-6">
          <label className="block text-sm text-gray-500 dark:text-gray-300">Password</label>

          <div className="relative flex items-center mt-2">
            <button type="button" className="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto" onClick={e => setVisible(!visible)}>
              {
                visible ?
                  <AiOutlineEyeInvisible className="w-6 h-6 mx-4 text-gray-400 transition-colors duration-300 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400" />
                  :
                  <AiOutlineEye className="w-6 h-6 mx-4 text-gray-400 transition-colors duration-300 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400" />
              }

            </button>

            <input type={visible ? 'text' : 'password'} minLength={8} name="password" pattern="(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" onChange={changeField} placeholder="Super Secret Password" className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
          </div>
          <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">The password must contain uppercase, lowercase, numbers and special character, with 8 characters length</p>
        </div>

        <div className="mt-6">
          <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            Sign in
          </button>
        </div>
      </form>
      <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <Link href="/register" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</Link>.</p>
    </>
  )
}
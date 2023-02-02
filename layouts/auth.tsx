import Home from "@layouts/home";
import Image from "next/image";
import style from '@styles/auth.module.css'

type Props = {
  children: JSX.Element
  title: string
}

export default function Auth({ children, title } : Props) {
  return (
    <Home>
      <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
          <div className={style.image + ' hidden bg-cover lg:block lg:w-2/3'}>
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">Shortlink</h2>

                <p className="max-w-xl mt-3 text-gray-300">
                  Start sharing your links easy and secure using shortlink
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <p className="mt-3 text-gray-500 dark:text-gray-300 font-bold text-xl">{ title }</p>
              </div>

              <div className="mt-8">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Home>
  )
}
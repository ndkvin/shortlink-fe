import Link from "next/link"
import { RxDashboard } from "react-icons/rx"
import { TbBrandGoogleAnalytics } from "react-icons/tb"
import { IoLinkSharp } from "react-icons/io5"
import { FiSettings } from "react-icons/fi"
import { CgProfile } from "react-icons/cg"

interface IProps {
  name: string
}

export default function Aside({ name } : IProps): JSX.Element {
  return (
    <aside className="fixed top-0 left-0 z-40 flex-none flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-800 dark:border-gray-700">

      <Link href="/">
        <div className="font-bold text-xl px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md md:mt-0 dark:text-gray-200">Shortlink</div>
      </Link>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <Link className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200" href="#">
            <RxDashboard size={22}/>

            <span className="mx-4 font-medium">Dashboard</span>
          </Link>

          <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
            <TbBrandGoogleAnalytics size={22}/>

            <span className="mx-4 font-medium">Analytics</span>
          </Link>

          <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
            <IoLinkSharp size={22}/>

            <span className="mx-4 font-medium">Links</span>
          </Link>

          <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
            <FiSettings size={22}/>

            <span className="mx-4 font-medium">Settings</span>
          </Link>
        </nav>

        <Link href="#" className="flex items-center px-4 -mx-2">
          <CgProfile size={30} className="text-gray-400"/>
          <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">{ name }</span>
        </Link>
      </div>
    </aside>
  )
}
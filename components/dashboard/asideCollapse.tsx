import { RxDashboard } from "react-icons/rx"
import { TbBrandGoogleAnalytics } from "react-icons/tb"
import { IoLinkSharp } from "react-icons/io5"
import { FiSettings } from "react-icons/fi"
import { CgProfile } from "react-icons/cg"
import Link from "next/link"

export default function AsideCollapse (): JSX.Element {
  return (
    <aside className="fixed top-0 left-0 z-40 flex-none flex flex-col w-16 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-800 dark:border-gray-700">
      <nav className="flex flex-col flex-1 space-y-6">
        <Link href="/" className="mb-4">
          <img className="w-auto h-6 " src="https://merakiui.com/images/logo.svg" alt="" />
        </Link>

        <Link href="/dashboard" className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
          <RxDashboard size={22}/>
        </Link>

        <Link href="#" className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
          <TbBrandGoogleAnalytics size={22}/>
        </Link>

        <Link href="/dashboard/link" className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
          <IoLinkSharp size={22}/>
        </Link>

        <Link href="#" className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
          <FiSettings size={22}/>
        </Link>
      </nav>

      <div className="flex flex-col space-y-6">      
        <Link href="#">
          <CgProfile size={30} className="text-gray-400 mx-auto"/>
        </Link>
      </div>
    </aside>
  )
}
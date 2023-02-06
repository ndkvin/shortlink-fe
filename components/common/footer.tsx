import Link from "next/link"
import { FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 pt-4">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <Link href="/">
          <div className="font-bold text-xl px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200">Shortlink</div>
        </Link>

        <p className="text-sm text-gray-600 dark:text-gray-300">© Copyright { new Date().getFullYear() }. All Rights Reserved.</p>

        <div className="flex -mx-2">
          <Link href="https://instagram.com/ndkvin" target="_blank" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
            <FaInstagram size={20}/>
          </Link>

          <Link href="https://github.com/ndkvin" target="_blank" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
            <FaGithub size={20}/>
          </Link>
        </div>
      </div>
    </footer>
  )
}
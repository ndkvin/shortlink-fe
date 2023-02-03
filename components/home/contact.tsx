import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-blue-900 dark:bg-gray-900" id="contact">
      <div className="container flex flex-col px-6 py-12 mx-auto">
        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
          <div className="text-white lg:w-1/2 lg:mx-6">
            <h1 className="text-2xl font-semibold capitalize lg:text-3xl">Get a quote</h1>

            <p className="max-w-xl mt-6">Ask me everything and we would love to hear from you</p>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <span className="mx-2 text-white truncate w-72">
                  Surakarta, Indonesia
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>

                <span className="mx-2 text-white truncate w-72">andikaseptiano404@gmail.com</span>
              </p>
            </div>

            <div className="mt-6 md:mt-8">
              <h3 className="text-gray-300 ">Follow me</h3>

              <div className="flex mt-4 -mx-1.5 ">
                <Link target="_blank" className="mx-3 text-white transition-colors duration-300 transform hover:text-blue-500" href="#">
                  <FaTwitter size={24}/>
                </Link>

                <Link target="_blank" className="mx-3 text-white transition-colors duration-300 transform hover:text-blue-500" href="https://github.com/ndkvin">
                  <FaGithub size={24} />
                </Link>

                <Link target="_blank" className="mx-3 text-white transition-colors duration-300 transform hover:text-blue-500" href="#">
                  <FaLinkedin size={24} />
                </Link>
                <Link target="_blank" className="mx-3 text-white transition-colors duration-300 transform hover:text-blue-500" href="https://instagram.com/ndkvin">
                  <FaInstagram size={24} />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
              <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">Contact form</h1>

              <form className="mt-4">
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                  <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                  <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                  <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
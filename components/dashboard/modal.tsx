import { useState } from "react"

interface IProps {
  children: JSX.Element
  buttonText: string
}

export default function Modal({ children, buttonText } : IProps): JSX.Element {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button onClick={e => setOpen(true)} className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        { buttonText }
      </button>

      <div
        className={open ? "fixed inset-0 z-10 overflow-y-auto" : "fixed inset-0 z-10 overflow-y-auto hidden"}
        aria-labelledby="modal-title" role="dialog" aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen ml-16 sm:ml-0 px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

          <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
            <button onClick={e => setOpen(false)} type="button" className="text-gray-500 dark:text-gray-400 fixed top-2 right-0 rounded-md p-2 inline-flex items-center justify-center hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            { children }
          </div>
        </div>
      </div>
    </div >
  )
}
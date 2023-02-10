import Navbar from '@components/dashboard/navbar'
import Sidebar from '@components/dashboard/sidebar'

interface IProps {
  children: JSX.Element
}

export default function dashboard({ children } : IProps) {
  return (
    <>
      <Navbar />

      <Sidebar />

      <div className="mt-14 py-4 px-2 sm:ml-64 bg-gray-50 dark:bg-gray-800">
        Hallo
      </div>

    </>

  )
}
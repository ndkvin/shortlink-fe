import config from "@helpers/config"
import { useEffect, useState } from "react"
import { AiFillEdit } from "react-icons/ai"
import EditLinkModal from "@components/dashboard/link/editLinkModal"
import Link from "next/link"

interface ILink {
  created_at: string
  id: string
  is_lock: boolean
  link: string
  password: boolean
  slug: string
}


interface IProps {
  key: number
  data: ILink
}


export default function LinkCard({ key, data }: IProps): JSX.Element {
  const [openEditLink, setOpenEditLink] = useState(false)
  const [date, setDate] = useState("")

  useEffect(() => {
    const date = new Date(data.created_at)
    setDate(date.toDateString())
  })

  return (
    <>
      <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 mt-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">{ date }</span>
          <button onClick={e => setOpenEditLink(true)} className="flex px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabIndex={0} role="button">
            <AiFillEdit size={20} className="mr-1" />
            Edit
          </button>
        </div>

        <div className="mt-2">
          <Link target="_blank" href={ `${config.BASE_URL}/${data.slug}` } className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabIndex={0} role="link">{ `${config.BASE_URL}/${data.slug}` }</Link>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            { data.link }
          </div>
        </div>

        {/* <div className="flex items-center justify-between mt-4">
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline" tabIndex={0} role="link">Read more</a>

          <div className="flex items-center">
            <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar" />
            <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200" tabIndex={0} role="link">Khatab wedaa</a>
          </div>
        </div> */}
      </div>
      <EditLinkModal 
        open={openEditLink} 
        setOpen={setOpenEditLink} 
        data={{
          id: data.id,
          link: data.link,
          slug: data.slug
        }}
      />
    </>
  )
}
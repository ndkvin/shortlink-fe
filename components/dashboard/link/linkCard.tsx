import config from "@helpers/config"
import { SetStateAction, useEffect, useState } from "react"
import { AiFillEdit, AiOutlineQrcode, AiTwotoneDelete } from "react-icons/ai"
import EditModal from "@components/dashboard/link/editModal"
import QrModal from "./qrModal"
import { success } from "@components/common/toast"
import PasswordModal from "./passwordModal"
import { RiLockPasswordLine } from "react-icons/ri"
import DeleteModal from "@components/dashboard/link/deleteModal"

interface ILink {
  created_at: string
  id: string
  is_lock: boolean
  link: string
  password: boolean
  slug: string
  qr: string
}


interface IProps {
  data: ILink
  edit: boolean
  setEdit: React.Dispatch<SetStateAction<boolean>>
}


export default function LinkCard({ data, edit, setEdit }: IProps): JSX.Element {
  const [openEditLink, setOpenEditLink] = useState(false)
  const [date, setDate] = useState("")
  const [openQr, setOpenQr] = useState(false)
  const [openPassword, setOpenPassword] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(`${config.BASE_URL}/${data.slug}`)
    success("Link Copied")
  }

  useEffect(() => {
    const date = new Date(data.created_at)
    setDate(date.toDateString())
  })

  return (
    <>
      <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 mt-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">{date}</span>
          <div className="flex">
            <div className="relative inline-block ">
              <button onClick={e => setOpenDropdown(!openDropdown)} className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>

              <div
                className={openDropdown ? "absolute right-0 w-48 z-20 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800" : "hidden absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"}
              >
                <button onClick={e => setOpenEditLink(true)} className="w-full flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                  <AiFillEdit size={20} className="mr-1" />

                  <span className="mx-1">
                    Edit Link
                  </span>
                </button>

                <button onClick={e => setOpenQr(true)} className="w-full flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                  <AiOutlineQrcode size={20} className="mr-1" />

                  <span className="mx-1">
                    Qr Code
                  </span>
                </button>

                <button onClick={e => setOpenPassword(true)} className="w-full flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                  <RiLockPasswordLine size={20} className="mr-1" />

                  <span className="mx-1">
                    Password
                  </span>
                </button>

                <button onClick={e => setOpenDelete(true)} className="w-full flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                  <AiTwotoneDelete size={20} className="mr-1" />

                  <span className="mx-1">
                    Delete
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <button onClick={copy} className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabIndex={0} role="link">{`${config.BASE_URL}/${data.slug}`}</button>
          <div className="mt-2 text-gray-600 dark:text-gray-300">
            {data.link.slice(0, 50)} ...
          </div>
        </div>

        <EditModal
          open={openEditLink}
          setOpen={setOpenEditLink}
          data={{
            id: data.id,
            link: data.link,
            slug: data.slug
          }}
          edit={edit}
          setEdit={setEdit}
        />
        <QrModal
          open={openQr}
          setOpen={setOpenQr}
          qr={data.qr}
        />
        <PasswordModal
          open={openPassword}
          setOpen={setOpenPassword}
          id={data.id}
        />
        <DeleteModal 
          open={openDelete}
          setOpen={setOpenDelete}
          id={data.id}
          link={`${config.BASE_URL}/${data.slug}`}
          edit={edit}
          setEdit={setEdit}
        />
      </div>
    </>
  )
}
import config from "@helpers/config"
import { useContext, useState } from "react"
import { AiFillEdit, AiOutlineQrcode, AiTwotoneDelete, AiFillLock, AiFillUnlock } from "react-icons/ai"
import EditModal from "@components/dashboard/link/editModal"
import QrModal from "./qrModal"
import { error, success } from "@components/common/toast"
import PasswordModal from "./passwordModal"
import { RiLockPasswordLine } from "react-icons/ri"
import DeleteModal from "@components/dashboard/link/deleteModal"
import formAuth from "@helpers/formAuth"
import { StateContext } from "@providers/stateProvider"

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
}

export default function LinkCard({ data }: IProps): JSX.Element {
  const [openDropdown, setOpenDropdown] = useState(false)
  const [lock, setLock] = useState(data.is_lock)
  const { setId, setAction, edit, setEdit } = useContext(StateContext)

  const lockLink = async () => {
    if (!lock) {
      const res = await formAuth("POST", `/link/lock/${data.id}`, JSON.stringify({}))
      if (res.code == 200) {
        success(res.message)
        setEdit(!edit)
      } else {
        error(res.message)
      }
    } else {
      const res = await formAuth("DELETE", `/link/lock/${data.id}`, JSON.stringify({}))
      if (res.code == 200) {
        success(res.message)
        setEdit(!edit)
      } else {
        error(res.message)
      }
    }
    setLock(!lock)
  }



  const copy = () => {
    navigator.clipboard.writeText(`${config.BASE_URL}/${data.slug}`)
    success("Link Copied")
  }

  return (
    <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 mt-5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">{ new Date(data.created_at).toDateString() }</span>
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
              <button onClick={e => {
                setId(data.id);
                setAction("edit")
              }} className="w-full flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                <AiFillEdit size={20} className="mr-1" />

                <span className="mx-1">
                  Edit Link
                </span>
              </button>

              <button onClick={e => {
                setId(data.id);
                setAction("qr")
              }} className="w-full flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                <AiOutlineQrcode size={20} className="mr-1" />

                <span className="mx-1">
                  Qr Code
                </span>
              </button>

              <button onClick={e => {
                setId(data.id);
                setAction("password")
              }}
                className="w-full flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                <RiLockPasswordLine size={20} className="mr-1" />

                <span className="mx-1">
                  Password
                </span>
              </button>

              <button onClick={lockLink} className="w-full flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                {
                  lock ?
                    <AiFillLock size={20} className="mr-1" />
                    :
                    <AiFillUnlock size={20} className="mr-1" />
                }

                <span className="mx-1">
                  {
                    lock ?
                      <>
                        Unlock
                      </>
                      :
                      <>
                        lock
                      </>}
                </span>
              </button>

              <button onClick={e => {
                setId(data.id);
                setAction("delete")
              }} className="w-full flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
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
        data={{
          id: data.id,
          link: data.link,
          slug: data.slug
        }}
      />
      <QrModal
        id={data.id}
        qr={data.qr}
      />
      <PasswordModal
        id={data.id}
        password={data.password}
      />
      <DeleteModal
        id={data.id}
        link={`${config.BASE_URL}/${data.slug}`}
      />
    </div>
  )
}
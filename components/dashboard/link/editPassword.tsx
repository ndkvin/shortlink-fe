import { ChangeEvent, SetStateAction, useState } from "react"
import Modal from "../modal"
import formAuth from "@helpers/formAuth"
import { error, success } from "@components/common/toast"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import DeletePasswordModal from "./deletePasswordModal"

interface IProps {
  open: boolean
  setOpen: React.Dispatch<SetStateAction<boolean>>
  id: string
  link: string
  edit: boolean
  setEdit: React.Dispatch<SetStateAction<boolean>>
}

export default function SetPassword({ open, setOpen, id, link, edit, setEdit }: IProps): JSX.Element {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [oldVisible, setOldVisible] = useState(false)
  const [newVisible, setNewVisible] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  async function submitPassword(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    const res = await formAuth("PATCH", `/link/password/${id}`, JSON.stringify({
      "old_password": oldPassword,
      "new_password": newPassword
    }))

    if (res.code == 200) {
      setNewPassword("")
      setOldPassword("")
      success(res.message)
      setEdit(!edit)
    } else {
      setNewPassword("")
      setOldPassword("")
      error(res.message)
    }
  }

  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
      >
        <>
          <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
            Edit Password
          </h3>

          <form className="mt-4" onSubmit={submitPassword}>
            <label className="text-sm text-gray-700 dark:text-gray-200">
              Old Password
            </label>

            <div className="relative flex items-center mt-2">
              <button type="button" className="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto" onClick={e => setOldVisible(!oldVisible)}>
                {
                  oldVisible ?
                    <AiOutlineEyeInvisible className="w-6 h-6 mx-4 text-gray-400 transition-colors duration-300 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400" />
                    :
                    <AiOutlineEye className="w-6 h-6 mx-4 text-gray-400 transition-colors duration-300 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400" />
                }

              </button>

              <input value={oldPassword} type={oldVisible ? 'text' : 'password'} minLength={8} name="old_password" pattern="(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" onChange={e => setOldPassword(e.target.value)} placeholder="Super Secret Password" className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
            </div>

            <label className="block mt-2 text-sm text-gray-700 dark:text-gray-200">
              New Password
            </label>

            <div className="relative flex items-center mt-2">
              <button type="button" className="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto" onClick={e => setNewVisible(!newVisible)}>
                {
                  newVisible ?
                    <AiOutlineEyeInvisible className="w-6 h-6 mx-4 text-gray-400 transition-colors duration-300 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400" />
                    :
                    <AiOutlineEye className="w-6 h-6 mx-4 text-gray-400 transition-colors duration-300 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400" />
                }

              </button>

              <input value={newPassword} type={newVisible ? 'text' : 'password'} minLength={8} name="new_password" pattern="(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" onChange={e => setNewPassword(e.target.value)} placeholder="Super Secret Password" className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
            </div>

            <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">The password must contain uppercase, lowercase, numbers and special character, with 8 characters length</p>

            <div className="mt-4 sm:items-center mr-2 flex">
              <button onClick={e => setOpenDelete(true)} type="button" className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                Remove Pass
              </button>
              <button type="submit" className="mx-auto py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                Edit Passowrd
              </button>
            </div>
          </form>
        </>
      </Modal >
      <DeletePasswordModal 
        open={openDelete}
        setOpen={setOpenDelete}
        link={link}
        id={id}
        edit={edit}
        setEdit={setEdit}
      />
    </>
  )
}
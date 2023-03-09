import { ChangeEvent, useContext, useState } from "react"
import Modal from "../modal"
import formAuth from "@helpers/formAuth"
import { error, success } from "@components/common/toast"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { StateContext } from "@providers/stateProvider"

interface IProps {
  id: string
}

export default function SetPassword({ id }: IProps): JSX.Element {
  const [password, setPassword] = useState("")
  const [visible, setVisible] = useState(false)
  const { edit, setEdit } = useContext(StateContext)

  async function submitPassword(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    const res = await formAuth("POST", `/link/password/${id}`, JSON.stringify({
      password
    }))

    if (res.code == 200) {
      setPassword("")
      success(res.message)
      setEdit(!edit)
    } else {
      error(res.message)
    }
  }

  return (
    <Modal
      id={id}
      action={"password"}
    >
      <>
        <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
          Set password to protect link
        </h3>

        <form className="mt-4" onSubmit={submitPassword}>
          <label className="text-sm text-gray-700 dark:text-gray-200">
            Password
          </label>

          <div className="relative flex items-center mt-2">
            <button type="button" className="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto" onClick={e => setVisible(!visible)}>
              {
                visible ?
                  <AiOutlineEyeInvisible className="w-6 h-6 mx-4 text-gray-400 transition-colors duration-300 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400" />
                  :
                  <AiOutlineEye className="w-6 h-6 mx-4 text-gray-400 transition-colors duration-300 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400" />
              }

            </button>

            <input value={password} type={visible ? 'text' : 'password'} minLength={8} name="password" pattern="(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" onChange={e => setPassword(e.target.value)} placeholder="Super Secret Password" className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
          </div>
          <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">The password must contain uppercase, lowercase, numbers and special character, with 8 characters length</p>

          <div className="mt-4 sm:items-center mr-2">
            <button type="submit" className="mx-auto min-w-full py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
              Add
            </button>
          </div>
        </form>
      </>
    </Modal>
  )
}
import { error, success } from "@components/common/toast"
import Modal from "@components/dashboard/modal"
import formAuth from "@helpers/formAuth"
import { StateContext } from "@providers/stateProvider"
import { ChangeEvent, useContext } from "react"

interface IProps {
  id: string
  link: string
}

export default function DeleteModal({ id, link }: IProps): JSX.Element {
  const { edit, setEdit } = useContext(StateContext)

  async function deleteLink(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    const res = await formAuth("DELETE", `/link/${id}`, JSON.stringify({}))

    if (res.code == 200) {
      success(res.message)
      setEdit(!edit)
    } else {
      error(res.message)
    }
  }

  return (
    <Modal
      id={id}
      action="delete"
    >
      <>

        <h3 className="text-center text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
          Delete Link
        </h3>

        <p className="text-center mt-3 text-sm text-gray-400 dark:text-gray-600">Are you sure to delete { link }. All the data about this link will permanently deleted</p>

        <form className="mt-4" onSubmit={deleteLink}>
          <div className="mt-4 sm:items-center mr-2">
            <button type="submit" className="mx-auto min-w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
              Delete
            </button>
          </div>
        </form>
      </>
    </Modal>
  )
}
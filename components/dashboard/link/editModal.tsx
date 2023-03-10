import { error, success } from "@components/common/toast"
import Modal from "@components/dashboard/modal"
import formAuth from "@helpers/formAuth"
import { ChangeEvent, useContext, useState } from "react"
import { StateContext } from "@providers/stateProvider"

interface ILink {
  id: string
  link: string
  slug: string
}

interface IProps {
  data: ILink
}

export default function EditModal({data }: IProps): JSX.Element {
  const [link, setLink] = useState(data.link)
  const [slug, setSlug] = useState(data.slug)
  const { edit, setEdit } = useContext(StateContext)

  async function editLink(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    const res = await formAuth("PUT", `/link/${data.id}`, JSON.stringify({
      link,
      slug
    }))

    if (res.code == 200) {
      setEdit(!edit)
      success(res.message)
    } else {
      error(res.message)
    }
  }

  return (
    <Modal
      id={data.id}
      action="edit"
    >
      <>
        <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
          Edit link
        </h3>

        <form className="mt-4" onSubmit={editLink}>
          <label className="text-sm text-gray-700 dark:text-gray-200">
            Link
          </label>

          <label className="block mt-3" >
            <input onChange={e => setLink(e.target.value)} value={link} type="text" name="link" className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" required />
          </label>

          <label className="block text-sm text-gray-700 dark:text-gray-200 mt-3">
            Name
          </label>

          <label className="block mt-3" >
            <input onChange={e => setSlug(e.target.value)} value={slug} minLength={3} type="text" name="slug" className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" required />
          </label>

          <div className="mt-4 sm:items-center mr-2">
            <button type="submit" className="mx-auto min-w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
              Edit
            </button>
          </div>
        </form>
      </>
    </Modal>
  )
}
import Error from "@components/common/error"
import Success from "@components/common/success"
import Modal from "@components/dashboard/modal"
import config from "@helpers/config"
import formAuth from "@helpers/formAuth"
import { ChangeEvent, SetStateAction, useState } from "react"

interface ILink {
  id: string
  link: string
  slug: string
}

interface IProps {
  open: boolean
  setOpen: React.Dispatch<SetStateAction<boolean>>
  data: ILink
  edit: boolean
  setEdit: React.Dispatch<SetStateAction<boolean>>
}


export default function EditLinkModal({ open, setOpen, data, edit, setEdit }: IProps): JSX.Element {
  const [link, setLink] = useState(data.link)
  const [slug, setSlug] = useState(data.slug)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  async function editLink(e : ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")
    setSuccess("")
  
    const res = await formAuth("PUT", `/link/${data.id}`, JSON.stringify({
      link,
      slug
    }))

    if(res.code != 200) {
      setError(res.message)
    } else {
      setSuccess(res.message)
      setEdit(!edit)    
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
            Create New Short Link
          </h3>

          {
            success != "" &&
            <div className="mx-auto mt-4">
              <Success message={success} />
            </div>
          }

          {
            error != "" &&
            <div className="mx-auto mt-4">
              <Error message={error} />
            </div>
          }

          <form className="mt-4" onSubmit={editLink}>
            <label className="text-sm text-gray-700 dark:text-gray-200">
              Link
            </label>

            <label className="block mt-3" >
              <input onChange={e => setLink(e.target.value)} value={link} type="text" name="link" id="link"  className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" required />
            </label>

            <label className="block text-sm text-gray-700 dark:text-gray-200 mt-3">
              Name
            </label>

            <label className="block mt-3" >
              <input onChange={e => setSlug(e.target.value)} value={slug} minLength={3} type="text" name="slug" id="slug" className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" required />
            </label>

            <div className="mt-4 sm:items-center mr-2">
              <button type="submit" className="mx-auto min-w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                Send invites
              </button>
            </div>
          </form>
        </>
      </Modal>
    </>
  )
}
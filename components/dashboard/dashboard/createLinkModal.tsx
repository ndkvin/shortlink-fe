import Modal from "@components/dashboard/modal";
import config from "@helpers/config";
import formAuth from "@helpers/formAuth";
import { ChangeEvent, useState } from "react";
import Success from "@components/common/success"
import Error from "@components/common/error";

export default function CreateLinkModal(): JSX.Element {
  const [link, setLink] = useState("")
  const [slug, setSlug] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  async function createLink(e: ChangeEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault()
    setError('')
    setSuccess('')

    const res = await formAuth('POST', '/link', JSON.stringify({
      link,
      slug
    }))

    if (res.code == 201) {
      setLink("")
      setSlug("")
      setSuccess(res.message)
    } else {
      setError(res.message)
    }
  }

  return (
    <Modal buttonText="Create New Link">
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

        <form className="mt-4" onSubmit={createLink}>
          <label className="text-sm text-gray-700 dark:text-gray-200">
            Link
          </label>

          <label className="block mt-3" >
            <input onChange={ e => setLink(e.target.value) } value={link} type="text" name="link" id="link" placeholder="https://youtube.com" className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" required />
          </label>

          <label className="block text-sm text-gray-700 dark:text-gray-200 mt-3">
            Name
          </label>

          <label className="block mt-3" >
            <input onChange={e => setSlug(e.target.value)} value={slug} minLength={3} type="text" name="slug" id="slug" placeholder={`${config.BASE_URL}/name`} className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" required />
          </label>

          <div className="mt-4 sm:items-center mr-2">
            <button type="submit" className="mx-auto min-w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
              Send invites
            </button>
          </div>
        </form>
      </>
    </Modal>
  )
}
import { SetStateAction } from "react"
import Modal from "@components/dashboard/modal"
import config from "@helpers/config"

interface IProps {
  open: boolean
  setOpen: React.Dispatch<SetStateAction<boolean>>
  id: string
}

export default function QrModal({ open, setOpen, id }: IProps): JSX.Element {
  return (
    <Modal
      open={open}
      setOpen={setOpen}
    >
      <>
        <h3 className="text-center mx-auto text-lg font-bold leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
          Share your link with Qr Code
        </h3>
        <p className="mt-2 mx-auto text-center text-gray-800 dark:text-gray-100 text-xs">Refresh the page after you updated the link to get the updated qr code</p>
        <img src={`${config.API_URL}/${id}.png`} alt="qr code" className="mt-4 mx-auto"/>
      </>
    </Modal>
  )
}
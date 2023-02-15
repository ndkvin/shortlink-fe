import { SetStateAction } from "react"
import Modal from "@components/dashboard/modal"
import config from "@helpers/config"

interface IProps {
  open: boolean
  setOpen: React.Dispatch<SetStateAction<boolean>>
  qr: string
}

export default function QrModal({ open, setOpen, qr }: IProps): JSX.Element {
  return (
    <Modal
      open={open}
      setOpen={setOpen}
    >
      <>
        <h3 className="text-center mx-auto text-lg font-bold leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
          Share your link with Qr Code
        </h3>
        <img src={`${config.API_URL}/${qr}.png`} alt="qr code" className="mt-4 mx-auto"/>
      </>
    </Modal>
  )
}
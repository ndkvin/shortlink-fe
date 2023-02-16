import { SetStateAction } from "react"
import SetPassword from "@components/dashboard/link/setPassword"
import EditPassword from "@components/dashboard/link/editPassword"

interface IProps {
  open: boolean
  setOpen: React.Dispatch<SetStateAction<boolean>>
  id: string
  edit: boolean
  link: string
  setEdit: React.Dispatch<SetStateAction<boolean>>
  password: boolean
}


export default function PasswordModal({ open, setOpen, id, edit, link, setEdit, password }: IProps): JSX.Element {

  return (
    <>
      {
        password ?
          <EditPassword
            open={open}
            setOpen={setOpen}
            id={id}
            edit={edit}
            setEdit={setEdit}
            link={link}
          />
          :
          <SetPassword
            open={open}
            setOpen={setOpen}
            id={id}
            edit={edit}
            setEdit={setEdit}
          />

      }
    </>
  )
}
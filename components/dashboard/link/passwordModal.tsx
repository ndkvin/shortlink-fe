import SetPassword from "@components/dashboard/link/setPassword"
import EditPassword from "@components/dashboard/link/editPassword"

interface IProps {
  id: string
  password: boolean
}

export default function PasswordModal({ id, password }: IProps): JSX.Element {

  return (
    <>
      {
        password ?
          <EditPassword
            id={id}
          />
          :
          <SetPassword
            id={id}
          />
      }
    </>
  )
}
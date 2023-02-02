import Form from '@components/login/form'
import Auth from '@layouts/auth'

export default function Login() {
  return(
    <Auth title='Sign In to your account'>
      <Form />
    </Auth>
  )
}
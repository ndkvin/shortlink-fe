import Form from '@components/register/form'
import Auth from '@layouts/auth'

export default function Login() : JSX.Element {
  return(
    <Auth title='Register new account'>
      <Form />
    </Auth>
  )
}
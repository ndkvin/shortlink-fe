import Form from '@components/login/form'
import Auth from '@layouts/auth'
import { Context } from 'vm'
import config from '@helpers/config'
import nookies from 'nookies'

export default function Login() : JSX.Element {
  return(
    <Auth title='Sign In to your account'>
      <Form />
    </Auth>
  )
}

export async function getServerSideProps(ctx: Context) {
  // check login
  const cookies = nookies.get(ctx)

  if (cookies.token_) {
    return {
      redirect: {
        destination: '/'
      }
    }
  }

  // refresh csrf token
  const response = await fetch(config.API_URL)

  const cookie = response.headers.get("set-cookie");
  if (!cookie) return { notFound: true };

  ctx.res.setHeader("set-cookie", cookie);

  return { 
    props: {

    } 
  }
}
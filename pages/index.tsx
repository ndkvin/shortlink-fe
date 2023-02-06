import Home from '@layouts/home'
import Hero from '@components/home/hero'
import Content from "@components/home/content"
import Faq from '@components/home/faq'
import Contact from '@components/home/contact'
import { Context } from 'vm'
import nookies from 'nookies'

interface IProps {
  login: boolean
}

export default function home({ login } : IProps) : JSX.Element {
  return (
      <Home login={login}>
        <>
          <Hero login={login}/>
          <Content />
          <Faq />
          <Contact />
        </>
      </Home>
  )
}

export async function getServerSideProps(ctx: Context) {
  // check login
  const cookies = nookies.get(ctx)

  if (cookies.token_) {
    return {
      props : {
        login: true,
      }
    }
  }

  return {
    props : {
      login: false,
    }
  }
}
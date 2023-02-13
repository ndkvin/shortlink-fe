import nookies from 'nookies'
import config from "@helpers/config"
import Dashboard from "@layouts/dashboard"
import { Context } from "vm"
import getAuth from "@helpers/getAuth"
import LinkCard from '@components/dashboard/link/linkCard'
import { useEffect } from 'react'

interface IProps {
  links: any
}

interface ILink {
  created_at: string
  id: string
  is_lock: boolean
  link: string
  password: boolean
  slug: string
}

export default function Link({ links }: IProps): JSX.Element {
  useEffect(() => console.log(links))

  return (
    <Dashboard>
      <>
        { links.data.map( (link : ILink, index : number) => <LinkCard key={index} data={link}/>) }
      </>
    </Dashboard>
  )
}

export async function getServerSideProps(ctx: Context) {
  const cookies = nookies.get(ctx)

  const response = await fetch(config.API_URL)

  const cookie = response.headers.get("set-cookie");
  if (!cookie) return { notFound: true };

  ctx.res.setHeader("set-cookie", cookie);

  const links = await getAuth("/link", cookies.token_)

  return {
    props: {
      links
    }
  }
}
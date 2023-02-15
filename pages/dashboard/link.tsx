import nookies from 'nookies'
import config from "@helpers/config"
import Dashboard from "@layouts/dashboard"
import { Context } from "vm"
import getAuthServer from "@helpers/getAuthServer"
import LinkCard from '@components/dashboard/link/linkCard'
import { useEffect, useState } from 'react'
import getAuth from '@helpers/getAuth'

interface IProps {
  data: any
}

interface ILink {
  created_at: string
  id: string
  is_lock: boolean
  link: string
  password: boolean
  slug: string
  qr: string
}

export default function Link({ data }: IProps): JSX.Element {
  const [links, setLinks] = useState([])
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const links = await getAuth("/link")
      setLinks(links.data)
    }

    fetchData()
  }, [edit])

  return (
    <Dashboard>
      <>
        {links.map((link: ILink, index: number) => <LinkCard key={index} data={link} edit={edit} setEdit={setEdit} />)}
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

  const data = await getAuthServer("/link", cookies.token_)

  return {
    props: {
      data
    }
  }
}
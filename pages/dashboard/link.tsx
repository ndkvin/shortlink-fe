import config from "@helpers/config"
import Dashboard from "@layouts/dashboard"
import { Context } from "vm"
import LinkCard from '@components/dashboard/link/linkCard'
import { useContext, useEffect, useState } from 'react'
import getAuth from '@helpers/getAuth'
import { StateContext } from '@providers/stateProvider'

interface ILink {
  created_at: string
  id: string
  is_lock: boolean
  link: string
  password: boolean
  slug: string
  qr: string
}

export default function Link(): JSX.Element {
  const [links, setLinks] = useState([])

  const { edit } = useContext(StateContext)

  useEffect(() => {
    async function fetchData() {
      const links = await getAuth("/link")
      setLinks(links.data)
    }

    fetchData()
  }, [edit])

  return (
    <Dashboard>
      <div className="flex flex-wrap">
        {links.map((link: ILink, index: number) => <LinkCard key={index} data={link} />)}
      </div>
    </Dashboard>
  )
}

export async function getServerSideProps(ctx: Context) {
  const response = await fetch(config.API_URL)

  const cookie = response.headers.get("set-cookie");
  if (!cookie) return { notFound: true };

  ctx.res.setHeader("set-cookie", cookie);

  return {
    props: {

    }
  }
}
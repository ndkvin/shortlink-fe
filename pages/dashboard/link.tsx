import nookies from 'nookies'
import config from "@helpers/config"
import Dashboard from "@layouts/dashboard"
import { Context } from "vm"
import getAuth from "@helpers/getAuth"
import { useEffect, useState } from "react"

interface IProps {
  links: any
}

interface ILink {
  id: string
  
}

export default function Link({ links } : IProps) : JSX.Element {
  
  // async function get() : Promise<any> {
  //   const linksData = await getAuth("/link")
  //   console.log(linksData)
  // }
  useEffect(() => console.log(links), [])
  return(
    <Dashboard>
      <>
        hallo
        { links.data.map( (link : ILink) => link.id + "                    +++++             ") }
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
import DashboardLayout from "@layouts/dashboard"
import { useState } from "react"
import CreateLinkModal from "@components/dashboard/dashboard/createLinkModal"
import { Context } from "vm"
import config from "@helpers/config"

export default function Dashboard(): JSX.Element {
  const [open, setOpen] = useState(false)

  return (
    <DashboardLayout>
      <>
        <CreateLinkModal />
      </>
    </DashboardLayout >
  )
}

export async function getServerSideProps(ctx: Context) {

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
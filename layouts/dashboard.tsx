import Head from "next/head";
import Aside from "@components/dashboard/aside";

interface IProps {
  children: JSX.Element
}

export default function Dashboard( { children } : IProps ) : JSX.Element{
  return (
    <>
      <Head>
        <title>Shortlink</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Aside>
            { children }
        </Aside>
      </main>
    </>
  )
}
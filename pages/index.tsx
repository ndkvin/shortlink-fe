import Head from 'next/head'
import Home from '@layouts/home'
import Hero from '@components/home/hero'
import Content from "@components/home/content"
import Faq from '@components/home/faq'


export default function home() {
  return (
    <>
      <Head>
        <title>Shortlink</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Home>
            <>
              <Hero />
              <Content />
              <Faq />
            </>
          </Home>
      </main>
    </>
  )
}

import Head from 'next/head'
import Home from '@layouts/home'
import Hero from '@components/home/hero'
import Content from "@components/home/content"
import Faq from '@components/home/faq'
import Contact from '@components/home/contact'

export default function home() : JSX.Element {
  return (
      <Home>
        <>
          <Hero />
          <Content />
          <Faq />
          <Contact />
        </>
      </Home>
  )
}

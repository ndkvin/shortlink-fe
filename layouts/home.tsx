import Hero from "@components/home/hero"
import Navbar from "@components/home/navbar"
import Footer from "@components/home/footer"


type Props = {
  children: JSX.Element
}

export default function Home({ children } : Props ) {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}
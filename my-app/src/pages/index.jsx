import Head from 'next/head'
import { Banner } from '../components/Banner'
import { Benefits } from '../components/Benefits'
import { ChooseOrigin } from '../components/ChooseOrigin'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Slide } from '../components/Slide'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Header />

      <main>
        <Banner />

        <Benefits />

        <ChooseOrigin />

        <Slide />
      </main>

      <Footer />
    </div>
  )
}

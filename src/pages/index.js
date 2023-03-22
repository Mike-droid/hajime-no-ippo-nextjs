import Head from 'next/head'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <>
    <Head>
      <Navbar/>
    </Head>
      <h1 className='text-3xl font-bold'>
        Hajime no ippo!
      </h1>
    </>
  )
}

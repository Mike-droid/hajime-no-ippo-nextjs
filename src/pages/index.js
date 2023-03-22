import Navbar from '@/components/navbar'
import { MyFooter } from '@/components/myFooter'

export default function Home() {
  return (
    <>
      <Navbar/>
      <h1 className='text-3xl font-bold'>
        Hajime no ippo!
      </h1>
      <MyFooter/>
    </>
  )
}

import Navbar from '@/components/navbar'
import { MyFooter } from '@/components/myFooter'

export default function Home() {
  return (
    <>
      <Navbar/>
      <h1 className='text-3xl sm:text-9xl font-bold text-center mt-4'>
        <span className='text-blue-500'>
          Hajime no
        </span>
        <span className='text-red-500'>
          ippo!
        </span>
      </h1>
      <MyFooter/>
    </>
  )
}

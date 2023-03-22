import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-gray-800 flex flex-row mb-3 h-14 text-xl'>
      <Link href='/' className='flex-auto'>
        Home
      </Link>
      <Link href='/boxers' className='flex-auto'>
        Boxers
      </Link>
    </nav>
  )
}

export default Navbar

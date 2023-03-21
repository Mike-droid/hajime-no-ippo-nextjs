import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function Home({ data }) {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hajime no ippo!
      </h1>
      <Link href='/boxers'>
        Boxers
      </Link>
    </>
  )
}

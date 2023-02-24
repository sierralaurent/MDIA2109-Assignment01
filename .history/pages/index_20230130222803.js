import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <nav>
      <Link href="/about">About</Link>
      <Head>
        <title>About Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta name="title" content="Assignment #1 - About Us Page" />
        <meta name="description" content="BCIT Digital Design and Development Diploma" />
      </Head>
    </nav>
  )
}

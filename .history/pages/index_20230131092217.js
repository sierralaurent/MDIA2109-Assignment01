import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <nav>
      <h1>hello</h1>
      <Link href="/about">
          <h2>About Page</h2>
        </Link>
    </nav>
  )
}

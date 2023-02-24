import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <nav>
      <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Home Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
        </Head>
        <main className={styles.main} >
          <div>
          <Link href="/about">
          <button>More About Us</button>
        </Link>
        <h1>An investment in knowledge pays the best interest.</h1>
        <p>Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.'</p>
        
        
        <Link href="/contact">
        <button>Contact Us</button>
        </Link>
          </div>
          <div>
            <a href="/about">
              <span>
                <img
                src="icons/downwardArrow.png"   
                />
              </span>
            </a>
          </div>
        </main>
    </nav>
    </>
  )
}

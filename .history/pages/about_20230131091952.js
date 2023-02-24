import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function About() {
    return (
        <>
        <Head>
        <title>About Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - About Us Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <div>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <div>
            <p>coffeee</p>
            <p>coffeee</p>
            <p>coffeee</p>
            <p>coffeee</p>
            <p>coffeee</p>
            <p>coffeee</p>
            <p>coffeee</p>
            <div>
                <h2>pizzaa</h2>
                <h2>pizzaa</h2>
            </div>
            <div>
                <h3>pickles</h3>
            </div>
        </div>
        </div>
        <div id="carousel">
        <img src="/icons/leftArrow.png" alt="leftArrow"></img>
        <img src="/icons/rightArrow.png" alt="rightArrow"></img>
        </div>
      </main>
        </>
        
    )
  }
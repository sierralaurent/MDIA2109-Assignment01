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
      <main className={styles.main}>
        <div>
        <h1>Hello</h1>
        <p>coffeee</p>
        <p>coffeee</p>
        <p>coffeee</p>
        <h2>pizzaa</h2>
        <p>coffeee</p>
        <h3>pickles</h3>
        <p>coffeee</p>
        <p>coffeee</p>
        <h2>pizzaa</h2>
        <p>coffeee</p>
        </div>

        <div className="carouselImage">
        <img src="/icons/leftArrow.png" alt="leftArrow"></img>
        <img src="/icons/rightArrow.png" alt="rightArrow"></img>
        <h1>Hello</h1>
        <ul>
            <li>Applied & Natural Sciences</li>
            <li>Business & Media</li>
            <li>Computing & IT</li>
            <li>Engineerin</li>
            <li>Health Sciences</li>
            <li>Trades & Apprenticeships</li>
        </ul>
        </div>
        <div>
            <a href="/contact">
              <span>
              <img
                src="icons/upwardArrow.png"   
                />
                <img
                src="icons/downwardArrow.png"   
                />
              </span>
            </a>
          </div>
      </main>
        </>
        
    )
  }
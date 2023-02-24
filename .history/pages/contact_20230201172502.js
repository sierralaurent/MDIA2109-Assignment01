import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Contact() {
    return (
        <>
        <Head>
        <title>Contact Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Contact Us Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.nav}>
            <img src="icons/menu-icon.png" className={styles.icon1}/>
            <img src="icons/graduation-hat.png" className={styles.icon2}/>
          </div>
          <div className={styles.header}><h1>Contact Us</h1></div>
        <div className={styles.middle}>
            <p>Want to discuss? Lets chat!</p>
            <div className={styles.inputs}>
              <form>
                <fieldset>
                <table>
                    <thead>
                        <tr></tr>
                    </thead>
                    <thead>
                        <tr></tr>
                    </thead>
                </table>
                </fieldset>
            </form>
            <button type="submit">Submit</button>
              </div>
        </div>
        <div className={styles.bottom}>
            <a href="/about">
              <span className={styles.icon3}>
                <img src="icons/upwardArrow.png"/>
              </span>
            </a>
          </div>
      </main>
        </>
    )
  }
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
          <div className={styles.header}>
            <h1>Contact Us</h1>
            <p>Want to discuss? Lets chat!</p></div>
            <div className={styles.middle2}>
              <div className={styles.inputs}>
              <form>
                <fieldset>
                <table>
                    <thead>
                        <tr>
                          <label for="fname">First Name:</label>
                          <input type="text" id="fname" name="fname"></input>
                        </tr>
                        <tr>
                          <label for="lname">Last Name:</label>
                          <input type="text" id="name" name="lname"></input>
                        </tr>
                    </thead>
                    <thead>
                    <label for="email">Email:</label>
                          <input type="email" id="email" name="email"></input>
                    </thead>
                </table>
                </fieldset>
            </form>
            <button type="submit" className={styles.butt}>Submit</button>
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
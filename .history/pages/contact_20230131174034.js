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
        <div>
        <h1>Hello</h1>
        <div>
            <p>coffeee</p>
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
        </>
    )
  }
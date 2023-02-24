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
      <main>
        <div>
        <h1>Hello</h1>
        <div>
            <p>coffeee</p>
            <form>
                <label for="fname">First Name:</label>
                <input type="text" id="fname" name="fname"></input>
                <label for="lname">Last Name:</label>
                <input type="text" id="lname" name="lname"></input>
                <label for="email">email:</label>
                <input type="text" id="email" name="email"></input>
                <input type="submit" value="submit">submit</input>
            </form>
        </div>
        </div>
      </main>
        </>
        
    )
  }
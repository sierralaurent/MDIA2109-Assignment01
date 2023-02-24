import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import menupop from '..components/menupop'

export default function About() {
    return (
        <>
        <Header>
          <title>About Us</title>
          <meta name="author" content="MDIA 2109" />
          <meta name="title" content="Assignment #1 - About Us Page" />
          <meta name="description" content="BCIT Digital Design and Development Diploma" />
          <link rel="icon" href="/favicon.png" />
        </Header>
        <main className={styles.main}>
          <div className={styles.description}>

          </div>
        </main>
      </>
    )
  }
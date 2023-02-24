import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import "../carousel.css";
import Router from "next/router";

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
        <div className={styles.About}>
        <h1>About Us</h1>
        </div>
        <div className={styles.infodiv}>
        <div className={styles.info}>
        <p>coffeee</p>
        <p>coffeee</p>
        <p>coffeee</p>
        <h2>Information Sessions</h2>
        <p>coffeee</p>
        <h3>Big Info</h3>
        <p>coffeee</p>
        <p>coffeee</p>
        <h2>Campus Tours</h2>
        <p>coffeee</p>
        </div>
        </div>
        export default () => (
  <div className="slider">
    <Link href="0.jpg" scroll={false}>
      <a>1</a>
    </Link>
    <Link href="1.jpg" scroll={false}>
      <a>2</a>
    </Link>
    <Link href="2.jpg" scroll={false}>
      <a>3</a>
    </Link>
    <Link href="3.jpg" scroll={false}>
      <a>4</a>
    </Link>
    <Link href="4.jpg" scroll={false}>
      <a>5</a>
    </Link>

    <div className="slides">
      <div name="slide-1" id="slide-1">
        1
      </div>
      <div name="slide-2" id="slide-2">
        2
      </div>
      <div id="slide-3">3</div>
      <div id="slide-4">4</div>
      <div id="slide-5">5</div>
    </div>
  </div>
        );
        <div>
        <img src="/icons/leftArrow.png" alt="leftArrow"></img>
        <img src="/icons/rightArrow.png" alt="rightArrow"></img>
          <div  className={styles.About}>
          <h1>Departments</h1>
          </div>
          <div className={styles.infodiv}>
          <div className={styles.info}>
        <ul>
            <li>Applied & Natural Sciences</li>
            <li>Business & Media</li>
            <li>Computing & IT</li>
            <li>Engineerin</li>
            <li>Health Sciences</li>
            <li>Trades & Apprenticeships</li>
        </ul>
        </div>
          </div>
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
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
      <main className={styles.mainABOUT}>
        <div className={styles.About}>
        <h1>About Us</h1>
        </div>
        <div className={styles.infodiv}>
        <div className={styles.info}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur tempus ornare. Aenean convallis ligula quis arcu dignissim.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur tempus ornare. Aenean convallis ligula quis arcu dignissim, nec accumsan diam sagittis. Proin sagittis lacinia porttitor. Integer vitae ligula semper, rutrum ligula ac, aliquam turpis. Nulla maximus diam ac</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur tempus ornare. Aenean convallis ligula quis arcu dignissim, nec accumsan diam sagittis. Proin sagittis lacinia porttitor. Integer vitae ligula semper</p>
        <h2>Information Sessions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur tempus ornare. Aenean convallis ligula quis arcu dignissim, nec accumsan diam sagittis. Proin sagittis lacinia porttitor. Integer vitae ligula semper</p>
        <h3>Big Info</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur tempus ornare. Aenean convallis ligula quis arcu dignissim, nec accumsan diam sagittis. Proin sagittis lacinia porttitor. Integer vitae ligula semper, rutrum ligula ac, aliquam turpis. Nulla maximus diam ac sapien rutrum, eget placerat ligula iaculis. Nulla eleifend nulla ligula, eget lacinia odio pretium sit amet. Nullam volutpat urna nec augue</p>
        <p>coffeee</p>
        <h2>Campus Tours</h2>
        <p>coffeee</p>
        </div>
        </div>
        
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
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/About.module.css'
import Link from 'next/link'

import { useState } from 'react';
import image1 from './carousel-images/0.jpg'
import image2 from './carousel-images/1.jpg'
import image3 from './carousel-images/2.jpg'

export default function carousel() {

const images = [ image1, image2, image3] = useState(0);

return (
    <div>
        {images}
    </div>
)
}


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
      <div className={styles.nav}>
            <img src="icons/menu-icon.png" className={styles.icon1}/>
            <img src="icons/graduation-hat.png" className={styles.icon2}/>
          </div>
        <div className={styles.About}>
        <h1>About Us</h1>
        </div>
        <div className={styles.infodiv}>
        <div className={styles.info}>
        <p>We are proud to deilver an education that goes beyond textbooks and classrooms.</p>
        <p>Our Students gain the technical skills, real-world experience, and problem-solving ability needed to embrace complexity and lead innovation in a rapidly changing workforce.</p>
        <p>Through close collaboration with industry, our network of alumni and partners continue to achieve global success.</p>
        <h2>Information Sessions</h2>
        <p>Information sessions are a simple way to figure out the next step along your career path. Learn more about the programs that interest you.</p>
        <h3>Big Info</h3>
        <p>Big info is the largest program expo and information session at BCIT. It's your chance to find out about all our programs - from business, computing and health to engineering, trades, and applied sciences.</p>
        <p>If you missed our fall event the next Big Info is scheduled to return on February 15, 2023.</p>
        <h2>Campus Tours</h2>
        <p>Tours run weekdays September to may, on our Burnaby campus. See BCIT in person and get a taste of campus life.</p>
        </div>
        <div className={styles.arrows}>
        <img src="/icons/leftArrow.png" alt="leftArrow" className={styles.icon2}></img>
        <img src="/icons/rightArrow.png" alt="rightArrow" className={styles.icon2}></img>
        </div>
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
        <div className={styles.arrowsbottom}>
            <a href="/contact">
              <span>
              <img src="icons/upwardArrow.png" className={styles.icon3}/>
              <img src="icons/downwardArrow.png" className={styles.icon3}/>
              </span>
            </a>
          </div>
      </main>
        </>
        
    )
  }
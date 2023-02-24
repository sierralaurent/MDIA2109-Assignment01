import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
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
        <div class="slideshow-container">

  
          <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
    <img src="0.jpg" style="width:100%"></img>
    <div class="text">Caption Text</div>
    </div>

    <div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="1.jpg" style="width:100%"></img>
    <div class="text">Caption Two</div>
    </div>

    <div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="2.jpg" style="width:100%"></img>
    <div class="text">Caption Three</div>
    </div>


      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>
      </div>
      


<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
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
import React,{useState} from 'react'

import {arrowRight} from './icons/rightArrow.jpg'
import {arrowLeft} from './icons/leftArrow.jpg'

import img1 from './carousel-images/0.jpg'
import img2 from './carousel-images/1.jpg'
import img3 from './carousel-images/2.jpg'

import {motion} from 'framer-motion'

const imgBoxVariants = {
  hidden:{
    x: 500,
    opacity: 0
  },
  visible:{
    x: 0,
    opacity: 1,
    transition:{
      delay: 0.5, duration: 0.5
    }
  }
}
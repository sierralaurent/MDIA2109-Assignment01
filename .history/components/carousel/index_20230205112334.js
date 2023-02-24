import React,{useState} from 'react'

import './caroursel.module.css'

import img1 from './carousel-images/0.jpg'
import img2 from './carousel-images/1.jpg'
import img3 from './carousel-images/2.jpg'

import {motion} from 'framer-motion'
import { Carousel } from 'react-bootstrap'

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
  
  
  export const App = () => {
  
    const [step, setStep] = useState(1);
  
    const handleLeftArrow=()=>{
      if(step===1){
        setStep(3);
      }
      else{
      setStep(step-1);
      }
    }
  
    const handleRightArrow=()=>{
      if(step===3){
        setStep(1);
      }
      else{
        setStep(step+1);
      }
    }
  
    const goToSlide1=()=>{
      setStep(1);
    }
  
    const goToSlide2=()=>{
      setStep(2);
    }
  
    const goToSlide3=()=>{
      setStep(3);
    }
  
    return (
      <div className='wrapper'>
  
        <div className='content'>
  
          <div className='left-arrow' onClick={handleLeftArrow}>
            <Icon icon={arrowLeft} size={28}/>
          </div>
  
         {step===1&&<motion.div className='img-box' variants={imgBoxVariants}
         initial="hidden" animate="visible">
           <img src={img1} alt="img1"/>        
         </motion.div>}
  
         {step===2&&<motion.div className='img-box' variants={imgBoxVariants}
         initial="hidden" animate="visible">
           <img src={img2} alt="img1"/>         
         </motion.div>}
  
         {step===3&&<motion.div className='img-box' variants={imgBoxVariants}
         initial="hidden" animate="visible">
           <img src={img3} alt="img1"/>         
         </motion.div>}
  
          <div className='right-arrow' onClick={handleRightArrow}>
            <Icon icon={arrowRight} size={28}/>
          </div>
  
        </div>
  
        <div className='indicators-box'>
  
            {step===1&&<><div className='indicator active'></div>
            <div className='indicator' onClick={goToSlide2}></div>
            <div className='indicator' onClick={goToSlide3}></div></>}
  
            {step===2&&<><div className='indicator' onClick={goToSlide1}></div>
            <div className='indicator active'></div>
            <div className='indicator' onClick={goToSlide3}></div></>}
  
            {step===3&&<><div className='indicator' onClick={goToSlide1}></div>
            <div className='indicator' onClick={goToSlide2}></div>
            <div className='indicator active'></div></>}
  
        </div>
        
      </div>
    )
  }
  
  export default App
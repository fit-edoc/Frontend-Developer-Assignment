import { motion } from 'motion/react'
import React from 'react'


const UpperBirds = () => {
  return (
    <div className='h-[50vh] absolute top-0 w-screen hidden md:block'>
        <motion.img animate={{x:[10,0,10],y:[10,0,10]}}  transition={{repeat:Infinity,repeatType:"reverse",duration:3}} src="/smallbird.png" sizes={20} className='absolute left-[16%] top-[50%]' alt="" />
        <motion.img  animate={{x:[10,0,-10],y:[10,0,10]}}  transition={{repeat:Infinity,repeatType:"reverse",duration:3}} src="/smallbird.png" sizes={20} className='absolute left-[25%] top-[60%]' alt="" />
         <motion.img animate={{x:[10,0,10],y:[10,0,10]}}  transition={{repeat:Infinity,repeatType:"reverse",duration:3}} src="/smallbird.png" sizes={20} className='absolute left-[76%] top-[50%]' alt="" />
          <motion.img animate={{x:[-10,0,10],y:[10,0,10]}}  transition={{repeat:Infinity,repeatType:"reverse",duration:3}} src="/smallbird.png" sizes={20} className='absolute left-[76%] top-[70%]' alt="" />
    </div>
  )
}

export default UpperBirds

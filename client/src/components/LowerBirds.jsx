import { motion } from 'motion/react'
import React from 'react'

const LowerBirds = () => {
  return (
    <div className='absolute h-[30vh] w-screen z-20  bottom-0 hidden md:block'>
        <motion.img  animate={{x:[10,0,10],y:[10,0,10]}}  transition={{repeat:Infinity,repeatType:"reverse",duration:3}} src="/4th.png" sizes={20} className='absolute left-[18%] bottom-10' alt="" />
          <motion.img  animate={{x:[10,0,10],y:[10,0,-10]}}  transition={{repeat:Infinity,repeatType:"reverse",duration:3}} src="/3rd.png" sizes={20} className='absolute left-[32%] bottom-[35%]' alt="" />
          <motion.img animate={{x:[10,0,-10],y:[10,0,10]}}  transition={{repeat:Infinity,repeatType:"reverse",duration:3}} src="/2nd.png" sizes={20} className='absolute right-[32%] bottom-[30%]' alt="" />
          <motion.img  animate={{x:[10,0,10],y:[10,0,-10]}}  transition={{repeat:Infinity,repeatType:"reverse",duration:3}} src="/1st.png" sizes={20} className='absolute right-[10%] bottom-[30%]' alt="" />
      
    </div>
  )
}

export default LowerBirds

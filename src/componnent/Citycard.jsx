import React from 'react'
import { motion } from 'framer-motion'
import i1 from '../images/Group 39.png';
import i2 from '../images/Group 1 (1).png';
import i3 from '../images/Group 1 (2).png';
import i4 from '../images/Group 2 (2).png';

const images = [i1, i2, i3, i4];

const Citycard = () => {
  return (
    <>
      {/* عنوان */}
      <motion.div 
        className="flex justify-end mt-3 px-4 md:px-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 dir="rtl" className="p-6 font-bold text-lg">
          پیشنهاد ماهان سفر برای ما | بهترین لحظه ها را با ما تجربه کنید
        </h1>
      </motion.div>
      
      {/* کارت‌ها */}
      <div className="flex mt-10 justify-center mb-4">
        <div className="flex flex-wrap gap-14 justify-center">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`City ${i}`}
              className="rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.3)" }}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Citycard;

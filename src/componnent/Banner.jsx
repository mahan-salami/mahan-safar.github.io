import React from 'react';
import { motion } from 'framer-motion';
import h1 from '../images/travel-insurance-banner.jpg';

const Banner = () => {
  return (
    <div className="w-full mb-6 rounded-2xl px-5">
      {/* Image container */}
      <div className="relative">
        {/* Image with animation */}
        <motion.img
          src={h1}
          alt="Travel Banner"
          className="w-full h-auto max-h-[300px] rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Text content */}
        <motion.div
          className="absolute inset-0 flex flex-col items-start justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
            <motion.h1
              className="text-xl sm:text-2xl mr-30 md:text-3xl lg:text-4xl font-bold text-amber-50 mb-2 sm:mb-3 md:mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              ماهان سفر
            </motion.h1>

            <motion.h2
              className="text-lg sm:text-xl mr-30 md:text-2xl lg:text-3xl font-medium text-amber-50 mb-3 sm:mb-4 md:mb-5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              سفری خاطره انگیز برای شما
            </motion.h2>

            <motion.button
              className="px-4 py-2 mr-30 -mt-7 sm:px-5 sm:py-2.5 bg-amber-500 hover:bg-amber-600 text-black rounded-sm text-sm sm:text-base transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              کلیک کنید
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;

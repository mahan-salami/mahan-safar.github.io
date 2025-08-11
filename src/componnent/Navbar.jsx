import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import '../css/navbar.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope, FaPlaneDeparture, FaBars, FaTimes } from "react-icons/fa";
import { SiAccuweather } from "react-icons/si";
import Iran from "../images/iran.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-vazir">
      
      {/* Top section with motion */}
      <motion.section 
        className='w-full bg-gray-300 py-3 px-4 md:px-8'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
          <div className='flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 mb-2 md:mb-0'>
            <div className="flex items-center">
              <BsFillTelephoneFill className="text-gray-800" />
              <p className='text-gray-800 px-2 text-sm md:text-base'>+98 939 177 00 76</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-gray-800" />
              <p className='text-gray-800 px-2 text-sm md:text-base'>safarmahan@gmail.com</p>
            </div>
          </div>

          <div className='flex flex-wrap justify-center md:justify-end gap-4 md:gap-6'>
            <div className='flex items-center'>
              <SiAccuweather className="text-gray-800" />
              <p className='text-gray-800 px-2 text-sm md:text-base'>تهران 21 درجه</p>
            </div>
            <div className='flex items-center'>
              <img src={Iran} className="w-5 h-auto" alt="پرچم ایران" />
              <p className='text-gray-800 px-2 text-sm md:text-base'>فارسی</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Navigation */}
      <section className="w-full" dir="rtl">
        <motion.div 
          className="relative mx-auto flex max-w-screen-lg justify-between items-center py-2 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.a 
            className="flex items-center text-xl font-black gap-x-2" 
            href="/"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Mahan Safar
            <FaPlaneDeparture />
          </motion.a>

          <button className="sm:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className={`sm:flex sm:items-center ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-6 mt-4 sm:mt-0 sm:mr-6">
              {["تور گردشگری","هواپیما","هتل","درباره ما","تماس با ما"].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <a className="text-gray-600 hover:text-blue-600" href="#">{item}</a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.a 
            className="hidden sm:inline-block rounded-xl border-2 border-blue-600 px-4 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white"
            href="#"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            پیگیری خرید
          </motion.a>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="sm:hidden mt-4 px-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <a className="block rounded-xl border-2 border-blue-600 px-4 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white text-center" href="#">
                پیگیری خرید
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Bottom section */}
      <motion.section 
        className='bg-amber-400 w-full py-1 flex justify-center items-center'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <motion.button 
          className='mr-2 text-sm text-cyan-50 flex justify-center items-center px-3 bg-blue-600 rounded-lg py-2 transition duration-600 hover:bg-[#101010] hover:text-amber-50'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          کلیک کنید
        </motion.button>
        <p className='font-bold'>اطلاع از نزدیک ترین زمان پرواز برای شما</p>
      </motion.section>
    </div>
  )
}

export default Navbar

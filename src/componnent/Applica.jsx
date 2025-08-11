import React from 'react'
import Mobile from '../images/Group 39-fotor-bg-remover-202508111638.png'
import { motion } from "framer-motion";
import bazar from "../images/icon--cafebazaar.png";   // دکمه بازار
import googleplay from "../images/app-store-google-play.png"; // دکمه گوگل پلی
const Applica = () => {
  return (
   <>
       <section className="bg-[#f5f9fc] py-16 px-6">
      <div className="w-full container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* بخش موبایل‌ها */}
        <div className="flex justify-center space-x-6">

          <motion.img
            src={Mobile}
            alt="App Screen 2"
            className="w-full md:w-full rounded-[2rem] "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* بخش متن و دکمه‌ها */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-right"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 px-20">
            اپلیکیشن ماهان سفر
          </h2>
          <ul className="text-gray-700 mb-6 space-y-2 px-20">
            <li>خرید سریع بلیط با ارزان‌ترین قیمت</li>
            <li>اطلاعات از مکان‌های دیدنی شهری که به آن سفر کرده‌اید</li>
            <li>امکان رزرو هتل</li>
            <li>مشاهده آخرین تورهای مسافرتی</li>
          </ul>
          <p className="mb-4 px-20">دانلود اپلیکیشن از طریق:</p>
          <div className="flex justify-end space-x-4 space-x-reverse px-20">
            <a href="#">
              <img src={bazar} alt="Bazar" className="h-12" />
            </a>
            <a href="#">
              <img src={googleplay} alt="Google Play" className="h-12" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>

   </>
  )
}

export default Applica
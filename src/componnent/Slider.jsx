import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../images/Group 40.png';
import img2 from '../images/Group 41.png';
import img3 from '../images/Group 42.png';

const images = [img1, img2, img3];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto relative mt-2">
      {/* تصویر اسلاید */}
      <div className="overflow-hidden rounded-lg relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full object-cover h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        {/* فرم وسط */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center px-4"
          dir="rtl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.1 }}
        >
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg w-full max-w-5xl">
            {/* ردیف اول */}
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              <div className="flex flex-col flex-1">
                <label className="mb-1 text-sm">به کجا می‌روید؟</label>
                <div className="flex items-center border rounded-lg px-2 bg-white">
                  <input
                    type="text"
                    placeholder="شهر مقصد را وارد کنید"
                    className="flex-1 outline-none py-2 bg-transparent text-sm"
                  />
                  <MapPin size={18} />
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <label className="mb-1 text-sm">کجا هستید؟</label>
                <div className="flex items-center border rounded-lg px-2 bg-white">
                  <input
                    type="text"
                    placeholder="شهر مبدا را وارد کنید"
                    className="flex-1 outline-none py-2 bg-transparent text-sm"
                  />
                  <MapPin size={18} />
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <label className="mb-1 text-sm">تعداد بلیط</label>
                <input
                  type="number"
                  placeholder="تعداد"
                  className="border rounded-lg px-2 py-2 outline-none bg-white text-sm"
                />
              </div>
            </div>

            {/* ردیف دوم */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col flex-1">
                <label className="mb-1 text-sm">تاریخ رفت</label>
                <div className="flex items-center border rounded-lg px-2 bg-white">
                  <input
                    type="date"
                    className="flex-1 outline-none py-2 bg-transparent text-sm"
                  />
                
                </div>
              </div>

              <div className="flex flex-col flex-1">
                <label className="mb-1 text-sm">تاریخ برگشت</label>
                <div className="flex items-center border rounded-lg px-2 bg-white">
                  <input
                    type="date"
                    className="flex-1 outline-none py-2 bg-transparent text-sm"
                  />
                  
                </div>
              </div>

              <div className="flex items-end">
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full lg:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  جستجو
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* نقاط پایین تصویر */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                idx === currentIndex ? 'bg-red-600' : 'bg-gray-300'
              }`}
              whileHover={{ scale: 1.2 }}
            ></motion.button>
          ))}
        </div>
      </div>

      {/* دکمه قبلی */}
      <motion.button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white shadow-md hover:bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center p-1"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft size={28} />
      </motion.button>

      {/* دکمه بعدی */}
      <motion.button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white shadow-md hover:bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center p-1"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight size={28} />
      </motion.button>
    </div>
  );
};

export default Slider;

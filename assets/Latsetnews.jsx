import React from 'react';
import { motion } from 'framer-motion';

const LatestNews = () => {
  const blogs = [
    {
      date: "Jan 01, 2023",
      title: "شرابط گرفتن ویزا با توجه به شرایط جدید اسپانیا",
      description: "به گزارش وزارت امور خارجه شرایط گرفتن ویزای اسپانیا به شرح زیر است ...",
      img: "/uspassport1.jpg",
    },
    {
      date: "Feb 01, 2023",
      title: "از سرگیری پرواز های ایران ایر",
      description: "پرواز های ایرلاین ایران ایر پس از مساعد شدن هوا انجام خواهد شد به گزارش سازمان هواپیمایی ..",
      img: "/img_1784.png",
    },
    {
      date: "Mar 01, 2023",
      title: "مکان های دیدنی کشور ایتالیا",
      description: "با شروع تور های جدید ماهان سفر ثبت نام تور ایتالیا آغاز شد برای خواندن شرایط تور ها ...",
      img: "/Coliseum_033120.jpg",
    }
  ];

  return (
    <section className="py-24 bg-gray-50" dir='rtl'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          آخرین اخبار
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="group border border-gray-200 rounded-2xl shadow-md bg-white flex flex-col overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-2xl">
                <motion.img
                  src={blog.img}
                  alt="blog"
                  className="w-full h-56 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 transition-all duration-300 group-hover:bg-gray-50">
                <span className="text-indigo-600 font-medium mb-3">{blog.date}</span>
                <h4 className="text-xl text-gray-900 font-semibold leading-8 mb-4">
                  {blog.title}
                </h4>
                <p className="text-gray-500 leading-6 mb-6 flex-1">
                  {blog.description}
                </p>

                {/* Button */}
                <motion.a
                  href="#"
                  className="flex items-center justify-center px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium text-sm shadow-md hover:bg-indigo-700 transition"
                  whileTap={{ scale: 0.95 }}
                >
                  ادامه مطلب
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "آیا امکان استرداد بلیط وجود دارد؟", answer: "بله، امکان استرداد وجود دارد اما شرایط بسته به نوع بلیط و قوانین ایرلاین متفاوت است." },
  { question: "چگونه نام و نام خانوادگی بلیط هواپیمای رزرو شده را تغییر دهیم؟", answer: "برای تغییر نام باید با پشتیبانی ایرلاین یا آژانس مسافرتی تماس بگیرید." },
  { question: "رزرو بلیط هواپیما از ماهان سفر چه مزیتی دارد؟", answer: "قیمت مناسب، پشتیبانی ۲۴ ساعته و پوشش پروازهای متنوع از مزایای آن است." },
  { question: "از ارزان‌ترین بلیط‌ها را چگونه باخبر شوم؟", answer: "با فعال‌سازی اعلان قیمت و بررسی دوره‌ای وبسایت، از ارزان‌ترین بلیط‌ها مطلع شوید." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-3/4 mx-auto p-4" dir="rtl">
      <h2 className="text-2xl font-bold text-right mb-6">سؤالات متداول</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-3 border border-gray-200 rounded-lg bg-white shadow-sm"
        >
          <button
            className="flex items-center justify-between w-full px-4 py-3 text-right"
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

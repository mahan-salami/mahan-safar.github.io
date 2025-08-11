import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import planeIcon from '../images/travel-icon-png-25.png';
import trainIcon from '../images/Train.png';
import busIcon from '../images/wave-connect-bus-icon-300x300.png';

const TicketBox = ({ icon, title, route, price }) => (
  <div className="relative flex flex-row-reverse items-center gap-4 bg-gray-100 rounded-lg p-4 flex-1 min-w-[280px] max-w-[350px] shadow-md 
                  hover:bg-gray-200 transition-colors duration-300">
    
    {/* آیکون‌های بالا */}
    <div className="absolute top-2 left-2 flex gap-2">
      <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition-colors duration-300">
        <FaHeart className="text-red-500" />
      </button>
      <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition-colors duration-300">
        <FaShoppingCart className="text-purple-500" />
      </button>
    </div>

    {/* متن‌ها */}
    <div className="flex flex-col text-right flex-1 pr-2">
      <span className="text-gray-500 text-sm">{title}</span>
      <span className="font-bold">{route}</span>
      <span className="text-purple-600 font-semibold">{price} تومان</span>
      <button className="bg-purple-400 text-white px-4 py-1 rounded-md mt-2 hover:bg-purple-500 transition-colors duration-300">
        خرید
      </button>
    </div>

    {/* آیکون مسیر */}
    <img
      src={icon}
      alt={title}
      className="w-14 h-14 object-contain"
    />
  </div>
);

const Tickets = () => {
  return (
    <div dir="rtl" className="p-6">
      <h2 className="mb-8 font-bold text-lg">
        بلیط های امروز | مناسب ترین قیمت ها برای شما
      </h2>

      {/* ردیف اول */}
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <TicketBox icon={planeIcon} title="بلیط هواپیما" route="تهران به شیراز" price="۳۰۰۰۰۰" />
        <TicketBox icon={trainIcon} title="بلیط قطار" route="تهران به شیراز" price="۹۶۰۰۰" />
        <TicketBox icon={busIcon} title="بلیط اتوبوس" route="تهران به اراک" price="۵۰۰۰۰" />
      </div>

      {/* ردیف دوم */}
      <div className="flex flex-wrap justify-center gap-4">
        <TicketBox icon={planeIcon} title="بلیط هواپیما" route="تهران به کیش" price="۸۴۵۰۰۰" />
        <TicketBox icon={trainIcon} title="بلیط قطار" route="تهران به یزد" price="۸۴۰۰۰" />
        <TicketBox icon={busIcon} title="بلیط اتوبوس" route="تهران به قم" price="۴۵۰۰۰" />
      </div>
    </div>
  );
};

export default Tickets;

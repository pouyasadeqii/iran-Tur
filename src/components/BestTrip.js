import React from "react";
import styles from "./BestTrip.module.css"

// images
import irvan from "../../public/assets/irvan.jpg";

const BestTrip = () => {
  return (
    <div className="mt-12 mb-16 px-8 md:px-20" id="bestTrip">
      <div className="bg-mylight rounded-2xl flex flex-col gap-y-2 md:flex-row md:gap-x-4">
        {/* title section */}
        <div className="flex flex-col gap-y-2 pt-6 md:pt-16">
          <h2 className="text-center font-bold text-xl md:text-2xl md:text-start md:px-8">
            <span className={`text-myorange relative inline-block py-12 px-3 ${styles.besttrip}`}>بهترین سفرتان</span> را تجربه کنید
          </h2>
          <p className="mt-5 px-4 md:px-8 md:text-lg text-sm">
            تور ویژه به ایروان اکنون برای شما محیاست تا با خانواده تان سفری پر
            شور و هیجان داشته باشید. این سفر فوق العاده در تاریخ جذاب پیش روی
            شما رخ خواهد داد و برای رزرو هر چه سریعتر با همکاران ما در تماس
            باشید.
          </p>
          <div className="px-4 md:px-8 mt-10 mb-5">
            <button className="bg-myorange text-white inline-block px-8 py-2 md:py-3 rounded-md">
              بزن بریم
            </button>
          </div>
        </div>
        {/* img section */}
        <div className="flex items-center justify-center mt-6 pb-6 pl-8">
          <div className="w-40 h-40 bg-red-100  rounded-full  md:w-[300px] md:h-[300px] overflow-hidden hover:shadow-2xl transition-all duration-300" >
            <img
              src={irvan}
              alt="irvan"
              className="w-full h-full rounded-full bg-cover bg-center md:w-[400px] md:h-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestTrip;

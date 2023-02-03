import React from "react";

// icons
import takhteJamshid from "../../public/assets/takhtjamshid-new.jpg";
import turkiye from "../../public/assets/turkiye.jpg"
import brazil from "../../public/assets/brazil.jpg"
import france from "../../public/assets/france.jpg"



// components
import Package from "./Package";

const packs = [
  {
    title: "تور تخت جمشید",
    description: "شامل ۱ نفر،هتل و خدمات",
    oldPrice: "۱٬۲۰۰٬۰۰۰ تومان",
    newPrice: " ۹۸۰٬۰۰۰تومان",
    picture: takhteJamshid,
    id: 1,
  },
  {
    title: "تور ترکیه",
    description: "شامل ۱ نفر،هتل و خدمات",
    oldPrice: "۸٬۷۰۰٬۰۰۰ تومان",
    newPrice: "۷٬۴۰۰٬۰۰۰ تومان",
    picture: turkiye,
    id: 2,
  },
  {
    title: "تور برزیل",
    description: "شامل ۱ نفر،هتل و خدمات",
    oldPrice: "۸٬۷۰۰٬۰۰۰ تومان",
    newPrice: "۸٬۳۰۰٬۰۰۰ تومان",
    picture: brazil,
    id: 3,
  },
  {
    title: "تور فرانسه",
    description: "شامل ۱ نفر،هتل و خدمات",
    oldPrice: "۹٬۱۰۰٬۰۰۰ تومان",
    newPrice: "۸٬۳۰۰٬۰۰۰ تومان",
    picture: france,
    id: 4,
  },
];

const Packages = () => {
  return (
    <div id="pakage">
      <div className="mb-16">
        <h2 className="text-center md:text-2xl font-bold mb-5">
          <span className="text-myorange">محبوب ترین</span> پکیج های تور
        </h2>
        <p className="text-center text-xs md:text-lg text-mygray">
          با این تور ها میتوانید به مکان های بی نظیر سفر کنید
        </p>
      </div>
      <div id="pack" className="flex items-center px-9 md:px-20 justify-between gap-x-4 overflow-auto mb-8 pb-8">
        {packs.map((pack) => (
          <Package
            title={pack.title}
            description={pack.description}
            oldPrice={pack.oldPrice}
            newPrice={pack.newPrice}
            picture={pack.picture}
            key={pack.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Packages;

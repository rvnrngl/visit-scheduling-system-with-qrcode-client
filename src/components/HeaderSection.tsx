import React from "react";
import Image1 from "../assets/images/img1.jpg";
import Image2 from "../assets/images/img2.jpg";
import Image3 from "../assets/images/img3.jpg";

export const HeaderSection: React.FC = () => {
  return (
    <div className="px-4 py-4 md:px-10">
      <div className="mx-auto grid max-w-screen grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {/* Left large image */}
        <div className="relative w-full overflow-hidden rounded shadow md:col-span-2">
          <img
            src={Image1}
            alt="Panata sa Bagong Pilipinas"
            className="aspect-video h-full w-full object-cover"
          />
        </div>

        {/* Right two stacked images */}
        <div className="grid grid-rows-2 gap-4 md:gap-6">
          <div className="relative w-full overflow-hidden rounded shadow">
            <img
              src={Image2}
              alt="Hiring Corrections Officers"
              className="aspect-video h-full w-full object-cover"
            />
          </div>
          <div className="relative w-full overflow-hidden rounded shadow">
            <img
              src={Image3}
              alt="BuCor Vision"
              className="aspect-video h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../assets/pet-image.jpg";
import img2 from "../assets/adoption-image.jpg";
import img3 from "../assets/happy-client-image.jpg";


const Slider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {/* --- Slide 1: Pet Image --- */}
        <SwiperSlide>
          <div className="relative w-full h-[400px] md:h-[550px]"> 
            <img 
              className="w-full h-full object-cover" 
              src={img1} 
              alt="A happy pet" 
            />
            <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center p-4">
              <h2 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg max-w-4xl">
                Find Your Furry Friend Today!
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* --- Slide 2: Adoption Image --- */}
        <SwiperSlide>
          <div className="relative w-full h-[400px] md:h-[600px]">
            <img 
              className="w-full h-full object-cover" 
              src={img2} 
              alt="Pet adoption moment" 
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center p-4">
              <h2 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg max-w-4xl">
                Adopt, Don’t Shop — Give a Pet a Home.
              </h2>
            </div>
          </div>
        </SwiperSlide>

        {/* --- Slide 3: Happy Client Image --- */}
        <SwiperSlide>
          <div className="relative w-full h-[400px] md:h-[600px]">
            <img 
              className="w-full h-full object-cover" 
              src={img3} 
              alt="Happy owner with pet" 
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center p-4">
              <h2 className="text-white text-3xl md:text-5xl font-bold text-center drop-shadow-lg max-w-4xl">
                Because Every Pet Deserves Love and Care.
              </h2>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Slider;
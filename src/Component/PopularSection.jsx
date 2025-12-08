import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { MapPin } from 'lucide-react';
import { DollarSign } from 'lucide-react';

const PopularSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  const popularServices = services.slice(0, 6);
  const formatPrice = (price, category) => { 
    if (category === "Pets" && (price === 0 || price === undefined)) {
      return "Free";
    }
    return price ? `$${price}` : "N/A";
  };

  const THEME_GRADIENT = "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600";
  const THEME_SHADOW = "shadow-lg shadow-blue-200/50";
  const THEME_TEXT_GRADIENT = "bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800";

  return (
    <div className="mt-12 px-4 md:px-[80px] lg:px-[140px] mb-16">
      <div className="text-center">
        {/* Main Heading with Theme Color */}
        <h3 className={`font-extrabold text-3xl md:text-4xl ${THEME_TEXT_GRADIENT} inline-block pb-1`}>
           Pet & Supplies
        </h3>
        <p className="mt-2 text-gray-500">
          Explore our most sought-after products and adoptable pets.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-8">
        {popularServices.map((service) => (
          // Card Container
          <div
            key={service?._id}
            className={`bg-white rounded-xl shadow-lg hover:shadow-2xl hover:${THEME_SHADOW} transition-all duration-300 overflow-hidden group border border-gray-100`}
          >
            {/* Image Section */}
            <figure className="relative h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={service?.imageUrl}
                alt={service?.name}/>
            </figure>
   
            <div className="p-6 space-y-3">
              <h2 className="text-xl font-bold text-gray-900 truncate">
                {service?.name || "Service Name"}
              </h2>
              <div className="flex flex-col space-y-1 text-sm text-gray-600">
                <p className="flex mb-3 items-center">
                  <span className="text-lg mr-2"> <MapPin /></span> 
                  <span className="font-medium">Location:</span> {service?.location || "N/A"}
                </p>
                <div className="flex justify-between items-center text-sm">
                <p className="flex items-center text-base font-bold">
                  <span className="text-lg mr-2">
                    {service?.category === "Pets" ? <DollarSign /> : <DollarSign />}
                  </span>
                  <span className="font-medium text-gray-700">Price:</span> 
                  <span className={service?.category === "Pets" ? "text-indigo-600 ml-1" : "text-sky-600 ml-1"}>
                     {formatPrice(service?.price, service?.category)}
                  </span>
                </p>
                 <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                {service?.category}
              </span>
               </div>
              </div>
              <div className="pt-3">
                <Link to={`/details/${service?._id}`}>
                  <button className={`w-full py-2.5 rounded-lg text-white font-semibold ${THEME_GRADIENT} hover:opacity-90 transition-opacity ${THEME_SHADOW}`}>
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* View All Services Button - Applying Theme Border */}
      <div className="text-center mt-12">
        <Link to="/services">
          <button className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-bold rounded-full hover:bg-indigo-50 transition-colors">
            View All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularSection;
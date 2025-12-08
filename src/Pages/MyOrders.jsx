import axios from "axios";
import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

 
  const THEME_GRADIENT_BG = "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600";
  const THEME_TEXT_GRADIENT = "bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800";

  useEffect(() => {
    axios
      .get("https://paw-mart-server-side-seven.vercel.app/orders")
      .then((res) => {
        setMyOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(myOrders); 

 
  const formatOrderDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  return (
    <div className="p-4 md:p-8 lg:p-12 min-h-screen">
      
      {/* Page Title */}
      <h1 className={`text-3xl md:text-4xl font-extrabold mb-8 ${THEME_TEXT_GRADIENT} text-center`}>
         My Orders
      </h1>
      
      {/* Table Container */}
      <div className="overflow-x-auto bg-white shadow-2xl rounded-xl">
        {myOrders.length === 0 ? (
          <div className="p-8 text-center text-gray-500 text-lg">
            You don't have any orders yet. Start shopping!
          </div>
        ) : (
          <table className="min-w-full table-auto border-collapse">
            
            {/* Table Header with Theme Gradient */}
            <thead>
              <tr className={`text-white uppercase text-sm font-semibold ${THEME_GRADIENT_BG}`}>
                <th className="p-4 rounded-tl-xl">#</th>
                <th className="p-4 text-left">Product Name</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left hidden sm:table-cell">Phone</th>
                <th className="p-4 text-left hidden md:table-cell">Address</th>
                <th className="p-4 text-center">Quantity</th>
                <th className="p-4 text-left rounded-tr-xl">Date</th>
              </tr>
            </thead>
            
            {/* Table Body */}
            <tbody>
              {myOrders.map((order, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-sky-50 transition duration-150`}
                >
                  <td className="p-4 font-bold text-center text-indigo-600">{index + 1}</td>
                  <td className="p-4 font-medium text-gray-800">{order?.productName}</td>
                  <td className="p-4 text-green-600 font-semibold">${order?.price}</td>
                  <td className="p-4 text-gray-600 hidden sm:table-cell">{order?.phone}</td>
                  <td className="p-4 text-gray-600 truncate max-w-[150px] hidden md:table-cell">{order?.address}</td>
                  <td className="p-4 text-center text-blue-500 font-medium">{order?.quantity}</td>
                  <td className="p-4  text-xs text-gray-500">
                    {formatOrderDate(order?.date)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
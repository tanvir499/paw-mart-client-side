import React from 'react';
import { Link } from "react-router";


const Error = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-lg w-full text-center space-y-6">
        
        {/* Image / Avatar */}
        <img
          src="/src/assets/errori-mage.jpg"      // ⬅ change to your image path
          alt="Error Illustration"
          className="w-48 h-48 mx-auto object-contain"
        />

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900">Oops! Page Not Found</h1>

        {/* Description */}
        <p className="text-gray-600 text-lg">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-4 px-8 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-400 hover:from-yellow-400 hover:via-orange-500 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-xl"
        >
          Go Back Home
        </Link>
      </div>
    </div>
        </div>
    );
};

export default Error;
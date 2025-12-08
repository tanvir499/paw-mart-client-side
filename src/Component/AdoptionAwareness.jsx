import React from 'react';

const AdoptionAwareness = () => {
    return (
       <div className="py-16 px-4 sm:px-10 lg:px-[145px] bg-indigo-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          🐾 Why Adopt from <span className="text-indigo-600">PawMart</span>?
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Choosing adoption means giving a second chance and fighting against puppy mills. Every rescue story is a success story.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Save a Life */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-indigo-500">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
            {/* SVG for Heart */}
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">You Save a Life</h3>
          <p className="text-gray-600">
            When you adopt, you open a spot for another animal in need to receive care. It's the ultimate act of compassion.
          </p>
        </div>

        {/* Card 2: Health & Temperament */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-green-500">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
            {/* SVG for Checkmark */}
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready for Home</h3>
          <p className="text-gray-600">
            Most adopted pets are already spayed/neutered, vaccinated, and often house-trained, making the transition easier.
          </p>
        </div>

        {/* Card 3: Fight Unethical Breeding */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-yellow-500">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 text-yellow-600 mb-4">
            {/* SVG for Handshake */}
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3v-1m18-6v-1a3 3 0 00-3-3H6a3 3 0 00-3 3v1"></path></svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Local Rescue</h3>
          <p className="text-gray-600">
            Your adoption fee goes directly toward supporting shelters and rescuing more animals in your community.
          </p>
        </div>
      </div>
    </div>
    );
};

export default AdoptionAwareness;
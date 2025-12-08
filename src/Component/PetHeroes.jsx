import React from "react";

const petHeroes = [
  {
    id: 1,
    name: "Aisha & Max",
    petName: "Max (Golden Retriever)",
    story:
      "Max had separation anxiety, but Aisha’s patience and our training tips helped him become a confident family member!",
    image: "https://i.ibb.co.com/67RPP7NN/woman-with-face-full-paint.jpg", 
    role: "Adopter",
  },
  {
    id: 2,
    name: "The Garcia Family",
    petName: "Luna (Calico Cat)",
    story:
      "Luna, a senior cat, needed a quiet retirement home. The Garcias provided exactly that, giving her the love she deserves.",
    image: "https://i.ibb.co.com/PZyFqnvc/confident-african-american-businessman-brown-classic-jacket-isolated-dark-background.jpg",
    role: "Foster Caregiver",
  },
  {
    id: 3,
    name: "David Chen",
    petName: "Gizmo (Parrot)",
    story:
      "David adopted Gizmo, who was initially very shy. Now, Gizmo greets him every morning with a cheerful 'Hello!', bringing joy to the home.",
    image: "https://i.ibb.co.com/TBP7YVgt/business-woman-working-home.jpg", // Placeholder image path
    role: "Adopter",
  },
];

const PetHeroes = () => {
  return (
    <div className="py-16 px-4 sm:px-10 lg:px-[145px] bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          🌟 Meet Our <span className="text-yellow-600">Pet Heroes</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Success stories from the amazing humans who open their hearts and
          homes to pets in need.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {petHeroes.map((hero) => (
          <div
            key={hero.id}
            className="bg-gray-50 rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                {/* Assuming hero.image is an actual image URL */}
                <img
                  className="h-16 w-16 rounded-full object-cover mr-4 ring-2 ring-yellow-500 p-0.5"
                  src={hero.image}
                  alt={`Profile of ${hero.name}`}
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {hero.name}
                  </h3>
                  <span className="text-sm text-yellow-600 font-semibold">
                    {hero.role}
                  </span>
                </div>
              </div>

              <blockquote className="italic text-gray-700 border-l-4 border-yellow-500 pl-4 py-2">
                "{hero.story}"
              </blockquote>

              <p className="mt-4 text-sm font-medium text-gray-900">
                <span className="font-bold">Pet:</span> {hero.petName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetHeroes;

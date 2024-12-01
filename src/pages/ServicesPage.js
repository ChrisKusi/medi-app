import React from "react";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Consultations",
                description: "Connect with experienced doctors for personalized advice.",
              },
              {
                title: "Pharmacy",
                description: "Order medicines online and have them delivered to your home.",
              },
              {
                title: "Lab Tests",
                description: "Book diagnostic tests and track results online.",
              },
              {
                title: "Nutrition",
                description: "Get tailored meal plans to achieve your health goals.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <h4 className="text-xl font-semibold text-red-500">{service.title}</h4>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

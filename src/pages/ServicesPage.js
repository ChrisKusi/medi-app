import React from "react";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-red-600 text-white shadow sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold">Debe Telo Medicine</h1>
          <nav className="space-x-6">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About Us</a>
            <a href="/services" className="hover:underline">Services</a>
            <a href="/contact" className="hover:underline">Contact Us</a>
          </nav>
        </div>
      </header>

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

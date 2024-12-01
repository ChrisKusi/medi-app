// import React from "react";

// const ServicesPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">

//       {/* Services Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
//             Our Services
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 title: "Consultations",
//                 description: "Connect with experienced doctors for personalized advice.",
//               },
//               {
//                 title: "Pharmacy",
//                 description: "Order medicines online and have them delivered to your home.",
//               },
//               {
//                 title: "Lab Tests",
//                 description: "Book diagnostic tests and track results online.",
//               },
//               {
//                 title: "Nutrition",
//                 description: "Get tailored meal plans to achieve your health goals.",
//               },
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
//               >
//                 <h4 className="text-xl font-semibold text-red-500">{service.title}</h4>
//                 <p className="mt-4 text-gray-600">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ServicesPage;


import React from "react";

const ServicesPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-100 py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-5xl font-bold text-red-600">Our Services</h1>
          <p className="text-lg mt-4 text-gray-700 max-w-3xl mx-auto">
            At Debe Telo Medicine, we offer a range of healthcare services designed to empower you to take control of your health. Explore our innovative solutions below.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Consultations",
                description: "Talk to expert doctors online and receive personalized advice tailored to your health needs.",
                icon: "🩺",
              },
              {
                title: "Pharmacy",
                description: "Order medicines online and have them conveniently delivered to your doorstep.",
                icon: "💊",
              },
              {
                title: "Lab Tests",
                description: "Book diagnostic tests and access your results quickly and securely online.",
                icon: "🧪",
              },
              {
                title: "Nutrition",
                description: "Get customized meal plans and nutritional guidance to achieve your health goals.",
                icon: "🥗",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-red-600">{service.title}</h3>
                <p className="text-gray-600 mt-4">{service.description}</p>
                <a
                  href={`/services/${service.title.toLowerCase()}`}
                  className="inline-block mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Benefits You */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">How Our Services Benefit You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Convenience",
                description: "Access healthcare from the comfort of your home.",
                icon: "🏠",
              },
              {
                title: "Personalization",
                description: "Receive services tailored to your unique health needs.",
                icon: "👨‍⚕️",
              },
              {
                title: "Efficiency",
                description: "Save time with quick access to expert care and results.",
                icon: "⚡",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-bold text-red-600">{benefit.title}</h4>
                <p className="text-gray-600 mt-4">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jane Doe",
                feedback: "The consultations are easy to book and incredibly helpful. Highly recommended!",
              },
              {
                name: "John Smith",
                feedback: "Ordering medicines online has never been this convenient. A lifesaver!",
              },
              {
                name: "Alice Brown",
                feedback: "The nutrition guidance has been a game changer for my health journey.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
                <h4 className="mt-4 text-lg font-bold text-red-600">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience Better Healthcare?</h2>
          <p className="text-lg mb-8">
            Explore our services today and take the first step towards better health!
          </p>
          <a
            href="/signup"
            className="bg-white text-red-600 py-3 px-6 rounded-lg hover:bg-gray-100 font-semibold"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 Debe Telo Medicine. All Rights Reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;

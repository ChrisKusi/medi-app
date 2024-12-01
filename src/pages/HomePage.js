import React from "react";
const HomePage = () => {
  return (
    <div className="bg-gray-100">


      {/* Hero Banner */}
      <section className="bg-blue-100 py-20">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-red-600">
            Welcome to Debe Telo Medicine
          </h2>
          <p className="text-lg mt-4 text-gray-700">
            Your one-stop solution for health consultations, medicines, lab tests, and nutrition guidance.
          </p>
          <a
            href="/signup"
            className="mt-6 inline-block bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
            About Us
          </h3>
          <p className="text-center text-lg text-gray-700">
            Debe Telo Medicine is committed to improving healthcare accessibility by
            providing a seamless platform for consultations, medicines, lab tests, and
            nutrition services. Our goal is to empower individuals to take control of
            their health with the click of a button.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Consultations",
                description: "Talk to expert doctors and receive personalized advice for your health needs.",
                icon: "🩺",
              },
              {
                title: "Pharmacy",
                description: "Order medicines online and have them delivered to your doorstep.",
                icon: "💊",
              },
              {
                title: "Lab Tests",
                description: "Book diagnostic tests and track your results online.",
                icon: "🧪",
              },
              {
                title: "Nutrition",
                description: "Get tailored meal plans and guidance to achieve your health goals.",
                icon: "🥗",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-red-500 mt-4">
                  {feature.title}
                </h4>
                <p className="mt-4 text-gray-600">{feature.description}</p>
                <a
                  href={`/services/${feature.title.toLowerCase()}`}
                  className="inline-block mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { step: 1, title: "Create Account", description: "Sign up and log in to get started." },
              { step: 2, title: "Explore Services", description: "Access consultations, medicines, labs, and nutrition." },
              { step: 3, title: "Track Your Health", description: "Monitor your progress and stay on top of your health." },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-lg">
                <div className="text-5xl font-bold text-red-500">{item.step}</div>
                <h4 className="text-lg font-semibold mt-4">{item.title}</h4>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Our Users Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <p className="text-gray-700">
                  "This app has transformed the way I manage my health!"
                </p>
                <h4 className="mt-4 text-lg font-semibold text-red-500">
                  John Doe
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Get in Touch
          </h3>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 rounded px-3 py-2"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Submit
            </button>
          </form>
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

export default HomePage;

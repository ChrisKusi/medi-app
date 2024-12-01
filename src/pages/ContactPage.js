import React from "react";

const ContactPage = () => {
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

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Contact Us
          </h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-300 focus:outline-none"
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
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-300 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-300 focus:outline-none"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-300"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

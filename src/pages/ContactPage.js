// import React from "react";

// const ContactPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">


//       {/* Contact Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
//             Contact Us
//           </h2>
//           <form className="max-w-lg mx-auto">
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-300 focus:outline-none"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-300 focus:outline-none"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-300 focus:outline-none"
//                 rows="4"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-300"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactPage;


import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-100 py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-5xl font-bold text-red-600">Contact Us</h1>
          <p className="text-lg mt-4 text-gray-700 max-w-3xl mx-auto">
            Have questions, concerns, or feedback? We're here to help. Reach out to us and let's make your healthcare journey seamless.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Phone",
                icon: "📞",
                description: "Call us at +1-800-123-4567 for immediate assistance.",
              },
              {
                title: "Email",
                icon: "📧",
                description: "Send us an email at support@debetelomedicine.com.",
              },
              {
                title: "Location",
                icon: "📍",
                description: "Visit us at 123 Healthcare St., New York, NY.",
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{contact.icon}</div>
                <h4 className="text-xl font-bold text-red-600">{contact.title}</h4>
                <p className="text-gray-600 mt-4">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Send Us a Message</h2>
          <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Your name"
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
                placeholder="Your email"
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
                rows="5"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">We're Here for You</h2>
          <p className="text-lg mb-8">
            Whether you have questions or need assistance, don't hesitate to reach out. Our team is always ready to help.
          </p>
          <a
            href="/services"
            className="bg-white text-red-600 py-3 px-6 rounded-lg hover:bg-gray-100 font-semibold"
          >
            Explore Our Services
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

export default ContactPage;

// import React from "react";

// const AboutPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">


//       {/* About Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
//             About Us
//           </h2>
//           <p className="text-lg text-gray-700 text-center">
//             Debe Telo Medicine is dedicated to revolutionizing healthcare by providing
//             an all-in-one platform for consultations, medicines, lab tests, and
//             nutrition guidance. Our mission is to make healthcare accessible to
//             everyone, everywhere.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;

import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-100 py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-5xl font-bold text-red-600">About Us</h1>
          <p className="text-lg mt-4 text-gray-700 max-w-3xl mx-auto">
            At Debe Telo Medicine, we are revolutionizing healthcare by combining technology and compassion to create an all-in-one platform for health consultations, medicines, lab tests, and nutrition guidance. We strive to make healthcare accessible, affordable, and personalized for everyone.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-red-600">Our Mission</h3>
              <p className="text-lg text-gray-700 mt-4">
                To empower individuals by providing seamless and innovative healthcare solutions that prioritize accessibility, affordability, and quality.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-red-600">Our Vision</h3>
              <p className="text-lg text-gray-700 mt-4">
                To transform the healthcare landscape by leveraging technology and creating personalized care for everyone, anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Innovation",
                description: "We embrace cutting-edge technology to redefine healthcare services.",
                icon: "💡",
              },
              {
                title: "Accessibility",
                description: "Our platform ensures healthcare is available to everyone, regardless of location.",
                icon: "🌍",
              },
              {
                title: "Compassion",
                description: "We prioritize the well-being and unique needs of every individual.",
                icon: "❤️",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-red-600">{value.title}</h4>
                <p className="text-gray-600 mt-4">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                step: 1,
                title: "Easy Onboarding",
                description: "Sign up and explore our user-friendly platform.",
              },
              {
                step: 2,
                title: "Personalized Services",
                description: "Get tailored healthcare solutions based on your needs.",
              },
              {
                step: 3,
                title: "Track Your Progress",
                description: "Monitor your health journey and achieve your goals.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-5xl font-bold text-red-500">{item.step}</div>
                <h4 className="text-xl font-bold mt-4">{item.title}</h4>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Take Control of Your Health</h2>
          <p className="text-lg mb-8">
            Join thousands of users who trust Debe Telo Medicine for their healthcare needs. Start your journey today!
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

export default AboutPage;



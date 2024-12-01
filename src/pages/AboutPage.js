import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">


      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            About Us
          </h2>
          <p className="text-lg text-gray-700 text-center">
            Debe Telo Medicine is dedicated to revolutionizing healthcare by providing
            an all-in-one platform for consultations, medicines, lab tests, and
            nutrition guidance. Our mission is to make healthcare accessible to
            everyone, everywhere.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

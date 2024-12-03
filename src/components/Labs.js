import React, { useState } from "react";

const Labs = () => {
  const [selectedTest, setSelectedTest] = useState(null);

  // Dummy lab data
  const labTests = [
    {
      id: 1,
      category: "Blood Tests",
      name: "Complete Blood Count (CBC)",
      description: "A complete blood count test.",
      price: "$50",
    },
    {
      id: 2,
      category: "Imaging",
      name: "X-Ray",
      description: "A standard X-Ray test.",
      price: "$100",
    },
    {
      id: 3,
      category: "DNA Testing",
      name: "Genetic Testing",
      description: "Test for genetic diseases.",
      price: "$200",
    },
    {
      id: 4,
      category: "Blood Tests",
      name: "Cholesterol Test",
      description: "Test to check cholesterol levels.",
      price: "$30",
    },
    // Add more tests as needed
  ];

  // Handle lab test request
  const handleRequestTest = (test) => {
    setSelectedTest(test);
    // Here, you can perform the request action (e.g., send the request to a backend)
  };

  return (
    <div className="labs-component p-6">
      <h2 className="text-xl font-semibold mb-4">Lab Tests</h2>
      
      {/* Lab Categories */}
      <div className="lab-categories mb-6">
        <h3 className="text-lg font-semibold">Select Lab Category</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {labTests.map((test) => (
            <div key={test.id} className="lab-test-card border p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">{test.name}</h4>
              <p className="text-sm text-gray-600">{test.description}</p>
              <p className="text-lg font-semibold text-blue-500 mt-2">{test.price}</p>
              <button
                onClick={() => handleRequestTest(test)}
                className="request-btn bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 w-full"
              >
                Request Test
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* If a test is selected, show the details */}
      {selectedTest && (
        <div className="test-request-details mt-6 p-4 border rounded-lg shadow-md bg-gray-50">
          <h3 className="text-xl font-semibold">Request Details</h3>
          <p><strong>Test:</strong> {selectedTest.name}</p>
          <p><strong>Description:</strong> {selectedTest.description}</p>
          <p><strong>Price:</strong> {selectedTest.price}</p>
          <button className="submit-request-btn bg-green-500 text-white px-4 py-2 rounded-lg mt-4">
            Submit Request
          </button>
        </div>
      )}
    </div>
  );
};

export default Labs;

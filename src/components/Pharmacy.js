// import React, { useState } from "react";

// // Dummy data for categories and products
// const categories = [
//   { id: 1, name: "Antibiotics" },
//   { id: 2, name: "Pain Relief" },
//   { id: 3, name: "Vitamins & Supplements" },
// ];

// const products = [
//   {
//     id: 1,
//     name: "Amoxicillin",
//     category: "Antibiotics",
//     price: "$10.00",
//     image: "/images/amoxicillin.jpg", // Add image path
//   },
//   {
//     id: 2,
//     name: "Paracetamol",
//     category: "Pain Relief",
//     price: "$5.00",
//     image: "/images/paracetamol.jpg", // Add image path
//   },
//   {
//     id: 3,
//     name: "Vitamin C",
//     category: "Vitamins & Supplements",
//     price: "$8.00",
//     image: "/images/vitamin-c.jpg", // Add image path
//   },
// ];

// const Pharmacy = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   // Filter products based on the selected category
//   const filteredProducts = selectedCategory
//     ? products.filter((product) => product.category === selectedCategory)
//     : products;

//   return (
//     <div className="pharmacy-component p-6">
//       <h2 className="text-xl font-semibold mb-4">Pharmacy</h2>

//       {/* Category List */}
//       <div className="category-list mb-6">
//         {categories.map((category) => (
//           <button
//             key={category.id}
//             className="category-btn px-4 py-2 bg-gray-200 rounded-lg mr-2"
//             onClick={() => setSelectedCategory(category.name)}
//           >
//             {category.name}
//           </button>
//         ))}
//         <button
//           className="category-btn px-4 py-2 bg-gray-200 rounded-lg ml-2"
//           onClick={() => setSelectedCategory(null)} // Show all products
//         >
//           All Products
//         </button>
//       </div>

//       {/* Product Cards */}
//       <div className="product-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="product-card p-4 border rounded-lg shadow-md"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="product-image w-full h-32 object-cover mb-4"
//             />
//             <h3 className="product-name font-semibold">{product.name}</h3>
//             <p className="product-price text-gray-600">{product.price}</p>
//             <button className="add-to-cart-btn bg-blue-500 text-white py-2 px-4 mt-4 rounded-lg">
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pharmacy;


import React, { useState } from "react";
import para from "../img/para.jpg";  // Import the image correctly
import vitamin from "../img/vitamin-c.webp";  // Import the image correctly
import amo from "../img/amo.png";  // Import the image correctly
import aloe from "../img/aloe.webp";  // Import the image correctly


// Dummy data for categories and products
const categories = [
  { id: 1, name: "Antibiotics" },
  { id: 2, name: "Pain Relief" },
  { id: 3, name: "Vitamins & Supplements" },
  { id: 4, name: "Skin Care" },
];

const products = [
  {
    id: 1,
    name: "Amoxicillin",
    category: "Antibiotics",
    price: "$10.00",
    image: amo, // Add image path
  },
  {
    id: 2,
    name: "Paracetamol",
    category: "Pain Relief",
    price: "$5.00",
    image: para, // Add image path
  },
  {
    id: 3,
    name: "Vitamin C",
    category: "Vitamins & Supplements",
    price: "$8.00",
    image: vitamin, // Add image path
  },
  {
    id: 4,
    name: "Aloe Vera Gel",
    category: "Skin Care",
    price: "$12.00",
    image: aloe, // Add image path
  },
];

const Pharmacy = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="pharmacy-component p-6">
      <h2 className="text-xl font-semibold mb-4">Pharmacy</h2>

      {/* Category List */}
      <div className="category-list flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            className="category-btn px-4 py-2 bg-gray-200 rounded-lg"
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </button>
        ))}
        <button
          className="category-btn px-4 py-2 bg-gray-200 rounded-lg"
          onClick={() => setSelectedCategory(null)} // Show all products
        >
          All Products
        </button>
      </div>

      {/* Product Cards */}
      <div className="product-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="product-card p-4 border rounded-lg shadow-md flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image w-full h-32 object-cover mb-4 rounded"
            />
            <h3 className="product-name font-semibold text-center">{product.name}</h3>
            <p className="product-price text-gray-600 text-center">{product.price}</p>
            <button className="add-to-cart-btn bg-blue-500 text-white py-2 px-4 mt-4 rounded-lg">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pharmacy;

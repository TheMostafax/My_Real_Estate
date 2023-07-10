import React from "react";
import PropertyImage1 from "../../assets/6.png";
import PropertyImage2 from "../../assets/7.png";
import PropertyImage3 from "../../assets/8.png";

const SaleProperties = () => {
  return (
    <div id="sale" className="w-full min-h-screen p-2 flex items-center bg-gray-100">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <h2 className="text-4xl font-bold text-gray-800 mb-6">On Sale  <span className="text-amber-800">Properties</span></h2>
    <p className="text-lg text-gray-700 mb-8">
        We offer a wide selection of on-sale properties that cater to different preferences and budgets. Here are some of our featured properties:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="hover:shadow-md hover:shadow-[#040c16]">
          <div className="bg-white rounded-lg shadow-lg">
            <img src={PropertyImage1} alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
            <div className="py-6 px-4">
              <h3 className="text-lg font-medium text-gray-900">123 Main St</h3>
              <p className="text-sm text-gray-500">3 bd | 2 ba | 1,500 sqft</p>
              <p class="text-lg font-bold text-gray-700 mt-4"><del>$500,000</del> On Sale Now: $250,000</p>
              <button className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className="hover:shadow-md hover:shadow-[#040c16]">
          <div className="bg-white rounded-lg shadow-lg">
            <img src={PropertyImage2} alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
            <div className="py-6 px-4">
              <h3 className="text-lg font-medium text-gray-900">456 Oak St</h3>
              <p className="text-sm text-gray-500">4 bd | 3 ba | 2,000 sqft</p>
              <p class="text-lg font-bold text-gray-700 mt-4"><del>$750,000</del> On Sale Now: $500,000</p>
              <button className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className="hover:shadow-md hover:shadow-[#040c16]">
          <div className="bg-white rounded-lg shadow-lg">
            <img src={PropertyImage3} alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
            <div className="py-6 px-4">
              <h3 className="text-lg font-medium text-gray-900">789 Maple Ave</h3>
              <p className="text-sm text-gray-500">2 bd | 1 ba | 1,000 sqft</p>
              <p class="text-lg font-bold text-gray-700 mt-4"><del>$300,000</del> On Sale Now: $200,000</p>
              <button className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SaleProperties;




















import React from "react";
import Imagee from "../../assets/1.png";
import Imageee from "../../assets/2.png";
import Imageeee from "../../assets/3.png";

const Features = () => {
  return (
    <div id="feature" className="w-full min-h-screen p-2 flex items-center bg-gradient-to-b from-white to-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Feature <span className="text-amber-800">Properties</span></h2>
    <p className="text-lg text-gray-700 mb-8">
      Here are some of our featured properties:
      </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <div className="bg-white rounded-lg shadow-lg">
              <img src={Imagee} alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">123 Main St</h3>
                <p className="text-sm text-gray-500">3 bd | 2 ba | 1,500 sqft</p>
                <p className="text-lg font-bold text-gray-700 mt-4">$500,000</p>
                <button className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <div className="bg-white rounded-lg shadow-lg">
              <img src={Imageee} alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">456 Oak St</h3>
                <p className="text-sm text-gray-500">4 bd | 3 ba | 2,000 sqft</p>
                <p className="text-lg font-bold text-gray-700 mt-4">$750,000</p>
                <button className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <div className="bg-white rounded-lg shadow-lg">
              <img src={Imageeee} alt="Property" className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64" />
              <div className="py-6 px-4">
                <h3 className="text-lg font-medium text-gray-900">789 Maple Ave</h3>
                <p className="text-sm text-gray-500">2 bd | 1 ba | 1,000 sqft</p>
                <p className="text-lg font-bold text-gray-700 mt-4">$300,000</p>
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

export default Features;





























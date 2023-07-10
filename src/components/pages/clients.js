import React from "react";
import Client1 from "../../assets/client1.png";
import Client4 from "../../assets/client4.png";
import Client5 from "../../assets/client5.png";

const OurClients = () => {
  return (
    <div id="client" className="w-full min-h-screen p-2 flex items-center bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clients</h2>
          <p className="text-lg text-gray-700 mb-8">
            See what our clients have to say about us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         
        <div className="justify-center">
        <img
          className="w-24 h-24 object-cover rounded-full"
          src={Client1}
          alt="Client 1"
        />
        <div className="z-10 bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 mb-4">
            "Working with this real estate agency was a great experience. Their team was knowledgeable and professional, and helped us find our dream home quickly and easily."
          </p>
          <p className="text-gray-500">Adam Johnson, Homebuyer</p>
        </div>
      </div>
      <div className="justify-center">
      <img
        className="w-24 h-24 object-cover rounded-full"
        src={Client4}
        alt="Client 1"
      />
      <div className="z-10 bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-4">
          "I was impressed with this agency's marketing strategy when we were selling our home. They really went above and beyond to showcase my home and attract potential buyers."
        </p>
        <p className="text-gray-500">Michael Smith, Home Seller</p>
      </div>
    </div>
    <div className="justify-center">
    <img
      className="w-24 h-24 object-cover rounded-full"
      src={Client5}
      alt="Client 1"
    />
    <div className="z-10 bg-white p-8 rounded-lg shadow-md">
      <p className="text-lg text-gray-700 mb-4">
        "I've been working with this agency for several years now for property management services, and they've been fantastic. They handle everything really well."
      </p>
      <p className="text-gray-500">David Brown, Property Owner</p>
    </div>
  </div>
  </div>
  </div>
</div>
  );
};

export default OurClients;

















import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Service1 from "../assets/service1.jpg";
import Service2 from "../assets/service2.jpg";
import Service3 from "../assets/service3.jpg";
import Service4 from "../assets/service4.jpg";
import Service5 from "../assets/service5.jpg";
import Service6 from "../assets/service6.jpg";
import Service7 from "../assets/service7.jpg";
import Service8 from "../assets/service8.jpg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const services = [
    {
      title: "Hotel Room Cleaning",
      description:
        "Our hotel room cleaning service ensures a spotless, comfortable stay. We provide thorough cleaning of all surfaces.",
      image: Service1,
    },
    {
      title: "Mirrors Cleaning",
      description:
        "Our mirror cleaning service leaves your mirrors sparkling and streak-free. We use special techniques.",
      image: Service2,
    },
    {
      title: "Bath Cleaning",
      description:
        "Our bath cleaning service provides a deep clean for your bathroom, leaving it fresh and sparkling. We tackle every surface.",
      image: Service3,
    },
    {
      title: "Floor Cleaning",
      description:
        "Whether it's hardwood, tile, or carpet, we ensure every inch is thoroughly cleaned and maintained very nicely.",
      image: Service4,
    },
    {
      title: "Grass Cutting",
      description:
        "Our grass cutting service keeps your lawn neat and well-maintained. We trim and shape your grass to perfection.",
      image: Service5,
    },
    {
      title: "Shop Management",
      description:
        "Our shop management service ensures smooth, efficient operations for your business and makes it easy.",
      image: Service6,
    },
    {
      title: "Office Cleaning",
      description:
        "Professional office cleaning service to maintain a clean and productive work environment.",
      image: Service7,
    },
    {
      title: "Window Washing",
      description:
        "Crystal clear windows with our professional washing service, reaching all heights safely.",
      image: Service8,
    },
    {
      title: "Carpet Cleaning",
      description:
        "Deep cleaning for your carpets, removing stains and allergens for a fresher home.",
      image: Service1,
    },
  ];

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-100 text-[15px] rounded-3xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                </div>

                <NavLink
                  to="/quote-form"
                  className="mt-auto w-full block"
                >
                  <button className="w-full border border-blue-600 text-blue-700 bg-white rounded-lg px-4 py-2 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    Book Now
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="w-full border-t border-b border-gray-200 py-4 mt-10">
          <div className="flex justify-center items-center">
            <div className="flex items-center gap-1">
              <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
                <IoIosArrowBack className="text-gray-600 text-lg" />
              </button>

              <button className="px-4 py-2 rounded bg-blue-500 text-white font-medium">
                1
              </button>
              <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">
                2
              </button>
              <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">
                3
              </button>

              <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
                <IoIosArrowForward className="text-gray-600 text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;

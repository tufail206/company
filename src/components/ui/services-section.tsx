"use client";

import React from "react";
import { AppWindow, Settings, Settings2, DatabaseZap } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: (
      <>
        Web development in <br />
        <span className="dark:text-primary text-indigo-600">MERN STACK</span>
      </>
    ),
    icon: <AppWindow size={80} />,
  },
  {
    title: "App Development",
    description: (
      <>
        App development in <br />
        <span className="dark:text-primary text-indigo-600">React Native</span>
      </>
    ),
    icon: <AppWindow size={80} />,
  },
  {
    title: "Digital Marketing",
    description: (
      <>
        Digital Marketing in <br />
        <span className="dark:text-primary text-indigo-600">Facebook</span>
      </>
    ),
    icon: <Settings size={80} />,
  },
  {
    title: "Maintenance",
    description: (
      <>
        Maintenance & Support <br />
        <span className="dark:text-primary text-indigo-600">Services</span>
      </>
    ),
    icon: <Settings2 size={80} />,
  },
  {
    title: "Data Analytics",
    description: (
      <>
        Data Analytics <br />
        <span className="dark:text-primary text-indigo-600">Services</span>
      </>
    ),
    icon: <DatabaseZap size={80} />,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center tracking-wide leading-tight">
        Our Awesome Services to <br /> Give You Success
      </h2>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-8 rounded-2xl shadow-md dark:shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:bg-gray-700"
          >
            <div className="flex justify-center items-center text-indigo-600 dark:text-indigo-400 mb-6">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold text-center mb-4">
              {service.title}
            </h3>
            <p className="text-lg text-center text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

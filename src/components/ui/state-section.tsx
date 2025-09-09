"use client";

import React from "react";
import CountUp from "react-countup";

const StatsSection = () => {
  const stats = [
    { value: 10, suffix: "+", label: "Happy Clients" },
    { value: 6, suffix: "+", label: "Finished Projects" },
    { value: 5, suffix: "+", label: "Skilled Experts" },
    { value: 100, suffix: "%", label: "Clients Satisfaction" },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-md dark:shadow-lg bg-gray-50 dark:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:bg-gray-700"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              <CountUp end={stat.value} duration={2} enableScrollSpy />
              {stat.suffix}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

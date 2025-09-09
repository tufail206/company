"use client"
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import {
  AppWindow,
  Settings,
  Settings2,
  DatabaseZap,
  CheckCircle2,
  Headphones,
  Server,
  Shield,
  Code2,
  Smartphone,
  BarChart3,
  MessageCircle,
  Clock,
  Users,
  Award,
  Star,
  ChevronRight,
  Play,
} from "lucide-react";

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Web Development",
      description: "Web development in MERN STACK",
      icon: <AppWindow size={80} />,
      fullDescription:
        "We create responsive, high-performance web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Our solutions are scalable, secure, and tailored to your business needs.",
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "API Integration",
        "Progressive Web Apps",
        "Performance Optimization",
      ],
      color: "bg-blue-500",
    },
    {
      title: "App Development",
      description: "App development in React Native",
      icon: <Smartphone size={80} />,
      fullDescription:
        "Our cross-platform mobile app development using React Native delivers native-like experiences on both iOS and Android, reducing development time and cost while maintaining quality.",
      features: [
        "iOS & Android Apps",
        "UI/UX Design",
        "App Store Deployment",
        "Push Notifications",
        "Maintenance & Updates",
      ],
      color: "bg-purple-500",
    },
    {
      title: "Digital Marketing",
      description: "Digital Marketing in Facebook",
      icon: <BarChart3 size={80} />,
      fullDescription:
        "We develop comprehensive digital marketing strategies with a focus on Facebook advertising, helping you reach your target audience and maximize ROI through data-driven campaigns.",
      features: [
        "Facebook Ad Campaigns",
        "Audience Targeting",
        "Conversion Tracking",
        "A/B Testing",
        "ROI Analysis",
      ],
      color: "bg-green-500",
    },
    {
      title: "Maintenance",
      description: "Maintenance & Support Services",
      icon: <Settings2 size={80} />,
      fullDescription:
        "Our maintenance and support services ensure your digital assets remain secure, up-to-date, and performing optimally, with 24/7 monitoring and rapid response times.",
      features: [
        "24/7 Monitoring",
        "Security Updates",
        "Bug Fixes",
        "Performance Optimization",
        "Backup Solutions",
      ],
      color: "bg-yellow-500",
    },
    {
      title: "Data Analytics",
      description: "Data Analytics Services",
      icon: <DatabaseZap size={80} />,
      fullDescription:
        "Transform your raw data into actionable insights with our advanced analytics services. We help you make data-driven decisions to grow your business.",
      features: [
        "Business Intelligence",
        "Custom Dashboards",
        "Data Visualization",
        "Predictive Analytics",
        "KPI Tracking",
      ],
      color: "bg-red-500",
    },
  ];

  const stats = [
    { value: "200+", label: "Projects Completed", icon: <Code2 size={24} /> },
    { value: "98%", label: "Client Satisfaction", icon: <Star size={24} /> },
    { value: "50+", label: "Happy Clients", icon: <Users size={24} /> },
    { value: "5+", label: "Years Experience", icon: <Award size={24} /> },
  ];

  const processSteps = [
    {
      title: "Consultation",
      description: "We discuss your requirements and goals",
      icon: <MessageCircle size={32} />,
    },
    {
      title: "Planning",
      description: "We create a detailed project plan",
      icon: <Settings size={32} />,
    },
    {
      title: "Development",
      description: "Our team builds your solution",
      icon: <Code2 size={32} />,
    },
    {
      title: "Delivery",
      description: "We deliver the final product",
      icon: <CheckCircle2 size={32} />,
    },
  ];

  return (
    <>
      <Head>
        <title>Our Services | Qooli Coder</title>
        <meta
          name="description"
          content="Explore our professional IT services including web development, app development, digital marketing, and more."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-20 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                We provide cutting-edge digital solutions to help your business
                thrive in the digital age. From development to marketing, we've
                got you covered.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center">
                  Get Started <ChevronRight size={20} className="ml-2" />
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center">
                  <Play size={20} className="mr-2 fill-current" /> Watch Demo
                </button>
              </div>
            </div>
            <div className="lg:flex justify-end hidden">
              <div className="w-full max-w-md h-80 bg-white/10 rounded-2xl backdrop-blur-sm p-6 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    "Expertise in latest technologies",
                    "Customized solutions for your business",
                    "Timely delivery guaranteed",
                    "Ongoing support & maintenance",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle2 size={20} className="text-green-300 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 lg:px-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-primary dark:text-primary mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive range of services to help your business
              succeed in the digital world.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl shadow-md dark:shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:bg-gray-700"
              >
                <div
                  className={`flex justify-center items-center p-4 rounded-full w-20 h-20 mx-auto mb-6 ${service.color} bg-opacity-10 text-primary dark:text-primary`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <button
                  onClick={() => setActiveService(index)}
                  className="w-full py-3 bg-gray-100 dark:bg-gray-700 text-primary dark:text-primary rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center"
                >
                  Learn More <ChevronRight size={20} className="ml-2" />
                </button>
              </div>
            ))}
          </div>

          {/* Service Detail */}
          <div className="mt-20 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
            <div className="flex items-center mb-6">
              <div
                className={`p-3 rounded-lg ${services[activeService].color} bg-opacity-10 text-primary dark:text-primary mr-4`}
              >
                {services[activeService].icon}
              </div>
              <h3 className="text-3xl font-bold">
                {services[activeService].title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              {services[activeService].fullDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {services[activeService].features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 size={20} className="text-green-500 mr-3" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <button className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
                Request This Service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 lg:px-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We follow a structured approach to ensure your project's success
              from conception to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-700"
              >
                <div className="flex justify-center text-primary dark:text-primary mb-4">
                  {step.icon}
                </div>
                <div className="text-2xl font-bold text-primary dark:text-primary mb-2">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-20 bg-primary text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let's discuss your project and find the perfect solution for your
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </button>
            <button className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;

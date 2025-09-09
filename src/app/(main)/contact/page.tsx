"use client";

import { useState, ChangeEvent, FormEvent, JSX } from "react";
import Head from "next/head";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  User,
  ChevronRight,
} from "lucide-react";

// Define TypeScript interfaces
interface ContactInfoItem {
  icon: JSX.Element;
  title: string;
  details: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically send this data to your backend or email service
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo: ContactInfoItem[] = [
    {
      icon: <MapPin size={24} />,
      title: "Our Location",
      details: "123 Tech Street, San Francisco, CA 94103",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Number",
      details: "+1 (555) 123-4567",
    },
    {
      icon: <Mail size={24} />,
      title: "Email Address",
      details: "info@qoolicoder.com",
    },
    {
      icon: <Clock size={24} />,
      title: "Working Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
    },
  ];

  const faqItems: FAQItem[] = [
    {
      question: "How long does a typical project take?",
      answer:
        "The timeline varies based on project complexity. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline after our initial consultation.",
    },
    {
      question: "Do you offer ongoing maintenance?",
      answer:
        "Yes, we offer various maintenance plans to keep your website or application running smoothly after launch. This includes security updates, bug fixes, and performance optimization.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We offer both fixed-price projects for well-defined scope and hourly rates for ongoing work. After understanding your requirements, we'll provide a detailed quote with no hidden fees.",
    },
    {
      question: "Do you work with clients remotely?",
      answer:
        "Absolutely! We work with clients from all over the world. Our communication process is optimized for remote collaboration through video calls, project management tools, and regular updates.",
    },
  ];

  return (
    <>
      <Head>
        <title>Contact Us | Qooli Coder</title>
        <meta
          name="description"
          content="Get in touch with Qooli Coder for your web development, app development, and digital marketing needs."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-20 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Contact <span className="text-primary">Us</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Have a project in mind? Let's discuss how we can help bring your
                ideas to life. We're here to answer any questions you may have.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center">
                  Start a Project <ChevronRight size={20} className="ml-2" />
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center">
                  <Phone size={20} className="mr-2" /> Call Now
                </button>
              </div>
            </div>
            <div className="lg:flex justify-end hidden">
              <div className="w-full max-w-md h-80 bg-white/10 rounded-2xl backdrop-blur-sm p-6 border border-white/20 flex items-center justify-center">
                <MessageCircle size={120} className="text-primary opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6 lg:px-20 bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item: ContactInfoItem, index: number) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-700 shadow-md dark:shadow-gray-900/30"
              >
                <div className="flex justify-center text-primary dark:text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50 dark:bg-gray-900 text-dark dark:text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible. We typically respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User size={20} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-10 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Mail size={20} className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
                >
                  Send Message <Send size={20} className="ml-2" />
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-96 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto text-primary mb-4" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Interactive Map Would Appear Here
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    We're located in the heart of San Francisco's tech district
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md dark:shadow-gray-900/30">
                <h3 className="text-xl font-semibold mb-4">
                  Why Work With Us?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      Quick response time (within 24 hours)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      Free initial consultation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      Transparent pricing with no hidden fees
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">
                      Ongoing support after project completion
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-primary">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((faq: FAQItem, index: number) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 dark:text-white"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;

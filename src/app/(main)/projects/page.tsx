"use client";

import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import {
  Filter,
  ExternalLink,
  Github,
  ChevronRight,
  ArrowRight,
  Code2,
  Smartphone,
  Globe,
  BarChart3,
  Database,
  Search,
} from "lucide-react";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "app", label: "Mobile Apps" },
    { id: "marketing", label: "Digital Marketing" },
    { id: "data", label: "Data Analytics" },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description:
        "A full-featured online store with shopping cart, payment processing, and inventory management.",
      image: "/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      category: "app",
      description:
        "Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
      image: "/projects/fitness-app.jpg",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
    },
    {
      id: 3,
      title: "Corporate Website Redesign",
      category: "web",
      description:
        "Complete redesign of corporate website with improved UX and modern design principles.",
      image: "/projects/corporate.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Contentful"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
    {
      id: 4,
      title: "Social Media Campaign",
      category: "marketing",
      description:
        "Comprehensive social media marketing campaign resulting in 200% increase in engagement.",
      image: "/projects/social-media.jpg",
      technologies: ["Facebook Ads", "Instagram", "Analytics"],
      liveUrl: "https://example.com",
      githubUrl: null,
      featured: false,
    },
    {
      id: 5,
      title: "Business Intelligence Dashboard",
      category: "data",
      description:
        "Interactive dashboard for visualizing business metrics and KPIs with real-time data.",
      image: "/projects/dashboard.jpg",
      technologies: ["Tableau", "Python", "SQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
    },
    {
      id: 6,
      title: "Food Delivery App",
      category: "app",
      description:
        "Mobile application for food ordering and delivery with real-time tracking.",
      image: "/projects/food-delivery.jpg",
      technologies: ["React Native", "Firebase", "Google Maps API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
    {
      id: 7,
      title: "Portfolio Website",
      category: "web",
      description:
        "Elegant portfolio website for creative professionals with custom CMS.",
      image: "/projects/portfolio.jpg",
      technologies: ["Gatsby", "GraphQL", "Netlify CMS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
    {
      id: 8,
      title: "Customer Analytics Platform",
      category: "data",
      description:
        "Advanced analytics platform for tracking customer behavior and generating insights.",
      image: "/projects/analytics.jpg",
      technologies: ["Python", "D3.js", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
  ];

  const getCategoryIcon = (category:any) => {
    switch (category) {
      case "web":
        return <Globe size={20} />;
      case "app":
        return <Smartphone size={20} />;
      case "marketing":
        return <BarChart3 size={20} />;
      case "data":
        return <Database size={20} />;
      default:
        return <Code2 size={20} />;
    }
  };

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeFilter === "all" || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>Our Projects | Qooli Coder</title>
        <meta
          name="description"
          content="Explore our portfolio of web development, mobile apps, and digital marketing projects."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-20 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Our <span className="text-primary">Projects</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Explore our portfolio of innovative digital solutions that have
                helped businesses grow and succeed.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center">
                  Start a Project <ChevronRight size={20} className="ml-2" />
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center">
                  View Services
                </button>
              </div>
            </div>
            <div className="lg:flex justify-end hidden">
              <div className="w-full max-w-md h-80 bg-white/10 rounded-2xl backdrop-blur-sm p-6 border border-white/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">
                    {projects.length}+
                  </div>
                  <div className="text-xl">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="py-12 px-6 lg:px-20 bg-gray-50 dark:bg-gray-900  z-10 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full flex items-center gap-2 transition-colors ${
                    activeFilter === filter.id
                      ? "bg-primary text-white"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <Filter size={16} />
                  {filter.label}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 lg:px-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your filters or search query
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-900 bg-white dark:bg-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                          {project.category.charAt(0).toUpperCase() +
                            project.category.slice(1)}
                        </span>
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-yellow-400 text-gray-900 text-sm rounded-full">
                            Featured
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {getCategoryIcon(project.category)}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl dark:text-white font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-3">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-primary hover:text-white transition-colors"
                              title="View Live"
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
                              title="View Code"
                            >
                              <Github size={18} />
                            </a>
                          )}
                        </div>
                        <button className="flex items-center text-primary hover:text-primary/80 transition-colors">
                          Details <ArrowRight size={16} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button (for pagination) */}
              <div className="text-center mt-12">
                <button className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                  Load More Projects
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-20 bg-primary text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let's work together to create something amazing. Contact us to
            discuss your project ideas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Get Free Quote
            </button>
            <button className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;

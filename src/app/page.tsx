import ChooseUsSection from "@/components/ui/choose-us-section";
import ServicesSection from "@/components/ui/services-section";
import StatsSection from "@/components/ui/state-section";
import Image from "next/image";
import ITSolutionsSection from "@/components/ui/it-solution-section";
import { ChevronRight, Play, Star, Users, Award, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6  py-16 lg:py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>

        {/* Left Content */}
        <div className="content w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Rocket size={16} className="mr-2" /> Transforming Businesses
            Digitally
          </div>

          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl relative inline-block">
            QOOLI <span className="text-primary">CODER</span>
            <span className="line absolute bottom-0 left-0 w-1/3 h-1 rounded bg-primary"></span>
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-100">
            We provide the best{" "}
            <span className="text-primary">tech solutions</span> for your
            business growth
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Empowering your digital journey with cutting-edge solutions, we
            drive innovation and turn your vision into reality. Partner with us
            to elevate your business to new heights of success.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
            <button className="flex items-center justify-center py-3.5 px-8 rounded-xl bg-primary text-white text-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg">
              Work With Us <ChevronRight size={20} className="ml-2" />
            </button>
            <button className="flex items-center justify-center py-3.5 px-8 rounded-xl border border-gray-300 dark:border-gray-600 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
              <Play size={20} className="mr-2 fill-current" /> View Demo
            </button>
          </div>

          {/* Stats preview */}
          <div className="grid grid-cols-3 gap-6 pt-8 max-w-md">
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Projects
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Clients
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="home-image w-full lg:w-1/2 flex justify-center relative">
          <div className="relative w-full max-w-md">
            <Image
              src="/image/home.jpg"
              alt="Team collaboration"
              width={600}
              height={600}
              className="rounded-2xl shadow-xl object-cover z-10 relative"
              priority
            />
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                  <CheckCircle
                    className="text-green-600 dark:text-green-400"
                    size={20}
                  />
                </div>
                <div className="ml-3">
                  <div className="font-semibold">Project Completed</div>
                  <div className="text-primary font-bold">5+</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <Users
                    className="text-blue-600 dark:text-blue-400"
                    size={20}
                  />
                </div>
                <div className="ml-3">
                  <div className="font-semibold">Happy Clients</div>
                  <div className="text-primary font-bold">10+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Choose Us Section */}
      <ChooseUsSection />

      {/* Stats Section */}
      <StatsSection />

      {/* IT Solutions Section */}
      <ITSolutionsSection />

      {/* Testimonial Preview Section */}
      <section className="py-16 px-6 lg:px-20 bg-gray-50 dark:bg-dark">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Don't just take our word for it. Here's what our clients have to say
            about our services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md"
              >
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "Qooli Coder transformed our business with their exceptional
                  web development services. Their team was professional and
                  delivered beyond our expectations."
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">John Smith</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      CEO, TechCorp
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-20   text-dark dark:text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve your business goals with
            our technical expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-3.5   text-white font-semibold rounded-lg cursor-pointer
             border-primary border bg-primary t transition-colors"
            >
              Get Free Consultation
            </button>
            <button className="px-8 py-3.5   text-primary font-semibold rounded-lg  cursor-pointer hover:text-white border-primary border hover:bg-primary bg-gray-100 transition-colors">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Adding the missing icon component
function CheckCircle(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

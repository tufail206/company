import ChooseUsSection from "@/components/ui/choose-us-section";
import ServicesSection from "@/components/ui/services-section";
import StatsSection from "@/components/ui/state-section";
import Image from "next/image";
import ITSolutionsSection from "@/components/ui/it-solution-section"
export default function Home() {
  return (
    <div className="dark:bg-dark dark:text-white">
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6 lg:px-20 py-16">
        {/* Left Content */}
        <div className="content w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl relative inline-block">
            QOOLI <span className="text-primary">CODER</span>
            <span className="line absolute bottom-0 left-0 w-1/3 h-[3px] rounded bg-primary"></span>
          </h1>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            We provide best tech solutions for your business
          </h3>

          <p className="tracking-wide text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300">
            Empowering your digital journey with cutting-edge solutions, we
            drive innovation and turn your vision into reality. Partner with us
            to elevate your business to new heights of success.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-6">
            <button className="py-3 px-6 rounded-xl bg-primary text-white text-lg font-medium hover:bg-white hover:text-primary hover:outline hover:outline-2 hover:outline-primary dark:hover:bg-dark dark:border dark:border-primary transition-all duration-300">
              Work With Us
            </button>
            <button className="py-3 px-6 rounded-xl border border-primary text-lg font-medium hover:bg-primary hover:text-white transition-all duration-300">
              View Services
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="home-image w-full lg:w-1/2 flex justify-center">
          <Image
            src="/image/home.jpg"
            alt="Home image"
            width={500}
            height={500}
            className="rounded-xl shadow-lg object-cover"
            priority
          />
        </div>
      </div>

      {/* Services Section */}
      <ServicesSection />
      <ChooseUsSection/>
      <StatsSection/>
      <ITSolutionsSection/>
    </div>
  );
}

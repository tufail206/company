import Image from "next/image";
import { CheckCircle2, Headphones } from "lucide-react";

const ITSolutionsSection = () => {
  return (
    <section className="py-20 px-2 lg:px-0 bg-gray-50 dark:bg-dark">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Images */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Bottom Image */}
          <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/image/solution1.jpg"
              alt="IT Solutions"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Top Image (stacked & slightly shifted) */}
          <div className="absolute -right-4 sm:-right-8 md:-right-10 bottom-6 sm:bottom-8 md:bottom-1 w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] rounded-2xl overflow-hidden shadow-xl border-2 border-white dark:border-gray-800">
            <Image
              src="/image/solution2.jpg"
              alt="Tech Support"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            We provide perfect{" "}
            <span className="text-primary">IT solutions & technology</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            During this time, we’ve built a reputation for excellent client
            satisfaction. Each demo built with Teba looks unique and
            customizable. With just a few clicks, you can adjust almost anything
            in your website’s appearance.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3 justify-center lg:justify-start">
                <CheckCircle2 className="text-primary" size={28} />
                <h3 className="font-semibold text-lg">Provide Skills</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Professional services tailored to your business needs.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3 justify-center lg:justify-start">
                <Headphones className="text-primary" size={28} />
                <h3 className="font-semibold text-lg">Urgent Support</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                24/7 client support ensuring uninterrupted business operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITSolutionsSection;

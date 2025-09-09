import Image from "next/image";
import { CheckCircle2, Headphones } from "lucide-react";

const ITSolutionsSection = () => {
  return (
    <section className="py-20 px-6 lg:px-20 bg-gray-50 dark:bg-dark">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Images */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Bottom Image */}
          <div className="w-[380px] h-[380px] relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/image/solution1.jpg"
              alt="IT Solutions"
              fill
              className="object-cover"
            />
          </div>

          {/* Top Image (stacked & slightly shifted) */}
          <div className="absolute -right-10 bottom-10 w-[280px] h-[280px] rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
            <Image
              src="/image/solution2.jpg"
              alt="Tech Support"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            We provide perfect{" "}
            <span className="text-primary">IT solutions & technology</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            During this time, we’ve built a reputation for excellent client
            satisfaction. Each demo built with Teba looks unique and
            customizable. With just a few clicks, you can adjust almost anything
            in your website’s appearance.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="text-primary" size={28} />
                <h3 className="font-semibold text-lg">Provide Skills</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Professional services tailored to your business needs.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
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

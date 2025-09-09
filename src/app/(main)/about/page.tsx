import { Target, Users, Briefcase, Award } from "lucide-react";

const AboutPage = () => {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">Qooli Coder</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are a team of passionate developers and designers committed to
            delivering innovative IT solutions that empower businesses to thrive
            in the digital era.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 lg:px-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Qooli Coder was founded in 2018 with a simple mission: to help
              businesses grow through technology. Starting as a small group of
              passionate developers, we’ve evolved into a trusted IT partner
              serving clients across industries.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Today, we continue to adapt to the ever-changing tech landscape,
              ensuring our clients always have access to the latest innovations
              and best practices.
            </p>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Target size={80} className="text-primary" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-lg">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-6 lg:px-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-14">
            Our <span className="text-primary">Achievements</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 hover:shadow-lg transition">
              <Users className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="text-4xl font-bold text-primary">10+</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Happy Clients
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 hover:shadow-lg transition">
              <Briefcase className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="text-4xl font-bold text-primary">6+</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Finished Projects
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 hover:shadow-lg transition">
              <Award className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="text-4xl font-bold text-primary">5+</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Skilled Experts
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 hover:shadow-lg transition">
              <Target className="mx-auto mb-4 text-primary" size={40} />
              <h3 className="text-4xl font-bold text-primary">100%</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

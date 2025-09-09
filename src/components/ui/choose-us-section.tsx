import { Award, Users, DollarSign } from "lucide-react";

const ChooseUsSection = () => {
  const features = [
    {
      title: "Expertise and Experience",
      description:
        "Our skilled team brings years of industry expertise to deliver top-notch, high-performance solutions. We leverage our knowledge to meet and exceed your expectations.",
      icon: <Award size={48} />,
    },
    {
      title: "Client-Centric Approach",
      description:
        "We prioritize your needs by offering tailored solutions that align with your business goals. Your success is our mission, and we strive to build lasting partnerships.",
      icon: <Users size={48} />,
    },
    {
      title: "Cost-Effectiveness",
      description:
        "We offer high-quality services at competitive prices, ensuring you get the best value for your investment. Our efficient solutions help you achieve more within budget.",
      icon: <DollarSign size={48} />,
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-12">
          Why You Should <span className="text-primary">Choose Us?</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-lg p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:bg-gray-700"
            >
              <div className="flex justify-center items-center text-primary mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;

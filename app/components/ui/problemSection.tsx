import { AnimatedItem } from "../animatedItem";

type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: "The Challenge",
    description:
      "Tired of paying for 10 different apps that don’t talk to each other? Struggling to scale your business and reach out to leads effectively? Managing tools, data, and workflows separately slows you down and costs you more.",
  },
  {
    title: "The NextaFlow Difference",
    description:
      "Most CRMs hand you a login and wish you luck. NextaFlow gives you an all-in-one powerhouse and a team that sets everything up for you. No coding. No headaches. Just results.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 rounded-md bg-white">
      <div className="max-w-7xl mx-auto md:px-6 px-4 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-14">
          <AnimatedItem index={0} delay={0.05}>
            <h2 className="text-[16px] uppercase font-[500] text-[var(--primary)]">
              The Business Challenges and Solutions
            </h2>
          </AnimatedItem>
          <AnimatedItem index={0} delay={0.1}>
            <p className="mt-3 md:text-2xl text-xl text-[#1a1a1a]">
              Why businesses choose NextaFlow
            </p>
          </AnimatedItem>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">
          {features.map((item, index) => (
            <AnimatedItem key={index} index={index} delay={0.15 * index}>
              <div
                key={index}
                className="p-4 rounded-xl bg-[#f7f7f7] md:h-[250px] h-full border-[1px] border-[#e2e2e2]"
              >
                <h3 className="text-[20px] font-[400] text-[#1a1a1a] py-4">
                  {item.title}
                </h3>
                <p className="text-[#1a1a1a] font-[300] leading-relaxed pb-10">
                  {item.description}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
}

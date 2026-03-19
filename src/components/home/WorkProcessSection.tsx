import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Palette, Rocket, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Strategy",
    description:
      "We start by understanding your long-term business goals and craft a detailed technology roadmap that aligns innovation with growth.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design & Prototyping",
    description:
      "Our team creates intuitive, beautiful interfaces and interactive prototypes that align perfectly with your brand vision.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Incorporation & Growth",
    description:
      "We build scalable, secure solutions with sophisticated features delivering performance and connectivity across every platform.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Testing & Deployment",
    description:
      "After rigorous testing for functionality, speed, and reliability, we deploy seamlessly for the best user experience possible.",
  },
];

export const WorkProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="section-tag mb-4 justify-center">Our Working Process</p>
          <h2 className="section-heading max-w-2xl mx-auto">
            From Strategy To{" "}
            <span className="text-gradient">Launch</span>
          </h2>
          <p className="section-subtext max-w-xl mx-auto mt-4">
            A proven, step-by-step approach to turning your ideas into high-performing digital products.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-red-200 to-transparent hidden lg:block pointer-events-none" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.12 }}
            >
              <div className="process-card group">
                {/* Big number */}
                <div className="process-card-num">{step.number}</div>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors">
                  <step.icon className="w-5 h-5 text-[hsl(var(--red))]" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

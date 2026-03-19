import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Users, Award, Zap, Heart } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team of specialists brings years of experience across all digital disciplines.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized by industry leaders for our innovative approach and results.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We work efficiently to deliver projects on time without compromising quality.",
  },
  {
    icon: Heart,
    title: "Client First",
    description: "Your success is our priority. We're committed to exceeding expectations.",
  },
];

const points = [
  "Customized strategies for your unique needs",
  "Transparent communication and detailed reporting",
  "Proven track record of success across industries",
  "Continuous optimization and dedicated support",
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-gray-section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-tag mb-4">Why Choose Us</p>
            <h2 className="section-heading mb-5">
              We Are a Team of{" "}
              <span className="text-gradient">Passionate IT</span>{" "}
              Professionals
            </h2>
            <p className="section-subtext mb-8">
              We're your strategic partners in digital transformation. With a passion for
              innovation and a commitment to excellence, we help businesses thrive in the
              digital landscape.
            </p>

            <ul className="space-y-3 mb-8">
              {points.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[hsl(var(--red))]" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 sm:gap-5"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                  <feature.icon className="w-5 h-5 text-[hsl(var(--red))]" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

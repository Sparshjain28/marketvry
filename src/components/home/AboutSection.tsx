import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Users, Award, Zap, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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

const stats = [
  { value: "9000+", label: "Projects Handled" },
  { value: "8700+", label: "Happy Clients" },
  { value: "97%", label: "Satisfaction Rate" },
  { value: "15+", label: "Industries Served" },
  { value: "17+", label: "Years of Experience" },
  { value: "70+", label: "Team Members" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-tag mb-4">About Our Agency</p>
            <h2 className="section-heading mb-6">
              We Are a Team of{" "}
              <span className="text-gradient">Passionate IT</span>{" "}
              Professionals
            </h2>
            <p className="section-subtext mb-8 text-lg">
              Marketvry is a premier digital agency dedicated to transforming your brand's digital presence. 
              With over 17 years of experience, we combine technical excellence with creative strategy 
              to deliver results that matter.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {points.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-[hsl(var(--red))]" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/about">
                <Button className="btn-hero group px-8 py-6 rounded-xl">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
              >
                <div className="text-3xl sm:text-4xl font-black text-gray-900 mb-2 group-hover:text-[hsl(var(--red))] transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingBag, HeartPulse, Building2, GraduationCap, Plane, Utensils, Zap, Cpu } from "lucide-react";

const industries = [
  { icon: ShoppingBag, title: "E-Commerce", color: "bg-blue-500" },
  { icon: HeartPulse, title: "Healthcare", color: "bg-red-500" },
  { icon: Building2, title: "Real Estate", color: "bg-emerald-500" },
  { icon: GraduationCap, title: "Education", color: "bg-purple-500" },
  { icon: Plane, title: "Travel & Tourism", color: "bg-sky-500" },
  { icon: Utensils, title: "Food & Beverage", color: "bg-orange-500" },
  { icon: Zap, title: "Energy", color: "bg-yellow-500" },
  { icon: Cpu, title: "Technology", color: "bg-indigo-500" },
];

export const IndustriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-tag justify-center mb-4"
          >
            Diverse Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading"
          >
            Industries We <span className="text-gradient">Serve</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {industries.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-8 rounded-3xl border border-gray-100 bg-white hover:border-[hsl(var(--red)/0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${item.color.replace('500', '50')} border border-gray-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                <item.icon className={`w-8 h-8 ${item.color.replace('bg-', 'text-')}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-[hsl(var(--red))] transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

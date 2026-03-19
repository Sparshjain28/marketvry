import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Digital Marketing",
    description: "Data-driven online strategies to increase brand visibility, engagement, and conversions across all channels.",
    path: "/services/digital-marketing",
  },
  {
    number: "02",
    title: "App Development",
    description: "Custom mobile applications designed for performance, scalability, and seamless usability on any platform.",
    path: "/services/ai-agent",
  },
  {
    number: "03",
    title: "Website Development",
    description: "Robust, secure websites built for speed, functionality, and reliability — from landing pages to full platforms.",
    path: "/services/web-development",
  },
  {
    number: "04",
    title: "WhatsApp Marketing",
    description: "Reach customers instantly with 98% open rates via the official WhatsApp API and AI-powered automation.",
    path: "/services/whatsapp-marketing",
  },
  {
    number: "05",
    title: "SEO Services",
    description: "Boost your organic visibility with proven on-page, off-page, and technical SEO strategies.",
    path: "/services/seo",
  },
  {
    number: "06",
    title: "AI Agent Services",
    description: "Intelligent AI agents that automate customer support, qualify leads, and drive business growth 24/7.",
    path: "/services/ai-agent",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-gray-section">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <p className="section-tag mb-4">What We Offer</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="section-heading max-w-lg">
              Our <span className="text-gradient">Services</span>
            </h2>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[hsl(var(--red))] font-semibold hover:gap-3 transition-all text-sm"
            >
              View More Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Dark Mode Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={service.path} className="block h-full">
                <div className="relative overflow-hidden rounded-3xl bg-[hsl(var(--navy))] p-10 h-full group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,51,51,0.15)] border border-white/5 hover:border-[hsl(var(--red)/0.3)]">
                  {/* Bottom accent bar */}
                  <div className="absolute bottom-0 left-0 w-12 h-1 bg-[hsl(var(--red))] transition-all duration-500 group-hover:w-full" />
                  
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[hsl(var(--red)/0.15)] transition-all duration-500">
                      <span className="text-2xl font-black text-[hsl(var(--red))]">
                        {service.number}
                      </span>
                    </div>
                    <ArrowRight className="w-6 h-6 text-white/20 group-hover:text-[hsl(var(--red))] group-hover:translate-x-1 transition-all" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[hsl(var(--red))] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-lg font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

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

        {/* Numbered Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link to={service.path} className="block h-full">
                <div className="service-number-card h-full group">
                  <div className="flex items-start justify-between mb-2">
                    <span className="service-num">{service.number}</span>
                    <div className="w-8 h-8 rounded-full border border-[hsl(var(--red)/0.15)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-red-50">
                      <ArrowRight className="w-4 h-4 text-[hsl(var(--red))]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-[hsl(var(--red))] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
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

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/7579959-hd_2048_1080_25fps.mp4";

const stats = [
  { value: "250+", label: "Projects Handled" },
  { value: "120+", label: "Happy Clients" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "12+", label: "Industries" },
  { value: "10+", label: "Years of Exp" },
  { value: "30+", label: "Team Members" },
];

export const HeroSection = () => {
  return (
    <section className="relative flex flex-col min-h-[500px] md:min-h-[600px] mt-20 md:mt-24 overflow-hidden">
      {/* ── Background Video/Image ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Subtle professional overlay for better visibility */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-start justify-center text-left px-4">
        <div className="container-custom">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black bg-[hsl(var(--red))] text-white shadow-[0_0_20px_rgba(255,51,51,0.4)] uppercase tracking-widest">
                Digital Marketing & AI Agency
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 leading-[1.05] tracking-tighter"
            >
              Innovating Digital, <br />
              Empowering Your <span className="text-gradient">Growth with AI</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed font-medium"
            >
              We transform brands through data-driven marketing, 
              creative branding, and scalable tech solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link to="/contact">
                <Button className="btn-hero group px-10 py-7 text-lg rounded-xl shadow-2xl hover:scale-105 transition-all">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button
                  variant="outline"
                  className="px-10 py-7 text-lg bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 text-white transition-all rounded-xl"
                >
                  View Our Projects
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Logo Wall at bottom ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-20 bg-black/20 backdrop-blur-sm border-t border-white/5 py-6"
      >
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-start gap-8 md:gap-16 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            {["Winds", "Tanisha", "TechGlobal", "Nexus", "Vision"].map((brand) => (
              <span key={brand} className="text-white text-sm md:text-base font-black uppercase tracking-widest cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

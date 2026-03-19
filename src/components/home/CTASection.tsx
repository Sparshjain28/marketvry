import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[3rem] bg-[hsl(var(--navy))] p-12 md:p-20 text-center"
        >
          {/* Decorative backgrounds */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(var(--red)/0.15)] blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(var(--red)/0.1)] blur-[100px] translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight"
            >
              Turn Innovation into Your <span className="text-[hsl(var(--red))]">Competitive Advantage</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-white/70 mb-12 font-light"
            >
              Ready to scale your brand with AI-driven marketing and cutting-edge development? 
              Let's build something extraordinary together.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link to="/contact">
                <Button className="btn-hero group px-10 py-8 text-xl rounded-2xl">
                  Request a Free Quote Today
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="w-full sm:w-auto px-10 py-8 text-xl bg-white/5 backdrop-blur-xl border-2 border-white/20 hover:border-white text-white group transition-all rounded-2xl">
                  <MessageSquare className="w-6 h-6 mr-3" />
                  Chat With Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

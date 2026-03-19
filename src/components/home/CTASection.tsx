import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-20 md:py-24" style={{ background: "hsl(var(--navy))" }}>
      {/* Background decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[hsl(var(--red)/0.12)] rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[hsl(var(--red)/0.08)] rounded-full blur-[100px] translate-x-1/3 translate-y-1/4 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-tag mb-5 justify-center" style={{ color: "hsl(var(--red))" }}>
              Let's Connect
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.1] mb-4">
              Hold On a Moment!
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-white/80 mb-6">
              Want to discuss your project?
            </h3>
            <p className="text-white/55 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Ready to take your digital presence to the next level? Get in touch with our team and let's discuss how we can help you achieve your goals.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <button className="btn-hero inline-flex items-center gap-2 text-base px-8 py-4">
                  Get Free Consultation <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <a href="tel:+918955123551">
                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/25 text-white font-semibold hover:border-white/50 hover:bg-white/8 transition-all text-base">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </button>
              </a>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/10"
            >
              {[
                { label: "Response Time", value: "< 24 hrs" },
                { label: "Client Satisfaction", value: "98%" },
                { label: "Free Consultation", value: "Always" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-2xl font-black text-[hsl(var(--red))]">{item.value}</div>
                  <div className="text-xs text-white/50 mt-1">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

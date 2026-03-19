import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO, TechFlow",
    content: "Marketvry transformed our digital presence completely. Their AI-driven approach to marketing gave us results we couldn't achieve with traditional agencies.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Sarah Miller",
    role: "Marketing Director, LuxStay",
    content: "The web development team is top-notch. Our new platform is faster, more secure, and converted 40% better in the first month alone.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "David Chen",
    role: "Founder, Nexus IT",
    content: "Their branding strategy was a game-changer. They didn't just give us a logo; they gave us a story that resonates with our global audience.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=david"
  }
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-gray-section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-tag justify-center mb-4"
          >
            Client Success
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-heading"
          >
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="absolute top-8 right-8 text-red-100 group-hover:text-red-200 transition-colors">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[hsl(var(--red))] text-[hsl(var(--red))]" />
                ))}
              </div>

              <p className="text-gray-600 italic mb-8 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

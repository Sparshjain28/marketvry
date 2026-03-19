import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    content: "Working with Marketvry transformed our online presence completely. Their strategic approach to digital marketing increased our leads by 200% in just 6 months.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, GreenLeaf",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    content: "The website they built for us is not just beautiful but converts visitors into customers. Their attention to UX details is remarkable and the results speak for themselves.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Marketing Director, FoodCo",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    content: "Their SEO expertise helped us rank #1 for our key terms within 4 months. The team is professional, responsive, and truly understands digital marketing.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Miller",
    role: "CTO, InnovateTech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    content: "From concept to launch, the development team exceeded our expectations. The web application they built handles millions of users flawlessly.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="section-padding bg-gray-section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="section-tag mb-4 justify-center">Client Feedback</p>
          <h2 className="section-heading max-w-xl mx-auto">
            See What Our{" "}
            <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="section-subtext mt-4">
            Don't just take our word for it — hear from the businesses we've helped succeed.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="testimonial-card"
          >
            <Quote className="w-8 h-8 text-[hsl(var(--red))] mb-4 opacity-60" />
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 italic">
              "{testimonials[currentIndex].content}"
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-red-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-500 text-xs">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[hsl(var(--red))] hover:border-[hsl(var(--red))] hover:text-white transition-all text-gray-600 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "w-8 bg-[hsl(var(--red))]"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[hsl(var(--red))] hover:border-[hsl(var(--red))] hover:text-white transition-all text-gray-600 shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

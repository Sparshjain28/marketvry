import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    id: 1,
    tag: "Digital Marketing",
    headline: "Innovating Digital,",
    headlineAccent: "Empowering Your Growth",
    sub: "with AI",
    description:
      "Data-driven strategies, SEO, social media & performance marketing that deliver measurable results.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
  },
  {
    id: 2,
    tag: "WhatsApp Marketing",
    headline: "Reach Customers",
    headlineAccent: "Where They Are",
    sub: "with WhatsApp",
    description:
      "WhatsApp marketing with 98% open rates. Official API, AI automation, and bulk messaging solutions.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1920&h=1080&fit=crop",
  },
  {
    id: 3,
    tag: "Growth Strategy",
    headline: "Scale Your Brand,",
    headlineAccent: "Drive Real Growth",
    sub: "with Strategy",
    description:
      "Comprehensive digital solutions from SEO to AI agents that accelerate your business growth.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop",
  },
];

const stats = [
  { value: "250+", label: "Projects Handled" },
  { value: "120+", label: "Happy Clients" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "12+", label: "Industries" },
  { value: "10+", label: "Years of Exp" },
  { value: "30+", label: "Team Members" },
];

export const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi && emblaApi.scrollTo(i), [emblaApi]);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || !isAutoPlaying) return;
    const id = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [emblaApi, isAutoPlaying]);

  return (
    <section
      className="relative flex flex-col"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* ── Slides ── */}
      <div ref={emblaRef} className="w-full overflow-hidden">
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] min-w-0 min-h-[92vh] flex items-center"
            >
              {/* BG image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.tag}
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay — keeps hero dark but site sections are white */}
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,12,20,0.90)] via-[rgba(10,12,20,0.75)] to-[rgba(10,12,20,0.40)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,8,18,0.7)] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 w-full pt-24">
                <div className="container-custom">
                  <AnimatePresence mode="wait">
                    {selectedIndex === index && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                      >
                        {/* Badge */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="mb-5"
                        >
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[hsl(var(--red)/0.15)] border border-[hsl(var(--red)/0.3)] text-[hsl(1_85%_72%)]">
                            <span className="w-2 h-2 bg-[hsl(var(--red))] rounded-full animate-pulse" />
                            {slide.tag}
                          </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.15 }}
                          className="mb-6"
                        >
                          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] tracking-tight text-white">
                            {slide.headline}
                            <br />
                            <span className="text-gradient">{slide.headlineAccent}</span>
                            <br />
                            <span className="text-white/80">{slide.sub}</span>
                          </h1>
                        </motion.div>

                        {/* Desc */}
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.25 }}
                          className="text-lg text-white/65 mb-10 max-w-xl leading-relaxed"
                        >
                          {slide.description}
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.35 }}
                          className="flex flex-col sm:flex-row gap-4"
                        >
                          <Link to="/contact">
                            <Button className="btn-hero group w-full sm:w-auto text-base px-8 py-5">
                              Get Started
                              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                          <Link to="/about">
                            <Button
                              variant="outline"
                              className="w-full sm:w-auto px-8 py-5 text-base bg-white/8 backdrop-blur-sm border-2 border-white/25 hover:border-white/50 hover:bg-white/15 text-white group transition-all rounded-full"
                            >
                              Explore More
                              <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Button>
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Carousel Controls ── */}
      <div className="absolute bottom-[108px] sm:bottom-[120px] left-0 right-0 z-20">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button key={i} onClick={() => scrollTo(i)}>
                    <div
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        selectedIndex === i
                          ? "w-10 bg-[hsl(var(--red))]"
                          : "w-6 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <span className="text-xs text-white/40 font-mono hidden sm:block tracking-wider">
                0{selectedIndex + 1} / 0{slides.length}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-white/8 flex items-center justify-center text-white hover:bg-[hsl(var(--red))] hover:border-[hsl(var(--red))] transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-white/8 flex items-center justify-center text-white hover:bg-[hsl(var(--red))] hover:border-[hsl(var(--red))] transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Band ── */}
      <div className="relative z-20 bg-white border-t border-gray-100 shadow-[0_-4px_24px_rgba(0,0,0,0.04)]">
        <div className="container-custom py-6 sm:py-8">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 divide-x divide-gray-100">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-band-item px-2">
                <span className="stat-band-num">{stat.value}</span>
                <span className="stat-band-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

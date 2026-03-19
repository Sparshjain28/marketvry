import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Web Design", "Branding", "Marketing", "Mobile"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    client: "TechStore Inc.",
    tech: "React · Node.js",
  },
  {
    id: 2,
    title: "Brand Identity Design",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
    client: "Artisan Coffee",
    tech: "Figma · Illustrator",
  },
  {
    id: 3,
    title: "Social Media Campaign",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop",
    client: "FitLife Gym",
    tech: "Meta Ads · Analytics",
  },
  {
    id: 4,
    title: "Mobile App UI/UX",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    client: "HealthTrack App",
    tech: "Flutter · Figma",
  },
  {
    id: 5,
    title: "Corporate Website",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop",
    client: "FinTech Solutions",
    tech: "Next.js · Tailwind",
  },
  {
    id: 6,
    title: "SEO & Content Strategy",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
    client: "Green Energy Co.",
    tech: "SEMRush · Analytics",
  },
];

export const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
        >
          <div>
            <p className="section-tag mb-4">Check Out Our Work</p>
            <h2 className="section-heading">
              Our <span className="text-gradient">Featured Projects</span>
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-[hsl(var(--red))] font-semibold hover:gap-3 transition-all text-sm"
          >
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[hsl(var(--red))] text-white shadow-[0_4px_16px_hsl(1_75%_51%/0.35)]"
                  : "bg-gray-100 text-gray-600 hover:text-[hsl(var(--red))] hover:bg-red-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              layout
            >
              <Link to="/portfolio" className="group block">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] border border-gray-100 shadow-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="text-[hsl(var(--red))] text-xs font-bold tracking-wider uppercase">
                        {project.category}
                      </span>
                      <h3 className="text-base font-bold text-white mt-1">{project.title}</h3>
                      <p className="text-white/55 text-xs mt-1">{project.client} · {project.tech}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[hsl(var(--red))] flex items-center justify-center transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-gray-700 shadow-sm">
                    {project.category}
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

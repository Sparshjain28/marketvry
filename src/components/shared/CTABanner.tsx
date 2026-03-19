import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: "navy" | "accent" | "gradient" | "secondary";
}

export const CTABanner = ({
  title,
  description,
  buttonText = "Get in Touch",
  buttonLink = "/contact",
  variant = "navy",
}: CTABannerProps) => {
  const variantClasses = {
    navy: "bg-[hsl(var(--navy))] text-white border-white/10",
    accent: "bg-[hsl(var(--red))] text-white border-transparent",
    gradient: "bg-hero text-white border-transparent",
    secondary: "bg-gray-section text-foreground border-border",
  };

  return (
    <section className={`section-padding ${variantClasses[variant]}`}>
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className={`text-3xl md:text-5xl font-black mb-6 ${variant === 'secondary' ? 'text-[hsl(var(--dark))]' : 'text-white'}`}>
            {title}
          </h2>
          <p className={`mb-10 max-w-2xl mx-auto text-lg md:text-xl ${variant === 'secondary' ? 'text-muted-foreground' : 'text-white/70'}`}>
            {description}
          </p>
          <Link to={buttonLink} className="btn-hero inline-flex px-10 py-4 shadow-xl">
            {buttonText} <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const footerLinks = {
  services: [
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "Web Development", path: "/services/web-development" },
    { name: "Branding & UI/UX", path: "/services/branding" },
    { name: "SEO Services", path: "/services/seo" },
    { name: "Social Media", path: "/services/social-media" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer style={{ background: "hsl(var(--navy))" }} className="text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container-custom py-8 sm:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Subscribe to our Newsletter</h3>
              <p className="text-white/55 text-sm">Get the latest insights and updates delivered to your inbox.</p>
            </div>
            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/8 border-white/15 text-white placeholder:text-white/40 min-w-full sm:min-w-[280px] focus:border-[hsl(var(--red))]"
              />
              <Button className="btn-hero whitespace-nowrap w-full sm:w-auto">
                Subscribe <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img src={logo} alt="Marketvry" className="h-[60px] w-auto" />
            </Link>
            <p className="text-white/55 text-sm mb-6 leading-relaxed">
              Where Markets Meet Mastery — Transforming brands through innovative digital solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center hover:bg-[hsl(var(--red))] transition-colors"
                >
                  <social.icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-bold text-white mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/55 hover:text-[hsl(var(--red))] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base font-bold text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/55 hover:text-[hsl(var(--red))] transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold text-white mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[hsl(var(--red))] flex-shrink-0 mt-0.5" />
                <span className="text-white/55 text-sm">Jaipur, Rajasthan<br />India</span>
              </li>
              <li>
                <a href="tel:+918955123551" className="flex items-center gap-3 text-white/55 hover:text-[hsl(var(--red))] transition-colors text-sm">
                  <Phone className="w-4 h-4 text-[hsl(var(--red))]" />
                  +91 8955123551
                </a>
              </li>
              <li>
                <a href="mailto:support@marketvry.com" className="flex items-center gap-3 text-white/55 hover:text-[hsl(var(--red))] transition-colors text-sm">
                  <Mail className="w-4 h-4 text-[hsl(var(--red))]" />
                  support@marketvry.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Marketvry. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link key={link.name} to={link.path} className="text-xs text-white/40 hover:text-[hsl(var(--red))] transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services",
    submenu: [
      { name: "Digital Marketing", path: "/services/digital-marketing" },
      { name: "Web Development", path: "/services/web-development" },
      { name: "SEO Services", path: "/services/seo" },
      { name: "WhatsApp Marketing", path: "/services/whatsapp-marketing" },
      { name: "Bulk Messaging", path: "/services/bulk-messaging" },
      { name: "AI Agent Services", path: "/services/ai-agent" },
      { name: "Social Media", path: "/services/social-media" },
      { name: "Branding & UI/UX", path: "/services/branding" },
    ],
  },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const location = useLocation();
  const { user, profile, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[90] transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-1"
          : "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)] py-1"
      }`}
    >
      {/* Top bar */}
      <div className="border-b border-gray-100 hidden lg:block">
        <div className="container-custom">
          <div className="flex items-center justify-between py-1.5 text-xs text-gray-500">
            <span>🚀 Innovating Digital, Empowering Your Growth with AI</span>
            <div className="flex items-center gap-6">
              <a href="tel:+918955123551" className="hover:text-red-600 transition-colors">+91 8955123551</a>
              <a href="mailto:support@marketvry.com" className="hover:text-red-600 transition-colors">support@marketvry.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="Marketvry"
              className="h-11 sm:h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 text-sm font-semibold transition-colors link-underline pb-0.5 ${
                    location.pathname === link.path
                      ? "text-[hsl(var(--red))]"
                      : "text-gray-800 hover:text-[hsl(var(--red))]"
                  }`}
                >
                  {link.name}
                  {link.submenu && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                <AnimatePresence>
                  {link.submenu && activeSubmenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 pt-3"
                    >
                      <div className="bg-white rounded-xl shadow-xl py-2 min-w-[220px] border border-gray-100">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[hsl(var(--red))] hover:bg-red-50 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 text-gray-700 hover:text-[hsl(var(--red))] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                    {profile?.avatar_url ? (
                      <img src={profile.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                  </div>
                  <span className="font-medium text-sm">{profile?.full_name || "Profile"}</span>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={signOut}
                  className="text-gray-400 hover:text-gray-700"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <Link to="/contact">
                <Button className="btn-hero px-6 py-2.5 text-sm">
                  Request Free Quote
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="bg-white rounded-xl shadow-lg p-4 my-2 border border-gray-100">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.submenu ? (
                      <button
                        onClick={() =>
                          setMobileSubmenuOpen(mobileSubmenuOpen === link.name ? null : link.name)
                        }
                        className="flex items-center justify-between w-full py-3 text-gray-800 font-semibold hover:text-[hsl(var(--red))] transition-colors text-sm"
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenuOpen === link.name ? "rotate-180" : ""}`} />
                      </button>
                    ) : (
                      <Link
                        to={link.path}
                        className="block py-3 text-gray-800 font-semibold hover:text-[hsl(var(--red))] transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                    {link.submenu && mobileSubmenuOpen === link.name && (
                      <div className="pl-4 border-l-2 border-red-100 ml-2 mb-2">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block py-2 text-gray-500 hover:text-[hsl(var(--red))] transition-colors text-sm"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link to="/contact" className="block mt-4">
                  <Button className="btn-hero w-full">Request Free Quote</Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

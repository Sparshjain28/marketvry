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
      className={`fixed inset-x-0 top-0 z-[90] transition-all duration-500 ${isScrolled
          ? "bg-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-1"
          : "bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)] py-2"
        }`}
    >
      {/* Top bar - hides on scroll */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-b border-gray-100 hidden lg:block overflow-hidden"
          >
            <div className="container-custom">
              <div className="flex items-center justify-between py-2 text-[11px] text-gray-500 font-medium">
                <span>🚀 Innovating Digital, Empowering Your Growth with AI</span>
                <div className="flex items-center gap-6">
                  <a href="tel:+918955123551" className="hover:text-[hsl(var(--red))] transition-colors">+91 8955123551</a>
                  <a href="mailto:support@marketvry.com" className="hover:text-[hsl(var(--red))] transition-colors">support@marketvry.com</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container-custom">
        <div className="flex items-center justify-between transition-all duration-500 h-16">
          {/* Logo - Consistently sized */}
          <Link 
            to="/" 
            className="flex items-center flex-shrink-0 transition-all duration-500 h-12"
          >
            <img
              src={logo}
              alt="Marketvry"
              className="h-full w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 text-sm font-bold tracking-tight transition-all duration-300 ${location.pathname === link.path
                      ? "text-[hsl(var(--red))]"
                      : "text-gray-900 hover:text-[hsl(var(--red))]"
                    }`}
                >
                  {link.name}
                  {link.submenu && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                <AnimatePresence>
                  {link.submenu && activeSubmenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-4"
                    >
                      <div className="bg-white rounded-2xl shadow-2xl py-3 min-w-[240px] border border-gray-100 overflow-hidden">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-[hsl(var(--red))] hover:bg-red-50 transition-colors"
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
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 text-gray-900 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                    {profile?.avatar_url ? (
                      <img src={profile.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                  </div>
                  <span className="font-bold text-sm">{profile?.full_name || "Profile"}</span>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={signOut}
                  className="text-gray-400 hover:text-[hsl(var(--red))]"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <Link to="/contact">
                <Button className="btn-hero h-10 px-6 rounded-xl shadow-[0_10px_20px_rgba(255,51,51,0.2)] hover:scale-105 transition-all font-bold text-xs">
                  Request Free Quote
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
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
    </nav>
  );
};

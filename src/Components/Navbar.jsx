import React, { useEffect, useState, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const BRAND = {
  left: "<",
  nameMain: "Sunny",
  nameAccent: "Raj",
  right: "/>",
};

const ACCENT = "8245ec";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  { href: "https://github.com/SunnyRaj2703", label: "GitHub", icon: <FaGithub /> },
  { href: "https://www.linkedin.com/in/sunny-raj-a29682281/", label: "LinkedIn", icon: <FaLinkedin /> },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  // Close on ESC or outside click
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }

    function onClick(e) {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, [open]);

  // Detect scroll for background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section highlight
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // ✅ FIXED SCROLL FUNCTION
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const NAV_HEIGHT = 80;

    const top =
      el.getBoundingClientRect().top +
      window.scrollY -
      NAV_HEIGHT -
      8;

    window.scrollTo({
      top: top,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
      <div
        className={`mx-auto px-6 md:px-[7vw] lg:px-[16vw] ${
          scrolled ? "bg-[#050414]/70 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-2 text-lg font-semibold text-white"
          >
            <span className="text-[#8245ec]">{BRAND.left}</span>
            <span>{BRAND.nameMain}</span>
            <span className="text-[#8245ec]">/</span>
            <span>{BRAND.nameAccent}</span>
            <span className="text-[#8245ec]">{BRAND.right}</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`px-2 py-1 rounded-md transition ${
                      active === item.id
                        ? `text-[#${ACCENT}] underline underline-offset-4 decoration-[2px]`
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white p-2"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              ref={btnRef}
              onClick={() => setOpen(!open)}
              className="p-2 text-[#8245ec]"
            >
              {open ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          ref={menuRef}
          className="md:hidden fixed inset-x-4 top-20 bg-[#050414]/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl p-4"
        >
          <ul className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-md transition ${
                    active === item.id
                      ? "bg-white/10 text-white"
                      : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex justify-center gap-4 border-t border-white/10 pt-4">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

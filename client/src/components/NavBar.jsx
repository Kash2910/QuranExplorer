import React from "react";
import { Home, BookOpen, Compass } from "lucide-react";

const Navbar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const links = [
    { id: "hero", icon: <Home className="w-6 h-6" />, label: "Home" },
    { id: "intro", icon: <BookOpen className="w-6 h-6" />, label: "Intro" },
    { id: "explorer", icon: <Compass className="w-6 h-6" />, label: "Surahs" },
  ];

  return (
    <nav className="fixed top-6 right-6 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg px-6 py-3 flex space-x-8 border border-white/30 z-50">
      {links.map((link, idx) => (
        <button
          key={idx}
          onClick={() => scrollTo(link.id)}
          className="flex flex-col items-center text-sm text-white hover:text-green-600 transition"
        >
          {link.icon}
          <span className="mt-1">{link.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navbar;

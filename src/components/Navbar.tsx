import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navLinks = [
    { name: "Graveyard", href: "#graveyard" },
    { name: "Narrative", href: "#narrative" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Endgame", href: "#endgame" },
  ];

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 transition-all duration-500",
        isScrolled
          ? "bg-[#050505]/75 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Left: Logo */}
      <div className="flex flex-col items-start cursor-pointer group">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Deadcoin Logo" className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]" />
          <span className="font-graffiti text-xl tracking-wider text-white">DEAD</span>
        </div>
        <span className="text-[8px] text-white/30 tracking-widest uppercase mt-0.5 ml-1">
          LOZENDEV PRJKT
        </span>
      </div>

      {/* Center: Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm text-white/60 hover:text-white transition-colors duration-300 relative group"
          >
            <span className="relative z-10">{link.name}</span>
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-[1px] bg-accent-lime origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            />
          </a>
        ))}
      </div>

      {/* Right: Deaths Counter */}
      <motion.div
        className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 cursor-pointer hover:bg-white/10 transition-colors"
        whileHover={{ y: 2, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <span className="text-sm font-medium text-white/80">Deaths 💀:</span>
        <span className="text-sm font-bold text-accent-lime font-mono">0</span>
      </motion.div>
    </motion.nav>
  );
}

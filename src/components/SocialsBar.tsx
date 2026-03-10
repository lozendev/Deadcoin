import { motion, useScroll } from "motion/react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Twitter, Send, Activity } from "lucide-react";

export function SocialsBar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const socials = [
    { name: "X", icon: Twitter, href: "https://x.com/deadcoin" },
    { name: "Lozendev", icon: Twitter, href: "https://x.com/lozendev" },
    { name: "Dexscreener", icon: Activity, href: "https://dexscreener.com" },
    { name: "Telegram", icon: Send, href: "https://t.me/deadcoin" },
  ];

  return (
    <motion.div
      className={cn(
        "fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4 p-2 rounded-full transition-all duration-500",
        isScrolled
          ? "bg-[#050505]/75 backdrop-blur-md border border-white/5 shadow-lg"
          : "bg-transparent"
      )}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {socials.map((social, idx) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          whileHover={{ y: 2, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          title={social.name}
        >
          <social.icon className="w-5 h-5" />
        </motion.a>
      ))}
    </motion.div>
  );
}

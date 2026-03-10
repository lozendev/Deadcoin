import { motion } from "motion/react";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const caText = "CA: Updating. Follow @lozendev for latest update";

  const handleCopy = () => {
    navigator.clipboard.writeText(caText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/bg_smaller.jpg')" }}
      />
      
      {/* Gradients for blending */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050505] via-transparent to-transparent opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.h1 
          className="font-graffiti text-7xl md:text-9xl tracking-tighter text-white/90 drop-shadow-2xl mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          $DEAD COIN
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white/60 font-medium tracking-tight mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          We're just too stubborn to stay dead.
        </motion.p>

        <motion.button
          onClick={handleCopy}
          className="group flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: 2, scale: 0.98 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-mono text-sm text-white/80 tracking-tight">
            {caText}
          </span>
          {copied ? (
            <Check className="w-4 h-4 text-accent-lime" />
          ) : (
            <Copy className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
          )}
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Narrative() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="narrative" ref={ref} className="relative min-h-screen py-32 bg-[#050505] overflow-hidden flex items-center">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050505] via-transparent to-[#0b0c0b]/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Copy */}
          <motion.div 
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-graffiti text-5xl md:text-7xl text-white/90 leading-[0.9] tracking-tighter">
              They Called It.<br />We Became It.
            </h2>
            
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl font-light">
              Dead Coin lives in a cycle of reincarnation. We embrace the rot, feed on the FUD, and when the chart finally hits rock bottom, we simply rise again with a fresh coat of paint and a v2 tag.
              <br /><br />
              In a market obsessed with "narratives," we offer the ultimate one: never fully dying, just persevering until wagmi. How many times will this coin be proclaimed $DEAD before we reach the top?
            </p>

            <div className="flex items-center gap-4 mt-4">
              <motion.a
                href="https://pump.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm group"
                whileHover={{ y: 4, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="font-bold tracking-widest uppercase text-sm text-white/80 group-hover:text-white">Pump.fun</span>
              </motion.a>
              
              <motion.a
                href="https://dexscreener.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-4 bg-accent-lime/10 border border-accent-lime/20 rounded-full hover:bg-accent-lime/20 transition-colors backdrop-blur-sm group"
                whileHover={{ y: 4, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="font-bold tracking-widest uppercase text-sm text-accent-lime group-hover:text-[#d4ff33]">Dexscreener</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div 
            className="relative h-[600px] w-full flex items-center justify-center"
            style={{ y, opacity }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-lime/5 to-transparent rounded-full blur-3xl opacity-30" />
            <img 
              src="/reaper.png" 
              alt="Reaper" 
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

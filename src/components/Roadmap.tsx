import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Roadmap() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="roadmap" ref={ref} className="relative min-h-screen py-32 bg-[#0b0c0b] overflow-hidden flex items-center">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]" />
      <div className="absolute inset-0 z-0 bg-gradient-to-l from-[#050505] via-transparent to-[#0b0c0b]/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <motion.div 
            className="relative h-[600px] w-full flex items-center justify-center order-2 lg:order-1"
            style={{ y, opacity }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl opacity-20" />
            <img 
              src="/road.png" 
              alt="Roadmap Reaper" 
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Right: Copy */}
          <motion.div 
            className="flex flex-col gap-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-graffiti text-5xl md:text-7xl text-white/90 leading-[0.9] tracking-tighter">
              Whatmap
            </h2>
            
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl font-light">
              No roadmap. No utility. No 'community takeover'. Just endless respawns to mock the cycle.
              <br /><br />
              If it dumps? Told you. Add to the graveyard. Relaunch incoming.
              <br /><br />
              If it miraculously pumps? Enjoy the hopium while it lasts… unless we reach the big leagues.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

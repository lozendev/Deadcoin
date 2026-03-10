import { motion } from "motion/react";
import { Activity } from "lucide-react";

export function Dex() {
  return (
    <section id="endgame" className="relative min-h-screen py-32 bg-[#050505] overflow-hidden flex flex-col items-center justify-center">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/crissxcross.png')]" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0b0c0b] via-transparent to-[#050505]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center">
        
        {/* Chart Container */}
        <motion.div 
          className="w-full aspect-video border border-white/10 rounded-3xl bg-[#0b0c0b]/50 backdrop-blur-md overflow-hidden relative flex items-center justify-center group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Barely visible trading chart background */}
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] bg-repeat" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-full h-full opacity-10 stroke-white/20" viewBox="0 0 1000 500" preserveAspectRatio="none">
              <path d="M0,400 L100,350 L200,450 L300,200 L400,300 L500,100 L600,250 L700,50 L800,150 L900,480 L1000,490" fill="none" strokeWidth="2" />
            </svg>
          </div>
          
          <div className="relative z-10 flex flex-col items-center gap-4">
            <Activity className="w-12 h-12 text-white/20 group-hover:text-accent-lime/50 transition-colors duration-500" />
            <h2 className="font-graffiti text-4xl md:text-6xl text-white/40 tracking-widest uppercase">
              UPDATING CHART
            </h2>
          </div>
        </motion.div>

        {/* Copy & Image */}
        <motion.div 
          className="mt-16 flex flex-col md:flex-row items-center gap-12 max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="flex-1 text-lg md:text-xl text-white/60 leading-relaxed font-light">
            When volume hits zero and the chart flatlines → coin declared dead. Relaunch under the same name, same ticker, same dead eyes. Add 'v2' scratched on the tombstone like graffiti on a grave.
          </p>
          
          <div className="flex-1 relative h-64 w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-2xl opacity-20" />
            <img 
              src="/v1.png" 
              alt="Tombstone v1" 
              className="relative z-10 h-full object-contain drop-shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

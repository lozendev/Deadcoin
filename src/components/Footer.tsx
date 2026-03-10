import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative py-32 bg-[#050505] overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0b0c0b] to-transparent z-10" />

      <div className="relative z-20 max-w-4xl mx-auto px-6 flex flex-col items-center gap-12">
        
        {/* Image */}
        <motion.div 
          className="h-48 w-48 relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-full blur-xl opacity-20" />
          <img 
            src="/v1foot.png" 
            alt="Deadcoin Footer" 
            className="relative z-10 h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        {/* Copy */}
        <motion.div 
          className="flex flex-col gap-6 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm md:text-base text-white/40 font-light tracking-wide max-w-md">
            Not financial advice. This is performance art for degens who hate themselves.
          </p>
          
          <a 
            href="https://www.lozen.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] tracking-[0.3em] uppercase text-white/20 hover:text-white/60 transition-colors duration-500 mt-8"
          >
            LOZENDEV PRJKT
          </a>
        </motion.div>

      </div>
    </footer>
  );
}

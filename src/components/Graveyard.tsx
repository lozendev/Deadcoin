import { motion } from "motion/react";
import { Twitter } from "lucide-react";

export function Graveyard() {
  const cards = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    isCenter: i === 4, // 3x3 grid, index 4 is center
    content: i === 4 ? null : {
      user: `@crypto_skeptic_${i}`,
      handle: "Crypto Skeptic",
      text: "Meme coins are officially dead. The volume is gone, the hype is over. Time to pack it up and move on.",
      date: "Oct 24, 2023"
    }
  }));

  return (
    <section id="graveyard" className="relative min-h-screen py-32 bg-[#050505] overflow-hidden">
      {/* Background Textures & Gradients */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#050505] to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#050505] to-transparent z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative p-6 rounded-2xl border border-white/5 bg-[#0b0c0b]/80 backdrop-blur-sm flex flex-col justify-center ${
                card.isCenter ? "items-center text-center border-accent-lime/20 shadow-[0_0_30px_rgba(190,242,2,0.05)]" : "items-start"
              }`}
            >
              {card.isCenter ? (
                <div className="flex flex-col items-center gap-4">
                  <span className="text-4xl">💀</span>
                  <h2 className="font-graffiti text-3xl md:text-4xl text-white/90 leading-tight">
                    They Called It.<br />We Became It.
                  </h2>
                </div>
              ) : (
                <div className="flex flex-col gap-4 w-full opacity-40 hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Twitter className="w-5 h-5 text-white/50" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white/80">{card.content?.handle}</span>
                        <span className="text-xs text-white/40">{card.content?.user}</span>
                      </div>
                    </div>
                    <Twitter className="w-4 h-4 text-[#1DA1F2]/50" />
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {card.content?.text}
                  </p>
                  <span className="text-xs text-white/30 mt-2">{card.content?.date}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

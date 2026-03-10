/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "@/components/Navbar";
import { SocialsBar } from "@/components/SocialsBar";
import { Hero } from "@/components/Hero";
import { Graveyard } from "@/components/Graveyard";
import { Narrative } from "@/components/Narrative";
import { Dex } from "@/components/Dex";
import { Roadmap } from "@/components/Roadmap";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-accent-lime selection:text-black">
      <Navbar />
      <SocialsBar />
      
      <main>
        <Hero />
        <Graveyard />
        <Narrative />
        <Dex />
        <Roadmap />
      </main>
      
      <Footer />
    </div>
  );
}

"use client";

import LiquidEther from "@/components/liquid-ether";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Liquid Ether Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={["#42d392", "#34c78e", "#2cb883", "#27a37b"]}
          mouseForce={40}
          cursorSize={150}
        />
      </div>

      <main className="max-w-4xl w-full text-center relative z-10">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
            just got this for fun 😛
          </h1>
          <p className="text-2xl md:text-3xl text-white/80 drop-shadow-lg">
            might build something cool later
          </p>
          <p className="text-lg md:text-xl text-white/70">
            <a 
              href="https://x.com/Arpitx35" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:underline transition-all"
            >
              @Arpitx35
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

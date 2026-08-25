"use client";

import { useState, useEffect } from "react";

export default function Banner() {
  const texts = [
    "Data Analyst",
    "SQL Specialist",
    "Python Developer",
    "Power BI Expert",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setTypingSpeed(100);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left side - Character image */}
          <div className="flex justify-center items-center w-full lg:w-auto order-2 lg:order-1">
            <div className="relative flex justify-center items-center max-w-[280px] lg:max-w-[340px]">
              <img src="/assets/me-glow.png" alt="Glow effect" className="absolute z-0 w-full h-auto opacity-80" />
              <img src="/assets/me.png" alt="Ginikachukwu Asoya" className="relative z-10 w-full h-auto object-contain drop-shadow-2xl rounded-2xl" />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="flex-1 space-y-6 text-center lg:text-left order-1 lg:order-2">
            <div className="inline-block relative">
              <img src="/assets/arrow.png" alt="Arrow pointer" width={80} height={80} className="absolute -left-24 top-2 hidden lg:block scale-x-[-1] -rotate-12" style={{ width: "auto", height: "auto" }} />
              <p className="text-white text-lg">Hello! I Am <span className="text-purple-400">Ginikachukwu Asoya</span></p>
            </div>
            
            <div>
              <p className="text-2xl">An Analyst who turns</p>
              <h1 className="text-4xl tracking-tight lg:text-6xl font-semibold text-white leading-tight">
                operational chaos<br /> into{" "}
                <span className="relative inline-block">
                  <img src="/assets/circle.png" alt="Circle" width={180} height={180} className="absolute -mt-2" />
                  <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">clarity.</span>
                </span>
              </h1>
              <p className="text-md text-white/80 mt-4">Bridging the gap between operational reality and financial data.</p>
            </div>

            <div className="space-y-3 pt-6">
              <p className="text-4xl text-white font-bold">I&apos;m a {displayedText}<span className="animate-pulse">|</span></p>
              <p className="text-lg text-white/90 tracking-wide">
                Currently completing an <span className="text-blue-400 font-semibold">MSc in FinTech & Business Analytics.</span>
              </p>
              <p className="text-sm lg:text-base text-white/80 max-w-xl mx-auto lg:mx-0">
                I build machine learning forecasts, automated variance engines, and business intelligence dashboards that stop financial leaks and optimize performance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
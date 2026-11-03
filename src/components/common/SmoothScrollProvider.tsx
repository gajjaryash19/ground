"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SmoothScrollContextType {
  lenis: Lenis | null;
  stopScroll: () => void;
  startScroll: () => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  stopScroll: () => {},
  startScroll: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(hover: none)").matches;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      lerp: 0.06,
      syncTouch: false, // Ensures native touch responsiveness without lag on mobile
    });

    setLenisInstance(lenis);

    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Parallax scroll for elements with data-scroll-speed
    const parallaxTweens: gsap.core.Tween[] = [];
    const scrollItems = document.querySelectorAll("[data-scroll-speed]");

    scrollItems.forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-scroll-speed") || "0");
      if (speed !== 0) {
        // Less extreme displacement on mobile to avoid layout jitter
        const yOffset = isTouch ? speed * -35 : speed * -70;
        const tween = gsap.to(el, {
          y: yOffset,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
        parallaxTweens.push(tween);
      }
    });

    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(updateTicker);
      parallaxTweens.forEach((t) => t.kill());
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

  const stopScroll = () => lenisInstance?.stop();
  const startScroll = () => lenisInstance?.start();

  return (
    <SmoothScrollContext.Provider
      value={{ lenis: lenisInstance, stopScroll, startScroll }}
    >
      {children}
    </SmoothScrollContext.Provider>
  );
}

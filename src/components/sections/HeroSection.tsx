"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial entrance animation
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    tl.from("#navbar", {
      y: -36,
      opacity: 0,
      duration: 0.8,
    })
      .from(
        "#page1 h1",
        {
          y: 120,
          opacity: 0,
          duration: 0.95,
          stagger: 0.22,
        },
        "-=0.35"
      )
      .from(
        "#page1 #image-container",
        {
          y: 50,
          scale: 0.94,
          opacity: 0,
          duration: 0.75,
        },
        "-=0.35"
      );

    // Reveal animation for intro
    const introTween = gsap.from("#intro h2, #intro p, #intro a", {
      y: 90,
      opacity: 0,
      duration: 0.95,
      stagger: 0.16,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#intro",
        start: "top 78%",
        once: true,
      },
    });

    return () => {
      tl.kill();
      introTween.kill();
    };
  }, []);

  return (
    <>
      <div id="page1">
        {/* Hero title */}
        <div id="page1-part1">
          <h1>Break</h1>
          <h1>Ground</h1>
        </div>

        {/* Hero image */}
        <div id="image-container">
          <img
            data-scroll
            data-scroll-speed="-1"
            src="/assets/images/product_img/hero.png"
            alt="Ground footwear editorial hero"
          />
        </div>
      </div>

      <section id="intro" aria-label="Ground collection introduction">
        <h2>INTRODUCING THE GROUND ESSENTIALS COLLECTION.</h2>

        <p>
          Timeless footwear designed for everyday movement, crafted with premium
          materials and lasting comfort.
        </p>

        <a href="#page2">SHOP THE COLLECTION.</a>
      </section>
    </>
  );
}


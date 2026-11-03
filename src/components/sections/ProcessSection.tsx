"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProcessSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const impactTween = gsap.from(".impact-copy > *, .impact-image", {
      y: 85,
      opacity: 0,
      duration: 0.95,
      stagger: 0.14,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#impact",
        start: "top 72%",
        once: true,
      },
    });

    return () => {
      impactTween.kill();
    };
  }, []);

  return (
    <div id="page5">
      <section id="impact" aria-label="Ground process">
        <div className="impact-copy">
          <h2>FROM THE GROUND UP.</h2>

          <p>
            Every pair begins with a simple idea: exceptional footwear should be
            timeless, comfortable, and built with intention.
          </p>

          <p>
            From premium leather and technical fabrics to precision
            craftsmanship, every detail is carefully considered to create shoes
            that move effortlessly through every part of your life.
          </p>

          <p>
            Whether you&apos;re heading to work, exploring the city, or chasing new
            adventures, GROUND. is designed to go wherever you do.
          </p>

          <a href="#mission">EXPLORE OUR PROCESS</a>
        </div>

        <div className="impact-image">
          <img
            data-scroll
            data-scroll-speed="-1.5"
            src="/assets/images/product_img/card-img(2).png"
            alt="Ground footwear studio material detail"
          />
        </div>

        <div className="impact-image">
          <img
            data-scroll
            data-scroll-speed="-1.5"
            src="/assets/images/product_img/card-img(3).png"
            alt="Ground formal footwear editorial scene"
          />
        </div>
      </section>
    </div>
  );
}


"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SiteFooter() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const footerTween = gsap.from(
      ".footer-column, .footer-logo, .footer-legal, .footer-bottom p",
      {
        y: 70,
        opacity: 0,
        duration: 0.95,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#footer",
          start: "top 78%",
          once: true,
        },
      }
    );

    return () => {
      footerTween.kill();
    };
  }, []);

  return (
    <footer id="footer" aria-label="Footer">
      <div className="footer-top">
        <div className="footer-column">
          <p>Connect</p>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noreferrer">
            Pinterest
          </a>
          <a href="https://threads.net" target="_blank" rel="noreferrer">
            Threads
          </a>
        </div>

        <div className="footer-logo">
          <img src="/assets/images/logo/logo.png" alt="Ground" />
        </div>

        <div className="footer-column footer-column-right">
          <p>Discover</p>
          <a href="#page2">Collections</a>
          <a href="#page5">Our Craft</a>
          <a href="#">Stores</a>
          <a href="#page5">Journal</a>
          <a href="#">Support</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal">
          <span>&copy; Ground 2026</span>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </div>

        <p>
          GROUND. was built on the belief that exceptional footwear should feel
          as timeless as it looks. We combine premium materials, refined
          craftsmanship, and purposeful design to create shoes that move
          effortlessly through every part of modern life. Rather than following
          trends, we focus on enduring quality, everyday comfort, and
          understated style—crafting footwear that earns its place with every step.
        </p>
      </div>
    </footer>
  );
}


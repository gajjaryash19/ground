"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProductsSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const childTween = gsap.from(".child", {
      y: 95,
      opacity: 0,
      duration: 0.95,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#page3",
        start: "top 72%",
        once: true,
      },
    });

    return () => {
      childTween.kill();
    };
  }, []);

  return (
    <div id="page3">
      <div className="child" id="child1">
        <img
          src="/assets/images/product_img/ground-essential-sneaker.png"
          alt="Ground Everyday Knit sneaker"
        />

        <div className="product-copy">
          <h3>Ground Everyday Knit Sneaker</h3>
          <p>$145</p>
        </div>
      </div>

      <div className="child" id="child2">
        <img
          src="/assets/images/product_img/ground-performance-runner.png"
          alt="Ground Aero Runner shoe"
        />

        <div className="product-copy">
          <h3>Ground Aero Runner</h3>
          <p>$168</p>
        </div>
      </div>

      <div className="child" id="child3">
        <img
          src="/assets/images/product_img/ground-formal-derby.png"
          alt="Ground Black Derby formal shoe"
        />

        <div className="product-copy">
          <h3>Ground Black Derby</h3>
          <p>$210</p>
        </div>
      </div>

      <div className="child" id="child4">
        <img
          src="/assets/images/product_img/ground-trail-boot.png"
          alt="Ground Ridge Trail boot"
        />

        <div className="product-copy">
          <h3>Ground Ridge Trail Boot</h3>
          <p>$190</p>
        </div>
      </div>
    </div>
  );
}


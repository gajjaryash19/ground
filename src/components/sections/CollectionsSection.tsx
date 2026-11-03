"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CollectionsSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elemTween = gsap.from("#page2 .elem", {
      y: 110,
      opacity: 0,
      duration: 0.95,
      stagger: 0.16,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#page2",
        start: "top 72%",
        once: true,
      },
    });

    const detsTween = gsap.from("#page2 .dets", {
      y: 28,
      opacity: 0,
      duration: 0.55,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#page2",
        start: "top 62%",
        once: true,
      },
    });

    const missionTween = gsap.from(
      "#mission h2, .mission-copy p, .mission-copy a",
      {
        y: 85,
        opacity: 0,
        duration: 0.95,
        stagger: 0.13,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#mission",
          start: "top 78%",
          once: true,
        },
      }
    );

    // Mobile tap support on .dets
    const detsElements = document.querySelectorAll<HTMLElement>(".dets");
    const handleDetsClick = function (this: HTMLElement, e: MouseEvent) {
      // Don't toggle closed if clicking an actual product link
      if ((e.target as HTMLElement).closest(".shop-preview a")) return;

      const wasOpen = this.classList.contains("is-open");
      detsElements.forEach((other) => other.classList.remove("is-open"));
      if (!wasOpen) {
        this.classList.add("is-open");
      }
    };

    // Close when tapping outside
    const handleDocClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".dets")) {
        detsElements.forEach((d) => d.classList.remove("is-open"));
      }
    };

    detsElements.forEach((el) => {
      el.addEventListener("click", handleDetsClick as EventListener);
    });
    document.addEventListener("click", handleDocClick);

    return () => {
      elemTween.kill();
      detsTween.kill();
      missionTween.kill();
      detsElements.forEach((el) => {
        el.removeEventListener("click", handleDetsClick as EventListener);
      });
      document.removeEventListener("click", handleDocClick);
    };
  }, []);

  return (
    <>
      <div id="page2">
        <div id="elem-title">
          <span> Our Top Picks </span>

          <span> Shop the latest collection </span>
        </div>

        <div id="elem-con">
          <div id="elem1" className="elem">
            <img
              data-scroll
              data-scroll-speed="0.7"
              src="/assets/images/product_img/card-img(1).png"
              alt="Ground essentials collection"
            />

            <div data-scroll data-scroll-speed="-1" className="dets" tabIndex={0}>
              <div className="shop-row">
                <span className="dot"></span>
                <span>Shop</span>
                <strong>Essentials</strong>
                <span className="material-symbols-sharp"> arrow_right </span>
              </div>

              <div className="shop-preview">
                <a href="#page3">
                  <img
                    src="/assets/images/product_img/ground-essential-sneaker.png"
                    alt="Ground Everyday Knit sneaker"
                  />
                  <span>Everyday Knit Sneaker</span>
                </a>

                <a href="#page3">
                  <img
                    src="/assets/images/product_img/ground-trail-boot.png"
                    alt="Ground Ridge Trail boot"
                  />
                  <span>Ridge Trail Boot</span>
                </a>
              </div>
            </div>
          </div>

          <div id="elem2" className="elem">
            <img
              data-scroll
              data-scroll-speed="0.7"
              src="/assets/images/product_img/card-img(2).png"
              alt="Ground performance collection"
            />

            <div data-scroll data-scroll-speed="-1" className="dets" tabIndex={0}>
              <div className="shop-row">
                <span className="dot"></span>
                <span>Shop</span>
                <strong>Performance</strong>
                <span className="material-symbols-sharp"> arrow_right </span>
              </div>

              <div className="shop-preview">
                <a href="#page3">
                  <img
                    src="/assets/images/product_img/ground-performance-runner.png"
                    alt="Ground Aero Runner shoe"
                  />
                  <span>Aero Runner</span>
                </a>

                <a href="#page3">
                  <img
                    src="/assets/images/product_img/ground-essential-sneaker.png"
                    alt="Ground Everyday Knit sneaker"
                  />
                  <span>Everyday Knit Sneaker</span>
                </a>
              </div>
            </div>
          </div>

          <div id="elem3" className="elem">
            <img
              data-scroll
              data-scroll-speed="0.7"
              src="/assets/images/product_img/card-img(3).png"
              alt="Ground formal collection"
            />

            <div data-scroll data-scroll-speed="-1" className="dets" tabIndex={0}>
              <div className="shop-row">
                <span className="dot"></span>
                <span>Shop</span>
                <strong>Formal</strong>
                <span className="material-symbols-sharp"> arrow_right </span>
              </div>

              <div className="shop-preview">
                <a href="#page3">
                  <img
                    src="/assets/images/product_img/ground-formal-derby.png"
                    alt="Ground Black Derby formal shoe"
                  />
                  <span>Black Derby</span>
                </a>

                <a href="#page3">
                  <img
                    src="/assets/images/product_img/ground-essential-sneaker.png"
                    alt="Ground Everyday Knit sneaker"
                  />
                  <span>Everyday Knit Sneaker</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="mission" aria-label="Ground mission">
        <h2>WE DESIGN FOOTWEAR FOR EVERY STEP OF LIFE.</h2>

        <div className="mission-copy">
          <p>
            From performance runners and everyday sneakers to refined formal
            shoes, GROUND. creates footwear for every pace of modern life.
          </p>

          <p>
            Designed with premium materials, clean aesthetics, and lasting
            comfort, every pair is made to move confidently through work,
            weekends, and everything in between.
          </p>

          <a href="#page3">EXPLORE THE COLLECTION</a>
        </div>
      </section>
    </>
  );
}

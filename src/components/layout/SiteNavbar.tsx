"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSmoothScroll } from "@/components/common/SmoothScrollProvider";

export default function SiteNavbar() {
  const isMenuOpenRef = useRef(false);
  const { stopScroll, startScroll } = useSmoothScroll();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerEl = document.querySelector("#page1");
    if (!triggerEl) return;

    const logoTween = gsap.to("#navleft img", {
      yPercent: -100,
      scrollTrigger: {
        trigger: triggerEl,
        start: "top 0",
        end: "top -1%",
        scrub: 0.5,
      },
    });

    const linksTween = gsap.to("#navright #links a", {
      opacity: 0,
      y: -10,
      delay: 0.1,
      scrollTrigger: {
        trigger: triggerEl,
        start: "top 0",
        end: "top -2%",
        scrub: 0.5,
      },
    });

    return () => {
      logoTween.kill();
      linksTween.kill();
    };
  }, []);

  const toggleMenu = () => {
    const menu = document.querySelector("#menuBar");
    if (!menu) return;

    if (isMenuOpenRef.current) {
      // Close menu
      gsap.to("#menu-overlay", {
        y: "-100%",
        opacity: 0,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });

      gsap.to(".menu-link", {
        y: "100%",
        duration: 0.4,
        stagger: 0.1,
        ease: "power3.in",
      });

      gsap.to(".menu-footer-col", {
        opacity: 0,
        y: 15,
        duration: 0.3,
      });

      gsap.to("#navbar #links", {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
      });

      gsap.to("#navbar #links a", { color: "black", duration: 0.4 });
      gsap.to("#navbar #icons", { backgroundColor: "#f7f7f7", duration: 0.4 });
      gsap.to("#navbar #icons span", {
        color: "rgba(0, 0, 0, 0.8)",
        duration: 0.4,
      });
      gsap.to("#navleft img", { filter: "none", duration: 0.4 });

      menu.textContent = "equal";
      isMenuOpenRef.current = false;
      startScroll();
    } else {
      // Open menu
      gsap.to("#menu-overlay", {
        y: "0%",
        opacity: 1,
        autoAlpha: 1,
        duration: 0.3,
        ease: "power3.inOut",
      });

      gsap.fromTo(
        ".menu-link",
        { y: "100%" },
        {
          y: "0%",
          duration: 0.5,
          stagger: 0.07,
          ease: "power3.out",
          delay: 0.25,
        }
      );

      gsap.fromTo(
        ".menu-footer-col",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.1,
          stagger: 0.07,
          ease: "power3.out",
          delay: 0.4,
        }
      );

      gsap.to("#navbar #links", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
      });

      gsap.to("#navbar #icons", {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        duration: 0.4,
      });
      gsap.to("#navbar #icons span", { color: "#ffffff", duration: 0.4 });
      gsap.to("#navleft img", {
        filter: "brightness(0) invert(1)",
        duration: 0.4,
      });

      menu.textContent = "close";
      isMenuOpenRef.current = true;
      stopScroll();
    }
  };

  const closeMenu = () => {
    if (isMenuOpenRef.current) {
      toggleMenu();
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav id="navbar">
        <div id="navleft">
          <img
            className="img1"
            src="/assets/images/logo/logo(1).png"
            alt="Ground"
          />
          <img
            className="img2"
            src="/assets/images/logo/logo.png"
            alt="Ground"
          />
        </div>

        <div id="navright">
          <div id="links">
            <a href="#page3"> SHOP </a>
            <a href="#page2"> COLLECTIONS </a>
            <a href="#page5"> JOURNAL </a>
            <a href="#page5"> STUDIO </a>
            <a href="#mission"> ABOUT </a>
          </div>

          <div id="icons" onClick={toggleMenu} role="button" tabIndex={0}>
            <span id="menuBar" className="material-symbols-sharp">
              {" "}
              equal{" "}
            </span>

            <span className="material-symbols-sharp"> shopping_cart </span>
          </div>
        </div>
      </nav>

      {/* Menu Overlay */}
      <div id="menu-overlay">
        {/* Main menu links (Right aligned) */}
        <div id="menu-content">
          <div className="menu-link-wrapper">
            <a className="menu-link" href="#page3" onClick={closeMenu}>
              {" "}
              Shop{" "}
            </a>
          </div>

          <div className="menu-link-wrapper">
            <a className="menu-link" href="#page2" onClick={closeMenu}>
              {" "}
              Collections{" "}
            </a>
          </div>

          <div className="menu-link-wrapper">
            <a className="menu-link" href="#page5" onClick={closeMenu}>
              {" "}
              Journal{" "}
            </a>
          </div>

          <div className="menu-link-wrapper">
            <a className="menu-link" href="#page2" onClick={closeMenu}>
              {" "}
              Lookbook{" "}
            </a>
          </div>

          <div className="menu-link-wrapper">
            <a className="menu-link" href="#mission" onClick={closeMenu}>
              {" "}
              About{" "}
            </a>
          </div>
        </div>

        {/* Footer Columns (Bottom left aligned) */}
        <div id="menu-footer">
          <div className="menu-footer-col">
            <h4>Connect With Us</h4>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              Youtube
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer">
              Pinterest
            </a>
          </div>

          <div className="menu-footer-col">
            <h4>Customer service</h4>
            <a href="#">Orders</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">FAQ</a>
          </div>

          <div className="menu-footer-col">
            <h4>Discover</h4>
            <a href="#">Size Guide</a>
            <a href="#">Sustainability</a>
            <a href="#">Materials</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
}


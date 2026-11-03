"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

export default function SiteCursor() {
  useEffect(() => {
    const cursor = document.querySelector("#cursor");
    const canHover = window.matchMedia("(hover: hover)").matches;

    if (!cursor || !canHover) return;

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
    });

    const moveX = gsap.quickTo(cursor, "left", {
      duration: 0.42,
      ease: "power3.out",
    });
    const moveY = gsap.quickTo(cursor, "top", {
      duration: 0.42,
      ease: "power3.out",
    });

    const handleMouseMove = (event: MouseEvent) => {
      moveX(event.clientX);
      moveY(event.clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    const children = document.querySelectorAll(".child");
    const onEnter = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(cursor, {
        scale: 0,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    children.forEach((child) => {
      child.addEventListener("mouseenter", onEnter);
      child.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      children.forEach((child) => {
        child.removeEventListener("mouseenter", onEnter);
        child.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return <div id="cursor" aria-hidden="true"></div>;
}


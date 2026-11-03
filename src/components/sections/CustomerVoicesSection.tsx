"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CustomerVoicesSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const revealTween = gsap.from(
      ".message-rule, .message-row article, #messages h2",
      {
        y: 75,
        opacity: 0,
        duration: 0.95,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#messages",
          start: "top 74%",
          once: true,
        },
      }
    );

    // Message selector interaction
    const messageItems = document.querySelectorAll<HTMLElement>(
      ".message-row article"
    );
    const quote = document.querySelector<HTMLElement>("#message-quote");

    function setActiveMessage(item: HTMLElement) {
      if (item.classList.contains("active") || !quote) return;

      const message = item.dataset.message;
      if (!message) return;

      messageItems.forEach((messageItem) => {
        messageItem.classList.remove("active");
      });
      item.classList.add("active");

      gsap
        .timeline()
        .to(quote, {
          y: 26,
          opacity: 0,
          duration: 0.22,
          ease: "power2.in",
        })
        .set(quote, {
          textContent: message.toUpperCase(),
          y: -22,
        })
        .to(quote, {
          y: 0,
          opacity: 1,
          duration: 0.42,
          ease: "power3.out",
        });
    }

    const listeners: { el: HTMLElement; type: string; fn: (e: any) => void }[] =
      [];

    messageItems.forEach((item) => {
      const enterFn = () => setActiveMessage(item);
      const clickFn = () => setActiveMessage(item);
      const keyFn = (event: KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setActiveMessage(item);
        }
      };

      item.addEventListener("mouseenter", enterFn);
      item.addEventListener("focus", enterFn);
      item.addEventListener("click", clickFn);
      item.addEventListener("keydown", keyFn);

      listeners.push({ el: item, type: "mouseenter", fn: enterFn });
      listeners.push({ el: item, type: "focus", fn: enterFn });
      listeners.push({ el: item, type: "click", fn: clickFn });
      listeners.push({ el: item, type: "keydown", fn: keyFn });
    });

    return () => {
      revealTween.kill();
      listeners.forEach(({ el, type, fn }) => el.removeEventListener(type, fn));
    };
  }, []);

  return (
    <div id="page4">
      <section id="messages" aria-label="Ground customer messages">
        <div className="message-rule">
          <span>VOICES FROM THE GROUND</span>
          <span>REAL STORIES. REAL STEPS.</span>
        </div>

        <div className="message-row" aria-label="Ground customer message selector">
          <article
            tabIndex={0}
            data-message="I wore them from the first train to dinner and forgot I had new shoes on."
          >
            <span className="message-dot"></span>
            <p>
              m// 0023
              <br />
              Mira J.
            </p>
            <svg
              className="message-underline"
              viewBox="0 0 120 14"
              aria-hidden="true"
            >
              <path d="M2 8 C22 2 38 12 58 7 C78 2 96 9 118 6" />
            </svg>
          </article>

          <article
            tabIndex={0}
            data-message="Clean enough for work, comfortable enough for the walk home."
          >
            <span className="message-dot"></span>
            <p>
              m// 0024
              <br />
              Dev W.
            </p>
            <svg
              className="message-underline"
              viewBox="0 0 120 14"
              aria-hidden="true"
            >
              <path d="M2 8 C22 2 38 12 58 7 C78 2 96 9 118 6" />
            </svg>
          </article>

          <article
            className="active"
            tabIndex={0}
            data-message="Thank you for making shoes that actually keep up with real days."
          >
            <span className="message-dot"></span>
            <p>
              m// 0025
              <br />
              Claire M.
            </p>
            <svg
              className="message-underline"
              viewBox="0 0 120 14"
              aria-hidden="true"
            >
              <path d="M2 8 C22 2 38 12 58 7 C78 2 96 9 118 6" />
            </svg>
          </article>

          <article
            tabIndex={0}
            data-message="The formal pair feels polished without making my commute miserable."
          >
            <span className="message-dot"></span>
            <p>
              m// 001
              <br />
              Anaya R.
            </p>
            <svg
              className="message-underline"
              viewBox="0 0 120 14"
              aria-hidden="true"
            >
              <path d="M2 8 C22 2 38 12 58 7 C78 2 96 9 118 6" />
            </svg>
          </article>

          <article
            tabIndex={0}
            data-message="The trail boots made a wet weekend feel easy, steady, and good-looking."
          >
            <span className="message-dot"></span>
            <p>
              m// 002
              <br />
              Cartier.
            </p>
            <svg
              className="message-underline"
              viewBox="0 0 120 14"
              aria-hidden="true"
            >
              <path d="M2 8 C22 2 38 12 58 7 C78 2 96 9 118 6" />
            </svg>
          </article>

          <article
            tabIndex={0}
            data-message="Simple, quiet, beautifully made. They have become my default pair."
          >
            <span className="message-dot"></span>
            <p>
              m// 003
              <br />
              Felicity T.
            </p>
            <svg
              className="message-underline"
              viewBox="0 0 120 14"
              aria-hidden="true"
            >
              <path d="M2 8 C22 2 38 12 58 7 C78 2 96 9 118 6" />
            </svg>
          </article>
        </div>

        <h2 id="message-quote">
          THANK YOU FOR MAKING SHOES THAT ACTUALLY KEEP UP WITH REAL DAYS.
        </h2>

        <button type="button">SHARE YOUR STORY</button>

        <p id="extra">
          Every journey begins with a single step. Read how GROUND. has become
          part of everyday life for people who value comfort, craftsmanship, and
          timeless design.
        </p>
      </section>
    </div>
  );
}

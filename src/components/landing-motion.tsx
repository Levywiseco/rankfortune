"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export function LandingMotion() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) return;

    let observer: IntersectionObserver | undefined;

    const context = gsap.context(() => {
      gsap.set(".rf-reveal", { autoAlpha: 0, y: 22 });
      gsap.set(".rf-card", { autoAlpha: 0, y: 18 });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(".rf-reveal", {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
        })
        .to(
          ".rf-card",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.05,
          },
          "-=0.45",
        );

      gsap.to(".rf-signal-line", {
        xPercent: 16,
        opacity: 0.9,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.24,
      });

      gsap.to(".rf-scan-line", {
        yPercent: 130,
        opacity: 0.85,
        duration: 3.6,
        ease: "none",
        repeat: -1,
      });

      gsap.to(".rf-float", {
        y: -8,
        duration: 2.7,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      const sections = gsap.utils.toArray<HTMLElement>(".rf-section");
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            gsap.to(entry.target.querySelectorAll(".rf-rise"), {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              ease: "power3.out",
              stagger: 0.06,
            });
            sectionObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.18 },
      );
      observer = sectionObserver;

      sections.forEach((section) => {
        gsap.set(section.querySelectorAll(".rf-rise"), {
          autoAlpha: 0,
          y: 20,
        });
        sectionObserver.observe(section);
      });

    });

    return () => {
      observer?.disconnect();
      context.revert();
    };
  }, []);

  return null;
}

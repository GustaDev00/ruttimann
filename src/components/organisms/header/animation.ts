/* eslint-disable import/no-anonymous-default-export */
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const timeline = gsap.timeline({});

      const elements = {
        background: sectionRef.current.querySelector("[data-timeline='background']"),
        container: sectionRef.current.querySelector("[data-timeline='container']"),
        content: sectionRef.current.querySelector("[data-timeline='content']"),
        title: sectionRef.current.querySelector("[data-timeline='title']"),
        description: sectionRef.current.querySelector("[data-timeline='description']"),
        buttons: sectionRef.current.querySelector("[data-timeline='buttons']"),
        buttonPrimary: sectionRef.current.querySelectorAll("[data-timeline^='button-primary']"),
        buttonSecondary: sectionRef.current.querySelectorAll("[data-timeline^='button-secondary']"),
      };

      timeline
        .from(elements.background, { opacity: 0, duration: 1 })
        .from(elements.container, { opacity: 0, y: 50, duration: 1 }, "-=0.5")
        .from(elements.content, { opacity: 0, y: 50, duration: 1 }, "-=0.5")
        .from(elements.title, { opacity: 0, y: 20, duration: 0.5 }, "-=0.5")
        .from(elements.description, { opacity: 0, y: 20, duration: 0.5 }, "-=0.5")
        .from(elements.buttons, { opacity: 0, y: 20, duration: 0.5 }, "-=0.5");

      elements.buttonPrimary.forEach((button, index) => {
        timeline.from(button, { opacity: 0, x: 20, duration: 0.5 }, `-=${0.4 - index * 0.1}`);
      });

      elements.buttonSecondary.forEach((button, index) => {
        timeline.from(button, { opacity: 0, x: -20, duration: 0.5 }, `-=${0.4 - index * 0.1}`);
      });
    });

    return () => {
      ctx.kill();
    };
  }, []);

  return { sectionRef };
};

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function useAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      const elements = {
        wrapper: sectionRef.current.querySelector("[data-timeline='wrapper']"),
        content: sectionRef.current.querySelector("[data-timeline='content']"),
        title: sectionRef.current.querySelector("[data-timeline='title']"),
        description: sectionRef.current.querySelector("[data-timeline='description']"),
        container: sectionRef.current.querySelector("[data-timeline='container']"),
        buttonLeft: sectionRef.current.querySelector("[data-timeline='button-left']"),
        buttonRight: sectionRef.current.querySelector("[data-timeline='button-right']"),
        sliderItem: sectionRef.current.querySelector("[data-timeline='slider-item']"),
      };

      timeline
        .from(elements.wrapper, { opacity: 0, y: 50, duration: 1 })
        .from(elements.content, { opacity: 0, y: 50, duration: 1 }, "-=0.5")
        .from(elements.title, { opacity: 0, y: 20, duration: 0.5 }, "-=0.5")
        .from(elements.description, { opacity: 0, y: 20, duration: 0.5 }, "-=0.5")
        .from(elements.container, { opacity: 0, y: 50, duration: 1 }, "-=0.5")
        .from(elements.buttonLeft, { opacity: 0, x: -20, duration: 0.5 }, "-=0.5")
        .from(elements.buttonRight, { opacity: 0, x: 20, duration: 0.5 }, "-=0.5")
        .from(elements.sliderItem, { opacity: 0, y: 50, duration: 1 }, "-=0.5");
    });

    return () => ctx.kill();
  }, []);

  return {
    sectionRef,
  };
}

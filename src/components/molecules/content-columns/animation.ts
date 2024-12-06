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
        column1: sectionRef.current.querySelector("[data-timeline='column1']"),
        titleColumn1: sectionRef.current.querySelector("[data-timeline='title-column1']"),
        imgColumn1: sectionRef.current.querySelector("[data-timeline='img-column1']"),
        contentColumn1: sectionRef.current.querySelector("[data-timeline='content-column1']"),
        column2: sectionRef.current.querySelector("[data-timeline='column2']"),
        descriptionColumn2: sectionRef.current.querySelector(
          "[data-timeline='description-column2']",
        ),
        imgColumn2: sectionRef.current.querySelector("[data-timeline='img-column2']"),
      };

      timeline
        .from(elements.wrapper, { opacity: 0, y: 50, duration: 1 })
        .from(elements.column1, { opacity: 0, x: -50, duration: 1 }, "-=0.5")
        .from(elements.titleColumn1, { opacity: 0, y: 20, duration: 0.5 }, "-=0.5")
        .from(elements.imgColumn1, { opacity: 0, scale: 0.9, duration: 1 }, "-=0.5")
        .from(elements.contentColumn1, { opacity: 0, y: 30, duration: 0.5 }, "-=0.5")
        .from(elements.column2, { opacity: 0, x: 50, duration: 1 }, "-=0.5")
        .from(elements.descriptionColumn2, { opacity: 0, y: 20, duration: 0.5 }, "-=0.5")
        .from(elements.imgColumn2, { opacity: 0, scale: 1.1, duration: 1 }, "-=0.5");
    });

    return () => ctx.kill();
  }, []);

  return {
    sectionRef,
  };
}

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
        title: sectionRef.current.querySelector("[data-timeline='title']"),
        container: sectionRef.current.querySelector("[data-timeline='container']"),
        img: sectionRef.current.querySelector("[data-timeline='img']"),
        content: sectionRef.current.querySelector("[data-timeline='content']"),
      };

      timeline
        .from(elements.wrapper, { opacity: 0, y: 50, duration: 1 })
        .from(elements.title, { opacity: 0, y: 20, duration: 0.5 }, "-=0.5")
        .from(elements.container, { opacity: 0, y: 50, duration: 1 }, "-=0.5")
        .from(elements.img, { opacity: 0, scale: 0.9, duration: 1 }, "-=0.5")
        .from(elements.content, { opacity: 0, y: 30, duration: 0.5 }, "-=0.5");
    });

    return () => ctx.kill();
  }, []);

  return {
    sectionRef,
  };
}

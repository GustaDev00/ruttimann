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
        container: sectionRef.current.querySelector("[data-timeline='container']"),
        wrapperImage: sectionRef.current.querySelector("[data-timeline='wrapper-image']"),
        image: sectionRef.current.querySelector("[data-timeline='image']"),
        button: sectionRef.current.querySelector("[data-timeline='button']"),
        list: sectionRef.current.querySelector("[data-timeline='list']"),
        listItems: sectionRef.current.querySelectorAll("[data-timeline^='list-item-']"),
      };

      timeline
        .from(elements.wrapper, { opacity: 0, y: 50, duration: 1 })
        .from(elements.content, { opacity: 0, y: 20, duration: 0.5 }, "-=0.5")
        .from(elements.container, { opacity: 0, y: 50, duration: 1 }, "-=0.5")
        .from(elements.wrapperImage, { opacity: 0, x: -50, duration: 1 }, "-=0.5")
        .from(elements.image, { opacity: 0, scale: 0.9, duration: 1 }, "-=0.5")
        .from(elements.button, { opacity: 0, y: 20, duration: 0.5 }, "-=0.5")
        .from(elements.list, { opacity: 0, x: 50, duration: 1 }, "-=0.5")
        .from(elements.listItems, { opacity: 0, y: 30, stagger: 0.2, duration: 0.5 }, "-=0.5");
    });

    return () => ctx.kill();
  }, []);

  return {
    sectionRef,
  };
}

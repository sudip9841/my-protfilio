import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let dotX = mouseX;
    let dotY = mouseY;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const onDown = () => ring.classList.add("is-down");
    const onUp = () => ring.classList.remove("is-down");

    const enter = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const t = target.closest("a, button, [role=button], [data-cursor=hover]");
      const text = target.closest("[data-cursor=text]");
      if (text) ring.classList.add("is-text");
      else if (t) ring.classList.add("is-hover");
    };
    const leave = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const t = target.closest("a, button, [role=button], [data-cursor=hover]");
      const text = target.closest("[data-cursor=text]");
      if (text) ring.classList.remove("is-text");
      else if (t) ring.classList.remove("is-hover");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);

    let raf = 0;
    const tick = () => {
      dotX += (mouseX - dotX) * 0.45;
      dotY += (mouseY - dotY) * 0.45;
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}

import { useEffect } from 'react';

/**
 * Premium Momentum Smooth Scroll Hook
 * Smooth normalized deceleration across modern browsers and trackpads.
 */
export function useSmoothScroll() {
  useEffect(() => {
    // Keep native smooth scrolling for touch/mobile devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let isMoving = false;
    let rafId = null;

    // Responsive damping: tight on fast flick, silky on gentle scroll
    const ease = 0.09;

    const onWheel = (e) => {
      // Don't intercept when using command/ctrl keys or horizontal scrolls
      if (e.ctrlKey || e.metaKey || e.shiftKey) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      // Allow native scroll for modal dialogs if any
      if (e.target.closest('[data-scroll-lock]')) return;

      e.preventDefault();

      // Normalize wheel delta across mouse vs trackpad
      let delta = e.deltaY;
      if (e.deltaMode === 1) delta *= 30; // Line mode
      else if (e.deltaMode === 2) delta *= window.innerHeight; // Page mode

      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      targetY += delta;
      targetY = Math.max(0, Math.min(targetY, maxScroll));

      if (!isMoving) {
        isMoving = true;
        rafId = requestAnimationFrame(render);
      }
    };

    const render = () => {
      currentY += (targetY - currentY) * ease;
      window.scrollTo(0, currentY);

      if (Math.abs(targetY - currentY) > 0.4) {
        rafId = requestAnimationFrame(render);
      } else {
        currentY = targetY;
        window.scrollTo(0, targetY);
        isMoving = false;
      }
    };

    const onScroll = () => {
      if (!isMoving) {
        currentY = window.scrollY;
        targetY = window.scrollY;
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
}

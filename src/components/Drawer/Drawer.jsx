import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function Drawer({ isOpen, children }) {
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(drawerRef.current, {
        y: 0,
        duration: 1,
        ease: "power2.out",
      });
    } else {
      gsap.to(drawerRef.current, {
        y: "100%",
        duration: 1,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <aside
      ref={drawerRef}
      className="min-h-dvh min-w-full fixed pt-28 top-0 left-0 bg-transparent z-0"
      style={{ transform: "translateY(100%)" }}
    >
      {children}
    </aside>
  );
}

export default Drawer;

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TransitionLink } from "../components";

export default function PageNotFound() {
  const firstH1Ref = useRef(null);
  const secondH1Ref = useRef(null);
  const buttonRef = useRef(null);

  const [isAnimated, setIsisAnimated] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      firstH1Ref.current,
      { x: "400", opacity: 0 },
      { x: "0", opacity: 1, duration: 2, delay: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(
      secondH1Ref.current,
      { x: "-400", opacity: -1 },
      { x: "0", opacity: 1, duration: 2, delay: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(
      buttonRef.current,
      { y: "400", opacity: 0 },
      {
        y: "0",
        opacity: 1,
        duration: 2,
        delay: 0.5,
        ease: "power2.out",
        onStart: () => {
          setIsisAnimated(false);
        },
        onComplete: () => {
          setIsisAnimated(true);
        },
      }
    );
  }, []);
  return (
    <main className="min-h-dvh flex flex-col gap-[5dvh] px-4 py-[18dvh] transition-all duration-400 justify-center items-center text-center text-balance bg-white text-textColor md:px-20 overflow-hidden">
      <h1
        ref={firstH1Ref}
        style={{ fontSize: "clamp(2rem, 10vw, 4vw)" }}
        className="font-bold"
      >
        This page does not exist.
      </h1>
      <p
        ref={secondH1Ref}
        style={{ fontSize: "clamp(1.2rem, 10vw, 2vw)" }}
        className="font-semibold"
      >
        But if it did exist, would there be anything interesting about it?
        Probably not. So you didn't miss anything. That's good.
      </p>
      <TransitionLink
        linkRef={buttonRef}
        href="/projects"
        label="Check out my web projects"
        tailwind={`bg-bgColor px-4 py-2 hover:px-8 hover:shadow-blackGlow rounded-md text-white text-xl ${
          isAnimated && "transition-all duration-400"
        }`}
      />
    </main>
  );
}

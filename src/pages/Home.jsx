import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Button from "../components/Button/Button";

export default function Home() {
  const fullStackRef = useRef(null);
  const andRef = useRef(null);
  const webDesignerRef = useRef(null);
  const fullStackButtonRef = useRef(null);
  const webDesignerButtonRef = useRef(null);
  const myName = useRef(null);
  const locationRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isAnimated, setIsisAnimated] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      myName.current,
      { y: "-400", opacity: 0 },
      { y: "0", opacity: 1, duration: 2, delay: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(
      locationRef.current,
      { y: "400", opacity: 0 },
      { y: "0", opacity: 1, duration: 2, delay: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(
      fullStackRef.current,
      { x: "800", opacity: -1 },
      { x: "0", opacity: 1, duration: 2, delay: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(
      andRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(
      webDesignerRef.current,
      { x: "-800", opacity: -1 },
      { x: "0", opacity: 1, duration: 2, delay: 0.5, ease: "power2.out" }
    );

    // Create a GSAP timeline
    const tl = gsap.timeline({
      onStart: () => {
        setIsisAnimated(false);
      },
      onComplete: () => {
        setIsisAnimated(true);
      },
    });

    tl.fromTo(
      [fullStackButtonRef.current, webDesignerButtonRef.current],
      { y: "200", opacity: 0 },
      {
        y: "0",
        opacity: 1,
        duration: 1.5,
        delay: 1.5,
        ease: "power2.out",
        stagger: 0.2,
      }
    );
  }, []);

  const textStyles = {
    default: {
      color: "#1b1b1b",
      textShadow: "none",
    },
    hovered: {
      color: "white",
      textShadow:
        "1px 1px 0 #1b1b1b, -1px -1px 0 #1b1b1b, 1px -1px 0 #1b1b1b, -1px 1px 0 #1b1b1b",
    },
  };

  const handleINeedFullStackDev = () => {
    window.location.href =
      "mailto:chayanmulewa@gmail.com?subject=I%20Need%20an%20Full%20Stack%20Developer";
  };
  const handleINeedWebDesigner = () => {
    window.location.href =
      "mailto:chayanmulewa@gmail.com?subject=I%20Need%20an%20Web%20Designer";
  };

  return (
    <>
      <div className="min-h-dvh flex flex-col gap-[4dvh] px-4 py-[18dvh] transition-all duration-400 justify-center items-center text-center text-textColor md:px-20 overflow-hidden">
        <div>
          <h1 ref={myName} style={{ fontSize: "clamp(1.1rem, 2vw, 1.5vw)" }}>
            👋, My name is Chayan and I am a Developer 👨🏻‍💻.
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center relative">
            <h1
              ref={fullStackRef}
              style={{
                fontSize: "clamp(3.5rem, 20vw, 9vw)",
                color: isHovered
                  ? textStyles.hovered.color
                  : textStyles.default.color,
                textShadow: isHovered
                  ? textStyles.hovered.textShadow
                  : textStyles.default.textShadow,
                transition: "color 500ms ease, text-shadow 500ms ease",
              }}
              className="font-extrabold leading-none"
            >
              Full Stack Dev
            </h1>
            <span
              ref={andRef}
              style={{ fontSize: "clamp(2rem, 20vw, 4vw)" }}
              className="font-extrabold leading-none"
            >
              &
            </span>
            <h1
              ref={webDesignerRef}
              style={{
                fontSize: "clamp(3.5rem, 20vw, 9vw)",
                color: isHovered
                  ? textStyles.default.color
                  : textStyles.hovered.color,
                textShadow: isHovered
                  ? textStyles.default.textShadow
                  : textStyles.hovered.textShadow,
                transition: "color 500ms ease, text-shadow 500ms ease",
              }}
              className="font-extrabold leading-none"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Web Designer
            </h1>
          </div>
        </div>
        <div>
          <h1
            ref={locationRef}
            style={{ fontSize: "clamp(1.12rem, 2vw, 1.5vw)" }}
            className="opacity-90 transition-all duration-0"
          >
            based 📍 in Indore, Madhya Pradesh, India.
          </h1>
        </div>
        <div className="flex flex-col gap-6 justify-center items-center md:flex-row">
          <Button
            buttonRef={fullStackButtonRef}
            label="You need a full stack dev"
            onClick={handleINeedFullStackDev}
            tailwind={`bg-bgColor text-white hover:shadow-blackGlow ${
              isAnimated && "transition-all duration-400"
            }`}
          />
          <Button
            buttonRef={webDesignerButtonRef}
            label="You need a web designer"
            onClick={handleINeedWebDesigner}
            tailwind={`border-2 border-black text-textColor hover:shadow-blackGlow ${
              isAnimated && "transition-all duration-400"
            }`}
          />
        </div>
      </div>
    </>
  );
}

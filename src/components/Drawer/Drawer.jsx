import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import TransitionLink from "../Button/TransitionLink";
import Button from "../Button/Button";

function Drawer({ isOpen, toggleNav }) {
  const drawerRef = useRef(null);

  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const designRef = useRef(null);

  const hr1Ref = useRef(null);
  const hr2Ref = useRef(null);
  const hr3Ref = useRef(null);
  const hr4Ref = useRef(null);

  const [isAnimated, setIsAnimated] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onStart: () => {
        setIsAnimated(false);
      },
      onComplete: () => {
        setIsAnimated(true);
      },
    });
    if (isOpen) {
      tl.to(drawerRef.current, {
        y: 0,
        duration: 1,
        ease: "power2.out",
      });

      tl.fromTo(
        [aboutRef.current, designRef.current, projectsRef.current],
        { x: "-100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
        },
        "<0.1"
      );

      tl.fromTo(
        [hr1Ref.current, hr2Ref.current, hr3Ref.current, hr4Ref.current],
        { x: "-100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
        },
        "<0.1"
      );
    } else {
      gsap.to(drawerRef.current, {
        y: "100%",
        duration: 1,
        ease: "power2.in",
      });

      tl.to(
        [projectsRef.current, designRef.current, aboutRef.current],
        {
          x: "-100%",
          opacity: 0,
          duration: 1,
          ease: "power2.in",
          stagger: 0.2,
        },
        "<-0.2"
      );

      tl.to(
        [hr4Ref.current, hr3Ref.current, hr2Ref.current, hr1Ref.current],
        {
          x: "-100%",
          opacity: 0,
          duration: 1,
          ease: "power2.in",
          stagger: 0.2,
        },
        "<-0.2"
      );
    }
  }, [isOpen]);

  const handleHelloChayan = () => {
    window.location.href =
      "mailto:chayanmulewa@gmail.com?subject=Hello%20Chayan%20Mulewa";
  };

  return (
    <div
      ref={drawerRef}
      className="min-h-dvh min-w-full fixed top-0 left-0 bg-transparent"
      style={{ zIndex: 0, transform: "translateY(100%)" }}
      onClick={toggleNav}
    >
      <div className="min-h-dvh min-w-full flex flex-col mt-28 gap-[25dvh] justify-start items-center text-start bg-white text-textColor">
        <ul className="w-full flex flex-col text-start gap-[4dvh]">
          <hr ref={hr1Ref} className="bg-bgColor h-1" />
          <li
            ref={aboutRef}
            className="h-fit w-full flex flex-row px-4 justify-between items-center"
          >
            <TransitionLink
              href="/about"
              label="About"
              tailwind={`text-textColor text-3xl ${
                isAnimated && "transition-all duration-400"
              }`}
            />
            <TransitionLink
              href="/about"
              label="➡"
              tailwind={`text-white text-xl bg-bgColor px-2 pb-[0.25rem] py-[0.1rem] flex justify-center items-center text-center rounded-full ${
                isAnimated && "transition-all duration-400"
              }`}
            />
          </li>
          <hr ref={hr2Ref} className="bg-bgColor h-1" />
          <li
            ref={designRef}
            className="h-fit w-full flex flex-row px-4 justify-between items-center"
          >
            <TransitionLink
              href="/design"
              label="Design"
              tailwind={`text-textColor text-3xl ${
                isAnimated && "transition-all duration-400"
              }`}
            />
            <TransitionLink
              href="/design"
              label="➡"
              tailwind={`text-white text-xl bg-bgColor px-2 pb-[0.25rem] py-[0.1rem] flex justify-center items-center text-center rounded-full ${
                isAnimated && "transition-all duration-400"
              }`}
            />
          </li>
          <hr ref={hr3Ref} className="bg-bgColor h-1" />
          <li
            ref={projectsRef}
            className="h-fit w-full flex flex-row px-4 justify-between items-center"
          >
            <TransitionLink
              href="/projects"
              label="Projects"
              tailwind={`text-textColor text-3xl ${
                isAnimated && "transition-all duration-400"
              }`}
            />
            <TransitionLink
              href="/projects"
              label="➡"
              tailwind={`text-white text-xl bg-bgColor px-2 pb-[0.25rem] py-[0.1rem] flex justify-center items-center text-center rounded-full ${
                isAnimated && "transition-all duration-400"
              }`}
            />
          </li>
          <hr ref={hr4Ref} className="bg-bgColor h-1" />
        </ul>
        <ul className="text-center flex flex-col gap-[2dvh]">
          <li>
            <h1 className="font-bold text-xl">Chayan Mulewa</h1>
          </li>
          <li>
            <Button
              onClick={handleHelloChayan}
              label={"hello@chayan"}
              tailwind={`bg-bgColor text-white hover:shadow-blackGlow ${
                isAnimated && "transition-all duration-400"
              }`}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;

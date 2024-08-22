import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import TransitionLink from "../Button/TransitionLink";
import Button from "../Button/Button";
import Menu from "../Menu/Menu";
import Drawer from "../Drawer/Drawer";
import { handleHelloChayan } from "../../utils";

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const designRef = useRef(null);
  const helloChayanRef = useRef(null);

  const toggleNav = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const tl = gsap.timeline({
      onStart: () => {
        setIsAnimated(false);
      },
      onComplete: () => {
        setIsAnimated(true);
      },
    });

    tl.fromTo(
      [
        logoRef.current,
        aboutRef.current,
        designRef.current,
        projectsRef.current,
        helloChayanRef.current,
        menuRef.current,
      ],
      { y: "-100" },
      {
        y: "0",
        duration: 1,
        delay: 1.5,
        ease: "power2.out",
        stagger: 0.2,
      }
    );

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projectsDrawerRef = useRef(null);
  const aboutDrawerRef = useRef(null);
  const designDrawerRef = useRef(null);

  const hr1Ref = useRef(null);
  const hr2Ref = useRef(null);
  const hr3Ref = useRef(null);
  const hr4Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({});
    if (isOpen) {
      tl.fromTo(
        [
          aboutDrawerRef.current,
          designDrawerRef.current,
          projectsDrawerRef.current,
        ],
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
      tl.to(
        [
          projectsDrawerRef.current,
          designDrawerRef.current,
          aboutDrawerRef.current,
        ],
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

  return (
    <>
      <header className="h-28 z-40 w-screen fixed bg-white backdrop-blur-md px-4 md:px-16">
        <Drawer isOpen={isOpen}>
          <nav
            style={{ height: "calc(100dvh - 7rem)" }}
            className="flex flex-col pb-6 justify-between items-center text-start bg-white text-textColor z-30"
          >
            <ul className="w-full flex flex-col text-start gap-[4dvh]">
              <hr ref={hr1Ref} className="bg-bgColor h-1" />
              <li ref={aboutDrawerRef} className="px-4" onClick={toggleNav}>
                <TransitionLink
                  href="/about"
                  label="About"
                  extraElement={
                    <h1 className="h-10 w-10 text-white text-xl bg-bgColor px-2 pb-[0.05rem] flex justify-center items-center text-center rounded-full">
                      ➡
                    </h1>
                  }
                  tailwind={`w-full text-textColor text-3xl flex flex-row justify-between items-center ${
                    isAnimated && "transition-all duration-400"
                  }`}
                />
              </li>
              <hr ref={hr2Ref} className="bg-bgColor h-1" />
              <li ref={designDrawerRef} className="px-4" onClick={toggleNav}>
                <TransitionLink
                  href="/design"
                  label="Design"
                  extraElement={
                    <h1 className="h-10 w-10 text-white text-xl bg-bgColor px-2 pb-[0.05rem] flex justify-center items-center text-center rounded-full">
                      ➡
                    </h1>
                  }
                  tailwind={`w-full text-textColor text-3xl flex flex-row justify-between items-center ${
                    isAnimated && "transition-all duration-400"
                  }`}
                />
              </li>
              <hr ref={hr3Ref} className="bg-bgColor h-1" />
              <li ref={projectsDrawerRef} className="px-4" onClick={toggleNav}>
                <TransitionLink
                  href="/projects"
                  label="Projects"
                  extraElement={
                    <h1 className="h-10 w-10 text-white text-xl bg-bgColor px-2 pb-[0.05rem] flex justify-center items-center text-center rounded-full">
                      ➡
                    </h1>
                  }
                  tailwind={`w-full text-textColor text-3xl flex flex-row justify-between items-center ${
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
              <li onClick={toggleNav}>
                <Button
                  onClick={handleHelloChayan}
                  label={"hello@chayan"}
                  tailwind={`bg-bgColor text-white hover:shadow-blackGlow ${
                    isAnimated && "transition-all duration-400"
                  }`}
                />
              </li>
            </ul>
          </nav>
        </Drawer>
        <nav className="h-full w-full flex flex-row justify-between items-center text-center md:justify-between">
          <ul className="h-fit w-fit flex flex-row items-center gap-6">
            <li className="h-fit w-fit">
              <TransitionLink
                linkRef={logoRef}
                href="/"
                label="Chayan"
                tailwind={`text-textColor font-extrabold ${
                  isAnimated && "transition-all duration-400"
                }`}
                style={{ fontSize: " clamp(2.5rem, 5vw, 3.5vw)" }}
                extraElement={<span className="text-5xl text-red-500">.</span>}
              />
            </li>
          </ul>
          <ul className="h-fit w-fit flex flex-row items-center gap-14">
            {!isMobile ? (
              <>
                <li className="h-fit w-fit">
                  <TransitionLink
                    linkRef={aboutRef}
                    href="/about"
                    label="About"
                    tailwind={`text-textColor text-xl ${
                      isAnimated && "transition-all duration-400"
                    }`}
                  />
                </li>
                <li className="h-fit w-fit">
                  <TransitionLink
                    linkRef={designRef}
                    href="/design"
                    label="Design"
                    tailwind={`text-textColor text-xl ${
                      isAnimated && "transition-all duration-400"
                    }`}
                  />
                </li>
                <li className="h-fit w-fit">
                  <TransitionLink
                    linkRef={projectsRef}
                    href="/projects"
                    label="Projects"
                    tailwind={`text-textColor text-xl ${
                      isAnimated && "transition-all duration-400"
                    }`}
                  />
                </li>
                <li className="h-fit w-fit">
                  <Button
                    buttonRef={helloChayanRef}
                    onClick={handleHelloChayan}
                    label={"hello@chayan"}
                    tailwind={`bg-bgColor text-white hover:shadow-blackGlow ${
                      isAnimated && "transition-all duration-400"
                    }`}
                  />
                </li>
              </>
            ) : (
              <>
                <li className="h-fit w-fit">
                  <Menu
                    menuRef={menuRef}
                    toggleNav={toggleNav}
                    isOpen={isOpen}
                  />
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

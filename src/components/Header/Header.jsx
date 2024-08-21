import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import TransitionLink from "../Button/TransitionLink";
import Button from "../Button/Button";
import Menu from "../Menu/Menu";
import Drawer from "../Drawer/Drawer";

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

  const handleHelloChayan = () => {
    window.location.href =
      "mailto:chayanmulewa@gmail.com?subject=Hello%20Chayan%20Mulewa";
  };

  return (
    <>
      <header className="h-28 z-20 w-screen fixed bg-white backdrop-blur-md px-4 md:px-16">
        <nav className="h-full w-full flex flex-row justify-between items-center text-center md:justify-between">
          <Drawer isOpen={isOpen} toggleNav={toggleNav} />

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

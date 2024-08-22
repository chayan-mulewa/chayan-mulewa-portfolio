import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Button from "../components/Button/Button";
import WebProjects from "../components/Projects/WebProjects";
import { handleIWantToStartProject, handleIWantToBookSession } from "../utils";

export default function Projects() {
  const firstH1Ref = useRef(null);
  const secondH1Ref = useRef(null);
  const thirdH1Ref = useRef(null);
  const buttonRef = useRef(null);

  const [isAnimated, setisAnimated] = useState(false);

  const [activeCategory, setActiveCategory] = useState("Web");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    gsap.fromTo(
      firstH1Ref.current,
      { y: "-400", opacity: 0 },
      { y: "0", opacity: 1, duration: 2, delay: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(
      secondH1Ref.current,
      { x: "-800", opacity: -1 },
      { x: "0", opacity: 1, duration: 2, delay: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(
      thirdH1Ref.current,
      { y: "400", opacity: 0 },
      { y: "0", opacity: 1, duration: 2, delay: 0.5, ease: "power2.out" }
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
        onStart: () => setisAnimated(false),
        onComplete: () => setisAnimated(true),
      }
    );
  }, []);

  return (
    <main className="flex flex-col overflow-hidden">
      <section className="min-h-dvh flex flex-col gap-[10dvh] px-4 py-[20dvh] justify-center items-center text-center bg-white text-textColor md:px-20 transition-all duration-400">
        <div className="flex flex-col gap-[10dvh]">
          <h1
            ref={firstH1Ref}
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.5vw)" }}
            className="text-balance"
          >
            Explore the Following Projects and Their Detailed Listings
          </h1>
          <h1
            ref={secondH1Ref}
            style={{ fontSize: "clamp(1.6rem, 20vw, 4vw)" }}
            className="leading-tight font-extrabold text-balance"
          >
            {/* Exceptional Projects Showcasing Innovative Achievements and Expertise */}
            Innovative Solutions and Cutting-Edge Developments in My Latest
            Projects
          </h1>
          <h1
            ref={thirdH1Ref}
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.5vw)" }}
            className="text-balance"
          >
            Noteworthy Projects and Key Achievements in Recent Ventures
          </h1>
        </div>
        <div>
          <Button
            buttonRef={buttonRef}
            label="Let's start a project together"
            onClick={handleIWantToStartProject}
            tailwind={`border-2 border-black text-textColor hover:shadow-blackGlow ${
              isAnimated ? "transition-all duration-400" : ""
            }`}
          />
        </div>
      </section>
      <section className="min-h-dvh flex flex-col gap-[5dvh] px-4 py-[5dvh] justify-start items-center text-center bg-white text-textColor md:px-40 md:items-start">
        <div className="flex flex-row justify-center items-center gap-[5dvh]">
          <button
            onClick={() => handleCategoryClick("Web")}
            style={{ fontSize: "clamp(1rem, 10vw, 1vw)" }}
            className={`font-bold px-4 py-1 rounded-md transition-all duration-400 ${
              activeCategory === "Web"
                ? "bg-bgColor text-white"
                : "border-2 border-bgColor bg-white text-textColor"
            }`}
          >
            Web
          </button>
        </div>
        {activeCategory === "Web" && <WebProjects />}
      </section>
      <section className="min-h-dvh flex flex-col px-4 py-[0dvh] justify-center items-center text-center  bg-white text-textColor md:px-20">
        <div className="flex flex-col gap-[6dvh] justify-center items-center md:w-[55%] ">
          <h1
            style={{ fontSize: "clamp(1.5rem, 20vw, 2.5vw)" }}
            className="font-extrabold"
          >
            Let's meet!
          </h1>
          <h1
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.5vw)" }}
            className="text-balance"
          >
            Book a free 15-minute session where we will discuss your project,
            your issues and how to solve them.
          </h1>
          <Button
            label="Book free consultation"
            onClick={handleIWantToBookSession}
            tailwind={`bg-bgColor text-white hover:shadow-blackGlow ${
              isAnimated && "transition-all duration-400"
            }`}
          />
        </div>
      </section>
    </main>
  );
}

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Button from "../components/Button/Button";
import ChayanMulewaPortfolio from "../assets/projects/Chayan Mulewa Portfolio.png";
import MomentumFX from "../assets/projects/MomentumFX.png";

export default function Projects() {
  const firstH1Ref = useRef(null);
  const secondH1Ref = useRef(null);
  const thirdH1Ref = useRef(null);
  const buttonRef = useRef(null);

  const [isAnimated, setisAnimated] = useState(false);

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

  const handleIWantToStartProject = () => {
    window.location.href =
      "mailto:chayanmulewa@gmail.com?subject=I%20Want%20To%20Start%20Project%20with%20You";
  };

  const handleIWantToBookSession = () => {
    window.location.href =
      "mailto:chayanmulewa@gmail.com?subject=I%20Want%20to%20Book%2015%20Minute%20Free%20Session";
  };

  return (
    <main className="flex flex-col overflow-hidden">
      <section className="min-h-dvh flex flex-col gap-[10dvh] px-4 py-[20dvh] justify-center items-center text-center bg-white text-textColor md:px-20 transition-all duration-400">
        <div className="flex flex-col gap-[10dvh]">
          <h1
            ref={firstH1Ref}
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.5vw)" }}
            className="text-balance"
          >
            Recent Project Highlights and Achievements
          </h1>
          <h1
            ref={secondH1Ref}
            style={{ fontSize: "clamp(1.6rem, 20vw, 4vw)" }}
            className="leading-tight font-extrabold text-balance"
          >
            Project
          </h1>
          <h1
            ref={thirdH1Ref}
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.5vw)" }}
            className="text-balance"
          >
            Find below my recent projects listed
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
          <h1
            style={{ fontSize: "clamp(1rem, 10vw, 1vw)" }}
            className="font-bold bg-bgColor text-white px-4 py-1 rounded-md"
          >
            Web
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[5dvh] ">
          <div className="flex flex-col gap-[2dvh]">
            <a href="https://chayanmulewa.vercel.app/">
              <img
                style={{ height: "clamp(30rem, 50vw, 40vw)" }}
                className="transition-all shadow-lg shadow-gray-400 duration-400 hover:scale-[102%]"
                src={ChayanMulewaPortfolio}
                alt=""
              />
            </a>
            <div>
              <h1 className="font-bold text-start">Chayan Mulewa Portfolio</h1>
            </div>
          </div>
          <div className="flex flex-col gap-[2dvh]">
            <a href="https://momentumfx.vercel.app/">
              <img
                style={{ height: "clamp(34rem, 50vw, 40vw)" }}
                className="transition-all shadow-lg shadow-gray-400 duration-400 hover:scale-[102%]"
                src={MomentumFX}
                alt=""
              />
            </a>
            <div>
              <h1 className="text-start font-bold">MomentumFX</h1>
            </div>
          </div>
        </div>
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

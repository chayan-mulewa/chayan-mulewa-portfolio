import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from "../components/Button/Button";
import { handleIWantToStartProject, handleIWantToBookSession } from "../utils";

gsap.registerPlugin(ScrollTrigger);

export default function Design() {
  const firstH1Ref = useRef(null);
  const secondH1Ref = useRef(null);
  const thirdH1Ref = useRef(null);
  const buttonRef = useRef(null);
  const youNeedWebsiteRef = useRef([]);
  const highPerformingWebsiteRef = useRef([]);
  const showMeRef = useRef([]);
  const webDevFullStackDev = useRef([]);
  const leftImg1Ref = useRef([]);
  const leftImg2Ref = useRef([]);
  const rightImg1Ref = useRef([]);
  const rightImg2Ref = useRef([]);

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

    gsap.utils.toArray(".scroll-img").forEach((img, index) => {
      let yStart = 0;
      let yEnd = 0;
      let duration = 1;

      if (index === 1) {
        yStart = 40;
        yEnd = 0;
      }
      if (index === 2) {
        yStart = 70;
        yEnd = 0;
      }
      if (index === 3) {
        yStart = 100;
        yEnd = 0;
      }
      if (index === 4) {
        yStart = 70;
        yEnd = 0;
      }
      if (index === 5) {
        yStart = 40;
        yEnd = 0;
      }

      gsap.fromTo(
        img,
        { y: yStart },
        {
          y: yEnd,
          duration: duration,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            // start: "bottom 100%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    });

    gsap.fromTo(
      youNeedWebsiteRef.current,
      { textDecorationColor: "transparent" },
      {
        textDecorationColor: "black",
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: youNeedWebsiteRef.current,
          start: "bottom 80%",
          end: "top 10%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      highPerformingWebsiteRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: highPerformingWebsiteRef.current,
          start: "bottom 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      showMeRef.current,
      { x: 500 },
      {
        x: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: showMeRef.current,
          start: "bottom 180%",
          end: "top -500%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      webDevFullStackDev.current,
      { x: -500 },
      {
        x: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: webDevFullStackDev.current,
          start: "bottom 180%",
          end: "top -500%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      leftImg1Ref.current,
      { x: -100 },
      {
        x: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: leftImg1Ref.current,
          start: "bottom 120%",
          end: "top -50%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      leftImg2Ref.current,
      { x: -150 },
      {
        x: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: leftImg2Ref.current,
          start: "bottom 120%",
          end: "top -50%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      rightImg1Ref.current,
      { x: 150 },
      {
        x: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: rightImg1Ref.current,
          start: "bottom 120%",
          end: "top -150%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      rightImg2Ref.current,
      { x: 100 },
      {
        x: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: rightImg2Ref.current,
          start: "bottom 120%",
          end: "top -50%",
          scrub: true,
        },
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
            Elevate your creative vision with a premium online presence.
          </h1>
          <h1
            ref={secondH1Ref}
            style={{ fontSize: "clamp(1.6rem, 20vw, 4vw)" }}
            className="leading-tight font-extrabold text-balance"
          >
            Impactful branding and high-end and powerful websites for creatives.
          </h1>
          <h1
            ref={thirdH1Ref}
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.5vw)" }}
            className="text-balance"
          >
            Transform your brand into a stunning digital experience.
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

      <section className="min-h-fit flex flex-col gap-[5dvh] px-4 py-[10dvh] justify-center items-center text-center bg-bgColor text-white md:px-20">
        <div>
          <h1
            style={{ fontSize: "clamp(1.6rem, 20vw,2vw)" }}
            className="leading-tight font-extrabold text-balance"
          >
            Latest Projects
          </h1>
        </div>
        <div className="flex flex-col gap-[5dvh] justify-center items-center">
          <a
            style={{
              fontSize: "clamp(2rem, 20vw, 5vw)",
              textShadow:
                "1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white",
            }}
            className="leading-tight text-bgColor font-extrabold text-balance"
            href="https://momentumfx.vercel.app/"
          >
            MomentumFX V1.X
          </a>
          <a
            style={{
              fontSize: "clamp(2rem, 20vw, 5vw)",
              textShadow:
                "1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white",
            }}
            className="leading-tight text-bgColor font-extrabold text-balance"
            href="https://ancestry-archive-client.vercel.app/"
          >
            AncestryArchive
          </a>
        </div>
      </section>

      <section className="min-h-fit flex flex-row gap-[4dvh] px-4 py-[10dvh] justify-center items-center text-center bg-white text-textColor md:px-20 ">
        <img
          style={{
            height: "clamp(15rem, 50vw, 22vw)",
          }}
          className="scroll-img rounded-lg shadow-xl shadow-gray-400"
          src="https://assets-global.website-files.com/61dd9ddd76c6a058a47a4c57/65d3631eefc29b915264e8f4_Webdesign%20-%2001.webp"
          alt=""
        />
        <img
          style={{
            height: "clamp(15rem, 50vw, 22vw)",
          }}
          className="scroll-img rounded-lg shadow-xl shadow-gray-400"
          src="https://assets-global.website-files.com/61dd9ddd76c6a058a47a4c57/65d36262efc29b9152646ff6_Webdesign%20-%2002.webp"
          alt=""
        />
        <img
          style={{
            height: "clamp(15rem, 50vw, 22vw)",
          }}
          className="scroll-img rounded-lg shadow-xl shadow-gray-400"
          src="https://assets-global.website-files.com/61dd9ddd76c6a058a47a4c57/65d3626233ad01505949ebc1_Webdesign%20-%2003.webp"
          alt=""
        />
        <img
          style={{
            height: "clamp(15rem, 50vw, 22vw)",
          }}
          className="scroll-img rounded-lg shadow-xl shadow-gray-400"
          src="https://assets-global.website-files.com/61dd9ddd76c6a058a47a4c57/65d36262e8cd2028b4a438d0_Webdesign%20-%2004.webp"
          alt=""
        />
        <img
          style={{
            height: "clamp(15rem, 50vw, 22vw)",
          }}
          className="scroll-img rounded-lg shadow-xl shadow-gray-400"
          src="https://assets-global.website-files.com/61dd9ddd76c6a058a47a4c57/65d362626f9bd5ce1a106e32_Webdesign%20-%2005.webp"
          alt=""
        />
        <img
          style={{
            height: "clamp(15rem, 50vw, 22vw)",
          }}
          className="scroll-img rounded-lg shadow-xl shadow-gray-400"
          src="https://assets-global.website-files.com/61dd9ddd76c6a058a47a4c57/65d36262df37a428778cf738_Webdesign%20-%2006.webp"
          alt=""
        />
        <img
          style={{
            height: "clamp(15rem, 50vw, 22vw)",
          }}
          className="scroll-img rounded-lg shadow-xl shadow-gray-400"
          src="https://assets-global.website-files.com/61dd9ddd76c6a058a47a4c57/65d3626231059e94e2fa5e0a_Webdesign%20-%2001.webp"
          alt=""
        />
      </section>

      <section className="min-h-dvh flex flex-col gap-[5dvh] px-4 py-[0dvh] justify-center items-start text-start text-balance bg-white text-textColor md:px-20">
        <h1
          ref={youNeedWebsiteRef}
          style={{
            fontSize: "clamp(1.5rem, 20vw, 2.5vw)",
            textDecorationThickness: "4px",
          }}
          className="font-extrabold line-through"
        >
          You need a website.
        </h1>
        <h1
          ref={highPerformingWebsiteRef}
          style={{ fontSize: "clamp(1.5rem, 20vw, 2.5vw)" }}
          className="font-extrabold"
        >
          You need a high-performing website.
        </h1>
        <p style={{ fontSize: "clamp(1rem, 20vw, 1.5vw)" }}>
          This word will make the difference between a simple visit on your
          website and a sale. Webesigner and ReactJS expert, I help you solve
          your online visibility challenges and generate more sales by designing
          custom websites,{" "}
          <span className="font-bold">
            art direction dedicated to your brand and bespoke digital
            strategies.
          </span>
        </p>
      </section>

      <section className="min-h-dvh flex flex-col-reverse gap-[18dvh] px-4 py-[0dvh] justify-center items-center text-start bg-white0 text-textColor md:px-20 md:flex-row">
        <div className="md:w-2/4 w-full h-full flex flex-col gap-[2dvh]">
          <h1
            style={{
              fontSize: "clamp(1rem, 20vw, 1.2vw)",
            }}
            className="font-extrabold"
          >
            Branding
          </h1>
          <h1
            style={{ fontSize: "clamp(1.5rem, 20vw, 2.2vw)" }}
            className="font-extrabold leading-tight"
          >
            Your brand identity at the core of my approach
          </h1>
          <p style={{ fontSize: "clamp(1rem, 20vw, 1.3vw)" }}>
            A 360° management of your project! I can craft your graphic identiy,
            edit a corporate brand book, create your entire webdesign and
            develop your website :
            <span className="font-bold">
              I ensure the continuity of your brand identity and support you
              during each key step of your project.
            </span>
          </p>
        </div>
        <div className="md:w-2/4 w-full h-full flex flex-col justify-center items-center">
          <div className="relative">
            <img
              style={{
                height: "clamp(12rem, 50vw, 28vw)",
                width: "clamp(12rem, 50vw, 28vw)",
              }}
              className="rounded-md"
              src="https://assets-global.website-files.com/61dd9ddd76c6a058a47a4c57/65c5e5f9dea4e13c5c71efe5_Logo_VHS.webp"
              alt=""
            />
            <img
              ref={leftImg1Ref}
              style={{
                height: "clamp(6rem, 50vw, 10vw)",
                width: "clamp(6rem, 50vw, 10vw)",
              }}
              className="rounded-md absolute -top-16 -left-16 shadow-blackGlow"
              src="https://assets-global.website-files.com/61dd9ddd76c6a058a47a4c57/65c5e5fa878952603e3d3e80_Logo_opsis-p-500.webp"
              alt=""
            />
            <img
              ref={rightImg1Ref}
              style={{
                height: "clamp(7rem, 50vw, 12vw)",
                width: "clamp(7rem, 50vw, 12vw)",
              }}
              // -top-28 -right-32
              className="rounded-md absolute -top-16 -right-20 shadow-blackGlow"
              src="https://assets-global.website-files.com/61dd9ddd76c6a058a47a4c57/65c5e5faf9571789bee76401_Logo_Estaly-p-500.webp"
              alt=""
            />
            <img
              ref={rightImg2Ref}
              style={{
                height: "clamp(6rem, 50vw, 10vw)",
                width: "clamp(6rem, 50vw, 10vw)",
              }}
              className="rounded-md absolute -bottom-16 -right-16 shadow-blackGlow"
              src="https://assets-global.website-files.com/61dd9ddd76c6a058a47a4c57/6450c8966aae145ca545732c_Logo%20-%20Vacarme.webp"
              alt=""
            />
            <img
              ref={leftImg2Ref}
              style={{
                height: "clamp(7rem, 50vw, 12vw)",
                width: "clamp(7rem, 50vw, 12vw)",
              }}
              className="rounded-md absolute -bottom-16 -left-20 shadow-blackGlow"
              src="https://assets-global.website-files.com/61dd9ddd76c6a058a47a4c57/6450c895433987119e34fb65_Logo%20-%20MOM.webp"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="min-h-dvh flex flex-col gap-[10dvh] px-4 py-[0dvh] justify-center items-center text-start  bg-white text-textColor md:px-20 md:flex-row ">
        <div className="md:w-2/4 w-full h-full flex flex-col justify-center items-center">
          <video autoPlay muted loop className="rounded-md ">
            <source
              src="https://assets-global.website-files.com/61dd9ddd76c6a058a47a4c57/61dd9ddd76c6a0e00f7a4cb6_Webdesign%20-%20Frecerid_Bau-transcode.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="md:w-2/4 w-full h-full flex flex-col gap-[2dvh]">
          <h1
            style={{
              fontSize: "clamp(1rem, 20vw, 1.2vw)",
            }}
            className="font-extrabold"
          >
            Webdesign
          </h1>
          <h1
            style={{ fontSize: "clamp(1.5rem, 20vw, 2.2vw)" }}
            className="font-extrabold leading-tight"
          >
            Custom websites, high-performing results and easy-to-manage
            backoffice
          </h1>
          <p style={{ fontSize: "clamp(1rem, 20vw, 1.3vw)" }}>
            No template! As a ReactJS expert, I create custom websites made to
            enhance your brand experience and your productivity. Easy to access,
            SEO driven and maintenance-free :
            <span className="font-bold">
              Through ReactJS I will conceive you a website that meets your
              ambitions.
            </span>
          </p>
        </div>
      </section>

      <section className="min-h-dvh flex flex-col px-4 justify-center items-center text-center  bg-white text-textColor md:px-20 relative">
        <h1
          ref={showMeRef}
          style={{
            fontSize: "clamp(2rem, 20vw, 5vw)",
            textShadow:
              "1px 1px 0 #1b1b1b, -1px -1px 0 #1b1b1b, 1px -1px 0 #1b1b1b, -1px 1px 0 #1b1b1b",
          }}
          className=" text-white font-extrabold absolute rotate-[10deg] top-[42%] md:top-[32%] left-[-90vw] whitespace-nowrap"
        >
          - Show me what you've got ! - Show me what you've got ! - Show me what
          you've got !
        </h1>
        <h1
          ref={webDevFullStackDev}
          style={{
            fontSize: "clamp(2rem, 20vw, 5vw)",
          }}
          className="font-extrabold absolute rotate-[-10deg] bottom-[42%] md:bottom-[32%] left-[-10vw] whitespace-nowrap"
        >
          Web Designer & ReactJS + GSAP & Graphic designer
        </h1>
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

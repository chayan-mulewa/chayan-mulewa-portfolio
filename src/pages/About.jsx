import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import profile from "../assets/profile/profile.jpg";

export default function About() {
  const firstH1Ref = useRef(null);
  const secondH1Ref = useRef(null);
  const thirdH1Ref = useRef(null);

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
  }, []);

  return (
    <main className="flex flex-col overflow-hidden">
      <section className="min-h-dvh flex flex-col gap-[10dvh] px-4 py-[20dvh] justify-center items-center text-center text-balance bg-white text-textColor md:px-20 transition-all duration-400">
        <h1 ref={firstH1Ref} style={{ fontSize: "clamp(1.1rem, 2vw, 1.5vw)" }}>
          Graphic Designer, Web Designer and{" "}
          <span className="font-bold">ReactJS</span> +{" "}
          <span className="font-bold">GSAP</span> expert
        </h1>
        <h1
          ref={secondH1Ref}
          style={{ fontSize: "clamp(1.6rem, 20vw, 4vw)" }}
          className="leading-tight font-extrabold text-balance"
        >
          Unveil deeper insights about My expertise, skills, and many more.
        </h1>
        <h1 ref={thirdH1Ref} style={{ fontSize: "clamp(1.1rem, 2vw, 1.5vw)" }}>
          Software Eng, Full Stack Dev and{" "}
          <span className="font-bold">MERN</span> +{" "}
          <span className="font-bold">Java</span> expert
        </h1>
      </section>

      <section className="min-h-dvh flex flex-col gap-[8dvh] px-4 py-[5dvh] justify-center items-center text-center text-balance bg-white text-textColor md:px-20">
        <div className="w-full flex flex-col gap-[5dvh] px-4 py-[5dvh] justify-start items-center text-center bg-bgColor text-white md:flex-row rounded-md">
          <div>
            <img
              style={{ height: "clamp(15rem, 50vw, 15vw)" }}
              className="rounded-full"
              src={profile}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center gap-[5dvh]">
            <div className="w-full flex flex-col justify-center items-center gap-[5dvh] md:items-start">
              <h1
                style={{ fontSize: "clamp(1.5rem, 50vw, 2vw)" }}
                className="font-bold"
              >
                Chayan Mulewa
              </h1>
              <h1>Full Stack Dev & Software Eng</h1>
            </div>
            <div className="w-full flex flex-row justify-start items-center text-center gap-[5dvh] md:items-start">
              <a href="https://www.linkedin.com/in/chayan-mulewa/">Linkedin</a>
              <a href="https://github.com/chayan-mulewa">GitHub</a>
              <a href="https://x.com/chayan_mulewa">Twitter</a>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <p
            style={{ fontSize: "clamp(1.1rem, 50vw, 1.5vw)" }}
            className="text-start"
          >
            I am a seasoned Full Stack Developer with a proven track record of
            over 1+ years, focusing on delivering high-quality solutions. My
            expertise lies in a comprehensive range of technologies including
            <span className="font-bold">
              {" "}
              JavaScript, ReactJS, NodeJS, ExpressJS, NoSQL, SQL, AWS, Java,
              Spring
            </span>{" "}
            and many more. With a deep understanding of these tools and
            frameworks, I excel in crafting dynamic and scalable full-stack
            applications that meet the evolving needs of modern businesses. Let
            me bring my wealth of experience and technical prowess to your next
            project.
          </p>
        </div>
      </section>

      <section className="min-h-dvh flex flex-col gap-[8dvh] px-4 py-[5dvh] justify-center items-start text-start text-balance bg-white text-textColor md:px-20">
        <div>
          <h1
            style={{ fontSize: "clamp(1.5rem, 50vw, 2vw)" }}
            className="font-bold"
          >
            Work Experience
          </h1>
        </div>
        <div className="flex flex-col gap-[5dvh]">
          <div className="flex flex-col gap-[1dvh]">
            <h1
              style={{ fontSize: "clamp(1.3rem, 50vw, 1.3vw)" }}
              className="font-bold"
            >
              Technocolabs Software, Indore (M.P) — Full Stack Developer
            </h1>
            <h1>February 2024 - June 2024</h1>
            <ul className=" flex flex-col gap-[2dvh] px-6 list-disc">
              <li>
                <span className="font-bold">Projects - </span>
                Developed 'Cursus', an e-learning platform, and
                <span className="font-bold"> 'Rejoin'</span>, a job application
                platform using the
                <span className="font-bold">
                  {" "}
                  MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS).
                </span>
              </li>
              <li>
                <span className="font-bold"> Role - </span>Contributed as a
                <span className="font-bold"> Full Stack Developer</span>
                ,ensuring robust functionality and seamless user experience.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[1dvh]">
            <h1
              style={{ fontSize: "clamp(1.3rem, 50vw, 1.3vw)" }}
              className="font-bold"
            >
              Jobsense, Ujjain (M.P) — Back End Developer
            </h1>
            <h1>June 2022 - July 2022</h1>
            <ul className="flex flex-col gap-[2dvh] px-6 list-disc">
              <li>
                <span className="font-bold">Projects - </span>
                Engineered <span className="font-bold"> 'Rejoin'</span>, an EV
                charging station booking platform using the
                <span className="font-bold">
                  {" "}
                  Java, React, MySQL, and J2EE (Servlet, JSP).
                </span>
              </li>
              <li>
                <span className="font-bold"> Role - </span>Ensured high
                functionality and user experience through meticulous
                <span className="font-bold"> Backend Development.</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[1dvh]">
            <h1
              style={{ fontSize: "clamp(1.3rem, 50vw, 1.3vw)" }}
              className="font-bold"
            >
              Universal It Solution, Ujjain (M.P) — Front End Developer
            </h1>
            <h1>May 2020 - June 2020</h1>
            <ul className="flex flex-col gap-[2dvh] px-6 list-disc">
              <li>
                <span className="font-bold">Projects - </span>
                Spearheaded development of a dynamic{" "}
                <span className="font-bold">Business Landing Page using </span>
                <span className="font-bold"> HTML, CSS, and JavaScript</span>
              </li>
              <li>
                <span className="font-bold"> Role - </span>Ensured high
                functionality and user experience through meticulous
                <span className="font-bold"> Backend Development.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="min-h-dvh flex flex-col gap-[8dvh] px-4 py-[5dvh] justify-center items-start text-start text-balance bg-white text-textColor md:px-20">
        <div>
          <h1
            style={{ fontSize: "clamp(1.5rem, 50vw, 2vw)" }}
            className="font-bold"
          >
            Education
          </h1>
        </div>
        <div className="flex flex-col gap-[5dvh]">
          <div className="flex flex-col gap-[1dvh]">
            <h1
              style={{ fontSize: "clamp(1.3rem, 50vw, 1.3vw)" }}
              className="font-bold"
            >
              Mahakal Institute Of Technology, Ujjain (M.P) — B.Tech (CSE)
            </h1>
            <h1>
              {" "}
              <span className="font-bold">CGPA - 7.20</span> (2019 - 2023)
            </h1>
          </div>
          <div className="flex flex-col gap-[1dvh]">
            <h1
              style={{ fontSize: "clamp(1.3rem, 50vw, 1.3vw)" }}
              className="font-bold"
            >
              Sharda Vidhya Mandir HS School, Petlawad (M.P) — School
            </h1>
            <h1>
              {" "}
              <span className="font-bold">
                M.P. Board (Class XII) - 62%
              </span>{" "}
              (2018 - 2019)
            </h1>
            <h1>
              {" "}
              <span className="font-bold">M.P. Board (Class X) - 52%</span>{" "}
              (2017 - 2018)
            </h1>
          </div>
        </div>
      </section>

      <section className="min-h-dvh flex flex-col gap-[8dvh] px-4 py-[5dvh] justify-center items-start text-start text-balance bg-white text-textColor md:px-20">
        <div>
          <h1
            style={{ fontSize: "clamp(1.5rem, 50vw, 2vw)" }}
            className="font-bold"
          >
            Skills
          </h1>
        </div>
        <div className="flex flex-col gap-[5dvh]">
          <div className="flex flex-col gap-[1dvh]">
            <h1
              style={{ fontSize: "clamp(1.3rem, 50vw, 1.3vw)" }}
              className="font-bold"
            >
              Front-End
            </h1>
            <div className="flex flex-col gap-[5dvh] md:flex-row">
              <div className="flex flex-col gap-[1dvh]">
                <h1>Technology</h1>
                <ul className="list-disc px-4">
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div className="flex flex-col gap-[1dvh]">
                <h1>Library & Frameworks</h1>
                <ul className="list-disc px-4">
                  <li>ReactJS</li>
                  <li>Redux Toolkit</li>
                  <li>MomentumFX</li>
                </ul>
              </div>
              <div className="flex flex-col gap-[1dvh]">
                <h1>Styles</h1>
                <ul className="list-disc px-4">
                  <li>Tailwind</li>
                  <li>GSAP</li>
                  <li>Ant Design</li>
                  <li>Material UI</li>
                </ul>
              </div>
              <div className="flex flex-col gap-[1dvh]">
                <h1>Testing</h1>
                <ul className="list-disc px-4">
                  <li>JEST</li>
                  <li>React Testing Library</li>
                </ul>
              </div>
              <div className="flex flex-col gap-[1dvh]">
                <h1>Network Utilities</h1>
                <ul className="list-disc px-4">
                  <li>Axios</li>
                  <li>Fetch</li>
                  <li>Context API</li>
                  <li>Postman</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[1dvh]">
            <h1
              style={{ fontSize: "clamp(1.3rem, 50vw, 1.3vw)" }}
              className="font-bold"
            >
              Back-End
            </h1>
            <div className="flex flex-col gap-[5dvh] md:flex-row">
              <div className="flex flex-col gap-[1dvh]">
                <h1>Technology</h1>
                <ul className="list-disc px-4">
                  <li>JavaScript</li>
                  <li>Java</li>
                  <li>JavaEE</li>
                </ul>
              </div>
              <div className="flex flex-col gap-[1dvh]">
                <h1>Library & Frameworks</h1>
                <ul className="list-disc px-4">
                  <li>NodeJS</li>
                  <li>ExpressJS</li>
                  <li>Mongooes</li>
                  <li>BCrypt</li>
                  <li>NodeMailer</li>
                  <li>Socket.IO</li>
                  <li>Spring</li>
                </ul>
              </div>
              <div className="flex flex-col gap-[1dvh]">
                <h1>Authentication</h1>
                <ul className="list-disc px-4">
                  <li>SSO/OAuth 2.0</li>
                  <li>Google Firebase</li>
                  <li>JWT</li>
                  <li>Session Based Auth</li>
                </ul>
              </div>
              <div className="flex flex-col gap-[1dvh]">
                <h1>Testing</h1>
                <ul className="list-disc px-4">
                  <li>JEST</li>
                </ul>
              </div>
              <div className="flex flex-col gap-[1dvh]">
                <h1>Network Utilities</h1>
                <ul className="list-disc px-4">
                  <li>Cors</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[1dvh]">
            <h1
              style={{ fontSize: "clamp(1.3rem, 50vw, 1.3vw)" }}
              className="font-bold"
            >
              Database
            </h1>
            <div className="flex flex-col gap-[5dvh] md:flex-row">
              <div className="flex flex-col gap-[1dvh]">
                <h1>SQL</h1>
                <ul className="list-disc px-4">
                  <li>MySQL</li>
                </ul>
              </div>
              <div className="flex flex-col gap-[1dvh]">
                <h1>NoSQL</h1>
                <ul className="list-disc px-4">
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-dvh flex flex-col gap-[0dvh] px-4 py-[5dvh] justify-center items-center text-center text-balance bg-white text-textColor md:px-20">
        <div className="flex flex-col gap-[5dvh]">
          <p
            style={{ fontSize: "clamp(1rem, 2vw, 1.5vw)" }}
            className="font-semibold"
          >
            From crafting intuitive user interfaces 🖥️ to developing powerful
            backend systems 🛠️, I thrive on tackling complex challenges and
            delivering innovative solutions 🚀.
          </p>
          <p
            style={{ fontSize: "clamp(1rem, 2vw, 1.5vw)" }}
            className="font-semibold"
          >
            My passion lies in creating dynamic web applications 🌐 that blend
            creativity with functionality 🎨, ensuring each project not only
            meets but exceeds expectations.
          </p>
          <p
            style={{ fontSize: "clamp(1rem, 2vw, 1.5vw)" }}
            className="font-semibold"
          >
            Let's collaborate 🤝 to bring your vision to life, transforming
            ideas into impactful and inspiring digital experiences ✨.
          </p>
        </div>
      </section>
    </main>
  );
}

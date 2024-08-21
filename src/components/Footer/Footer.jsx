import TransitionLink from "../Button/TransitionLink";
import Button from "../Button/Button";

export default function Footer() {
  return (
    <>
      <footer className="min-h-fit bg-bgColor flex flex-col gap-10 px-4 py-12 justify-center items-center text-white md:flex-row md:px-16 ">
        <div>
          <h1
            style={{ fontSize: "clamp(1.2rem, 2vw, 1.5vw)" }}
            className="text-center"
          >
            Chayan - Website handmade with ReactJS + GSAP 👋
          </h1>
        </div>
        {/* <ul className="h-fit w-fit flex flex-col items-center gap-14  md:flex-row">
          <li className="h-fit w-fit">
            <TransitionLink href="/home" label="Home" tailwind={"text-lg"} />
          </li>
          <li className="h-fit w-fit">
            <TransitionLink
              href="/design"
              label="Design"
              tailwind={"text-lg"}
            />
          </li>
          <li className="h-fit w-fit">
            <TransitionLink href="/about" label="About" tailwind={"text-lg"} />
          </li>
          <li className="h-fit w-fit">
            <Button
              handleClick={""}
              label={"hello@chayan"}
              tailwind={"bg-white text-black hover:shadow-bottomWhite"}
            />
          </li>
        </ul> */}
      </footer>
    </>
  );
}

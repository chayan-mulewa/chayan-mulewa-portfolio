import gsap from "gsap";

export const initialPageIn = () => {
  const leftRectangle = document.getElementById("leftRectangle");
  const rightRectangle = document.getElementById("rightRectangle");
  if (leftRectangle && rightRectangle) {
    const tl = gsap.timeline({
      defaults: { duration: 2, ease: "power2.inOut" },
    });

    tl.set(leftRectangle, { xPercent: 100 })
      .set(rightRectangle, { xPercent: -100 })
      .to(leftRectangle, {
        xPercent: 0,
        delay: 0.5,
      })
      .to(
        rightRectangle,
        {
          xPercent: 0,
          delay: 0.5,
        },
        0
      );
  }
};

export const initialPageOut = (href, navigate) => {
  const leftRectangle = document.getElementById("leftRectangle");
  const rightRectangle = document.getElementById("rightRectangle");
  if (leftRectangle && rightRectangle) {
    const tl = gsap.timeline({
      defaults: { duration: 2, ease: "power2.inOut" },
      onComplete: () => {
        navigate(href);
      },
    });

    tl.set(leftRectangle, { xPercent: 0 })
      .set(rightRectangle, { xPercent: 0 })
      .to(leftRectangle, {
        xPercent: 100,
      })
      .to(
        rightRectangle,
        {
          xPercent: -100,
        },
        0
      );
  }
};

export const animatePageIn = () => {
  const topRectangle = document.getElementById("topRectangle");
  const bottomRectangle = document.getElementById("bottomRectangle");
  if (topRectangle && bottomRectangle) {
    const tl = gsap.timeline({
      defaults: { duration: 2, ease: "power2.inOut" },
    });
    tl.set(topRectangle, { yPercent: 100 })
      .set(bottomRectangle, { yPercent: -100 })
      .to(topRectangle, {
        yPercent: 0,
      })
      .to(
        bottomRectangle,
        {
          yPercent: 0,
        },
        0
      );
  }
};

export const animatePageOut = (href, navigate) => {
  const topRectangle = document.getElementById("topRectangle");
  const bottomRectangle = document.getElementById("bottomRectangle");
  if (topRectangle && bottomRectangle) {
    const tl = gsap.timeline({
      defaults: { duration: 2, ease: "power2.inOut" },
      onComplete: () => {
        navigate(href);
      },
    });
    tl.set(topRectangle, { yPercent: 0 })
      .set(bottomRectangle, { yPercent: 0 })
      .to(topRectangle, {
        yPercent: 100,
      })
      .to(
        bottomRectangle,
        {
          yPercent: -100,
        },
        0
      );
  }
};

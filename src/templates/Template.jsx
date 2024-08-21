import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animatePageIn, initialPageIn } from "../utils";

export default function Template({ children }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (isHomePage) {
      initialPageIn();
    } else {
      animatePageIn();
    }
  });

  return (
    <div>
      <div>
        <div
          id="leftRectangle"
          style={{
            width: "50vw",
            height: "100dvh",
            backgroundColor: "#1b1b1b",
            position: "fixed",
            left: "-50vw",
            top: "0vh",
            rotate: "0deg",
          }}
          className="z-50"
        />
        <div
          id="rightRectangle"
          style={{
            width: "50vw",
            height: "100dvh",
            backgroundColor: "#1b1b1b",
            position: "fixed",
            right: "-50vw",
            top: "0vh",
            rotate: "0deg",
          }}
          className="z-50"
        />
      </div>

      <div>
        <div
          id="topRectangle"
          style={{
            width: "100vw",
            height: "51vh",
            backgroundColor: "#1b1b1b",
            position: "fixed",
            left: "0vw",
            top: "-51vh",
          }}
          className="z-50"
        />
        <div
          id="bottomRectangle"
          style={{
            width: "100vw",
            height: "51vh",
            backgroundColor: "#1b1b1b",
            position: "fixed",
            right: "0vw",
            bottom: "-51vh",
          }}
          className="z-50"
        />
      </div>

      {children}
    </div>
  );
}

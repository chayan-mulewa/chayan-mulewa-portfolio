import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { animatePageOut, initialPageOut } from "../../utils";

export default function TransitionLink({
  href,
  label,
  tailwind,
  style,
  extraElement,
  linkRef,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handlePageClick = () => {
    if (href === "/") {
      initialPageOut(href, navigate);
    } else {
      animatePageOut(href, navigate);
    }
  };

  const isActive = location.pathname === href;
  const isLogo = location.pathname === "/";

  return (
    <button
      ref={linkRef}
      style={style}
      className={`${tailwind} hover:font-extrabold ${
        isActive && !isLogo && "font-bold"
      }`}
      onClick={handlePageClick}
    >
      {label}
      {extraElement}
    </button>
  );
}

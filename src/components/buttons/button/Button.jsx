"use client";

import Link from "next/link";

const Button = ({
  title = "Button",
  click,
  bg,
  pd,
  link,
  fw,
  type,
  disabled,
}) => {
  const baseClasses =
    "rounded-lg transition-colors duration-300 font-bold flex items-center justify-center transition-all duration-300 whitespace-nowrap";

  const enabledClasses = `${
    bg || "bg-[#4364BF] hover:bg-[#38539e] text-white"
  } cursor-pointer`;

  const disabledClasses = "bg-gray-400 text-gray-200 cursor-not-allowed";

  const classes = `${baseClasses} ${pd || "px-3 py-1 "} ${fw ? "w-full" : ""} ${
    disabled ? disabledClasses : enabledClasses
  }`;

  if (link) {
    return (
      <Link
        href={disabled ? "#" : link}
        className={classes}
        onClick={(e) => disabled && e.preventDefault()}
      >
        {title}
      </Link>
    );
  }

  return (
    <button
      onClick={click}
      type={type || "button"}
      disabled={disabled}
      className={classes}
    >
      {title}
    </button>
  );
};

export default Button;

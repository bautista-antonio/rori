import { FC } from "react";
import type { Title, Color } from "@/types/title";
import clsx from "clsx";

const Title: FC<Title> = ({ text, color, underline }) => {
  const baseClasses = "max-w-xs my-4";
  const colorMap: Record<string, string> = {
    light: "text-ivory",
    dark: "text-charcoal",
    "dark-gray": "text-medium-gray",
    "light-gray": "text-light-gray",
    brown: "text-earthy-brown",
    green: "text-olive-green",
  };
  const isColor = (value: unknown): value is Color => {
    return typeof value === "string" && value in colorMap;
  };
  const colorClass = isColor(color) ? colorMap[color] : colorMap["dark"];
  const underlineClass = "underline";
  return (
    <h1 className={clsx(baseClasses, colorClass, underline && underlineClass)}>
      {text}
    </h1>
  );
};

export default Title;

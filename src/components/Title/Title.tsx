import { FC } from "react";
import type { TitleProps, Color } from "@/types/title";
import clsx from "clsx";

const Title: FC<TitleProps> = ({
  as: Tag = "h1",
  text,
  color,
  size,
  align,
  underline = false,
}) => {
  /* Configuration of clsx classes */
  const baseClasses = "font-bold my-4";
  const colorMap: Record<Color, string> = {
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
  const sizeMap: Record<string, string> = {
    sm: "text-2xl my-2 max-w-3xs",
    md: "text-3xl my-2 max-w-xs",
    lg: "text-4xl my-4 max-w-md",
  };
  const isSize = (value: unknown): value is string => {
    return typeof value === "string" && value in sizeMap;
  };
  const sizeClasses = isSize(size) ? sizeMap[size] : sizeMap["md"];
  const alignMap: Record<string, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  const isAlign = (value: unknown): value is string => {
    return typeof value === "string" && value in alignMap;
  };
  const alignClass = isAlign(align) ? alignMap[align] : alignMap["left"];
  const underlineClass = "underline";

  return (
    <Tag
      className={clsx(
        baseClasses,
        colorClass,
        sizeClasses,
        alignClass,
        underline && underlineClass
      )}
    >
      {text}
    </Tag>
  );
};

export default Title;

/**
 * Interface for a Title component. The component is used to render a title with various styles and attributes.
 */

type Color = "dark" | "light" | "dark-gray" | "light-gray" | "brown" | "green";

interface TitleProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  color?: Color;
  size?: "sm" | "md" | "lg";
  align?: "left" | "center" | "right";
  underline?: boolean;
}

export type { TitleProps, Color };

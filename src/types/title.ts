/**
 * Interface for a Title component. The component is used to render a title with various styles and attributes.
 */

type Color = "dark" | "light" | "dark-gray" | "light-gray" | "brown" | "green";

interface Title {
  text: string;
  color?: Color;
  size?: "sm" | "md" | "lg";
  align?: "left" | "center" | "right";
  underline?: boolean;
}

export type { Title, Color };

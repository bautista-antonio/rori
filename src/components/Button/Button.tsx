import { FC } from "react";
import { clsx } from "clsx";
import { ButtonProps } from "@/types/button";

/**
 * This is a button component used for the main action in any given page
 * @returns {JSX.Element} - The button component
 */
const Button: FC<ButtonProps> = ({
  fullWidth,
  icon,
  iconPosition,
  text,
  type,
  variant,
}) => {
  const baseClasses =
    "text-sm max-w-64 px-4 py-3 flex justify-center items-center font-medium rounded-full shadow-md transition duration-300";
  const variantClasses = {
    primary: "bg-earthy-brown text-ivory hover:bg-earthy-brown/80",
    secondary:
      "bg-ivory text-earthy-brown border border-earthy-brown hover:bg-earthy-brown/10",
    tertiary:
      "bg-earthy-brown text-ivory border border-earthy-brown hover:bg-earthy-brown/80",
    social: "bg-charcoal text-ivory hover:bg-earthy-brown/10",
  };
  const iconGapClass = "gap-2";
  const fullWidthClass = fullWidth ? "w-full" : "w-fit";

  return (
    <button
      type={type}
      className={clsx(
        baseClasses,
        variant && variantClasses[variant],
        icon && iconGapClass,
        fullWidthClass
      )}
    >
      {iconPosition === "left" && icon}
      {text}
      {iconPosition === "right" && icon}
    </button>
  );
};

export default Button;

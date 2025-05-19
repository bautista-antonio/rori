import { FC } from "react";
import { ButtonProps } from "@/types/button";

/**
 * This is a button component used for the main action in any given page
 * @returns {JSX.Element} - The button component
 */
const PrimaryButton: FC<ButtonProps> = ({ text, type, variant }) => {
  return (
    <button
      type={type}
      className={`w-full max-w-64 px-4 py-3 ${
        variant == "primary" && "bg-earthy-brown text-ivory"
      } font-medium rounded-full shadow-md mt-4 hover:bg-earthy-brown/80 transition duration-300
    >`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;

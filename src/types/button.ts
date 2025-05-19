interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  fullWidth?: boolean;
}

export type { ButtonProps };
